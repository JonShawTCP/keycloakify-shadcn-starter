import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { buildEmailTheme } from "keycloakify-emails";
import { keycloakify } from "keycloakify/vite-plugin";
import fs from "node:fs/promises";
import path from "node:path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
        keycloakify({
            accountThemeImplementation: "none",
            themeName: "acme-theme",
            keycloakVersionTargets: {
                "22-to-25": false,
                "all-other-versions": "acme-theme.jar"
            },
            postBuild: async buildContext => {
                await buildEmailTheme({
                    templatesSrcDirPath: path.join(
                        buildContext.themeSrcDirPath,
                        "email",
                        "templates"
                    ),
                    i18nSourceFile: path.join(
                        buildContext.themeSrcDirPath,
                        "email",
                        "i18n.ts"
                    ),
                    themeNames: buildContext.themeNames,
                    keycloakifyBuildDirPath: buildContext.keycloakifyBuildDirPath,
                    locales: ["en", "fr", "ar"],
                    esbuild: {
                        jsx: "automatic"
                    },
                    cwd: import.meta.dirname,
                    environmentVariables: buildContext.environmentVariables
                });

                // Fix locale directory lookup: Keycloak passes locale as e.g. "en_GB"
                // (underscore) but keycloakify-emails creates directories as e.g. "en-GB"
                // (hyphen). Rewrite wrapper FTL includes to convert underscores to hyphens.
                for (const themeName of buildContext.themeNames) {
                    const emailDir = path.join(
                        buildContext.keycloakifyBuildDirPath,
                        "resources",
                        "theme",
                        themeName,
                        "email"
                    );
                    for (const subdir of ["html", "text"]) {
                        const dir = path.join(emailDir, subdir);
                        let files: string[];
                        try {
                            files = await fs.readdir(dir);
                        } catch {
                            continue;
                        }
                        for (const file of files.filter(f => f.endsWith(".ftl"))) {
                            const filePath = path.join(dir, file);
                            const content = await fs.readFile(filePath, "utf-8");
                            if (content.includes("+ locale +")) {
                                await fs.writeFile(
                                    filePath,
                                    content.replaceAll(
                                        '+ locale +',
                                        '+ locale?replace("_", "-") +'
                                    )
                                );
                            }
                        }
                    }
                }
            }
        })
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src")
        }
    }
});
