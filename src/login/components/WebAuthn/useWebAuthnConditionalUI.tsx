import { useEffect, useRef } from "react";
import { assert } from "tsafe/assert";
import { useI18n } from "../../i18n";
import { useKcContext } from "../../KcContext";
import type { WebAuthnResult } from "./webAuthn";
import { authenticate } from "./webAuthn";

export function useWebAuthnConditionalUI() {
    const { kcContext } = useKcContext();
    assert("enableWebAuthnConditionalUI" in kcContext);

    const { msgStr } = useI18n();

    const webAuthnFormRef = useRef<HTMLFormElement>(null);
    const submitWebAuthn = (result: WebAuthnResult) => {
        const form = webAuthnFormRef.current;
        assert(form !== null);

        const getInput = (name: string) => {
            const input = form.elements.namedItem(name);
            assert(input instanceof HTMLInputElement, `Missing hidden input: ${name}`);
            return input;
        };

        if (result.success) {
            getInput("clientDataJSON").value = result.clientDataJSON;
            getInput("authenticatorData").value = result.authenticatorData;
            getInput("signature").value = result.signature;
            getInput("credentialId").value = result.credentialId;
            getInput("userHandle").value = result.userHandle;
        } else {
            getInput("error").value = result.error;
        }

        form.submit();
    };

    const authOptions = {
        isUserIdentified: kcContext.isUserIdentified === "true",
        challenge: kcContext.challenge,
        userVerification: kcContext.userVerification,
        rpId: kcContext.rpId,
        createTimeout:
            typeof kcContext.createTimeout === "string"
                ? Number(kcContext.createTimeout)
                : kcContext.createTimeout,
        authenticators: kcContext.authenticators?.authenticators
    };

    const onPasskeyDoAuthenticateClick = async () => {
        const result = await authenticate({
            ...authOptions,
            mediation: "optional",
            errmsg: msgStr("webauthn-unsupported-browser-text")
        });
        if (result) submitWebAuthn(result);
    };

    useEffect(() => {
        let cancelled = false;

        (async () => {
            if (
                !window.PublicKeyCredential ||
                !PublicKeyCredential.isConditionalMediationAvailable
            )
                return;

            const isAvailable =
                await PublicKeyCredential.isConditionalMediationAvailable();
            if (!isAvailable) return;

            const result = await authenticate({
                ...authOptions,
                mediation: "conditional",
                errmsg: msgStr("passkey-unsupported-browser-text")
            });

            if (cancelled) return;
            if (result) submitWebAuthn(result);
        })();

        return () => {
            cancelled = true;
        };
    }, []);

    return {
        webAuthnFormRef,
        onPasskeyDoAuthenticateClick
    };
}
