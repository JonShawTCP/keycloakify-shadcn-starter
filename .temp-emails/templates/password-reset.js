// src/email/templates/password-reset.tsx
import i18n2 from "i18next";
import { Button, Text as Text2, render } from "jsx-email";
import { createVariablesHelper as createVariablesHelper2 } from "keycloakify-emails/variables";

// src/email/constants.ts
var primaryColor = "#2196F3";
var btnTextColor = "#ffffff";
var companyLogo = "https://res.cloudinary.com/dyo9yeeck/image/upload/v1758804804/logo-text-on-dark_dcsfdr.svg";

// src/email/layout.tsx
import {
  Body,
  Column,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text
} from "jsx-email";
import { createVariablesHelper } from "keycloakify-emails/variables";

// src/email/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// src/email/locales/ar/translation.json
var translation_default = {
  "email-test": {
    subject: "\u0627\u062E\u062A\u0628\u0627\u0631 \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A",
    greeting: "\u0645\u0631\u062D\u0628\u0627 \u0635\u062F\u064A\u0642",
    message: "\u0647\u0630\u0647 \u0631\u0633\u0627\u0644\u0629 \u0628\u0631\u064A\u062F \u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u062A\u062C\u0631\u064A\u0628\u064A\u0629 \u0645\u0646 {{realmName}}. \u0625\u0630\u0627 \u062A\u0644\u0642\u064A\u062A \u0647\u0630\u0627 \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A\u060C \u0641\u0647\u0630\u0627 \u064A\u0639\u0646\u064A \u0623\u0646\u0647 \u062A\u0645 \u062A\u0643\u0648\u064A\u0646 \u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0627\u0644\u062E\u0627\u0635 \u0628\u0643 \u0628\u0634\u0643\u0644 \u0635\u062D\u064A\u062D."
  },
  "email-update-confirmation": {
    subject: "\u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0627\u0644\u062C\u062F\u064A\u062F",
    linkExpiration: "\u0633\u062A\u0646\u062A\u0647\u064A \u0635\u0644\u0627\u062D\u064A\u0629 \u0647\u0630\u0627 \u0627\u0644\u0631\u0627\u0628\u0637 \u062E\u0644\u0627\u0644 {{expiration}}.",
    updateEmailAddress: "\u0644\u062A\u062D\u062F\u064A\u062B \u062D\u0633\u0627\u0628\u0643 {{realmName}} \u0628\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A {{newEmail}}",
    clickLinkBelow: "\u0627\u0646\u0642\u0631 \u0639\u0644\u0649 \u0627\u0644\u0631\u0627\u0628\u0637 \u0623\u062F\u0646\u0627\u0647",
    updateEmail: "\u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A",
    ignoreMessage: "\u0625\u0630\u0627 \u0643\u0646\u062A \u0644\u0627 \u062A\u0631\u064A\u062F \u0645\u062A\u0627\u0628\u0639\u0629 \u0647\u0630\u0627 \u0627\u0644\u062A\u0639\u062F\u064A\u0644\u060C \u0641\u0645\u0627 \u0639\u0644\u064A\u0643 \u0633\u0648\u0649 \u062A\u062C\u0627\u0647\u0644 \u0647\u0630\u0647 \u0627\u0644\u0631\u0633\u0627\u0644\u0629."
  },
  "email-verification": {
    subject: "\u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A",
    message: "\u0642\u0627\u0645 \u0634\u062E\u0635 \u0645\u0627 \u0628\u0625\u0646\u0634\u0627\u0621 \u062D\u0633\u0627\u0628 {{firstName}} \u0628\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0647\u0630\u0627. \u0625\u0630\u0627 \u0643\u0646\u062A \u0623\u0646\u062A \u0645\u0646 \u0642\u0627\u0645 \u0628\u0630\u0644\u0643\u060C \u0641\u0627\u0646\u0642\u0631 \u0639\u0644\u0649 \u0627\u0644\u0631\u0627\u0628\u0637 \u0623\u062F\u0646\u0627\u0647 \u0644\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0639\u0646\u0648\u0627\u0646 \u0628\u0631\u064A\u062F\u0643 \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A.",
    verifyButton: "\u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A",
    linkExpiration: "\u0633\u062A\u0646\u062A\u0647\u064A \u0635\u0644\u0627\u062D\u064A\u0629 \u0647\u0630\u0627 \u0627\u0644\u0631\u0627\u0628\u0637 \u062E\u0644\u0627\u0644 {{expiration}}.",
    ignoreMessage: "\u0625\u0630\u0627 \u0644\u0645 \u062A\u0642\u0645 \u0628\u0625\u0646\u0634\u0627\u0621 \u0647\u0630\u0627 \u0627\u0644\u062D\u0633\u0627\u0628\u060C \u0641\u0645\u0627 \u0639\u0644\u064A\u0643 \u0633\u0648\u0649 \u062A\u062C\u0627\u0647\u0644 \u0647\u0630\u0647 \u0627\u0644\u0631\u0633\u0627\u0644\u0629."
  },
  "event-login_error": {
    subject: "\u062E\u0637\u0623 \u0641\u064A \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644",
    message: "\u062A\u0645 \u0627\u0643\u062A\u0634\u0627\u0641 \u0645\u062D\u0627\u0648\u0644\u0629 \u062A\u0633\u062C\u064A\u0644 \u062F\u062E\u0648\u0644 \u0641\u0627\u0634\u0644\u0629 \u0625\u0644\u0649 \u062D\u0633\u0627\u0628\u0643 \u0639\u0644\u0649 {{date}} \u0645\u0646 {{ipAddress}}.",
    contactAdmin: "\u0625\u0630\u0627 \u0644\u0645 \u062A\u0643\u0646 \u0623\u0646\u062A\u060C \u064A\u0631\u062C\u0649 \u0627\u0644\u0627\u062A\u0635\u0627\u0644 \u0628\u0627\u0644\u0645\u0633\u0624\u0648\u0644."
  },
  "event-remove_credential": {
    subject: "\u0625\u0632\u0627\u0644\u0629 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0627\u0639\u062A\u0645\u0627\u062F",
    message: "\u062A\u0645\u062A \u0625\u0632\u0627\u0644\u0629 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0627\u0639\u062A\u0645\u0627\u062F {{credentialType}} \u0645\u0646 \u062D\u0633\u0627\u0628\u0643 \u0641\u064A {{date}} \u0645\u0646 {{ipAddress}}.",
    contactAdmin: "\u0625\u0630\u0627 \u0644\u0645 \u062A\u0643\u0646 \u0623\u0646\u062A\u060C \u064A\u0631\u062C\u0649 \u0627\u0644\u0627\u062A\u0635\u0627\u0644 \u0628\u0627\u0644\u0645\u0633\u0624\u0648\u0644."
  },
  "event-remove_totp": {
    subject: "\u0625\u0632\u0627\u0644\u0629 OTP",
    message: "\u062A\u0645\u062A \u0625\u0632\u0627\u0644\u0629 OTP \u0645\u0646 \u062D\u0633\u0627\u0628\u0643 \u0639\u0644\u0649 {{date}} \u0645\u0646 {{ipAddress}}.",
    contactAdmin: "\u0625\u0630\u0627 \u0644\u0645 \u062A\u0643\u0646 \u0623\u0646\u062A\u060C \u064A\u0631\u062C\u0649 \u0627\u0644\u0627\u062A\u0635\u0627\u0644 \u0628\u0627\u0644\u0645\u0633\u0624\u0648\u0644."
  },
  "event-update_credential": {
    subject: "\u062A\u062D\u062F\u064A\u062B \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0627\u0639\u062A\u0645\u0627\u062F",
    message: "\u062A\u0645 \u062A\u063A\u064A\u064A\u0631 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0627\u0639\u062A\u0645\u0627\u062F \u0627\u0644\u062E\u0627\u0635\u0629 \u0628\u0643 {{credentialType}} \u0641\u064A {{date}} \u0645\u0646 {{ipAddress}}.",
    contactAdmin: "\u0625\u0630\u0627 \u0644\u0645 \u062A\u0643\u0646 \u0623\u0646\u062A\u060C \u064A\u0631\u062C\u0649 \u0627\u0644\u0627\u062A\u0635\u0627\u0644 \u0628\u0627\u0644\u0645\u0633\u0624\u0648\u0644."
  },
  "event-update_password": {
    subject: "\u062A\u062D\u062F\u064A\u062B \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631",
    message: "\u062A\u0645 \u062A\u063A\u064A\u064A\u0631 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0627\u0644\u062E\u0627\u0635\u0629 \u0628\u0643 \u0641\u064A {{date}} \u0645\u0646 {{ipAddress}}.",
    contactAdmin: "\u0625\u0630\u0627 \u0644\u0645 \u062A\u0643\u0646 \u0623\u0646\u062A\u060C \u064A\u0631\u062C\u0649 \u0627\u0644\u0627\u062A\u0635\u0627\u0644 \u0628\u0627\u0644\u0645\u0633\u0624\u0648\u0644."
  },
  "event-update_totp": {
    subject: "\u062A\u062D\u062F\u064A\u062B OTP",
    message: "\u062A\u0645 \u062A\u062D\u062F\u064A\u062B OTP \u0644\u062D\u0633\u0627\u0628\u0643 \u0639\u0644\u0649 {{date}} \u0645\u0646 {{ipAddress}}.",
    contactAdmin: "\u0625\u0630\u0627 \u0644\u0645 \u062A\u0643\u0646 \u0623\u0646\u062A\u060C \u064A\u0631\u062C\u0649 \u0627\u0644\u0627\u062A\u0635\u0627\u0644 \u0628\u0627\u0644\u0645\u0633\u0624\u0648\u0644."
  },
  "event-user_disabled_by_permanent_lockout": {
    subject: "\u062A\u0645 \u062A\u0639\u0637\u064A\u0644 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u0628\u0633\u0628\u0628 \u0627\u0644\u0642\u0641\u0644 \u0627\u0644\u062F\u0627\u0626\u0645",
    message: "\u0644\u0642\u062F \u062A\u0645 \u062A\u0639\u0637\u064A\u0644 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u0627\u0644\u062E\u0627\u0635 \u0628\u0643 \u0646\u0647\u0627\u0626\u064A\u064B\u0627 \u0628\u0633\u0628\u0628 \u0639\u062F\u0629 \u0645\u062D\u0627\u0648\u0644\u0627\u062A \u0641\u0627\u0634\u0644\u0629 \u0639\u0644\u0649 {{date}}.",
    contactAdmin: "\u0627\u0644\u0631\u062C\u0627\u0621 \u0627\u0644\u0627\u062A\u0635\u0627\u0644 \u0628\u0627\u0644\u0645\u0633\u0624\u0648\u0644."
  },
  "event-user_disabled_by_temporary_lockout": {
    subject: "\u062A\u0645 \u062A\u0639\u0637\u064A\u0644 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u0628\u0633\u0628\u0628 \u0627\u0644\u0642\u0641\u0644 \u0627\u0644\u0645\u0624\u0642\u062A",
    message: "\u0644\u0642\u062F \u062A\u0645 \u062A\u0639\u0637\u064A\u0644 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u0627\u0644\u062E\u0627\u0635 \u0628\u0643 \u0645\u0624\u0642\u062A\u064B\u0627 \u0628\u0633\u0628\u0628 \u0639\u062F\u0629 \u0645\u062D\u0627\u0648\u0644\u0627\u062A \u0641\u0627\u0634\u0644\u0629 \u0639\u0644\u0649 {{date}}.",
    contactAdmin: "\u0627\u0644\u0631\u062C\u0627\u0621 \u0627\u0644\u0627\u062A\u0635\u0627\u0644 \u0628\u0627\u0644\u0645\u0633\u0624\u0648\u0644."
  },
  executeActions: {
    subject: "\u0642\u0645 \u0628\u062A\u062D\u062F\u064A\u062B \u062D\u0633\u0627\u0628\u0643",
    message: "\u0644\u0642\u062F \u0637\u0644\u0628 \u0645\u0634\u0631\u0641\u0643 \u0644\u0644\u062A\u0648 \u062A\u062D\u062F\u064A\u062B \u062D\u0633\u0627\u0628 {{realmName}} \u0627\u0644\u062E\u0627\u0635 \u0628\u0643 \u0639\u0646 \u0637\u0631\u064A\u0642 \u062A\u0646\u0641\u064A\u0630 \u0627\u0644\u0625\u062C\u0631\u0627\u0621 (\u0627\u0644\u0625\u062C\u0631\u0627\u0621\u0627\u062A) \u0627\u0644\u062A\u0627\u0644\u064A\u0629:",
    clickLink: "\u0627\u0646\u0642\u0631 \u0639\u0644\u0649 \u0627\u0644\u0631\u0627\u0628\u0637 \u0623\u062F\u0646\u0627\u0647 \u0644\u0628\u062F\u0621 \u0647\u0630\u0647 \u0627\u0644\u0639\u0645\u0644\u064A\u0629.",
    linkExpiration: "\u0633\u062A\u0646\u062A\u0647\u064A \u0635\u0644\u0627\u062D\u064A\u0629 \u0647\u0630\u0627 \u0627\u0644\u0631\u0627\u0628\u0637 \u062E\u0644\u0627\u0644 {{expiration}}.",
    ignoreMessage: "\u0625\u0630\u0627 \u0644\u0645 \u062A\u0643\u0646 \u0639\u0644\u0649 \u0639\u0644\u0645 \u0628\u0623\u0646 \u0627\u0644\u0645\u0633\u0624\u0648\u0644 \u0627\u0644\u062E\u0627\u0635 \u0628\u0643 \u0642\u062F \u0637\u0644\u0628 \u0630\u0644\u0643\u060C \u0641\u0645\u0627 \u0639\u0644\u064A\u0643 \u0633\u0648\u0649 \u062A\u062C\u0627\u0647\u0644 \u0647\u0630\u0647 \u0627\u0644\u0631\u0633\u0627\u0644\u0629 \u0648\u0644\u0646 \u064A\u062A\u063A\u064A\u0631 \u0634\u064A\u0621.",
    updateAccountButton: "\u062A\u062D\u062F\u064A\u062B \u0627\u0644\u062D\u0633\u0627\u0628"
  },
  "identity-provider-link": {
    subject: "\u0627\u0631\u0628\u0637 {0} \u0628\u062D\u0633\u0627\u0628\u0643",
    message: "\u064A\u0631\u064A\u062F \u0634\u062E\u0635 \u0645\u0627 \u0631\u0628\u0637 \u062D\u0633\u0627\u0628\u0643 {{identityProviderDisplayName}} \u0628\u062D\u0633\u0627\u0628 {{realmName}} \u0644\u0644\u0645\u0633\u062A\u062E\u062F\u0645 {{username}}.",
    clickLink: "\u0625\u0630\u0627 \u0643\u0646\u062A \u0623\u0646\u062A \u0645\u0646 \u0642\u0627\u0645 \u0628\u0630\u0644\u0643\u060C \u0641\u0627\u0646\u0642\u0631 \u0639\u0644\u0649 \u0627\u0644\u0631\u0627\u0628\u0637 \u0623\u062F\u0646\u0627\u0647 \u0644\u0631\u0628\u0637 \u0627\u0644\u062D\u0633\u0627\u0628\u0627\u062A",
    linkExpiration: "\u0633\u062A\u0646\u062A\u0647\u064A \u0635\u0644\u0627\u062D\u064A\u0629 \u0647\u0630\u0627 \u0627\u0644\u0631\u0627\u0628\u0637 \u062E\u0644\u0627\u0644 {{expiration}}.",
    ignoreMessage: "\u0625\u0630\u0627 \u0643\u0646\u062A \u0644\u0627 \u062A\u0631\u064A\u062F \u0645\u062A\u0627\u0628\u0639\u0629 \u0647\u0630\u0627 \u0627\u0644\u062A\u0639\u062F\u064A\u0644\u060C \u0641\u0645\u0627 \u0639\u0644\u064A\u0643 \u0633\u0648\u0649 \u062A\u062C\u0627\u0647\u0644 \u0647\u0630\u0647 \u0627\u0644\u0631\u0633\u0627\u0644\u0629.",
    linkAccountsButton: "\u0631\u0628\u0637 \u0627\u0644\u062D\u0633\u0627\u0628\u0627\u062A",
    loginInfo: "\u0625\u0630\u0627 \u0642\u0645\u062A \u0628\u0631\u0628\u0637 \u0627\u0644\u062D\u0633\u0627\u0628\u0627\u062A\u060C \u0641\u0633\u062A\u062A\u0645\u0643\u0646 \u0645\u0646 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 \u0625\u0644\u0649 {{identityProviderDisplayName}} \u0645\u0646 \u062E\u0644\u0627\u0644 {{realmName}}."
  },
  "org-invite": {
    subject: "\u062F\u0639\u0648\u0629 \u0644\u0644\u0627\u0646\u0636\u0645\u0627\u0645 \u0625\u0644\u0649 \u0645\u0646\u0638\u0645\u0629 {0}",
    greeting: "\u0645\u0631\u062D\u0628\u064B\u0627\u060C {{firstName}} {{lastName}}.",
    message: "\u0644\u0642\u062F \u062A\u0645\u062A \u062F\u0639\u0648\u062A\u0643 \u0644\u0644\u0627\u0646\u0636\u0645\u0627\u0645 \u0625\u0644\u0649 \u0645\u0646\u0638\u0645\u0629 {{organizationName}}. \u0627\u0646\u0642\u0631 \u0639\u0644\u0649 \u0627\u0644\u0631\u0627\u0628\u0637 \u0623\u062F\u0646\u0627\u0647 \u0644\u0644\u0627\u0646\u0636\u0645\u0627\u0645.",
    linkExpiration: "\u0633\u062A\u0646\u062A\u0647\u064A \u0635\u0644\u0627\u062D\u064A\u0629 \u0647\u0630\u0627 \u0627\u0644\u0631\u0627\u0628\u0637 \u062E\u0644\u0627\u0644 {{expiration}}.",
    ignoreMessage: "\u0625\u0630\u0627 \u0643\u0646\u062A \u0644\u0627 \u062A\u0631\u063A\u0628 \u0641\u064A \u0627\u0644\u0627\u0646\u0636\u0645\u0627\u0645 \u0625\u0644\u0649 \u0627\u0644\u0645\u0646\u0638\u0645\u0629\u060C \u0641\u0645\u0627 \u0639\u0644\u064A\u0643 \u0633\u0648\u0649 \u062A\u062C\u0627\u0647\u0644 \u0647\u0630\u0647 \u0627\u0644\u0631\u0633\u0627\u0644\u0629.",
    joinButton: "\u0627\u0646\u0636\u0645 \u0625\u0644\u0649 \u0627\u0644\u0645\u0646\u0638\u0645\u0629"
  },
  "password-reset": {
    subject: "\u0625\u0639\u0627\u062F\u0629 \u062A\u0639\u064A\u064A\u0646 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631",
    message: "\u0644\u0642\u062F \u0637\u0644\u0628 \u0634\u062E\u0635 \u0645\u0627 \u0644\u0644\u062A\u0648 \u062A\u063A\u064A\u064A\u0631 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0639\u062A\u0645\u0627\u062F \u062D\u0633\u0627\u0628 {{realmName}} \u0627\u0644\u062E\u0627\u0635 \u0628\u0643. \u0625\u0630\u0627 \u0643\u0646\u062A \u0623\u0646\u062A\u060C \u0641\u0627\u0646\u0642\u0631 \u0639\u0644\u0649 \u0627\u0644\u0631\u0627\u0628\u0637 \u0623\u062F\u0646\u0627\u0647 \u0644\u0625\u0639\u0627\u062F\u0629 \u062A\u0639\u064A\u064A\u0646\u0647\u0627.",
    linkExpiration: "\u0633\u062A\u0646\u062A\u0647\u064A \u0635\u0644\u0627\u062D\u064A\u0629 \u0647\u0630\u0627 \u0627\u0644\u0631\u0627\u0628\u0637 \u062E\u0644\u0627\u0644 {{expiration}}.",
    ignoreMessage: "\u0625\u0630\u0627 \u0643\u0646\u062A \u0644\u0627 \u062A\u0631\u063A\u0628 \u0641\u064A \u0625\u0639\u0627\u062F\u0629 \u062A\u0639\u064A\u064A\u0646 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0627\u0639\u062A\u0645\u0627\u062F \u0627\u0644\u062E\u0627\u0635\u0629 \u0628\u0643\u060C \u0641\u0645\u0627 \u0639\u0644\u064A\u0643 \u0633\u0648\u0649 \u062A\u062C\u0627\u0647\u0644 \u0647\u0630\u0647 \u0627\u0644\u0631\u0633\u0627\u0644\u0629 \u0648\u0644\u0646 \u064A\u062A\u063A\u064A\u0631 \u0634\u064A\u0621.",
    resetButton: "\u0625\u0639\u0627\u062F\u0629 \u062A\u0639\u064A\u064A\u0646 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0627\u0639\u062A\u0645\u0627\u062F"
  },
  requiredAction: {
    configure_totp: "\u062A\u0643\u0648\u064A\u0646 OTP",
    terms_and_conditions: "\u0627\u0644\u0634\u0631\u0648\u0637 \u0648\u0627\u0644\u0623\u062D\u0643\u0627\u0645",
    update_password: "\u062A\u062D\u062F\u064A\u062B \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631",
    update_profile: "\u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0634\u062E\u0635\u064A",
    verify_email: "\u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A",
    configure_recovery_authn_codes: "\u0625\u0646\u0634\u0627\u0621 \u0631\u0645\u0648\u0632 \u0627\u0644\u0627\u0633\u062A\u0631\u062F\u0627\u062F",
    seconds: "{0,choice,0#\u062B\u0648\u0627\u0646\u064A|1#\u062B\u0627\u0646\u064A\u0629|1<\u062B\u0648\u0627\u0646\u064A}",
    minutes: "{0,choice,0#\u062F\u0642\u0627\u0626\u0642|1#\u062F\u0642\u064A\u0642\u0629|1<\u062F\u0642\u0627\u0626\u0642}",
    hours: "{0,choice,0#\u0633\u0627\u0639\u0627\u062A|1#\u0633\u0627\u0639\u0629|1<\u0633\u0627\u0639\u0627\u062A}",
    days: "{0,choice,0#\u0623\u064A\u0627\u0645|1#\u064A\u0648\u0645 \u0648\u0627\u062D\u062F|1<\u0623\u064A\u0627\u0645}"
  },
  footer: {
    allRightsReserved: "\xA9 {{currentYear}} {{realmName}}\u060C \u062C\u0645\u064A\u0639 \u0627\u0644\u062D\u0642\u0648\u0642 \u0645\u062D\u0641\u0648\u0638\u0629"
  }
};

// src/email/locales/ca/translation.json
var translation_default2 = {
  "email-test": {
    subject: "Prova de correu electr\xF2nic",
    greeting: "Hola amic",
    message: "Aquest \xE9s un correu electr\xF2nic de prova de {{realmName}}. Si heu rebut aquest correu electr\xF2nic, vol dir que la vostra configuraci\xF3 de correu electr\xF2nic est\xE0 configurada correctament."
  },
  "email-update-confirmation": {
    subject: "Verifica el correu electr\xF2nic nou",
    linkExpiration: "Aquest enlla\xE7 caducar\xE0 d'aqu\xED a {{expiration}}.",
    updateEmailAddress: "Per actualitzar el vostre compte {{realmName}} amb l'adre\xE7a electr\xF2nica {{newEmail}}",
    clickLinkBelow: "feu clic a l'enlla\xE7 seg\xFCent",
    updateEmail: "Correu electr\xF2nic d'actualitzaci\xF3",
    ignoreMessage: "Si no voleu continuar amb aquesta modificaci\xF3, simplement ignoreu aquest missatge."
  },
  "email-verification": {
    subject: "Verifica el correu electr\xF2nic",
    message: "Alg\xFA ha creat un compte {{firstName}} amb aquesta adre\xE7a electr\xF2nica. Si vas ser tu, fes clic a l'enlla\xE7 seg\xFCent per verificar la teva adre\xE7a de correu electr\xF2nic.",
    verifyButton: "Verifica el correu electr\xF2nic",
    linkExpiration: "Aquest enlla\xE7 caducar\xE0 d'aqu\xED a {{expiration}}.",
    ignoreMessage: "Si no heu creat aquest compte, nom\xE9s feu cas d'aquest missatge."
  },
  "event-login_error": {
    subject: "Error d'inici de sessi\xF3",
    message: "S'ha detectat un intent fallit d'inici de sessi\xF3 al vostre compte el {{date}} des del {{ipAddress}}.",
    contactAdmin: "Si no vas ser tu, contacta amb un administrador."
  },
  "event-remove_credential": {
    subject: "Elimina la credencial",
    message: "La credencial {{credentialType}} es va eliminar del vostre compte el {{date}} de {{ipAddress}}.",
    contactAdmin: "Si no vas ser tu, contacta amb un administrador."
  },
  "event-remove_totp": {
    subject: "Elimina OTP",
    message: "OTP es va eliminar del teu compte el {{date}} de {{ipAddress}}.",
    contactAdmin: "Si no vas ser tu, contacta amb un administrador."
  },
  "event-update_credential": {
    subject: "Actualitza la credencial",
    message: "La vostra {{credentialType}} credencial es va canviar el {{date}} de {{ipAddress}}.",
    contactAdmin: "Si no vas ser tu, contacta amb un administrador."
  },
  "event-update_password": {
    subject: "Actualitza la contrasenya",
    message: "La teva contrasenya es va canviar el {{date}} de {{ipAddress}}.",
    contactAdmin: "Si no vas ser tu, contacta amb un administrador."
  },
  "event-update_totp": {
    subject: "Actualitzaci\xF3 OTP",
    message: "OTP es va actualitzar per al vostre compte el {{date}} des de {{ipAddress}}.",
    contactAdmin: "Si no vas ser tu, contacta amb un administrador."
  },
  "event-user_disabled_by_permanent_lockout": {
    subject: "Usuari desactivat per bloqueig permanent",
    message: "El vostre usuari s'ha desactivat permanentment a causa de diversos intents fallits el {{date}}.",
    contactAdmin: "Poseu-vos en contacte amb un administrador."
  },
  "event-user_disabled_by_temporary_lockout": {
    subject: "Usuari desactivat per bloqueig temporal",
    message: "El vostre usuari s'ha desactivat temporalment a causa de diversos intents fallits a {{date}}.",
    contactAdmin: "Poseu-vos en contacte amb un administrador."
  },
  executeActions: {
    subject: "Actualitza el teu compte",
    message: "El vostre administrador acaba de sol\xB7licitar que actualitzeu el vostre compte {{realmName}} realitzant les accions seg\xFCents:",
    clickLink: "Feu clic a l'enlla\xE7 seg\xFCent per iniciar aquest proc\xE9s.",
    linkExpiration: "Aquest enlla\xE7 caducar\xE0 d'aqu\xED a {{expiration}}.",
    ignoreMessage: "Si no sabeu que el vostre administrador ho ha sol\xB7licitat, simplement ignoreu aquest missatge i no es canviar\xE0 res.",
    updateAccountButton: "Actualitza el compte"
  },
  "identity-provider-link": {
    subject: "Enlla\xE7a {0} amb el teu compte",
    message: "Alg\xFA vol enlla\xE7ar el vostre compte {{identityProviderDisplayName}} amb el compte {{realmName}} de l'usuari {{username}}.",
    clickLink: "Si vas ser tu, fes clic a l'enlla\xE7 seg\xFCent per enlla\xE7ar els comptes",
    linkExpiration: "Aquest enlla\xE7 caducar\xE0 d'aqu\xED a {{expiration}}.",
    ignoreMessage: "Si no voleu continuar amb aquesta modificaci\xF3, simplement ignoreu aquest missatge.",
    linkAccountsButton: "Enlla\xE7ar comptes",
    loginInfo: "Si enllaceu comptes, podreu iniciar sessi\xF3 a {{identityProviderDisplayName}} a {{realmName}}."
  },
  "org-invite": {
    subject: "Invitaci\xF3 per unir-se a l'organitzaci\xF3 {0}",
    greeting: "Hola, {{firstName}} {{lastName}}.",
    message: "T'han convidat a unir-te a l'organitzaci\xF3 {{organizationName}}. Feu clic a l'enlla\xE7 seg\xFCent per unir-vos.",
    linkExpiration: "Aquest enlla\xE7 caducar\xE0 d'aqu\xED a {{expiration}}.",
    ignoreMessage: "Si no vols unir-te a l'organitzaci\xF3, ignora aquest missatge.",
    joinButton: "Uneix-te a l'organitzaci\xF3"
  },
  "password-reset": {
    subject: "Restableix la contrasenya",
    message: "Alg\xFA acaba de sol\xB7licitar canviar les credencials del vostre compte {{realmName}}. Si vas ser tu, fes clic a l'enlla\xE7 seg\xFCent per restablir-los.",
    linkExpiration: "Aquest enlla\xE7 caducar\xE0 d'aqu\xED a {{expiration}}.",
    ignoreMessage: "Si no voleu restablir les vostres credencials, ignoreu aquest missatge i no es canviar\xE0 res.",
    resetButton: "Restableix les credencials"
  },
  requiredAction: {
    configure_totp: "Configura OTP",
    terms_and_conditions: "Termes i condicions",
    update_password: "Actualitza la contrasenya",
    update_profile: "Actualitza el perfil",
    verify_email: "Verifica el correu electr\xF2nic",
    configure_recovery_authn_codes: "Generar codis de recuperaci\xF3",
    seconds: "{0,choice,0#segons|1#segon|1<segons}",
    minutes: "{0,choice,0#minuts|1#minut|1<minuts}",
    hours: "{0,choice,0#hores|1#hora|1<hores}",
    days: "{0,choice,0#dies|1#dia|1<dies}"
  },
  footer: {
    allRightsReserved: "\xA9 {{currentYear}} {{realmName}}, Tots els drets reservats"
  }
};

// src/email/locales/cs/translation.json
var translation_default3 = {
  "email-test": {
    subject: "Test e-mailem",
    greeting: "Ahoj p\u0159\xEDteli",
    message: "Toto je testovac\xED e-mail od {{realmName}}. Pokud jste obdr\u017Eeli tento e-mail, znamen\xE1 to, \u017Ee va\u0161e nastaven\xED e-mailu je nakonfigurov\xE1no spr\xE1vn\u011B."
  },
  "email-update-confirmation": {
    subject: "Ov\u011B\u0159te nov\xFD e-mail",
    linkExpiration: "Platnost tohoto odkazu vypr\u0161\xED za {{expiration}}.",
    updateEmailAddress: "Aktualizace \xFA\u010Dtu {{realmName}} pomoc\xED e-mailov\xE9 adresy {{newEmail}}",
    clickLinkBelow: "klikn\u011Bte na odkaz n\xED\u017Ee",
    updateEmail: "Aktualizovat e-mail",
    ignoreMessage: "Pokud nechcete pokra\u010Dovat v t\xE9to \xFAprav\u011B, jednodu\u0161e tuto zpr\xE1vu ignorujte."
  },
  "email-verification": {
    subject: "Ov\u011B\u0159te e-mail",
    message: "N\u011Bkdo vytvo\u0159il \xFA\u010Det {{firstName}} s touto e-mailovou adresou. Pokud jste to byli vy, klikn\u011Bte na odkaz n\xED\u017Ee a ov\u011B\u0159te svou e-mailovou adresu.",
    verifyButton: "Ov\u011B\u0159te e-mail",
    linkExpiration: "Platnost tohoto odkazu vypr\u0161\xED za {{expiration}}.",
    ignoreMessage: "Pokud jste tento \xFA\u010Det nevytvo\u0159ili, tuto zpr\xE1vu ignorujte."
  },
  "event-login_error": {
    subject: "Chyba p\u0159ihl\xE1\u0161en\xED",
    message: "Byl zji\u0161t\u011Bn ne\xFAsp\u011B\u0161n\xFD pokus o p\u0159ihl\xE1\u0161en\xED k va\u0161emu \xFA\u010Dtu dne {{date}} z {{ipAddress}}.",
    contactAdmin: "Pokud jste to nebyli vy, kontaktujte pros\xEDm spr\xE1vce."
  },
  "event-remove_credential": {
    subject: "Odebrat pov\u011B\u0159en\xED",
    message: "Pov\u011B\u0159en\xED {{credentialType}} bylo odebr\xE1no z va\u0161eho \xFA\u010Dtu dne {{date}} z {{ipAddress}}.",
    contactAdmin: "Pokud jste to nebyli vy, kontaktujte pros\xEDm spr\xE1vce."
  },
  "event-remove_totp": {
    subject: "Odebrat OTP",
    message: "OTP byl odebr\xE1n z va\u0161eho \xFA\u010Dtu dne {{date}} z {{ipAddress}}.",
    contactAdmin: "Pokud jste to nebyli vy, kontaktujte pros\xEDm spr\xE1vce."
  },
  "event-update_credential": {
    subject: "Aktualizujte p\u0159ihla\u0161ovac\xED \xFAdaje",
    message: "Va\u0161e pov\u011B\u0159en\xED {{credentialType}} bylo zm\u011Bn\u011Bno dne {{date}} z {{ipAddress}}.",
    contactAdmin: "Pokud jste to nebyli vy, kontaktujte pros\xEDm spr\xE1vce."
  },
  "event-update_password": {
    subject: "Aktualizovat heslo",
    message: "Va\u0161e heslo bylo zm\u011Bn\u011Bno dne {{date}} z {{ipAddress}}.",
    contactAdmin: "Pokud jste to nebyli vy, kontaktujte pros\xEDm spr\xE1vce."
  },
  "event-update_totp": {
    subject: "Aktualizovat OTP",
    message: "OTP byla pro v\xE1\u0161 \xFA\u010Det aktualizov\xE1na dne {{date}} z {{ipAddress}}.",
    contactAdmin: "Pokud jste to nebyli vy, kontaktujte pros\xEDm spr\xE1vce."
  },
  "event-user_disabled_by_permanent_lockout": {
    subject: "U\u017Eivatel zak\xE1z\xE1n trval\xFDm uzam\u010Den\xEDm",
    message: "V\xE1\u0161 u\u017Eivatel byl trvale deaktivov\xE1n z d\u016Fvodu n\u011Bkolika ne\xFAsp\u011B\u0161n\xFDch pokus\u016F na {{date}}.",
    contactAdmin: "Kontaktujte pros\xEDm spr\xE1vce."
  },
  "event-user_disabled_by_temporary_lockout": {
    subject: "U\u017Eivatel deaktivov\xE1n do\u010Dasn\xFDm uzam\u010Den\xEDm",
    message: "V\xE1\u0161 u\u017Eivatel byl do\u010Dasn\u011B zak\xE1z\xE1n kv\u016Fli n\u011Bkolika ne\xFAsp\u011B\u0161n\xFDm pokus\u016Fm na {{date}}.",
    contactAdmin: "Kontaktujte pros\xEDm spr\xE1vce."
  },
  executeActions: {
    subject: "Aktualizujte sv\u016Fj \xFA\u010Det",
    message: "V\xE1\u0161 administr\xE1tor v\xE1s pr\xE1v\u011B po\u017E\xE1dal, abyste aktualizovali sv\u016Fj \xFA\u010Det {{realmName}} proveden\xEDm n\xE1sleduj\xEDc\xEDch akc\xED:",
    clickLink: "Tento proces spust\xEDte kliknut\xEDm na odkaz n\xED\u017Ee.",
    linkExpiration: "Platnost tohoto odkazu vypr\u0161\xED za {{expiration}}.",
    ignoreMessage: "Pokud si nejste v\u011Bdomi toho, \u017Ee to v\xE1\u0161 administr\xE1tor po\u017Eadoval, jednodu\u0161e tuto zpr\xE1vu ignorujte a nic se nezm\u011Bn\xED.",
    updateAccountButton: "Aktualizovat \xFA\u010Det"
  },
  "identity-provider-link": {
    subject: "Propojte {0} se sv\xFDm \xFA\u010Dtem",
    message: "N\u011Bkdo chce propojit v\xE1\u0161 \xFA\u010Det {{identityProviderDisplayName}} s \xFA\u010Dtem {{realmName}} u\u017Eivatele {{username}}.",
    clickLink: "Pokud jste to byli vy, klikn\u011Bte na odkaz n\xED\u017Ee a \xFA\u010Dty propojte",
    linkExpiration: "Platnost tohoto odkazu vypr\u0161\xED za {{expiration}}.",
    ignoreMessage: "Pokud nechcete pokra\u010Dovat v t\xE9to \xFAprav\u011B, jednodu\u0161e tuto zpr\xE1vu ignorujte.",
    linkAccountsButton: "Propojit \xFA\u010Dty",
    loginInfo: "Pokud \xFA\u010Dty propoj\xEDte, budete se moci p\u0159ihl\xE1sit k {{identityProviderDisplayName}} prost\u0159ednictv\xEDm {{realmName}}."
  },
  "org-invite": {
    subject: "Pozv\xE1nka do organizace {0}",
    greeting: "Dobr\xFD den, {{firstName}} {{lastName}}.",
    message: "Byli jste pozv\xE1ni, abyste se p\u0159ipojili k organizaci {{organizationName}}. Chcete-li se p\u0159ipojit, klikn\u011Bte na odkaz n\xED\u017Ee.",
    linkExpiration: "Platnost tohoto odkazu vypr\u0161\xED za {{expiration}}.",
    ignoreMessage: "Pokud se nechcete p\u0159ipojit k organizaci, jednodu\u0161e tuto zpr\xE1vu ignorujte.",
    joinButton: "P\u0159ipojte se k organizaci"
  },
  "password-reset": {
    subject: "Obnovit heslo",
    message: "N\u011Bkdo pr\xE1v\u011B po\u017E\xE1dal o zm\u011Bnu p\u0159ihla\u0161ovac\xEDch \xFAdaj\u016F va\u0161eho \xFA\u010Dtu {{realmName}}. Pokud jste to byli vy, kliknut\xEDm na odkaz n\xED\u017Ee je resetujte.",
    linkExpiration: "Platnost tohoto odkazu vypr\u0161\xED za {{expiration}}.",
    ignoreMessage: "Pokud nechcete resetovat sv\xE9 p\u0159ihla\u0161ovac\xED \xFAdaje, jednodu\u0161e tuto zpr\xE1vu ignorujte a nic se nezm\u011Bn\xED.",
    resetButton: "Obnovit p\u0159ihla\u0161ovac\xED \xFAdaje"
  },
  requiredAction: {
    configure_totp: "Konfigurovat OTP",
    terms_and_conditions: "Smluvn\xED podm\xEDnky",
    update_password: "Aktualizovat heslo",
    update_profile: "Aktualizovat profil",
    verify_email: "Ov\u011B\u0159te email",
    configure_recovery_authn_codes: "Vygenerujte obnovovac\xED k\xF3dy",
    seconds: "{0,choice,0#sekundy|1#sekunda|1<sekundy}",
    minutes: "{0,choice,0#z\xE1pis|1#minuta|1<z\xE1pis}",
    hours: "{0,choice,0#hodin|1#hodina|1<hodin}",
    days: "{0,choice,0#dn\xED|1#den|1<dn\xED}"
  },
  footer: {
    allRightsReserved: "\xA9 {{currentYear}} {{realmName}}, V\u0161echna pr\xE1va vyhrazena"
  }
};

// src/email/locales/da/translation.json
var translation_default4 = {
  "email-test": {
    subject: "Email test",
    greeting: "Hej ven",
    message: "Dette er en test-e-mail fra {{realmName}}. Hvis du har modtaget denne e-mail, betyder det, at dine e-mail-indstillinger er konfigureret korrekt."
  },
  "email-update-confirmation": {
    subject: "Bekr\xE6ft ny e-mail",
    linkExpiration: "Dette link udl\xF8ber inden for {{expiration}}.",
    updateEmailAddress: "For at opdatere din {{realmName}} konto med e-mailadresse {{newEmail}}",
    clickLinkBelow: "klik p\xE5 linket nedenfor",
    updateEmail: "Opdater e-mail",
    ignoreMessage: "Hvis du ikke \xF8nsker at forts\xE6tte med denne \xE6ndring, skal du bare ignorere denne besked."
  },
  "email-verification": {
    subject: "Bekr\xE6ft e-mail",
    message: "Nogen har oprettet en {{firstName}} konto med denne e-mailadresse. Hvis det var dig, skal du klikke p\xE5 linket nedenfor for at bekr\xE6fte din e-mailadresse.",
    verifyButton: "Bekr\xE6ft e-mail",
    linkExpiration: "Dette link udl\xF8ber inden for {{expiration}}.",
    ignoreMessage: "Hvis du ikke har oprettet denne konto, skal du bare ignorere denne besked."
  },
  "event-login_error": {
    subject: "Login fejl",
    message: "Et mislykket loginfors\xF8g blev registreret p\xE5 din konto den {{date}} fra {{ipAddress}}.",
    contactAdmin: "Hvis dette ikke var dig, bedes du kontakte en administrator."
  },
  "event-remove_credential": {
    subject: "Fjern legitimationsoplysninger",
    message: "Oplysningsoplysninger {{credentialType}} blev fjernet fra din konto den {{date}} fra {{ipAddress}}.",
    contactAdmin: "Hvis dette ikke var dig, bedes du kontakte en administrator."
  },
  "event-remove_totp": {
    subject: "Fjern OTP",
    message: "OTP blev fjernet fra din konto den {{date}} fra {{ipAddress}}.",
    contactAdmin: "Hvis dette ikke var dig, bedes du kontakte en administrator."
  },
  "event-update_credential": {
    subject: "Opdater legitimationsoplysninger",
    message: "Din {{credentialType}} legitimationsoplysninger blev \xE6ndret den {{date}} fra {{ipAddress}}.",
    contactAdmin: "Hvis dette ikke var dig, bedes du kontakte en administrator."
  },
  "event-update_password": {
    subject: "Opdater adgangskode",
    message: "Din adgangskode blev \xE6ndret den {{date}} fra {{ipAddress}}.",
    contactAdmin: "Hvis dette ikke var dig, bedes du kontakte en administrator."
  },
  "event-update_totp": {
    subject: "Opdater OTP",
    message: "OTP blev opdateret for din konto den {{date}} fra {{ipAddress}}.",
    contactAdmin: "Hvis dette ikke var dig, bedes du kontakte en administrator."
  },
  "event-user_disabled_by_permanent_lockout": {
    subject: "Bruger deaktiveret ved permanent lockout",
    message: "Din bruger er blevet deaktiveret permanent p\xE5 grund af flere mislykkede fors\xF8g p\xE5 {{date}}.",
    contactAdmin: "Kontakt venligst en administrator."
  },
  "event-user_disabled_by_temporary_lockout": {
    subject: "Bruger deaktiveret ved midlertidig lockout",
    message: "Din bruger er blevet deaktiveret midlertidigt p\xE5 grund af flere mislykkede fors\xF8g p\xE5 {{date}}.",
    contactAdmin: "Kontakt venligst en administrator."
  },
  executeActions: {
    subject: "Opdater din konto",
    message: "Din administrator har lige anmodet dig om at opdatere din {{realmName}} konto ved at udf\xF8re f\xF8lgende handling(er):",
    clickLink: "Klik p\xE5 linket nedenfor for at starte denne proces.",
    linkExpiration: "Dette link udl\xF8ber inden for {{expiration}}.",
    ignoreMessage: "Hvis du ikke er klar over, at din administrator har anmodet om dette, skal du bare ignorere denne besked, og intet vil blive \xE6ndret.",
    updateAccountButton: "Opdater konto"
  },
  "identity-provider-link": {
    subject: "Link {0} til din konto",
    message: "Nogen vil linke din {{identityProviderDisplayName}}-konto til {{realmName}}-kontoen for brugeren {{username}}.",
    clickLink: "Hvis dette var dig, skal du klikke p\xE5 linket nedenfor for at linke konti",
    linkExpiration: "Dette link udl\xF8ber inden for {{expiration}}.",
    ignoreMessage: "Hvis du ikke \xF8nsker at forts\xE6tte med denne \xE6ndring, skal du bare ignorere denne besked.",
    linkAccountsButton: "Link konti",
    loginInfo: "Hvis du linker konti, vil du v\xE6re i stand til at logge ind p\xE5 {{identityProviderDisplayName}} gennem {{realmName}}."
  },
  "org-invite": {
    subject: "Invitation til at deltage i organisationen {0}",
    greeting: "Hej {{firstName}} {{lastName}}.",
    message: "Du blev inviteret til at deltage i organisationen {{organizationName}}. Klik p\xE5 linket nedenfor for at deltage.",
    linkExpiration: "Dette link udl\xF8ber inden for {{expiration}}.",
    ignoreMessage: "Hvis du ikke \xF8nsker at deltage i organisationen, skal du bare ignorere denne besked.",
    joinButton: "Meld dig ind i organisationen"
  },
  "password-reset": {
    subject: "Nulstil adgangskode",
    message: "Nogen har lige anmodet om at \xE6ndre din {{realmName}} kontos loginoplysninger. Hvis det var dig, skal du klikke p\xE5 linket nedenfor for at nulstille dem.",
    linkExpiration: "Dette link udl\xF8ber inden for {{expiration}}.",
    ignoreMessage: "Hvis du ikke \xF8nsker at nulstille dine legitimationsoplysninger, skal du bare ignorere denne besked, og intet vil blive \xE6ndret.",
    resetButton: "Nulstil legitimationsoplysninger"
  },
  requiredAction: {
    configure_totp: "Konfigurer OTP",
    terms_and_conditions: "Vilk\xE5r og betingelser",
    update_password: "Opdater adgangskode",
    update_profile: "Opdater profil",
    verify_email: "Bekr\xE6ft e-mail",
    configure_recovery_authn_codes: "Generer gendannelseskoder",
    seconds: "{0,choice,0#sekunder|1#sekund|1<sekunder}",
    minutes: "{0,choice,0#minutter|1#minut|1<minutter}",
    hours: "{0,choice,0#timer|1#time|1<timer}",
    days: "{0,choice,0#dage|1#dag|1<dage}"
  },
  footer: {
    allRightsReserved: "\xA9 {{currentYear}} {{realmName}}, Alle rettigheder forbeholdes"
  }
};

// src/email/locales/de/translation.json
var translation_default5 = {
  "email-test": {
    subject: "E-Mail-Test",
    greeting: "Hallo Freund",
    message: "Dies ist eine Test-E-Mail von {{realmName}}. Wenn Sie diese E-Mail erhalten haben, bedeutet dies, dass Ihre E-Mail-Einstellungen korrekt konfiguriert sind."
  },
  "email-update-confirmation": {
    subject: "Neue E-Mail best\xE4tigen",
    linkExpiration: "Dieser Link l\xE4uft innerhalb von {{expiration}} ab.",
    updateEmailAddress: "So aktualisieren Sie Ihr {{realmName}}-Konto mit der E-Mail-Adresse {{newEmail}}",
    clickLinkBelow: "Klicken Sie auf den Link unten",
    updateEmail: "E-Mail aktualisieren",
    ignoreMessage: "Wenn Sie mit dieser \xC4nderung nicht fortfahren m\xF6chten, ignorieren Sie diese Meldung einfach."
  },
  "email-verification": {
    subject: "E-Mail best\xE4tigen",
    message: "Jemand hat mit dieser E-Mail-Adresse ein {{firstName}}-Konto erstellt. Wenn Sie das waren, klicken Sie auf den Link unten, um Ihre E-Mail-Adresse zu best\xE4tigen.",
    verifyButton: "E-Mail best\xE4tigen",
    linkExpiration: "Dieser Link l\xE4uft innerhalb von {{expiration}} ab.",
    ignoreMessage: "Wenn Sie dieses Konto nicht erstellt haben, ignorieren Sie diese Nachricht einfach."
  },
  "event-login_error": {
    subject: "Anmeldefehler",
    message: "Am {{date}} von {{ipAddress}} wurde ein fehlgeschlagener Anmeldeversuch bei Ihrem Konto festgestellt.",
    contactAdmin: "Wenn dies nicht Sie waren, wenden Sie sich bitte an einen Administrator."
  },
  "event-remove_credential": {
    subject: "Anmeldeinformationen entfernen",
    message: "Die Anmeldedaten {{credentialType}} wurden am {{date}} von {{ipAddress}} aus Ihrem Konto entfernt.",
    contactAdmin: "Wenn dies nicht Sie waren, wenden Sie sich bitte an einen Administrator."
  },
  "event-remove_totp": {
    subject: "OTP entfernen",
    message: "OTP wurde am {{date}} von {{ipAddress}} aus Ihrem Konto entfernt.",
    contactAdmin: "Wenn dies nicht Sie waren, wenden Sie sich bitte an einen Administrator."
  },
  "event-update_credential": {
    subject: "Anmeldeinformationen aktualisieren",
    message: "Ihre {{credentialType}}-Anmeldeinformationen wurden am {{date}} von {{ipAddress}} ge\xE4ndert.",
    contactAdmin: "Wenn dies nicht Sie waren, wenden Sie sich bitte an einen Administrator."
  },
  "event-update_password": {
    subject: "Passwort aktualisieren",
    message: "Ihr Passwort wurde am {{date}} von {{ipAddress}} ge\xE4ndert.",
    contactAdmin: "Wenn dies nicht Sie waren, wenden Sie sich bitte an einen Administrator."
  },
  "event-update_totp": {
    subject: "Aktualisieren Sie OTP",
    message: "OTP wurde f\xFCr Ihr Konto am {{date}} von {{ipAddress}} aktualisiert.",
    contactAdmin: "Wenn dies nicht Sie waren, wenden Sie sich bitte an einen Administrator."
  },
  "event-user_disabled_by_permanent_lockout": {
    subject: "Benutzer durch permanente Sperre deaktiviert",
    message: "Ihr Benutzer wurde aufgrund mehrerer fehlgeschlagener Versuche am {{date}} dauerhaft deaktiviert.",
    contactAdmin: "Bitte wenden Sie sich an einen Administrator."
  },
  "event-user_disabled_by_temporary_lockout": {
    subject: "Benutzer durch vor\xFCbergehende Sperrung deaktiviert",
    message: "Ihr Benutzer wurde aufgrund mehrerer fehlgeschlagener Versuche am {{date}} vor\xFCbergehend deaktiviert.",
    contactAdmin: "Bitte wenden Sie sich an einen Administrator."
  },
  executeActions: {
    subject: "Aktualisieren Sie Ihr Konto",
    message: "Ihr Administrator hat Sie gerade aufgefordert, Ihr {{realmName}}-Konto zu aktualisieren, indem Sie die folgenden Aktionen ausf\xFChren:",
    clickLink: "Klicken Sie auf den Link unten, um diesen Vorgang zu starten.",
    linkExpiration: "Dieser Link l\xE4uft innerhalb von {{expiration}} ab.",
    ignoreMessage: "Wenn Sie nicht wissen, dass Ihr Administrator dies angefordert hat, ignorieren Sie diese Nachricht einfach und es wird sich nichts \xE4ndern.",
    updateAccountButton: "Konto aktualisieren"
  },
  "identity-provider-link": {
    subject: "Verkn\xFCpfen Sie {0} mit Ihrem Konto",
    message: "Jemand m\xF6chte Ihr {{identityProviderDisplayName}}-Konto mit dem {{realmName}}-Konto des Benutzers {{username}} verkn\xFCpfen.",
    clickLink: "Wenn Sie das waren, klicken Sie auf den Link unten, um Konten zu verkn\xFCpfen",
    linkExpiration: "Dieser Link l\xE4uft innerhalb von {{expiration}} ab.",
    ignoreMessage: "Wenn Sie mit dieser \xC4nderung nicht fortfahren m\xF6chten, ignorieren Sie diese Meldung einfach.",
    linkAccountsButton: "Konten verkn\xFCpfen",
    loginInfo: "Wenn Sie Konten verkn\xFCpfen, k\xF6nnen Sie sich bei {{identityProviderDisplayName}} bis {{realmName}} anmelden."
  },
  "org-invite": {
    subject: "Einladung zum Beitritt zur Organisation {0}",
    greeting: "Hallo, {{firstName}} {{lastName}}.",
    message: "Sie wurden eingeladen, der Organisation {{organizationName}} beizutreten. Klicken Sie auf den Link unten, um beizutreten.",
    linkExpiration: "Dieser Link l\xE4uft innerhalb von {{expiration}} ab.",
    ignoreMessage: "Wenn Sie der Organisation nicht beitreten m\xF6chten, ignorieren Sie diese Nachricht einfach.",
    joinButton: "Treten Sie der Organisation bei"
  },
  "password-reset": {
    subject: "Passwort zur\xFCcksetzen",
    message: "Jemand hat gerade darum gebeten, die Anmeldeinformationen Ihres {{realmName}}-Kontos zu \xE4ndern. Wenn Sie es waren, klicken Sie auf den Link unten, um sie zur\xFCckzusetzen.",
    linkExpiration: "Dieser Link l\xE4uft innerhalb von {{expiration}} ab.",
    ignoreMessage: "Wenn Sie Ihre Anmeldeinformationen nicht zur\xFCcksetzen m\xF6chten, ignorieren Sie diese Nachricht einfach und es wird sich nichts \xE4ndern.",
    resetButton: "Anmeldeinformationen zur\xFCcksetzen"
  },
  requiredAction: {
    configure_totp: "Konfigurieren Sie OTP",
    terms_and_conditions: "Gesch\xE4ftsbedingungen",
    update_password: "Passwort aktualisieren",
    update_profile: "Profil aktualisieren",
    verify_email: "E-Mail best\xE4tigen",
    configure_recovery_authn_codes: "Wiederherstellungscodes generieren",
    seconds: "{0,choice,0#Sekunden|1#Sekunde|1<Sekunden}",
    minutes: "{0,choice,0#Minuten|1#Minute|1<Minuten}",
    hours: "{0,choice,0#Std.|1#Stunde|1<Std.}",
    days: "{0,choice,0#Tage|1#Tag|1<Tage}"
  },
  footer: {
    allRightsReserved: "\xA9 {{currentYear}} {{realmName}}, alle Rechte vorbehalten"
  }
};

// src/email/locales/el/translation.json
var translation_default6 = {
  "email-test": {
    subject: "\u0394\u03BF\u03BA\u03B9\u03BC\u03AE \u03B7\u03BB\u03B5\u03BA\u03C4\u03C1\u03BF\u03BD\u03B9\u03BA\u03BF\u03CD \u03C4\u03B1\u03C7\u03C5\u03B4\u03C1\u03BF\u03BC\u03B5\u03AF\u03BF\u03C5",
    greeting: "\u0393\u03B5\u03B9\u03B1 \u03C3\u03BF\u03C5 \u03C6\u03AF\u03BB\u03B5",
    message: "\u0391\u03C5\u03C4\u03CC \u03B5\u03AF\u03BD\u03B1\u03B9 \u03AD\u03BD\u03B1 \u03B4\u03BF\u03BA\u03B9\u03BC\u03B1\u03C3\u03C4\u03B9\u03BA\u03CC \u03BC\u03AE\u03BD\u03C5\u03BC\u03B1 \u03B7\u03BB\u03B5\u03BA\u03C4\u03C1\u03BF\u03BD\u03B9\u03BA\u03BF\u03CD \u03C4\u03B1\u03C7\u03C5\u03B4\u03C1\u03BF\u03BC\u03B5\u03AF\u03BF\u03C5 \u03B1\u03C0\u03CC {{realmName}}. \u0395\u03AC\u03BD \u03BB\u03AC\u03B2\u03B1\u03C4\u03B5 \u03B1\u03C5\u03C4\u03CC \u03C4\u03BF \u03BC\u03AE\u03BD\u03C5\u03BC\u03B1 \u03B7\u03BB\u03B5\u03BA\u03C4\u03C1\u03BF\u03BD\u03B9\u03BA\u03BF\u03CD \u03C4\u03B1\u03C7\u03C5\u03B4\u03C1\u03BF\u03BC\u03B5\u03AF\u03BF\u03C5, \u03C3\u03B7\u03BC\u03B1\u03AF\u03BD\u03B5\u03B9 \u03CC\u03C4\u03B9 \u03BF\u03B9 \u03C1\u03C5\u03B8\u03BC\u03AF\u03C3\u03B5\u03B9\u03C2 \u03C4\u03BF\u03C5 email \u03C3\u03B1\u03C2 \u03AD\u03C7\u03BF\u03C5\u03BD \u03B4\u03B9\u03B1\u03BC\u03BF\u03C1\u03C6\u03C9\u03B8\u03B5\u03AF \u03C3\u03C9\u03C3\u03C4\u03AC."
  },
  "email-update-confirmation": {
    subject: "\u0395\u03C0\u03B1\u03BB\u03AE\u03B8\u03B5\u03C5\u03C3\u03B7 \u03BD\u03AD\u03BF\u03C5 email",
    linkExpiration: "\u0391\u03C5\u03C4\u03CC\u03C2 \u03BF \u03C3\u03CD\u03BD\u03B4\u03B5\u03C3\u03BC\u03BF\u03C2 \u03B8\u03B1 \u03BB\u03AE\u03BE\u03B5\u03B9 \u03B5\u03BD\u03C4\u03CC\u03C2 {{expiration}}.",
    updateEmailAddress: "\u0393\u03B9\u03B1 \u03BD\u03B1 \u03B5\u03BD\u03B7\u03BC\u03B5\u03C1\u03CE\u03C3\u03B5\u03C4\u03B5 \u03C4\u03BF\u03BD \u03BB\u03BF\u03B3\u03B1\u03C1\u03B9\u03B1\u03C3\u03BC\u03CC {{realmName}} \u03C3\u03B1\u03C2 \u03BC\u03B5 \u03B4\u03B9\u03B5\u03CD\u03B8\u03C5\u03BD\u03C3\u03B7 email {{newEmail}}",
    clickLinkBelow: "\u03BA\u03AC\u03BD\u03C4\u03B5 \u03BA\u03BB\u03B9\u03BA \u03C3\u03C4\u03BF\u03BD \u03C0\u03B1\u03C1\u03B1\u03BA\u03AC\u03C4\u03C9 \u03C3\u03CD\u03BD\u03B4\u03B5\u03C3\u03BC\u03BF",
    updateEmail: "\u0395\u03BD\u03B7\u03BC\u03AD\u03C1\u03C9\u03C3\u03B7 email",
    ignoreMessage: "\u0395\u03AC\u03BD \u03B4\u03B5\u03BD \u03B8\u03AD\u03BB\u03B5\u03C4\u03B5 \u03BD\u03B1 \u03C3\u03C5\u03BD\u03B5\u03C7\u03AF\u03C3\u03B5\u03C4\u03B5 \u03BC\u03B5 \u03B1\u03C5\u03C4\u03AE\u03BD \u03C4\u03B7\u03BD \u03C4\u03C1\u03BF\u03C0\u03BF\u03C0\u03BF\u03AF\u03B7\u03C3\u03B7, \u03B1\u03C0\u03BB\u03CE\u03C2 \u03B1\u03B3\u03BD\u03BF\u03AE\u03C3\u03C4\u03B5 \u03B1\u03C5\u03C4\u03CC \u03C4\u03BF \u03BC\u03AE\u03BD\u03C5\u03BC\u03B1."
  },
  "email-verification": {
    subject: "\u0395\u03C0\u03B1\u03BB\u03AE\u03B8\u03B5\u03C5\u03C3\u03B7 email",
    message: "\u039A\u03AC\u03C0\u03BF\u03B9\u03BF\u03C2 \u03AD\u03C7\u03B5\u03B9 \u03B4\u03B7\u03BC\u03B9\u03BF\u03C5\u03C1\u03B3\u03AE\u03C3\u03B5\u03B9 \u03AD\u03BD\u03B1\u03BD \u03BB\u03BF\u03B3\u03B1\u03C1\u03B9\u03B1\u03C3\u03BC\u03CC {{firstName}} \u03BC\u03B5 \u03B1\u03C5\u03C4\u03AE\u03BD \u03C4\u03B7 \u03B4\u03B9\u03B5\u03CD\u03B8\u03C5\u03BD\u03C3\u03B7 \u03B7\u03BB\u03B5\u03BA\u03C4\u03C1\u03BF\u03BD\u03B9\u03BA\u03BF\u03CD \u03C4\u03B1\u03C7\u03C5\u03B4\u03C1\u03BF\u03BC\u03B5\u03AF\u03BF\u03C5. \u0395\u03AC\u03BD \u03AE\u03C3\u03B1\u03C3\u03C4\u03B1\u03BD \u03B5\u03C3\u03B5\u03AF\u03C2, \u03BA\u03AC\u03BD\u03C4\u03B5 \u03BA\u03BB\u03B9\u03BA \u03C3\u03C4\u03BF\u03BD \u03C0\u03B1\u03C1\u03B1\u03BA\u03AC\u03C4\u03C9 \u03C3\u03CD\u03BD\u03B4\u03B5\u03C3\u03BC\u03BF \u03B3\u03B9\u03B1 \u03BD\u03B1 \u03B5\u03C0\u03B1\u03BB\u03B7\u03B8\u03B5\u03CD\u03C3\u03B5\u03C4\u03B5 \u03C4\u03B7 \u03B4\u03B9\u03B5\u03CD\u03B8\u03C5\u03BD\u03C3\u03B7 email \u03C3\u03B1\u03C2.",
    verifyButton: "\u0395\u03C0\u03B1\u03BB\u03AE\u03B8\u03B5\u03C5\u03C3\u03B7 email",
    linkExpiration: "\u0391\u03C5\u03C4\u03CC\u03C2 \u03BF \u03C3\u03CD\u03BD\u03B4\u03B5\u03C3\u03BC\u03BF\u03C2 \u03B8\u03B1 \u03BB\u03AE\u03BE\u03B5\u03B9 \u03B5\u03BD\u03C4\u03CC\u03C2 {{expiration}}.",
    ignoreMessage: "\u0395\u03AC\u03BD \u03B4\u03B5\u03BD \u03B4\u03B7\u03BC\u03B9\u03BF\u03C5\u03C1\u03B3\u03AE\u03C3\u03B1\u03C4\u03B5 \u03B1\u03C5\u03C4\u03CC\u03BD \u03C4\u03BF\u03BD \u03BB\u03BF\u03B3\u03B1\u03C1\u03B9\u03B1\u03C3\u03BC\u03CC, \u03B1\u03C0\u03BB\u03CE\u03C2 \u03B1\u03B3\u03BD\u03BF\u03AE\u03C3\u03C4\u03B5 \u03B1\u03C5\u03C4\u03CC \u03C4\u03BF \u03BC\u03AE\u03BD\u03C5\u03BC\u03B1."
  },
  "event-login_error": {
    subject: "\u03A3\u03C6\u03AC\u03BB\u03BC\u03B1 \u03C3\u03CD\u03BD\u03B4\u03B5\u03C3\u03B7\u03C2",
    message: "\u0395\u03BD\u03C4\u03BF\u03C0\u03AF\u03C3\u03C4\u03B7\u03BA\u03B5 \u03BC\u03B9\u03B1 \u03B1\u03C0\u03BF\u03C4\u03C5\u03C7\u03B7\u03BC\u03AD\u03BD\u03B7 \u03C0\u03C1\u03BF\u03C3\u03C0\u03AC\u03B8\u03B5\u03B9\u03B1 \u03C3\u03CD\u03BD\u03B4\u03B5\u03C3\u03B7\u03C2 \u03C3\u03C4\u03BF\u03BD \u03BB\u03BF\u03B3\u03B1\u03C1\u03B9\u03B1\u03C3\u03BC\u03CC \u03C3\u03B1\u03C2 \u03C3\u03C4\u03B9\u03C2 {{date}} \u03B1\u03C0\u03CC {{ipAddress}}.",
    contactAdmin: "\u0395\u03AC\u03BD \u03B4\u03B5\u03BD \u03AE\u03C3\u03B1\u03C3\u03C4\u03B1\u03BD \u03B5\u03C3\u03B5\u03AF\u03C2, \u03B5\u03C0\u03B9\u03BA\u03BF\u03B9\u03BD\u03C9\u03BD\u03AE\u03C3\u03C4\u03B5 \u03BC\u03B5 \u03AD\u03BD\u03B1\u03BD \u03B4\u03B9\u03B1\u03C7\u03B5\u03B9\u03C1\u03B9\u03C3\u03C4\u03AE."
  },
  "event-remove_credential": {
    subject: "\u039A\u03B1\u03C4\u03AC\u03C1\u03B3\u03B7\u03C3\u03B7 \u03B4\u03B9\u03B1\u03C0\u03B9\u03C3\u03C4\u03B5\u03C5\u03C4\u03B7\u03C1\u03AF\u03C9\u03BD",
    message: "\u03A4\u03BF \u03B4\u03B9\u03B1\u03C0\u03B9\u03C3\u03C4\u03B5\u03C5\u03C4\u03AE\u03C1\u03B9\u03BF {{credentialType}} \u03BA\u03B1\u03C4\u03B1\u03C1\u03B3\u03AE\u03B8\u03B7\u03BA\u03B5 \u03B1\u03C0\u03CC \u03C4\u03BF\u03BD \u03BB\u03BF\u03B3\u03B1\u03C1\u03B9\u03B1\u03C3\u03BC\u03CC \u03C3\u03B1\u03C2 \u03C3\u03C4\u03B9\u03C2 {{date}} \u03B1\u03C0\u03CC {{ipAddress}}.",
    contactAdmin: "\u0395\u03AC\u03BD \u03B4\u03B5\u03BD \u03AE\u03C3\u03B1\u03C3\u03C4\u03B1\u03BD \u03B5\u03C3\u03B5\u03AF\u03C2, \u03B5\u03C0\u03B9\u03BA\u03BF\u03B9\u03BD\u03C9\u03BD\u03AE\u03C3\u03C4\u03B5 \u03BC\u03B5 \u03AD\u03BD\u03B1\u03BD \u03B4\u03B9\u03B1\u03C7\u03B5\u03B9\u03C1\u03B9\u03C3\u03C4\u03AE."
  },
  "event-remove_totp": {
    subject: "\u039A\u03B1\u03C4\u03AC\u03C1\u03B3\u03B7\u03C3\u03B7 OTP",
    message: "\u03A4\u03BF OTP \u03BA\u03B1\u03C4\u03B1\u03C1\u03B3\u03AE\u03B8\u03B7\u03BA\u03B5 \u03B1\u03C0\u03CC \u03C4\u03BF\u03BD \u03BB\u03BF\u03B3\u03B1\u03C1\u03B9\u03B1\u03C3\u03BC\u03CC \u03C3\u03B1\u03C2 \u03C3\u03C4\u03B9\u03C2 {{date}} \u03B1\u03C0\u03CC {{ipAddress}}.",
    contactAdmin: "\u0395\u03AC\u03BD \u03B4\u03B5\u03BD \u03AE\u03C3\u03B1\u03C3\u03C4\u03B1\u03BD \u03B5\u03C3\u03B5\u03AF\u03C2, \u03B5\u03C0\u03B9\u03BA\u03BF\u03B9\u03BD\u03C9\u03BD\u03AE\u03C3\u03C4\u03B5 \u03BC\u03B5 \u03AD\u03BD\u03B1\u03BD \u03B4\u03B9\u03B1\u03C7\u03B5\u03B9\u03C1\u03B9\u03C3\u03C4\u03AE."
  },
  "event-update_credential": {
    subject: "\u0395\u03BD\u03B7\u03BC\u03AD\u03C1\u03C9\u03C3\u03B7 \u03B4\u03B9\u03B1\u03C0\u03B9\u03C3\u03C4\u03B5\u03C5\u03C4\u03B7\u03C1\u03AF\u03C9\u03BD",
    message: "\u03A4\u03B1 \u03B4\u03B9\u03B1\u03C0\u03B9\u03C3\u03C4\u03B5\u03C5\u03C4\u03AE\u03C1\u03B9\u03AC \u03C3\u03B1\u03C2 {{credentialType}} \u03AC\u03BB\u03BB\u03B1\u03BE\u03B1\u03BD \u03C3\u03C4\u03B9\u03C2 {{date}} \u03B1\u03C0\u03CC {{ipAddress}}.",
    contactAdmin: "\u0395\u03AC\u03BD \u03B4\u03B5\u03BD \u03AE\u03C3\u03B1\u03C3\u03C4\u03B1\u03BD \u03B5\u03C3\u03B5\u03AF\u03C2, \u03B5\u03C0\u03B9\u03BA\u03BF\u03B9\u03BD\u03C9\u03BD\u03AE\u03C3\u03C4\u03B5 \u03BC\u03B5 \u03AD\u03BD\u03B1\u03BD \u03B4\u03B9\u03B1\u03C7\u03B5\u03B9\u03C1\u03B9\u03C3\u03C4\u03AE."
  },
  "event-update_password": {
    subject: "\u0395\u03BD\u03B7\u03BC\u03AD\u03C1\u03C9\u03C3\u03B7 \u03BA\u03C9\u03B4\u03B9\u03BA\u03BF\u03CD \u03C0\u03C1\u03CC\u03C3\u03B2\u03B1\u03C3\u03B7\u03C2",
    message: "\u039F \u03BA\u03C9\u03B4\u03B9\u03BA\u03CC\u03C2 \u03C0\u03C1\u03CC\u03C3\u03B2\u03B1\u03C3\u03AE\u03C2 \u03C3\u03B1\u03C2 \u03AC\u03BB\u03BB\u03B1\u03BE\u03B5 \u03C3\u03C4\u03B9\u03C2 {{date}} \u03B1\u03C0\u03CC {{ipAddress}}.",
    contactAdmin: "\u0395\u03AC\u03BD \u03B4\u03B5\u03BD \u03AE\u03C3\u03B1\u03C3\u03C4\u03B1\u03BD \u03B5\u03C3\u03B5\u03AF\u03C2, \u03B5\u03C0\u03B9\u03BA\u03BF\u03B9\u03BD\u03C9\u03BD\u03AE\u03C3\u03C4\u03B5 \u03BC\u03B5 \u03AD\u03BD\u03B1\u03BD \u03B4\u03B9\u03B1\u03C7\u03B5\u03B9\u03C1\u03B9\u03C3\u03C4\u03AE."
  },
  "event-update_totp": {
    subject: "\u0395\u03BD\u03B7\u03BC\u03AD\u03C1\u03C9\u03C3\u03B7 OTP",
    message: "\u03A4\u03BF OTP \u03B5\u03BD\u03B7\u03BC\u03B5\u03C1\u03CE\u03B8\u03B7\u03BA\u03B5 \u03B3\u03B9\u03B1 \u03C4\u03BF\u03BD \u03BB\u03BF\u03B3\u03B1\u03C1\u03B9\u03B1\u03C3\u03BC\u03CC \u03C3\u03B1\u03C2 \u03C3\u03C4\u03B9\u03C2 {{date}} \u03B1\u03C0\u03CC {{ipAddress}}.",
    contactAdmin: "\u0395\u03AC\u03BD \u03B4\u03B5\u03BD \u03AE\u03C3\u03B1\u03C3\u03C4\u03B1\u03BD \u03B5\u03C3\u03B5\u03AF\u03C2, \u03B5\u03C0\u03B9\u03BA\u03BF\u03B9\u03BD\u03C9\u03BD\u03AE\u03C3\u03C4\u03B5 \u03BC\u03B5 \u03AD\u03BD\u03B1\u03BD \u03B4\u03B9\u03B1\u03C7\u03B5\u03B9\u03C1\u03B9\u03C3\u03C4\u03AE."
  },
  "event-user_disabled_by_permanent_lockout": {
    subject: "\u039F \u03C7\u03C1\u03AE\u03C3\u03C4\u03B7\u03C2 \u03B1\u03C0\u03B5\u03BD\u03B5\u03C1\u03B3\u03BF\u03C0\u03BF\u03B9\u03AE\u03B8\u03B7\u03BA\u03B5 \u03B1\u03C0\u03CC \u03BC\u03CC\u03BD\u03B9\u03BC\u03BF \u03BA\u03BB\u03B5\u03AF\u03B4\u03C9\u03BC\u03B1",
    message: "\u039F \u03C7\u03C1\u03AE\u03C3\u03C4\u03B7\u03C2 \u03C3\u03B1\u03C2 \u03AD\u03C7\u03B5\u03B9 \u03B1\u03C0\u03B5\u03BD\u03B5\u03C1\u03B3\u03BF\u03C0\u03BF\u03B9\u03B7\u03B8\u03B5\u03AF \u03BF\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03AC \u03BB\u03CC\u03B3\u03C9 \u03C0\u03BF\u03BB\u03BB\u03CE\u03BD \u03B1\u03C0\u03BF\u03C4\u03C5\u03C7\u03B7\u03BC\u03AD\u03BD\u03C9\u03BD \u03C0\u03C1\u03BF\u03C3\u03C0\u03B1\u03B8\u03B5\u03B9\u03CE\u03BD \u03C3\u03C4\u03BF {{date}}.",
    contactAdmin: "\u0395\u03C0\u03B9\u03BA\u03BF\u03B9\u03BD\u03C9\u03BD\u03AE\u03C3\u03C4\u03B5 \u03BC\u03B5 \u03AD\u03BD\u03B1\u03BD \u03B4\u03B9\u03B1\u03C7\u03B5\u03B9\u03C1\u03B9\u03C3\u03C4\u03AE."
  },
  "event-user_disabled_by_temporary_lockout": {
    subject: "\u039F \u03C7\u03C1\u03AE\u03C3\u03C4\u03B7\u03C2 \u03B1\u03C0\u03B5\u03BD\u03B5\u03C1\u03B3\u03BF\u03C0\u03BF\u03B9\u03AE\u03B8\u03B7\u03BA\u03B5 \u03BB\u03CC\u03B3\u03C9 \u03C0\u03C1\u03BF\u03C3\u03C9\u03C1\u03B9\u03BD\u03BF\u03CD \u03BA\u03BB\u03B5\u03B9\u03B4\u03CE\u03BC\u03B1\u03C4\u03BF\u03C2",
    message: "\u039F \u03C7\u03C1\u03AE\u03C3\u03C4\u03B7\u03C2 \u03C3\u03B1\u03C2 \u03AD\u03C7\u03B5\u03B9 \u03B1\u03C0\u03B5\u03BD\u03B5\u03C1\u03B3\u03BF\u03C0\u03BF\u03B9\u03B7\u03B8\u03B5\u03AF \u03C0\u03C1\u03BF\u03C3\u03C9\u03C1\u03B9\u03BD\u03AC \u03BB\u03CC\u03B3\u03C9 \u03C0\u03BF\u03BB\u03BB\u03CE\u03BD \u03B1\u03C0\u03BF\u03C4\u03C5\u03C7\u03B7\u03BC\u03AD\u03BD\u03C9\u03BD \u03C0\u03C1\u03BF\u03C3\u03C0\u03B1\u03B8\u03B5\u03B9\u03CE\u03BD \u03C3\u03C4\u03BF {{date}}.",
    contactAdmin: "\u0395\u03C0\u03B9\u03BA\u03BF\u03B9\u03BD\u03C9\u03BD\u03AE\u03C3\u03C4\u03B5 \u03BC\u03B5 \u03AD\u03BD\u03B1\u03BD \u03B4\u03B9\u03B1\u03C7\u03B5\u03B9\u03C1\u03B9\u03C3\u03C4\u03AE."
  },
  executeActions: {
    subject: "\u0395\u03BD\u03B7\u03BC\u03B5\u03C1\u03CE\u03C3\u03C4\u03B5 \u03C4\u03BF\u03BD \u039B\u03BF\u03B3\u03B1\u03C1\u03B9\u03B1\u03C3\u03BC\u03CC \u03C3\u03B1\u03C2",
    message: "\u039F \u03B4\u03B9\u03B1\u03C7\u03B5\u03B9\u03C1\u03B9\u03C3\u03C4\u03AE\u03C2 \u03C3\u03B1\u03C2 \u03BC\u03CC\u03BB\u03B9\u03C2 \u03B6\u03AE\u03C4\u03B7\u03C3\u03B5 \u03BD\u03B1 \u03B5\u03BD\u03B7\u03BC\u03B5\u03C1\u03CE\u03C3\u03B5\u03C4\u03B5 \u03C4\u03BF\u03BD \u03BB\u03BF\u03B3\u03B1\u03C1\u03B9\u03B1\u03C3\u03BC\u03CC {{realmName}} \u03C3\u03B1\u03C2 \u03B5\u03BA\u03C4\u03B5\u03BB\u03CE\u03BD\u03C4\u03B1\u03C2 \u03C4\u03B9\u03C2 \u03B1\u03BA\u03CC\u03BB\u03BF\u03C5\u03B8\u03B5\u03C2 \u03B5\u03BD\u03AD\u03C1\u03B3\u03B5\u03B9\u03B5\u03C2:",
    clickLink: "\u039A\u03AC\u03BD\u03C4\u03B5 \u03BA\u03BB\u03B9\u03BA \u03C3\u03C4\u03BF\u03BD \u03C0\u03B1\u03C1\u03B1\u03BA\u03AC\u03C4\u03C9 \u03C3\u03CD\u03BD\u03B4\u03B5\u03C3\u03BC\u03BF \u03B3\u03B9\u03B1 \u03BD\u03B1 \u03BE\u03B5\u03BA\u03B9\u03BD\u03AE\u03C3\u03B5\u03C4\u03B5 \u03B1\u03C5\u03C4\u03AE \u03C4\u03B7 \u03B4\u03B9\u03B1\u03B4\u03B9\u03BA\u03B1\u03C3\u03AF\u03B1.",
    linkExpiration: "\u0391\u03C5\u03C4\u03CC\u03C2 \u03BF \u03C3\u03CD\u03BD\u03B4\u03B5\u03C3\u03BC\u03BF\u03C2 \u03B8\u03B1 \u03BB\u03AE\u03BE\u03B5\u03B9 \u03B5\u03BD\u03C4\u03CC\u03C2 {{expiration}}.",
    ignoreMessage: "\u0395\u03AC\u03BD \u03B4\u03B5\u03BD \u03B3\u03BD\u03C9\u03C1\u03AF\u03B6\u03B5\u03C4\u03B5 \u03CC\u03C4\u03B9 \u03BF \u03B4\u03B9\u03B1\u03C7\u03B5\u03B9\u03C1\u03B9\u03C3\u03C4\u03AE\u03C2 \u03C3\u03B1\u03C2 \u03C4\u03BF \u03AD\u03C7\u03B5\u03B9 \u03B6\u03B7\u03C4\u03AE\u03C3\u03B5\u03B9, \u03B1\u03C0\u03BB\u03CE\u03C2 \u03B1\u03B3\u03BD\u03BF\u03AE\u03C3\u03C4\u03B5 \u03B1\u03C5\u03C4\u03CC \u03C4\u03BF \u03BC\u03AE\u03BD\u03C5\u03BC\u03B1 \u03BA\u03B1\u03B9 \u03B4\u03B5\u03BD \u03B8\u03B1 \u03B1\u03BB\u03BB\u03AC\u03BE\u03B5\u03B9 \u03C4\u03AF\u03C0\u03BF\u03C4\u03B1.",
    updateAccountButton: "\u0395\u03BD\u03B7\u03BC\u03AD\u03C1\u03C9\u03C3\u03B7 \u03BB\u03BF\u03B3\u03B1\u03C1\u03B9\u03B1\u03C3\u03BC\u03BF\u03CD"
  },
  "identity-provider-link": {
    subject: "\u03A3\u03C5\u03BD\u03B4\u03AD\u03C3\u03C4\u03B5 \u03C4\u03BF {0} \u03BC\u03B5 \u03C4\u03BF\u03BD \u03BB\u03BF\u03B3\u03B1\u03C1\u03B9\u03B1\u03C3\u03BC\u03CC \u03C3\u03B1\u03C2",
    message: "\u039A\u03AC\u03C0\u03BF\u03B9\u03BF\u03C2 \u03B8\u03AD\u03BB\u03B5\u03B9 \u03BD\u03B1 \u03C3\u03C5\u03BD\u03B4\u03AD\u03C3\u03B5\u03B9 \u03C4\u03BF\u03BD \u03BB\u03BF\u03B3\u03B1\u03C1\u03B9\u03B1\u03C3\u03BC\u03CC {{identityProviderDisplayName}} \u03C3\u03B1\u03C2 \u03BC\u03B5 \u03C4\u03BF\u03BD \u03BB\u03BF\u03B3\u03B1\u03C1\u03B9\u03B1\u03C3\u03BC\u03CC {{realmName}} \u03C4\u03BF\u03C5 \u03C7\u03C1\u03AE\u03C3\u03C4\u03B7 {{username}}.",
    clickLink: "\u0395\u03AC\u03BD \u03AE\u03C3\u03B1\u03C3\u03C4\u03B1\u03BD \u03B5\u03C3\u03B5\u03AF\u03C2, \u03BA\u03AC\u03BD\u03C4\u03B5 \u03BA\u03BB\u03B9\u03BA \u03C3\u03C4\u03BF\u03BD \u03C0\u03B1\u03C1\u03B1\u03BA\u03AC\u03C4\u03C9 \u03C3\u03CD\u03BD\u03B4\u03B5\u03C3\u03BC\u03BF \u03B3\u03B9\u03B1 \u03BD\u03B1 \u03C3\u03C5\u03BD\u03B4\u03AD\u03C3\u03B5\u03C4\u03B5 \u03BB\u03BF\u03B3\u03B1\u03C1\u03B9\u03B1\u03C3\u03BC\u03BF\u03CD\u03C2",
    linkExpiration: "\u0391\u03C5\u03C4\u03CC\u03C2 \u03BF \u03C3\u03CD\u03BD\u03B4\u03B5\u03C3\u03BC\u03BF\u03C2 \u03B8\u03B1 \u03BB\u03AE\u03BE\u03B5\u03B9 \u03B5\u03BD\u03C4\u03CC\u03C2 {{expiration}}.",
    ignoreMessage: "\u0395\u03AC\u03BD \u03B4\u03B5\u03BD \u03B8\u03AD\u03BB\u03B5\u03C4\u03B5 \u03BD\u03B1 \u03C3\u03C5\u03BD\u03B5\u03C7\u03AF\u03C3\u03B5\u03C4\u03B5 \u03BC\u03B5 \u03B1\u03C5\u03C4\u03AE\u03BD \u03C4\u03B7\u03BD \u03C4\u03C1\u03BF\u03C0\u03BF\u03C0\u03BF\u03AF\u03B7\u03C3\u03B7, \u03B1\u03C0\u03BB\u03CE\u03C2 \u03B1\u03B3\u03BD\u03BF\u03AE\u03C3\u03C4\u03B5 \u03B1\u03C5\u03C4\u03CC \u03C4\u03BF \u03BC\u03AE\u03BD\u03C5\u03BC\u03B1.",
    linkAccountsButton: "\u03A3\u03CD\u03BD\u03B4\u03B5\u03C3\u03B7 \u03BB\u03BF\u03B3\u03B1\u03C1\u03B9\u03B1\u03C3\u03BC\u03CE\u03BD",
    loginInfo: "\u0395\u03AC\u03BD \u03C3\u03C5\u03BD\u03B4\u03AD\u03C3\u03B5\u03C4\u03B5 \u03BB\u03BF\u03B3\u03B1\u03C1\u03B9\u03B1\u03C3\u03BC\u03BF\u03CD\u03C2, \u03B8\u03B1 \u03BC\u03C0\u03BF\u03C1\u03B5\u03AF\u03C4\u03B5 \u03BD\u03B1 \u03C3\u03C5\u03BD\u03B4\u03B5\u03B8\u03B5\u03AF\u03C4\u03B5 \u03C3\u03C4\u03BF {{identityProviderDisplayName}} \u03BC\u03AD\u03C3\u03C9 {{realmName}}."
  },
  "org-invite": {
    subject: "\u03A0\u03C1\u03CC\u03C3\u03BA\u03BB\u03B7\u03C3\u03B7 \u03B3\u03B9\u03B1 \u03C3\u03C5\u03BC\u03BC\u03B5\u03C4\u03BF\u03C7\u03AE \u03C3\u03C4\u03BF\u03BD \u03BF\u03C1\u03B3\u03B1\u03BD\u03B9\u03C3\u03BC\u03CC {0}",
    greeting: "\u0393\u03B5\u03B9\u03B1, {{firstName}} {{lastName}}.",
    message: "\u0388\u03C7\u03B5\u03C4\u03B5 \u03C0\u03C1\u03BF\u03C3\u03BA\u03BB\u03B7\u03B8\u03B5\u03AF \u03BD\u03B1 \u03B5\u03B3\u03B3\u03C1\u03B1\u03C6\u03B5\u03AF\u03C4\u03B5 \u03C3\u03C4\u03BF\u03BD \u03BF\u03C1\u03B3\u03B1\u03BD\u03B9\u03C3\u03BC\u03CC {{organizationName}}. \u039A\u03AC\u03BD\u03C4\u03B5 \u03BA\u03BB\u03B9\u03BA \u03C3\u03C4\u03BF\u03BD \u03C0\u03B1\u03C1\u03B1\u03BA\u03AC\u03C4\u03C9 \u03C3\u03CD\u03BD\u03B4\u03B5\u03C3\u03BC\u03BF \u03B3\u03B9\u03B1 \u03BD\u03B1 \u03B5\u03B3\u03B3\u03C1\u03B1\u03C6\u03B5\u03AF\u03C4\u03B5.",
    linkExpiration: "\u0391\u03C5\u03C4\u03CC\u03C2 \u03BF \u03C3\u03CD\u03BD\u03B4\u03B5\u03C3\u03BC\u03BF\u03C2 \u03B8\u03B1 \u03BB\u03AE\u03BE\u03B5\u03B9 \u03B5\u03BD\u03C4\u03CC\u03C2 {{expiration}}.",
    ignoreMessage: "\u0395\u03AC\u03BD \u03B4\u03B5\u03BD \u03B8\u03AD\u03BB\u03B5\u03C4\u03B5 \u03BD\u03B1 \u03B5\u03B3\u03B3\u03C1\u03B1\u03C6\u03B5\u03AF\u03C4\u03B5 \u03C3\u03C4\u03BF\u03BD \u03BF\u03C1\u03B3\u03B1\u03BD\u03B9\u03C3\u03BC\u03CC, \u03B1\u03C0\u03BB\u03CE\u03C2 \u03B1\u03B3\u03BD\u03BF\u03AE\u03C3\u03C4\u03B5 \u03B1\u03C5\u03C4\u03CC \u03C4\u03BF \u03BC\u03AE\u03BD\u03C5\u03BC\u03B1.",
    joinButton: "\u0395\u03B3\u03B3\u03C1\u03B1\u03C6\u03B5\u03AF\u03C4\u03B5 \u03C3\u03C4\u03BF\u03BD \u03BF\u03C1\u03B3\u03B1\u03BD\u03B9\u03C3\u03BC\u03CC"
  },
  "password-reset": {
    subject: "\u0395\u03C0\u03B1\u03BD\u03B1\u03C6\u03BF\u03C1\u03AC \u03BA\u03C9\u03B4\u03B9\u03BA\u03BF\u03CD \u03C0\u03C1\u03CC\u03C3\u03B2\u03B1\u03C3\u03B7\u03C2",
    message: "\u039A\u03AC\u03C0\u03BF\u03B9\u03BF\u03C2 \u03BC\u03CC\u03BB\u03B9\u03C2 \u03B6\u03AE\u03C4\u03B7\u03C3\u03B5 \u03BD\u03B1 \u03B1\u03BB\u03BB\u03AC\u03BE\u03B5\u03B9 \u03C4\u03B1 \u03B4\u03B9\u03B1\u03C0\u03B9\u03C3\u03C4\u03B5\u03C5\u03C4\u03AE\u03C1\u03B9\u03B1 \u03C4\u03BF\u03C5 \u03BB\u03BF\u03B3\u03B1\u03C1\u03B9\u03B1\u03C3\u03BC\u03BF\u03CD {{realmName}} \u03C3\u03B1\u03C2. \u0395\u03AC\u03BD \u03AE\u03C3\u03B1\u03C3\u03C4\u03B1\u03BD \u03B5\u03C3\u03B5\u03AF\u03C2, \u03BA\u03AC\u03BD\u03C4\u03B5 \u03BA\u03BB\u03B9\u03BA \u03C3\u03C4\u03BF\u03BD \u03C0\u03B1\u03C1\u03B1\u03BA\u03AC\u03C4\u03C9 \u03C3\u03CD\u03BD\u03B4\u03B5\u03C3\u03BC\u03BF \u03B3\u03B9\u03B1 \u03BD\u03B1 \u03C4\u03B1 \u03B5\u03C0\u03B1\u03BD\u03B1\u03C6\u03AD\u03C1\u03B5\u03C4\u03B5.",
    linkExpiration: "\u0391\u03C5\u03C4\u03CC\u03C2 \u03BF \u03C3\u03CD\u03BD\u03B4\u03B5\u03C3\u03BC\u03BF\u03C2 \u03B8\u03B1 \u03BB\u03AE\u03BE\u03B5\u03B9 \u03B5\u03BD\u03C4\u03CC\u03C2 {{expiration}}.",
    ignoreMessage: "\u0395\u03AC\u03BD \u03B4\u03B5\u03BD \u03B8\u03AD\u03BB\u03B5\u03C4\u03B5 \u03BD\u03B1 \u03B5\u03C0\u03B1\u03BD\u03B1\u03C6\u03AD\u03C1\u03B5\u03C4\u03B5 \u03C4\u03B1 \u03B4\u03B9\u03B1\u03C0\u03B9\u03C3\u03C4\u03B5\u03C5\u03C4\u03AE\u03C1\u03B9\u03AC \u03C3\u03B1\u03C2, \u03B1\u03C0\u03BB\u03CE\u03C2 \u03B1\u03B3\u03BD\u03BF\u03AE\u03C3\u03C4\u03B5 \u03B1\u03C5\u03C4\u03CC \u03C4\u03BF \u03BC\u03AE\u03BD\u03C5\u03BC\u03B1 \u03BA\u03B1\u03B9 \u03B4\u03B5\u03BD \u03B8\u03B1 \u03B1\u03BB\u03BB\u03AC\u03BE\u03B5\u03B9 \u03C4\u03AF\u03C0\u03BF\u03C4\u03B1.",
    resetButton: "\u0395\u03C0\u03B1\u03BD\u03B1\u03C6\u03BF\u03C1\u03AC \u03B4\u03B9\u03B1\u03C0\u03B9\u03C3\u03C4\u03B5\u03C5\u03C4\u03B7\u03C1\u03AF\u03C9\u03BD"
  },
  requiredAction: {
    configure_totp: "\u0394\u03B9\u03B1\u03BC\u03CC\u03C1\u03C6\u03C9\u03C3\u03B7 OTP",
    terms_and_conditions: "\u038C\u03C1\u03BF\u03B9 \u03BA\u03B1\u03B9 \u03A0\u03C1\u03BF\u03CB\u03C0\u03BF\u03B8\u03AD\u03C3\u03B5\u03B9\u03C2",
    update_password: "\u0395\u03BD\u03B7\u03BC\u03AD\u03C1\u03C9\u03C3\u03B7 \u03BA\u03C9\u03B4\u03B9\u03BA\u03BF\u03CD \u03C0\u03C1\u03CC\u03C3\u03B2\u03B1\u03C3\u03B7\u03C2",
    update_profile: "\u0395\u03BD\u03B7\u03BC\u03AD\u03C1\u03C9\u03C3\u03B7 \u03C0\u03C1\u03BF\u03C6\u03AF\u03BB",
    verify_email: "\u0395\u03C0\u03B1\u03BB\u03AE\u03B8\u03B5\u03C5\u03C3\u03B7 email",
    configure_recovery_authn_codes: "\u0394\u03B7\u03BC\u03B9\u03BF\u03C5\u03C1\u03B3\u03AE\u03C3\u03C4\u03B5 \u03BA\u03C9\u03B4\u03B9\u03BA\u03BF\u03CD\u03C2 \u03B1\u03BD\u03AC\u03BA\u03C4\u03B7\u03C3\u03B7\u03C2",
    seconds: "{0,choice,0#\u03B4\u03B5\u03C5\u03C4\u03B5\u03C1\u03CC\u03BB\u03B5\u03C0\u03C4\u03B1|1#\u03B4\u03B5\u03C5\u03C4\u03B5\u03C1\u03CC\u03BB\u03B5\u03C0\u03C4\u03BF|1<\u03B4\u03B5\u03C5\u03C4\u03B5\u03C1\u03CC\u03BB\u03B5\u03C0\u03C4\u03B1}",
    minutes: "{0,choice,0#\u03C0\u03C1\u03B1\u03BA\u03C4\u03B9\u03BA\u03AC|1#\u03BB\u03B5\u03C0\u03C4\u03CC|1<\u03C0\u03C1\u03B1\u03BA\u03C4\u03B9\u03BA\u03AC}",
    hours: "{0,choice,0#\u03CE\u03C1\u03B5\u03C2|1#\u03CE\u03C1\u03B1|1<\u03CE\u03C1\u03B5\u03C2}",
    days: "{0,choice,0#\u03B7\u03BC\u03AD\u03C1\u03B5\u03C2|1#\u03B7\u03BC\u03AD\u03C1\u03B1|1<\u03B7\u03BC\u03AD\u03C1\u03B5\u03C2}"
  },
  footer: {
    allRightsReserved: "\xA9 {{currentYear}} {{realmName}}, \u039C\u03B5 \u03C4\u03B7\u03BD \u03B5\u03C0\u03B9\u03C6\u03CD\u03BB\u03B1\u03BE\u03B7 \u03C0\u03B1\u03BD\u03C4\u03CC\u03C2 \u03B4\u03B9\u03BA\u03B1\u03B9\u03CE\u03BC\u03B1\u03C4\u03BF\u03C2"
  }
};

// src/email/locales/en/translation.json
var translation_default7 = {
  "email-test": {
    subject: "Email Test",
    greeting: "Hi friend",
    message: "This is a test email from {{realmName}}. If you received this email, it means that your email settings are configured correctly."
  },
  "email-update-confirmation": {
    subject: "Verify new email",
    linkExpiration: " This link will expire within {{expiration}}.",
    updateEmailAddress: "To update your {{realmName}} account with email address {{newEmail}}",
    clickLinkBelow: "click the link below",
    updateEmail: "Update Email",
    ignoreMessage: "If you don't want to proceed with this modification, just ignore this message."
  },
  "email-verification": {
    subject: "Verify email",
    message: "Someone has created a {{firstName}} account with this email address. If this was you, click the link below to verify your email address.",
    verifyButton: "Verify email",
    linkExpiration: "This link will expire within {{expiration}}.",
    ignoreMessage: "If you didn't create this account, just ignore this message."
  },
  "event-login_error": {
    subject: "Login error",
    message: "A failed login attempt was detected to your account on {{date}} from {{ipAddress}}.",
    contactAdmin: "If this was not you, please contact an administrator."
  },
  "event-remove_credential": {
    subject: "Remove credential",
    message: "Credential {{credentialType}} was removed from your account on {{date}} from {{ipAddress}}.",
    contactAdmin: "If this was not you, please contact an administrator."
  },
  "event-remove_totp": {
    subject: "Remove OTP",
    message: "OTP was removed from your account on {{date}} from {{ipAddress}}.",
    contactAdmin: "If this was not you, please contact an administrator."
  },
  "event-update_credential": {
    subject: "Update credential",
    message: "Your {{credentialType}} credential was changed on {{date}} from {{ipAddress}}.",
    contactAdmin: "If this was not you, please contact an administrator."
  },
  "event-update_password": {
    subject: "Update password",
    message: "Your password was changed on {{date}} from {{ipAddress}}.",
    contactAdmin: "If this was not you, please contact an administrator."
  },
  "event-update_totp": {
    subject: "Update OTP",
    message: "OTP was updated for your account on {{date}} from {{ipAddress}}.",
    contactAdmin: "If this was not you, please contact an administrator."
  },
  "event-user_disabled_by_permanent_lockout": {
    subject: "User disabled by permanent lockout",
    message: "Your user has been disabled permanently because of multiple failed attempts on {{date}}.",
    contactAdmin: "Please contact an administrator."
  },
  "event-user_disabled_by_temporary_lockout": {
    subject: "User disabled by temporary lockout",
    message: "Your user has been disabled temporarily because of multiple failed attempts on {{date}}.",
    contactAdmin: "Please contact an administrator."
  },
  executeActions: {
    subject: "Update Your Account",
    message: "Your administrator has just requested that you update your {{realmName}} account by performing the following action(s):",
    clickLink: "Click on the link below to start this process.",
    linkExpiration: "This link will expire within {{expiration}}.",
    ignoreMessage: "If you are unaware that your administrator has requested this, just ignore this message and nothing will be changed.",
    updateAccountButton: "Update Account"
  },
  "identity-provider-link": {
    subject: "Link {0} with your account",
    message: "Someone wants to link your {{identityProviderDisplayName}} account with {{realmName}} account of user {{username}}.",
    clickLink: "If this was you, click the link below to link accounts",
    linkExpiration: "This link will expire within {{expiration}}.",
    ignoreMessage: "If you don't want to proceed with this modification, just ignore this message.",
    linkAccountsButton: "Link Accounts",
    loginInfo: "If you link accounts, you will be able to login to {{identityProviderDisplayName}} through {{realmName}}."
  },
  "org-invite": {
    subject: "Invitation to join the {0} organization",
    greeting: "Hi, {{firstName}} {{lastName}}.",
    message: "You were invited to join the {{organizationName}} organization. Click the link below to join.",
    linkExpiration: "This link will expire within {{expiration}}.",
    ignoreMessage: "If you don't want to join the organization, just ignore this message.",
    joinButton: "Join the organization"
  },
  "password-reset": {
    subject: "Reset password",
    message: "Someone just requested to change your {{realmName}} account's credentials. If this was you, click on the link below to reset them.",
    linkExpiration: "This link will expire within {{expiration}}.",
    ignoreMessage: "If you don't want to reset your credentials, just ignore this message and nothing will be changed.",
    resetButton: "Reset credentials"
  },
  requiredAction: {
    configure_totp: "Configure OTP",
    terms_and_conditions: "Terms and Conditions",
    update_password: "Update Password",
    update_profile: "Update Profile",
    verify_email: "Verify Email",
    configure_recovery_authn_codes: "Generate Recovery Codes",
    seconds: "{0,choice,0#seconds|1#second|1<seconds}",
    minutes: "{0,choice,0#minutes|1#minute|1<minutes}",
    hours: "{0,choice,0#hours|1#hour|1<hours}",
    days: "{0,choice,0#days|1#day|1<days}"
  },
  footer: {
    allRightsReserved: "\xA9 {{currentYear}} {{realmName}}, All Rights Reserved"
  }
};

// src/email/locales/es/translation.json
var translation_default8 = {
  "email-test": {
    subject: "Prueba de correo electr\xF3nico",
    greeting: "Hola amigo",
    message: "Este es un correo electr\xF3nico de prueba de {{realmName}}. Si recibi\xF3 este correo electr\xF3nico, significa que la configuraci\xF3n de su correo electr\xF3nico est\xE1 configurada correctamente."
  },
  "email-update-confirmation": {
    subject: "Verificar nuevo correo electr\xF3nico",
    linkExpiration: "Este enlace caducar\xE1 dentro de {{expiration}}.",
    updateEmailAddress: "Para actualizar su cuenta {{realmName}} con la direcci\xF3n de correo electr\xF3nico {{newEmail}}",
    clickLinkBelow: "haga clic en el enlace de abajo",
    updateEmail: "Actualizar correo electr\xF3nico",
    ignoreMessage: "Si no desea continuar con esta modificaci\xF3n, simplemente ignore este mensaje."
  },
  "email-verification": {
    subject: "Verificar correo electr\xF3nico",
    message: "Alguien ha creado una cuenta {{firstName}} con esta direcci\xF3n de correo electr\xF3nico. Si es usted, haga clic en el enlace a continuaci\xF3n para verificar su direcci\xF3n de correo electr\xF3nico.",
    verifyButton: "Verificar correo electr\xF3nico",
    linkExpiration: "Este enlace caducar\xE1 dentro de {{expiration}}.",
    ignoreMessage: "Si no cre\xF3 esta cuenta, simplemente ignore este mensaje."
  },
  "event-login_error": {
    subject: "Error de inicio de sesi\xF3n",
    message: "Se detect\xF3 un intento fallido de inicio de sesi\xF3n en su cuenta el {{date}} del {{ipAddress}}.",
    contactAdmin: "Si no era usted, comun\xEDquese con un administrador."
  },
  "event-remove_credential": {
    subject: "Quitar credencial",
    message: "La credencial {{credentialType}} se elimin\xF3 de su cuenta el {{date}} de {{ipAddress}}.",
    contactAdmin: "Si no era usted, comun\xEDquese con un administrador."
  },
  "event-remove_totp": {
    subject: "Eliminar OTP",
    message: "OTP fue eliminado de su cuenta el {{date}} de {{ipAddress}}.",
    contactAdmin: "Si no era usted, comun\xEDquese con un administrador."
  },
  "event-update_credential": {
    subject: "Actualizar credencial",
    message: "Su credencial {{credentialType}} se cambi\xF3 el {{date}} de {{ipAddress}}.",
    contactAdmin: "Si no era usted, comun\xEDquese con un administrador."
  },
  "event-update_password": {
    subject: "Actualizar contrase\xF1a",
    message: "Su contrase\xF1a fue cambiada el {{date}} de {{ipAddress}}.",
    contactAdmin: "Si no era usted, comun\xEDquese con un administrador."
  },
  "event-update_totp": {
    subject: "Actualizar OTP",
    message: "OTP se actualiz\xF3 para su cuenta el {{date}} de {{ipAddress}}.",
    contactAdmin: "Si no era usted, comun\xEDquese con un administrador."
  },
  "event-user_disabled_by_permanent_lockout": {
    subject: "Usuario inhabilitado por bloqueo permanente",
    message: "Su usuario ha sido inhabilitado permanentemente debido a m\xFAltiples intentos fallidos en {{date}}.",
    contactAdmin: "Por favor contacte a un administrador."
  },
  "event-user_disabled_by_temporary_lockout": {
    subject: "Usuario inhabilitado por bloqueo temporal",
    message: "Su usuario ha sido inhabilitado temporalmente debido a m\xFAltiples intentos fallidos en {{date}}.",
    contactAdmin: "Por favor contacte a un administrador."
  },
  executeActions: {
    subject: "Actualiza tu cuenta",
    message: "Su administrador acaba de solicitarle que actualice su cuenta {{realmName}} realizando las siguientes acciones:",
    clickLink: "Haga clic en el enlace a continuaci\xF3n para iniciar este proceso.",
    linkExpiration: "Este enlace caducar\xE1 dentro de {{expiration}}.",
    ignoreMessage: "Si no sabe que su administrador ha solicitado esto, simplemente ignore este mensaje y no se cambiar\xE1 nada.",
    updateAccountButton: "Actualizar cuenta"
  },
  "identity-provider-link": {
    subject: "Vincula {0} con tu cuenta",
    message: "Alguien quiere vincular su cuenta {{identityProviderDisplayName}} con la cuenta {{realmName}} del usuario {{username}}.",
    clickLink: "Si eres t\xFA, haz clic en el enlace a continuaci\xF3n para vincular cuentas",
    linkExpiration: "Este enlace caducar\xE1 dentro de {{expiration}}.",
    ignoreMessage: "Si no desea continuar con esta modificaci\xF3n, simplemente ignore este mensaje.",
    linkAccountsButton: "Vincular cuentas",
    loginInfo: "Si vincula cuentas, podr\xE1 iniciar sesi\xF3n desde {{identityProviderDisplayName}} hasta {{realmName}}."
  },
  "org-invite": {
    subject: "Invitaci\xF3n a unirse a la organizaci\xF3n {0}",
    greeting: "Hola, {{firstName}} {{lastName}}.",
    message: "Le invitaron a unirse a la organizaci\xF3n {{organizationName}}. Haga clic en el enlace a continuaci\xF3n para unirse.",
    linkExpiration: "Este enlace caducar\xE1 dentro de {{expiration}}.",
    ignoreMessage: "Si no desea unirse a la organizaci\xF3n, simplemente ignore este mensaje.",
    joinButton: "\xDAnase a la organizaci\xF3n"
  },
  "password-reset": {
    subject: "Restablecer contrase\xF1a",
    message: "Alguien acaba de solicitar cambiar las credenciales de su cuenta {{realmName}}. Si es usted, haga clic en el enlace a continuaci\xF3n para restablecerlos.",
    linkExpiration: "Este enlace caducar\xE1 dentro de {{expiration}}.",
    ignoreMessage: "Si no desea restablecer sus credenciales, simplemente ignore este mensaje y no se cambiar\xE1 nada.",
    resetButton: "Restablecer credenciales"
  },
  requiredAction: {
    configure_totp: "Configurar OTP",
    terms_and_conditions: "T\xE9rminos y condiciones",
    update_password: "Actualizar contrase\xF1a",
    update_profile: "Actualizar perfil",
    verify_email: "Verificar correo electr\xF3nico",
    configure_recovery_authn_codes: "Generar c\xF3digos de recuperaci\xF3n",
    seconds: "{0,choice,0#art\xEDculos de segunda clase|1#segundo|1<art\xEDculos de segunda clase}",
    minutes: "{0,choice,0#minutos|1#minuto|1<minutos}",
    hours: "{0,choice,0#horas|1#hora|1<horas}",
    days: "{0,choice,0#d\xEDas|1#dia|1<d\xEDas}"
  },
  footer: {
    allRightsReserved: "\xA9 {{currentYear}} {{realmName}}, Todos los derechos reservados"
  }
};

// src/email/locales/fa/translation.json
var translation_default9 = {
  "email-test": {
    subject: "\u062A\u0633\u062A \u0627\u06CC\u0645\u06CC\u0644",
    greeting: "\u0633\u0644\u0627\u0645 \u062F\u0648\u0633\u062A",
    message: "\u0627\u06CC\u0646 \u06CC\u06A9 \u0627\u06CC\u0645\u06CC\u0644 \u0622\u0632\u0645\u0627\u06CC\u0634\u06CC \u0627\u0632 {{realmName}} \u0627\u0633\u062A. \u0627\u06AF\u0631 \u0627\u06CC\u0646 \u0627\u06CC\u0645\u06CC\u0644 \u0631\u0627 \u062F\u0631\u06CC\u0627\u0641\u062A \u06A9\u0631\u062F\u0647 \u0627\u06CC\u062F\u060C \u0628\u0647 \u0627\u06CC\u0646 \u0645\u0639\u0646\u06CC \u0627\u0633\u062A \u06A9\u0647 \u062A\u0646\u0638\u06CC\u0645\u0627\u062A \u0627\u06CC\u0645\u06CC\u0644 \u0634\u0645\u0627 \u0628\u0647 \u062F\u0631\u0633\u062A\u06CC \u067E\u06CC\u06A9\u0631\u0628\u0646\u062F\u06CC \u0634\u062F\u0647 \u0627\u0633\u062A."
  },
  "email-update-confirmation": {
    subject: "\u062A\u0627\u06CC\u06CC\u062F \u0627\u06CC\u0645\u06CC\u0644 \u062C\u062F\u06CC\u062F",
    linkExpiration: "\u0627\u06CC\u0646 \u067E\u06CC\u0648\u0646\u062F \u062F\u0631 \u0645\u062F\u062A {{expiration}} \u0645\u0646\u0642\u0636\u06CC \u0645\u06CC \u0634\u0648\u062F.",
    updateEmailAddress: "\u0628\u0631\u0627\u06CC \u0628\u0647 \u0631\u0648\u0632 \u0631\u0633\u0627\u0646\u06CC \u062D\u0633\u0627\u0628 {{realmName}} \u062E\u0648\u062F \u0628\u0627 \u0622\u062F\u0631\u0633 \u0627\u06CC\u0645\u06CC\u0644 {{newEmail}}",
    clickLinkBelow: "\u0631\u0648\u06CC \u0644\u06CC\u0646\u06A9 \u0632\u06CC\u0631 \u06A9\u0644\u06CC\u06A9 \u06A9\u0646\u06CC\u062F",
    updateEmail: "\u0627\u06CC\u0645\u06CC\u0644 \u0631\u0627 \u0628\u0647 \u0631\u0648\u0632 \u06A9\u0646\u06CC\u062F",
    ignoreMessage: "\u0627\u06AF\u0631 \u0646\u0645\u06CC\u200C\u062E\u0648\u0627\u0647\u06CC\u062F \u0628\u0627 \u0627\u06CC\u0646 \u062A\u063A\u06CC\u06CC\u0631 \u0627\u062F\u0627\u0645\u0647 \u062F\u0647\u06CC\u062F\u060C \u0641\u0642\u0637 \u0627\u06CC\u0646 \u067E\u06CC\u0627\u0645 \u0631\u0627 \u0646\u0627\u062F\u06CC\u062F\u0647 \u0628\u06AF\u06CC\u0631\u06CC\u062F."
  },
  "email-verification": {
    subject: "\u062A\u0627\u06CC\u06CC\u062F \u0627\u06CC\u0645\u06CC\u0644",
    message: "\u0634\u062E\u0635\u06CC \u0628\u0627 \u0627\u06CC\u0646 \u0622\u062F\u0631\u0633 \u0627\u06CC\u0645\u06CC\u0644 \u06CC\u06A9 \u062D\u0633\u0627\u0628 {{firstName}} \u0627\u06CC\u062C\u0627\u062F \u06A9\u0631\u062F\u0647 \u0627\u0633\u062A. \u0627\u06AF\u0631 \u0627\u06CC\u0646 \u0634\u0645\u0627 \u0628\u0648\u062F\u06CC\u062F\u060C \u0628\u0631\u0627\u06CC \u062A\u0623\u06CC\u06CC\u062F \u0622\u062F\u0631\u0633 \u0627\u06CC\u0645\u06CC\u0644 \u062E\u0648\u062F\u060C \u0631\u0648\u06CC \u067E\u06CC\u0648\u0646\u062F \u0632\u06CC\u0631 \u06A9\u0644\u06CC\u06A9 \u06A9\u0646\u06CC\u062F.",
    verifyButton: "\u062A\u0627\u06CC\u06CC\u062F \u0627\u06CC\u0645\u06CC\u0644",
    linkExpiration: "\u0627\u06CC\u0646 \u067E\u06CC\u0648\u0646\u062F \u062F\u0631 \u0645\u062F\u062A {{expiration}} \u0645\u0646\u0642\u0636\u06CC \u0645\u06CC \u0634\u0648\u062F.",
    ignoreMessage: "\u0627\u06AF\u0631 \u0634\u0645\u0627 \u0627\u06CC\u0646 \u062D\u0633\u0627\u0628 \u0631\u0627 \u0627\u06CC\u062C\u0627\u062F \u0646\u06A9\u0631\u062F\u0647 \u0627\u06CC\u062F\u060C \u0641\u0642\u0637 \u0627\u06CC\u0646 \u067E\u06CC\u0627\u0645 \u0631\u0627 \u0646\u0627\u062F\u06CC\u062F\u0647 \u0628\u06AF\u06CC\u0631\u06CC\u062F."
  },
  "event-login_error": {
    subject: "\u062E\u0637\u0627\u06CC \u0648\u0631\u0648\u062F",
    message: "\u062A\u0644\u0627\u0634 \u0646\u0627\u0645\u0648\u0641\u0642 \u0628\u0631\u0627\u06CC \u0648\u0631\u0648\u062F \u0628\u0647 \u062D\u0633\u0627\u0628 \u0634\u0645\u0627 \u062F\u0631 \u062A\u0627\u0631\u06CC\u062E {{date}} \u0627\u0632 {{ipAddress}} \u0634\u0646\u0627\u0633\u0627\u06CC\u06CC \u0634\u062F.",
    contactAdmin: "\u0627\u06AF\u0631 \u0627\u06CC\u0646 \u0634\u0645\u0627 \u0646\u0628\u0648\u062F\u06CC\u062F\u060C \u0644\u0637\u0641\u0627 \u0628\u0627 \u06CC\u06A9 \u0645\u062F\u06CC\u0631 \u062A\u0645\u0627\u0633 \u0628\u06AF\u06CC\u0631\u06CC\u062F."
  },
  "event-remove_credential": {
    subject: "\u062D\u0630\u0641 \u0627\u0639\u062A\u0628\u0627\u0631",
    message: "\u0627\u0637\u0644\u0627\u0639\u0627\u062A \u06A9\u0627\u0631\u0628\u0631\u06CC {{credentialType}} \u062F\u0631 \u062A\u0627\u0631\u06CC\u062E {{date}} \u0627\u0632 {{ipAddress}} \u0627\u0632 \u062D\u0633\u0627\u0628 \u0634\u0645\u0627 \u062D\u0630\u0641 \u0634\u062F.",
    contactAdmin: "\u0627\u06AF\u0631 \u0627\u06CC\u0646 \u0634\u0645\u0627 \u0646\u0628\u0648\u062F\u06CC\u062F\u060C \u0644\u0637\u0641\u0627 \u0628\u0627 \u06CC\u06A9 \u0645\u062F\u06CC\u0631 \u062A\u0645\u0627\u0633 \u0628\u06AF\u06CC\u0631\u06CC\u062F."
  },
  "event-remove_totp": {
    subject: "\u062D\u0630\u0641 OTP",
    message: "OTP \u062F\u0631 \u062A\u0627\u0631\u06CC\u062E {{date}} \u0627\u0632 {{ipAddress}} \u0627\u0632 \u062D\u0633\u0627\u0628 \u0634\u0645\u0627 \u062D\u0630\u0641 \u0634\u062F.",
    contactAdmin: "\u0627\u06AF\u0631 \u0627\u06CC\u0646 \u0634\u0645\u0627 \u0646\u0628\u0648\u062F\u06CC\u062F\u060C \u0644\u0637\u0641\u0627 \u0628\u0627 \u06CC\u06A9 \u0645\u062F\u06CC\u0631 \u062A\u0645\u0627\u0633 \u0628\u06AF\u06CC\u0631\u06CC\u062F."
  },
  "event-update_credential": {
    subject: "\u0628\u0647 \u0631\u0648\u0632 \u0631\u0633\u0627\u0646\u06CC \u0627\u0639\u062A\u0628\u0627\u0631",
    message: "\u0627\u0639\u062A\u0628\u0627\u0631 {{credentialType}} \u0634\u0645\u0627 \u062F\u0631 \u062A\u0627\u0631\u06CC\u062E {{date}} \u0627\u0632 {{ipAddress}} \u062A\u063A\u06CC\u06CC\u0631 \u06A9\u0631\u062F.",
    contactAdmin: "\u0627\u06AF\u0631 \u0627\u06CC\u0646 \u0634\u0645\u0627 \u0646\u0628\u0648\u062F\u06CC\u062F\u060C \u0644\u0637\u0641\u0627 \u0628\u0627 \u06CC\u06A9 \u0645\u062F\u06CC\u0631 \u062A\u0645\u0627\u0633 \u0628\u06AF\u06CC\u0631\u06CC\u062F."
  },
  "event-update_password": {
    subject: "\u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u0631\u0627 \u0628\u0647 \u0631\u0648\u0632 \u06A9\u0646\u06CC\u062F",
    message: "\u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u0634\u0645\u0627 \u062F\u0631 \u062A\u0627\u0631\u06CC\u062E {{date}} \u0627\u0632 {{ipAddress}} \u062A\u063A\u06CC\u06CC\u0631 \u06A9\u0631\u062F.",
    contactAdmin: "\u0627\u06AF\u0631 \u0627\u06CC\u0646 \u0634\u0645\u0627 \u0646\u0628\u0648\u062F\u06CC\u062F\u060C \u0644\u0637\u0641\u0627 \u0628\u0627 \u06CC\u06A9 \u0645\u062F\u06CC\u0631 \u062A\u0645\u0627\u0633 \u0628\u06AF\u06CC\u0631\u06CC\u062F."
  },
  "event-update_totp": {
    subject: "\u0628\u0647 \u0631\u0648\u0632 \u0631\u0633\u0627\u0646\u06CC OTP",
    message: "OTP \u0628\u0631\u0627\u06CC \u062D\u0633\u0627\u0628 \u0634\u0645\u0627 \u062F\u0631 {{date}} \u0627\u0632 {{ipAddress}} \u0628\u0647 \u0631\u0648\u0632 \u0634\u062F.",
    contactAdmin: "\u0627\u06AF\u0631 \u0627\u06CC\u0646 \u0634\u0645\u0627 \u0646\u0628\u0648\u062F\u06CC\u062F\u060C \u0644\u0637\u0641\u0627 \u0628\u0627 \u06CC\u06A9 \u0645\u062F\u06CC\u0631 \u062A\u0645\u0627\u0633 \u0628\u06AF\u06CC\u0631\u06CC\u062F."
  },
  "event-user_disabled_by_permanent_lockout": {
    subject: "\u06A9\u0627\u0631\u0628\u0631 \u0628\u0627 \u0642\u0641\u0644 \u062F\u0627\u0626\u0645\u06CC \u063A\u06CC\u0631\u0641\u0639\u0627\u0644 \u0634\u062F",
    message: "\u06A9\u0627\u0631\u0628\u0631 \u0634\u0645\u0627 \u0628\u0647 \u062F\u0644\u06CC\u0644 \u0686\u0646\u062F\u06CC\u0646 \u062A\u0644\u0627\u0634 \u0646\u0627\u0645\u0648\u0641\u0642 \u062F\u0631 {{date}} \u0628\u0631\u0627\u06CC \u0647\u0645\u06CC\u0634\u0647 \u063A\u06CC\u0631\u0641\u0639\u0627\u0644 \u0634\u062F\u0647 \u0627\u0633\u062A.",
    contactAdmin: "\u0644\u0637\u0641\u0627 \u0628\u0627 \u06CC\u06A9 \u0645\u062F\u06CC\u0631 \u062A\u0645\u0627\u0633 \u0628\u06AF\u06CC\u0631\u06CC\u062F."
  },
  "event-user_disabled_by_temporary_lockout": {
    subject: "\u06A9\u0627\u0631\u0628\u0631 \u0628\u0627 \u0642\u0641\u0644 \u0645\u0648\u0642\u062A \u063A\u06CC\u0631\u0641\u0639\u0627\u0644 \u0634\u062F",
    message: "\u06A9\u0627\u0631\u0628\u0631 \u0634\u0645\u0627 \u0628\u0647 \u062F\u0644\u06CC\u0644 \u0686\u0646\u062F\u06CC\u0646 \u062A\u0644\u0627\u0634 \u0646\u0627\u0645\u0648\u0641\u0642 \u062F\u0631 {{date}} \u0628\u0647 \u0637\u0648\u0631 \u0645\u0648\u0642\u062A \u063A\u06CC\u0631\u0641\u0639\u0627\u0644 \u0634\u062F\u0647 \u0627\u0633\u062A.",
    contactAdmin: "\u0644\u0637\u0641\u0627 \u0628\u0627 \u06CC\u06A9 \u0645\u062F\u06CC\u0631 \u062A\u0645\u0627\u0633 \u0628\u06AF\u06CC\u0631\u06CC\u062F."
  },
  executeActions: {
    subject: "\u0627\u06A9\u0627\u0646\u062A \u062E\u0648\u062F \u0631\u0627 \u0628\u0647 \u0631\u0648\u0632 \u06A9\u0646\u06CC\u062F",
    message: "\u0633\u0631\u067E\u0631\u0633\u062A \u0634\u0645\u0627 \u0628\u0647 \u062A\u0627\u0632\u06AF\u06CC \u062F\u0631\u062E\u0648\u0627\u0633\u062A \u06A9\u0631\u062F\u0647 \u0627\u0633\u062A \u06A9\u0647 \u062D\u0633\u0627\u0628 {{realmName}} \u062E\u0648\u062F \u0631\u0627 \u0628\u0627 \u0627\u0646\u062C\u0627\u0645 \u0627\u0642\u062F\u0627\u0645\u0627\u062A \u0632\u06CC\u0631 \u0628\u0647 \u0631\u0648\u0632 \u06A9\u0646\u06CC\u062F:",
    clickLink: "\u0628\u0631\u0627\u06CC \u0634\u0631\u0648\u0639 \u0627\u06CC\u0646 \u0641\u0631\u0622\u06CC\u0646\u062F \u0631\u0648\u06CC \u0644\u06CC\u0646\u06A9 \u0632\u06CC\u0631 \u06A9\u0644\u06CC\u06A9 \u06A9\u0646\u06CC\u062F.",
    linkExpiration: "\u0627\u06CC\u0646 \u067E\u06CC\u0648\u0646\u062F \u062F\u0631 \u0645\u062F\u062A {{expiration}} \u0645\u0646\u0642\u0636\u06CC \u0645\u06CC \u0634\u0648\u062F.",
    ignoreMessage: "\u0627\u06AF\u0631 \u0646\u0645\u06CC \u062F\u0627\u0646\u06CC\u062F \u06A9\u0647 \u0633\u0631\u067E\u0631\u0633\u062A \u0634\u0645\u0627 \u0627\u06CC\u0646 \u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0631\u0627 \u06A9\u0631\u062F\u0647 \u0627\u0633\u062A\u060C \u0641\u0642\u0637 \u0627\u06CC\u0646 \u067E\u06CC\u0627\u0645 \u0631\u0627 \u0646\u0627\u062F\u06CC\u062F\u0647 \u0628\u06AF\u06CC\u0631\u06CC\u062F \u0648 \u0686\u06CC\u0632\u06CC \u062A\u063A\u06CC\u06CC\u0631 \u0646\u062E\u0648\u0627\u0647\u062F \u06A9\u0631\u062F.",
    updateAccountButton: "\u0628\u0647 \u0631\u0648\u0632 \u0631\u0633\u0627\u0646\u06CC \u062D\u0633\u0627\u0628"
  },
  "identity-provider-link": {
    subject: "{0} \u0631\u0627 \u0628\u0627 \u062D\u0633\u0627\u0628 \u062E\u0648\u062F \u067E\u06CC\u0648\u0646\u062F \u062F\u0647\u06CC\u062F",
    message: "\u0634\u062E\u0635\u06CC \u0645\u06CC \u062E\u0648\u0627\u0647\u062F \u062D\u0633\u0627\u0628 {{identityProviderDisplayName}} \u0634\u0645\u0627 \u0631\u0627 \u0628\u0627 \u062D\u0633\u0627\u0628 {{realmName}} \u06A9\u0627\u0631\u0628\u0631 {{username}} \u067E\u06CC\u0648\u0646\u062F \u062F\u0647\u062F.",
    clickLink: "\u0627\u06AF\u0631 \u0627\u06CC\u0646 \u0634\u0645\u0627 \u0628\u0648\u062F\u06CC\u062F\u060C \u0628\u0631\u0627\u06CC \u067E\u06CC\u0648\u0646\u062F \u062F\u0627\u062F\u0646 \u062D\u0633\u0627\u0628\u200C\u0647\u0627\u060C \u0631\u0648\u06CC \u067E\u06CC\u0648\u0646\u062F \u0632\u06CC\u0631 \u06A9\u0644\u06CC\u06A9 \u06A9\u0646\u06CC\u062F",
    linkExpiration: "\u0627\u06CC\u0646 \u067E\u06CC\u0648\u0646\u062F \u062F\u0631 \u0645\u062F\u062A {{expiration}} \u0645\u0646\u0642\u0636\u06CC \u0645\u06CC \u0634\u0648\u062F.",
    ignoreMessage: "\u0627\u06AF\u0631 \u0646\u0645\u06CC\u200C\u062E\u0648\u0627\u0647\u06CC\u062F \u0628\u0627 \u0627\u06CC\u0646 \u062A\u063A\u06CC\u06CC\u0631 \u0627\u062F\u0627\u0645\u0647 \u062F\u0647\u06CC\u062F\u060C \u0641\u0642\u0637 \u0627\u06CC\u0646 \u067E\u06CC\u0627\u0645 \u0631\u0627 \u0646\u0627\u062F\u06CC\u062F\u0647 \u0628\u06AF\u06CC\u0631\u06CC\u062F.",
    linkAccountsButton: "\u067E\u06CC\u0648\u0646\u062F \u062D\u0633\u0627\u0628 \u0647\u0627",
    loginInfo: "\u0627\u06AF\u0631 \u062D\u0633\u0627\u0628\u200C\u0647\u0627 \u0631\u0627 \u067E\u06CC\u0648\u0646\u062F \u062F\u0647\u06CC\u062F\u060C \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u062F \u0627\u0632 \u0637\u0631\u06CC\u0642 {{realmName}} \u0628\u0647 {{identityProviderDisplayName}} \u0648\u0627\u0631\u062F \u0634\u0648\u06CC\u062F."
  },
  "org-invite": {
    subject: "\u062F\u0639\u0648\u062A \u0628\u0647 \u0639\u0636\u0648\u06CC\u062A \u062F\u0631 \u0633\u0627\u0632\u0645\u0627\u0646 {0}",
    greeting: "\u0633\u0644\u0627\u0645\u060C {{firstName}} {{lastName}}.",
    message: "\u0634\u0645\u0627 \u0628\u0631\u0627\u06CC \u067E\u06CC\u0648\u0633\u062A\u0646 \u0628\u0647 \u0633\u0627\u0632\u0645\u0627\u0646 {{organizationName}} \u062F\u0639\u0648\u062A \u0634\u062F\u0647 \u0627\u06CC\u062F. \u0628\u0631\u0627\u06CC \u0639\u0636\u0648\u06CC\u062A \u0631\u0648\u06CC \u0644\u06CC\u0646\u06A9 \u0632\u06CC\u0631 \u06A9\u0644\u06CC\u06A9 \u06A9\u0646\u06CC\u062F",
    linkExpiration: "\u0627\u06CC\u0646 \u067E\u06CC\u0648\u0646\u062F \u062F\u0631 \u0645\u062F\u062A {{expiration}} \u0645\u0646\u0642\u0636\u06CC \u0645\u06CC \u0634\u0648\u062F.",
    ignoreMessage: "\u0627\u06AF\u0631 \u0646\u0645\u06CC \u062E\u0648\u0627\u0647\u06CC\u062F \u0628\u0647 \u0633\u0627\u0632\u0645\u0627\u0646 \u0628\u067E\u06CC\u0648\u0646\u062F\u06CC\u062F\u060C \u0641\u0642\u0637 \u0627\u06CC\u0646 \u067E\u06CC\u0627\u0645 \u0631\u0627 \u0646\u0627\u062F\u06CC\u062F\u0647 \u0628\u06AF\u06CC\u0631\u06CC\u062F.",
    joinButton: "\u0628\u0647 \u0633\u0627\u0632\u0645\u0627\u0646 \u0628\u067E\u06CC\u0648\u0646\u062F\u06CC\u062F"
  },
  "password-reset": {
    subject: "\u0628\u0627\u0632\u0646\u0634\u0627\u0646\u06CC \u0631\u0645\u0632 \u0639\u0628\u0648\u0631",
    message: "\u0634\u062E\u0635\u06CC \u0628\u0647 \u062A\u0627\u0632\u06AF\u06CC \u062F\u0631\u062E\u0648\u0627\u0633\u062A \u06A9\u0631\u062F\u0647 \u0627\u0633\u062A \u06A9\u0647 \u0627\u0639\u062A\u0628\u0627\u0631 \u062D\u0633\u0627\u0628 {{realmName}} \u0634\u0645\u0627 \u0631\u0627 \u062A\u063A\u06CC\u06CC\u0631 \u062F\u0647\u062F. \u0627\u06AF\u0631 \u0627\u06CC\u0646 \u0634\u0645\u0627 \u0628\u0648\u062F\u06CC\u062F\u060C \u0631\u0648\u06CC \u067E\u06CC\u0648\u0646\u062F \u0632\u06CC\u0631 \u06A9\u0644\u06CC\u06A9 \u06A9\u0646\u06CC\u062F \u062A\u0627 \u0622\u0646\u0647\u0627 \u0631\u0627 \u0628\u0627\u0632\u0646\u0634\u0627\u0646\u06CC \u06A9\u0646\u06CC\u062F.",
    linkExpiration: "\u0627\u06CC\u0646 \u067E\u06CC\u0648\u0646\u062F \u062F\u0631 \u0645\u062F\u062A {{expiration}} \u0645\u0646\u0642\u0636\u06CC \u0645\u06CC \u0634\u0648\u062F.",
    ignoreMessage: "\u0627\u06AF\u0631 \u0646\u0645\u06CC \u062E\u0648\u0627\u0647\u06CC\u062F \u0627\u0639\u062A\u0628\u0627\u0631\u0646\u0627\u0645\u0647 \u062E\u0648\u062F \u0631\u0627 \u0628\u0627\u0632\u0646\u0634\u0627\u0646\u06CC \u06A9\u0646\u06CC\u062F\u060C \u0641\u0642\u0637 \u0627\u06CC\u0646 \u067E\u06CC\u0627\u0645 \u0631\u0627 \u0646\u0627\u062F\u06CC\u062F\u0647 \u0628\u06AF\u06CC\u0631\u06CC\u062F \u0648 \u0686\u06CC\u0632\u06CC \u062A\u063A\u06CC\u06CC\u0631 \u0646\u062E\u0648\u0627\u0647\u062F \u06A9\u0631\u062F.",
    resetButton: "\u0628\u0627\u0632\u0646\u0634\u0627\u0646\u06CC \u0627\u0639\u062A\u0628\u0627\u0631"
  },
  requiredAction: {
    configure_totp: "\u067E\u06CC\u06A9\u0631\u0628\u0646\u062F\u06CC OTP",
    terms_and_conditions: "\u0634\u0631\u0627\u06CC\u0637 \u0648 \u0636\u0648\u0627\u0628\u0637",
    update_password: "\u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u0631\u0627 \u0628\u0647 \u0631\u0648\u0632 \u06A9\u0646\u06CC\u062F",
    update_profile: "\u0628\u0647 \u0631\u0648\u0632 \u0631\u0633\u0627\u0646\u06CC \u0646\u0645\u0627\u06CC\u0647",
    verify_email: "\u062A\u0627\u06CC\u06CC\u062F \u0627\u06CC\u0645\u06CC\u0644",
    configure_recovery_authn_codes: "\u06A9\u062F\u0647\u0627\u06CC \u0628\u0627\u0632\u06CC\u0627\u0628\u06CC \u0631\u0627 \u0627\u06CC\u062C\u0627\u062F \u06A9\u0646\u06CC\u062F",
    seconds: "{0,choice,0#\u062B\u0627\u0646\u06CC\u0647|1#\u062B\u0627\u0646\u06CC\u0647|1<\u062B\u0627\u0646\u06CC\u0647}",
    minutes: "{0,choice,0#\u062F\u0642\u06CC\u0642\u0647|1#\u062F\u0642\u06CC\u0642\u0647|1<\u062F\u0642\u06CC\u0642\u0647}",
    hours: "{0,choice,0#\u0633\u0627\u0639\u062A|1#\u0633\u0627\u0639\u062A|1<\u0633\u0627\u0639\u062A}",
    days: "{0,choice,0#\u0631\u0648\u0632|1#\u0631\u0648\u0632|1<\u0631\u0648\u0632}"
  },
  footer: {
    allRightsReserved: "\xA9 {{currentYear}} {{realmName}}\u060C \u06A9\u0644\u06CC\u0647 \u062D\u0642\u0648\u0642 \u0645\u062D\u0641\u0648\u0638 \u0627\u0633\u062A"
  }
};

// src/email/locales/fi/translation.json
var translation_default10 = {
  "email-test": {
    subject: "S\xE4hk\xF6posti testi",
    greeting: "Hei yst\xE4v\xE4",
    message: "T\xE4m\xE4 on testis\xE4hk\xF6posti l\xE4hett\xE4j\xE4lt\xE4 {{realmName}}. Jos sait t\xE4m\xE4n s\xE4hk\xF6postin, se tarkoittaa, ett\xE4 s\xE4hk\xF6postiasetukset on m\xE4\xE4ritetty oikein."
  },
  "email-update-confirmation": {
    subject: "Vahvista uusi s\xE4hk\xF6posti",
    linkExpiration: "T\xE4m\xE4 linkki vanhenee {{expiration}} kuluessa.",
    updateEmailAddress: "P\xE4ivitt\xE4\xE4ksesi {{realmName}} -tilisi s\xE4hk\xF6postiosoitteella {{newEmail}}",
    clickLinkBelow: "klikkaa alla olevaa linkki\xE4",
    updateEmail: "P\xE4ivit\xE4 s\xE4hk\xF6posti",
    ignoreMessage: "Jos et halua jatkaa t\xE4t\xE4 muutosta, j\xE4t\xE4 t\xE4m\xE4 viesti huomioimatta."
  },
  "email-verification": {
    subject: "Vahvista s\xE4hk\xF6posti",
    message: "Joku on luonut {{firstName}}-tilin t\xE4ll\xE4 s\xE4hk\xF6postiosoitteella. Jos t\xE4m\xE4 olit sin\xE4, napsauta alla olevaa linkki\xE4 vahvistaaksesi s\xE4hk\xF6postiosoitteesi.",
    verifyButton: "Vahvista s\xE4hk\xF6posti",
    linkExpiration: "T\xE4m\xE4 linkki vanhenee {{expiration}} kuluessa.",
    ignoreMessage: "Jos et luonut t\xE4t\xE4 tili\xE4, j\xE4t\xE4 t\xE4m\xE4 viesti huomioimatta."
  },
  "event-login_error": {
    subject: "Kirjautumisvirhe",
    message: "Ep\xE4onnistunut kirjautumisyritys tilillesi havaittiin {{date}} alkaen {{ipAddress}}.",
    contactAdmin: "Jos et ollut sin\xE4, ota yhteytt\xE4 j\xE4rjestelm\xE4nvalvojaan."
  },
  "event-remove_credential": {
    subject: "Poista kirjautumistiedot",
    message: "Tunniste {{credentialType}} poistettiin tililt\xE4si {{date}} {{ipAddress}}.",
    contactAdmin: "Jos et ollut sin\xE4, ota yhteytt\xE4 j\xE4rjestelm\xE4nvalvojaan."
  },
  "event-remove_totp": {
    subject: "Poista OTP",
    message: "OTP poistettiin tililt\xE4si {{date}} alkaen {{ipAddress}}.",
    contactAdmin: "Jos et ollut sin\xE4, ota yhteytt\xE4 j\xE4rjestelm\xE4nvalvojaan."
  },
  "event-update_credential": {
    subject: "P\xE4ivit\xE4 kirjautumistiedot",
    message: "Tunnistetietosi {{credentialType}} muutettiin {{date}} arvosta {{ipAddress}}.",
    contactAdmin: "Jos et ollut sin\xE4, ota yhteytt\xE4 j\xE4rjestelm\xE4nvalvojaan."
  },
  "event-update_password": {
    subject: "P\xE4ivit\xE4 salasana",
    message: "Salasanasi vaihdettiin {{date}} {{ipAddress}}.",
    contactAdmin: "Jos et ollut sin\xE4, ota yhteytt\xE4 j\xE4rjestelm\xE4nvalvojaan."
  },
  "event-update_totp": {
    subject: "P\xE4ivit\xE4 OTP",
    message: "OTP p\xE4ivitettiin tilillesi {{date}} alkaen {{ipAddress}}.",
    contactAdmin: "Jos et ollut sin\xE4, ota yhteytt\xE4 j\xE4rjestelm\xE4nvalvojaan."
  },
  "event-user_disabled_by_permanent_lockout": {
    subject: "K\xE4ytt\xE4j\xE4 on poistettu k\xE4yt\xF6st\xE4 pysyv\xE4n lukituksen vuoksi",
    message: "K\xE4ytt\xE4j\xE4si on poistettu pysyv\xE4sti k\xE4yt\xF6st\xE4 useiden ep\xE4onnistuneiden yritysten vuoksi {{date}}.",
    contactAdmin: "Ota yhteytt\xE4 j\xE4rjestelm\xE4nvalvojaan."
  },
  "event-user_disabled_by_temporary_lockout": {
    subject: "K\xE4ytt\xE4j\xE4 poistettu k\xE4yt\xF6st\xE4 tilap\xE4isen lukituksen vuoksi",
    message: "K\xE4ytt\xE4j\xE4si on poistettu tilap\xE4isesti k\xE4yt\xF6st\xE4 useiden ep\xE4onnistuneiden yritysten vuoksi {{date}}.",
    contactAdmin: "Ota yhteytt\xE4 j\xE4rjestelm\xE4nvalvojaan."
  },
  executeActions: {
    subject: "P\xE4ivit\xE4 tilisi",
    message: "J\xE4rjestelm\xE4nvalvojasi on juuri pyyt\xE4nyt sinua p\xE4ivitt\xE4m\xE4\xE4n {{realmName}} -tilisi suorittamalla seuraavat toiminnot:",
    clickLink: "Aloita t\xE4m\xE4 prosessi napsauttamalla alla olevaa linkki\xE4.",
    linkExpiration: "T\xE4m\xE4 linkki vanhenee {{expiration}} kuluessa.",
    ignoreMessage: "Jos et tied\xE4, ett\xE4 j\xE4rjestelm\xE4nvalvojasi on pyyt\xE4nyt t\xE4t\xE4, j\xE4t\xE4 t\xE4m\xE4 viesti huomioimatta, niin mit\xE4\xE4n ei muuteta.",
    updateAccountButton: "P\xE4ivit\xE4 tili"
  },
  "identity-provider-link": {
    subject: "Yhdist\xE4 {0} tiliisi",
    message: "Joku haluaa yhdist\xE4\xE4 {{identityProviderDisplayName}}-tilisi k\xE4ytt\xE4j\xE4n {{username}} {{realmName}}-tiliin.",
    clickLink: "Jos t\xE4m\xE4 olit sin\xE4, linkit\xE4 tilit napsauttamalla alla olevaa linkki\xE4",
    linkExpiration: "T\xE4m\xE4 linkki vanhenee {{expiration}} kuluessa.",
    ignoreMessage: "Jos et halua jatkaa t\xE4t\xE4 muutosta, j\xE4t\xE4 t\xE4m\xE4 viesti huomioimatta.",
    linkAccountsButton: "Linkit\xE4 tilit",
    loginInfo: "Jos linkit\xE4t tilej\xE4, voit kirjautua osoitteeseen {{identityProviderDisplayName}} - {{realmName}}."
  },
  "org-invite": {
    subject: "Kutsu liitty\xE4 organisaatioon {0}",
    greeting: "Hei, {{firstName}} {{lastName}}.",
    message: "Sinut kutsuttiin liittym\xE4\xE4n organisaatioon {{organizationName}}. Napsauta alla olevaa linkki\xE4 liitty\xE4ksesi.",
    linkExpiration: "T\xE4m\xE4 linkki vanhenee {{expiration}} kuluessa.",
    ignoreMessage: "Jos et halua liitty\xE4 organisaatioon, j\xE4t\xE4 t\xE4m\xE4 viesti huomioimatta.",
    joinButton: "Liity organisaatioon"
  },
  "password-reset": {
    subject: "Palauta salasana",
    message: "Joku pyysi juuri muuttamaan {{realmName}} -tilisi kirjautumistietoja. Jos t\xE4m\xE4 olit sin\xE4, napsauta alla olevaa linkki\xE4 nollataksesi ne.",
    linkExpiration: "T\xE4m\xE4 linkki vanhenee {{expiration}} kuluessa.",
    ignoreMessage: "Jos et halua nollata tunnistetietojasi, j\xE4t\xE4 t\xE4m\xE4 viesti huomioimatta, niin mik\xE4\xE4n ei muutu.",
    resetButton: "Nollaa kirjautumistiedot"
  },
  requiredAction: {
    configure_totp: "M\xE4\xE4rit\xE4 OTP",
    terms_and_conditions: "Ehdot",
    update_password: "P\xE4ivit\xE4 salasana",
    update_profile: "P\xE4ivit\xE4 profiili",
    verify_email: "Vahvista s\xE4hk\xF6posti",
    configure_recovery_authn_codes: "Luo palautuskoodeja",
    seconds: "{0,choice,0#sekuntia|1#sekunti|1<sekuntia}",
    minutes: "{0,choice,0#minuuttia|1#minuutti|1<minuuttia}",
    hours: "{0,choice,0#tuntia|1#tunti|1<tuntia}",
    days: "{0,choice,0#p\xE4iv\xE4\xE4|1#p\xE4iv\xE4|1<p\xE4iv\xE4\xE4}"
  },
  footer: {
    allRightsReserved: "\xA9 {{currentYear}} {{realmName}}, Kaikki oikeudet pid\xE4tet\xE4\xE4n"
  }
};

// src/email/locales/fr/translation.json
var translation_default11 = {
  "email-test": {
    subject: "Test de courrier \xE9lectronique",
    greeting: "Salut mon ami",
    message: "Il s'agit d'un e-mail test provenant de {{realmName}}. Si vous avez re\xE7u cet email, cela signifie que vos param\xE8tres de messagerie sont correctement configur\xE9s."
  },
  "email-update-confirmation": {
    subject: "V\xE9rifier le nouvel e-mail",
    linkExpiration: "Ce lien expirera dans {{expiration}}.",
    updateEmailAddress: "Pour mettre \xE0 jour votre compte {{realmName}} avec l'adresse e-mail {{newEmail}}",
    clickLinkBelow: "cliquez sur le lien ci-dessous",
    updateEmail: "Mettre \xE0 jour l'e-mail",
    ignoreMessage: "Si vous ne souhaitez pas proc\xE9der \xE0 cette modification, ignorez simplement ce message."
  },
  "email-verification": {
    subject: "V\xE9rifier l'e-mail",
    message: "Quelqu'un a cr\xE9\xE9 un compte {{firstName}} avec cette adresse e-mail. Si c'\xE9tait vous, cliquez sur le lien ci-dessous pour v\xE9rifier votre adresse e-mail.",
    verifyButton: "V\xE9rifier l'e-mail",
    linkExpiration: "Ce lien expirera dans {{expiration}}.",
    ignoreMessage: "Si vous n'avez pas cr\xE9\xE9 ce compte, ignorez simplement ce message."
  },
  "event-login_error": {
    subject: "Erreur de connexion",
    message: "Une tentative de connexion \xE9chou\xE9e a \xE9t\xE9 d\xE9tect\xE9e \xE0 votre compte le {{date}} \xE0 partir du {{ipAddress}}.",
    contactAdmin: "Si ce n'est pas vous, veuillez contacter un administrateur."
  },
  "event-remove_credential": {
    subject: "Supprimer l'identifiant",
    message: "L'identifiant {{credentialType}} a \xE9t\xE9 supprim\xE9 de votre compte le {{date}} du {{ipAddress}}.",
    contactAdmin: "Si ce n'est pas vous, veuillez contacter un administrateur."
  },
  "event-remove_totp": {
    subject: "Supprimer OTP",
    message: "OTP a \xE9t\xE9 supprim\xE9 de votre compte le {{date}} \xE0 partir du {{ipAddress}}.",
    contactAdmin: "Si ce n'est pas vous, veuillez contacter un administrateur."
  },
  "event-update_credential": {
    subject: "Mettre \xE0 jour les informations d'identification",
    message: "Votre identifiant {{credentialType}} a \xE9t\xE9 modifi\xE9 le {{date}} au lieu du {{ipAddress}}.",
    contactAdmin: "Si ce n'est pas vous, veuillez contacter un administrateur."
  },
  "event-update_password": {
    subject: "Mettre \xE0 jour le mot de passe",
    message: "Votre mot de passe a \xE9t\xE9 modifi\xE9 le {{date}} au lieu du {{ipAddress}}.",
    contactAdmin: "Si ce n'est pas vous, veuillez contacter un administrateur."
  },
  "event-update_totp": {
    subject: "Mettre \xE0 jour OTP",
    message: "OTP a \xE9t\xE9 mis \xE0 jour pour votre compte le {{date}} \xE0 partir du {{ipAddress}}.",
    contactAdmin: "Si ce n'est pas vous, veuillez contacter un administrateur."
  },
  "event-user_disabled_by_permanent_lockout": {
    subject: "Utilisateur d\xE9sactiv\xE9 par verrouillage permanent",
    message: "Votre utilisateur a \xE9t\xE9 d\xE9sactiv\xE9 d\xE9finitivement en raison de plusieurs tentatives infructueuses sur {{date}}.",
    contactAdmin: "Veuillez contacter un administrateur."
  },
  "event-user_disabled_by_temporary_lockout": {
    subject: "Utilisateur d\xE9sactiv\xE9 par verrouillage temporaire",
    message: "Votre utilisateur a \xE9t\xE9 temporairement d\xE9sactiv\xE9 en raison de plusieurs tentatives infructueuses sur {{date}}.",
    contactAdmin: "Veuillez contacter un administrateur."
  },
  executeActions: {
    subject: "Mettez \xE0 jour votre compte",
    message: "Votre administrateur vient de vous demander de mettre \xE0 jour votre compte {{realmName}} en effectuant la(les) action(s) suivante(s)\xA0:",
    clickLink: "Cliquez sur le lien ci-dessous pour d\xE9marrer ce processus.",
    linkExpiration: "Ce lien expirera dans {{expiration}}.",
    ignoreMessage: "Si vous ne savez pas que votre administrateur l'a demand\xE9, ignorez simplement ce message et rien ne sera modifi\xE9.",
    updateAccountButton: "Mettre \xE0 jour le compte"
  },
  "identity-provider-link": {
    subject: "Associez {0} \xE0 votre compte",
    message: "Quelqu'un souhaite associer votre compte {{identityProviderDisplayName}} au compte {{realmName}} de l'utilisateur {{username}}.",
    clickLink: "Si c'\xE9tait vous, cliquez sur le lien ci-dessous pour lier les comptes",
    linkExpiration: "Ce lien expirera dans {{expiration}}.",
    ignoreMessage: "Si vous ne souhaitez pas proc\xE9der \xE0 cette modification, ignorez simplement ce message.",
    linkAccountsButton: "Lier les comptes",
    loginInfo: "Si vous associez des comptes, vous pourrez vous connecter \xE0 {{identityProviderDisplayName}} via {{realmName}}."
  },
  "org-invite": {
    subject: "Invitation \xE0 rejoindre l'organisation {0}",
    greeting: "Bonjour, {{firstName}} {{lastName}}.",
    message: "Vous avez \xE9t\xE9 invit\xE9 \xE0 rejoindre l'organisation {{organizationName}}. Cliquez sur le lien ci-dessous pour vous inscrire.",
    linkExpiration: "Ce lien expirera dans {{expiration}}.",
    ignoreMessage: "Si vous ne souhaitez pas rejoindre l'organisation, ignorez simplement ce message.",
    joinButton: "Rejoignez l'organisation"
  },
  "password-reset": {
    subject: "R\xE9initialiser le mot de passe",
    message: "Quelqu'un vient de demander la modification des identifiants de votre compte {{realmName}}. Si c'\xE9tait vous, cliquez sur le lien ci-dessous pour les r\xE9initialiser.",
    linkExpiration: "Ce lien expirera dans {{expiration}}.",
    ignoreMessage: "Si vous ne souhaitez pas r\xE9initialiser vos informations d'identification, ignorez simplement ce message et rien ne sera modifi\xE9.",
    resetButton: "R\xE9initialiser les informations d'identification"
  },
  requiredAction: {
    configure_totp: "Configurer OTP",
    terms_and_conditions: "Termes et conditions",
    update_password: "Mettre \xE0 jour le mot de passe",
    update_profile: "Mettre \xE0 jour le profil",
    verify_email: "V\xE9rifier l'e-mail",
    configure_recovery_authn_codes: "G\xE9n\xE9rer des codes de r\xE9cup\xE9ration",
    seconds: "{0,choice,0#secondes|1#seconde|1<secondes}",
    minutes: "{0,choice,0#minutes|1#minute|1<minutes}",
    hours: "{0,choice,0#heures|1#heure|1<heures}",
    days: "{0,choice,0#jours|1#jour|1<jours}"
  },
  footer: {
    allRightsReserved: "\xA9 {{currentYear}} {{realmName}}, tous droits r\xE9serv\xE9s"
  }
};

// src/email/locales/hu/translation.json
var translation_default12 = {
  "email-test": {
    subject: "E-mail teszt",
    greeting: "Szia bar\xE1tom",
    message: "Ez egy teszt e-mail t\u0151le: {{realmName}}. Ha ezt az e-mailt kapta, az azt jelenti, hogy az e-mail be\xE1ll\xEDt\xE1sai megfelel\u0151en vannak konfigur\xE1lva."
  },
  "email-update-confirmation": {
    subject: "\xDAj e-mail-c\xEDm igazol\xE1sa",
    linkExpiration: "Ez a link {{expiration}} napon bel\xFCl lej\xE1r.",
    updateEmailAddress: "{{realmName}} fi\xF3kj\xE1nak friss\xEDt\xE9se a {{newEmail}} e-mail c\xEDmre",
    clickLinkBelow: "kattintson az al\xE1bbi linkre",
    updateEmail: "E-mail friss\xEDt\xE9se",
    ignoreMessage: "Ha nem szeretn\xE9 folytatni ezt a m\xF3dos\xEDt\xE1st, hagyja figyelmen k\xEDv\xFCl ezt az \xFCzenetet."
  },
  "email-verification": {
    subject: "E-mail igazol\xE1s",
    message: "Valaki l\xE9trehozott egy {{firstName}} fi\xF3kot ezzel az e-mail c\xEDmmel. Ha \xD6n volt az, kattintson az al\xE1bbi linkre az e-mail c\xEDm\xE9nek meger\u0151s\xEDt\xE9s\xE9hez.",
    verifyButton: "E-mail igazol\xE1s",
    linkExpiration: "Ez a link {{expiration}} napon bel\xFCl lej\xE1r.",
    ignoreMessage: "Ha nem \xD6n hozta l\xE9tre ezt a fi\xF3kot, hagyja figyelmen k\xEDv\xFCl ezt az \xFCzenetet."
  },
  "event-login_error": {
    subject: "Bejelentkez\xE9si hiba",
    message: "Sikertelen bejelentkez\xE9si k\xEDs\xE9rletet \xE9szlelt\xFCnk a fi\xF3kj\xE1ba {{date}} napon, {{ipAddress}}.",
    contactAdmin: "Ha ez nem \xD6n volt, forduljon egy rendszergazd\xE1hoz."
  },
  "event-remove_credential": {
    subject: "Hiteles\xEDt\xE9si adatok elt\xE1vol\xEDt\xE1sa",
    message: "A(z) {{credentialType}} hiteles\xEDt\xE9si adatot elt\xE1vol\xEDtottuk fi\xF3kj\xE1b\xF3l {{date}} d\xE1tummal, {{ipAddress}}.",
    contactAdmin: "Ha ez nem \xD6n volt, forduljon egy rendszergazd\xE1hoz."
  },
  "event-remove_totp": {
    subject: "OTP elt\xE1vol\xEDt\xE1sa",
    message: "A OTP elt\xE1vol\xEDt\xE1sra ker\xFClt a fi\xF3kj\xE1b\xF3l ekkor: {{date}}, {{ipAddress}}.",
    contactAdmin: "Ha ez nem \xD6n volt, forduljon egy rendszergazd\xE1hoz."
  },
  "event-update_credential": {
    subject: "Hiteles\xEDt\xE9si adatok friss\xEDt\xE9se",
    message: "Az \xD6n {{credentialType}} hiteles\xEDt\u0151 adatai megv\xE1ltoztak {{date}} d\xE1tummal, kor\xE1bbi id\u0151pontr\xF3l {{ipAddress}}.",
    contactAdmin: "Ha ez nem \xD6n volt, forduljon egy rendszergazd\xE1hoz."
  },
  "event-update_password": {
    subject: "Friss\xEDtse a jelsz\xF3t",
    message: "Jelszava megv\xE1ltozott {{date}} d\xE1tumr\xF3l {{ipAddress}}.",
    contactAdmin: "Ha ez nem \xD6n volt, forduljon egy rendszergazd\xE1hoz."
  },
  "event-update_totp": {
    subject: "OTP friss\xEDt\xE9se",
    message: "A OTP friss\xEDtve lett az \xD6n fi\xF3kj\xE1ban {{date}} d\xE1tummal, {{ipAddress}}.",
    contactAdmin: "Ha ez nem \xD6n volt, forduljon egy rendszergazd\xE1hoz."
  },
  "event-user_disabled_by_permanent_lockout": {
    subject: "A felhaszn\xE1l\xF3 letilt\xE1sa \xE1lland\xF3 z\xE1rol\xE1s miatt",
    message: "A felhaszn\xE1l\xF3t v\xE9gleg letiltottuk, mert t\xF6bbsz\xF6ri sikertelen pr\xF3b\xE1lkoz\xE1s t\xF6rt\xE9nt a k\xF6vetkez\u0151n: {{date}}.",
    contactAdmin: "K\xE9rj\xFCk, forduljon egy rendszergazd\xE1hoz."
  },
  "event-user_disabled_by_temporary_lockout": {
    subject: "A felhaszn\xE1l\xF3 ideiglenes z\xE1rol\xE1s miatt letiltva",
    message: "Felhaszn\xE1l\xF3j\xE1t ideiglenesen letiltottuk, mert t\xF6bbsz\xF6ri sikertelen pr\xF3b\xE1lkoz\xE1s t\xF6rt\xE9nt a k\xF6vetkez\u0151n: {{date}}.",
    contactAdmin: "K\xE9rj\xFCk, forduljon egy rendszergazd\xE1hoz."
  },
  executeActions: {
    subject: "Friss\xEDtse fi\xF3kj\xE1t",
    message: "A rendszergazd\xE1ja az im\xE9nt k\xE9rte, hogy friss\xEDtse {{realmName}} fi\xF3kj\xE1t a k\xF6vetkez\u0151 m\u0171velet(ek) v\xE9grehajt\xE1s\xE1val:",
    clickLink: "A folyamat elind\xEDt\xE1s\xE1hoz kattintson az al\xE1bbi linkre.",
    linkExpiration: "Ez a link {{expiration}} napon bel\xFCl lej\xE1r.",
    ignoreMessage: "Ha nem tudja, hogy rendszergazd\xE1ja ezt k\xE9rte, hagyja figyelmen k\xEDv\xFCl ezt az \xFCzenetet, \xE9s semmi sem fog v\xE1ltozni.",
    updateAccountButton: "Fi\xF3k friss\xEDt\xE9se"
  },
  "identity-provider-link": {
    subject: "Kapcsolja \xF6ssze a {0}-t a fi\xF3kj\xE1val",
    message: "Valaki \xF6ssze akarja kapcsolni az \xD6n {{identityProviderDisplayName}} fi\xF3kj\xE1t {{username}} felhaszn\xE1l\xF3 {{realmName}} fi\xF3kj\xE1val.",
    clickLink: "Ha \xD6n volt az, kattintson az al\xE1bbi linkre a fi\xF3kok \xF6sszekapcsol\xE1s\xE1hoz",
    linkExpiration: "Ez a link {{expiration}} napon bel\xFCl lej\xE1r.",
    ignoreMessage: "Ha nem szeretn\xE9 folytatni ezt a m\xF3dos\xEDt\xE1st, hagyja figyelmen k\xEDv\xFCl ezt az \xFCzenetet.",
    linkAccountsButton: "Fi\xF3kok \xF6sszekapcsol\xE1sa",
    loginInfo: "Ha \xF6sszekapcsolja a fi\xF3kokat, be tud majd jelentkezni a {{identityProviderDisplayName}} \xE9s {{realmName}} k\xF6z\xF6tt."
  },
  "org-invite": {
    subject: "Megh\xEDv\xE1s a {0} szervezethez val\xF3 csatlakoz\xE1sra",
    greeting: "Szia, {{firstName}} {{lastName}}.",
    message: "Megh\xEDvt\xE1k, hogy csatlakozzon a {{organizationName}} szervezethez. A csatlakoz\xE1shoz kattintson az al\xE1bbi linkre.",
    linkExpiration: "Ez a link {{expiration}} napon bel\xFCl lej\xE1r.",
    ignoreMessage: "Ha nem szeretne csatlakozni a szervezethez, hagyja figyelmen k\xEDv\xFCl ezt az \xFCzenetet.",
    joinButton: "Csatlakozzon a szervezethez"
  },
  "password-reset": {
    subject: "Jelsz\xF3 vissza\xE1ll\xEDt\xE1sa",
    message: "Valaki \xE9ppen a {{realmName}}-fi\xF3kja hiteles\xEDt\xE9si adatainak m\xF3dos\xEDt\xE1s\xE1t k\xE9rte. Ha \xD6n volt az, kattintson az al\xE1bbi linkre a vissza\xE1ll\xEDt\xE1shoz.",
    linkExpiration: "Ez a link {{expiration}} napon bel\xFCl lej\xE1r.",
    ignoreMessage: "Ha nem szeretn\xE9 vissza\xE1ll\xEDtani a hiteles\xEDt\u0151 adatait, hagyja figyelmen k\xEDv\xFCl ezt az \xFCzenetet, \xE9s semmi sem fog v\xE1ltozni.",
    resetButton: "Hiteles\xEDt\xE9si adatok vissza\xE1ll\xEDt\xE1sa"
  },
  requiredAction: {
    configure_totp: "OTP konfigur\xE1l\xE1sa",
    terms_and_conditions: "\xC1ltal\xE1nos Szerz\u0151d\xE9si Felt\xE9telek",
    update_password: "Jelsz\xF3 friss\xEDt\xE9se",
    update_profile: "Profil friss\xEDt\xE9se",
    verify_email: "E-mail meger\u0151s\xEDt\xE9se",
    configure_recovery_authn_codes: "Helyre\xE1ll\xEDt\xE1si k\xF3dok l\xE9trehoz\xE1sa",
    seconds: "{0,choice,0#m\xE1sodpercig|1#m\xE1sodperc|1<m\xE1sodpercig}",
    minutes: "{0,choice,0#jegyz\u0151k\xF6nyv|1#perc|1<jegyz\u0151k\xF6nyv}",
    hours: "{0,choice,0#\xF3ra|1#\xF3ra|1<\xF3ra}",
    days: "{0,choice,0#napokon|1#nap|1<napokon}"
  },
  footer: {
    allRightsReserved: "\xA9 {{currentYear}} {{realmName}}, Minden jog fenntartva"
  }
};

// src/email/locales/it/translation.json
var translation_default13 = {
  "email-test": {
    subject: "Prova di posta elettronica",
    greeting: "Ciao amico",
    message: "Questa \xE8 un'email di prova da {{realmName}}. Se hai ricevuto questa email significa che le tue impostazioni email sono configurate correttamente."
  },
  "email-update-confirmation": {
    subject: "Verifica la nuova email",
    linkExpiration: "Questo collegamento scadr\xE0 entro {{expiration}}.",
    updateEmailAddress: "Per aggiornare il tuo account {{realmName}} con l'indirizzo email {{newEmail}}",
    clickLinkBelow: "clicca sul link qui sotto",
    updateEmail: "Aggiorna e-mail",
    ignoreMessage: "Se non vuoi procedere con questa modifica ignora semplicemente questo messaggio."
  },
  "email-verification": {
    subject: "Verifica l'e-mail",
    message: "Qualcuno ha creato un account {{firstName}} con questo indirizzo email. Se eri tu, fai clic sul collegamento sottostante per verificare il tuo indirizzo email.",
    verifyButton: "Verifica l'e-mail",
    linkExpiration: "Questo collegamento scadr\xE0 entro {{expiration}}.",
    ignoreMessage: "Se non hai creato tu questo account, ignora questo messaggio."
  },
  "event-login_error": {
    subject: "Errore di accesso",
    message: "\xC8 stato rilevato un tentativo di accesso non riuscito al tuo account il {{date}} da {{ipAddress}}.",
    contactAdmin: "Se non eri tu, contatta un amministratore."
  },
  "event-remove_credential": {
    subject: "Rimuovi credenziale",
    message: "La credenziale {{credentialType}} \xE8 stata rimossa dal tuo account il {{date}} da {{ipAddress}}.",
    contactAdmin: "Se non eri tu, contatta un amministratore."
  },
  "event-remove_totp": {
    subject: "Rimuovi OTP",
    message: "OTP \xE8 stato rimosso dal tuo account il {{date}} da {{ipAddress}}.",
    contactAdmin: "Se non eri tu, contatta un amministratore."
  },
  "event-update_credential": {
    subject: "Aggiorna credenziale",
    message: "Le tue credenziali {{credentialType}} sono state modificate il {{date}} da {{ipAddress}}.",
    contactAdmin: "Se non eri tu, contatta un amministratore."
  },
  "event-update_password": {
    subject: "Aggiorna password",
    message: "La tua password \xE8 stata modificata il {{date}} da {{ipAddress}}.",
    contactAdmin: "Se non eri tu, contatta un amministratore."
  },
  "event-update_totp": {
    subject: "Aggiorna OTP",
    message: "OTP \xE8 stato aggiornato per il tuo account il {{date}} da {{ipAddress}}.",
    contactAdmin: "Se non eri tu, contatta un amministratore."
  },
  "event-user_disabled_by_permanent_lockout": {
    subject: "Utente disabilitato per blocco permanente",
    message: "Il tuo utente \xE8 stato disabilitato permanentemente a causa di pi\xF9 tentativi falliti su {{date}}.",
    contactAdmin: "Contatta un amministratore."
  },
  "event-user_disabled_by_temporary_lockout": {
    subject: "Utente disabilitato per blocco temporaneo",
    message: "Il tuo utente \xE8 stato temporaneamente disabilitato a causa di pi\xF9 tentativi non riusciti su {{date}}.",
    contactAdmin: "Contatta un amministratore."
  },
  executeActions: {
    subject: "Aggiorna il tuo account",
    message: "Il tuo amministratore ti ha appena richiesto di aggiornare il tuo account {{realmName}} eseguendo le seguenti azioni:",
    clickLink: "Fare clic sul collegamento in basso per avviare questo processo.",
    linkExpiration: "Questo collegamento scadr\xE0 entro {{expiration}}.",
    ignoreMessage: "Se non sei a conoscenza del fatto che il tuo amministratore lo ha richiesto, ignora semplicemente questo messaggio e nulla verr\xE0 modificato.",
    updateAccountButton: "Aggiorna conto"
  },
  "identity-provider-link": {
    subject: "Collega {0} al tuo account",
    message: "Qualcuno vuole collegare il tuo account {{identityProviderDisplayName}} con l'account {{realmName}} dell'utente {{username}}.",
    clickLink: "Se eri tu, fai clic sul collegamento sottostante per collegare gli account",
    linkExpiration: "Questo collegamento scadr\xE0 entro {{expiration}}.",
    ignoreMessage: "Se non vuoi procedere con questa modifica ignora semplicemente questo messaggio.",
    linkAccountsButton: "Collega account",
    loginInfo: "Se colleghi gli account, potrai accedere a {{identityProviderDisplayName}} tramite {{realmName}}."
  },
  "org-invite": {
    subject: "Invito a unirsi all'organizzazione {0}",
    greeting: "Ciao, {{firstName}} {{lastName}}.",
    message: "Sei stato invitato a unirti all'organizzazione {{organizationName}}. Clicca sul link qui sotto per iscriverti.",
    linkExpiration: "Questo collegamento scadr\xE0 entro {{expiration}}.",
    ignoreMessage: "Se non vuoi unirti all'organizzazione, ignora questo messaggio.",
    joinButton: "Unisciti all'organizzazione"
  },
  "password-reset": {
    subject: "Reimposta la password",
    message: "Qualcuno ha appena richiesto di modificare le credenziali del tuo account {{realmName}}. Se eri tu, fai clic sul collegamento in basso per reimpostarli.",
    linkExpiration: "Questo collegamento scadr\xE0 entro {{expiration}}.",
    ignoreMessage: "Se non desideri reimpostare le tue credenziali, ignora semplicemente questo messaggio e nulla verr\xE0 modificato.",
    resetButton: "Reimposta le credenziali"
  },
  requiredAction: {
    configure_totp: "Configura OTP",
    terms_and_conditions: "Termini e Condizioni",
    update_password: "Aggiorna password",
    update_profile: "Aggiorna profilo",
    verify_email: "Verifica e-mail",
    configure_recovery_authn_codes: "Genera codici di ripristino",
    seconds: "{0,choice,0#secondi|1#secondo|1<secondi}",
    minutes: "{0,choice,0#minuti|1#minuto|1<minuti}",
    hours: "{0,choice,0#ore|1#ora|1<ore}",
    days: "{0,choice,0#giorni|1#giorno|1<giorni}"
  },
  footer: {
    allRightsReserved: "\xA9 {{currentYear}} {{realmName}}, Tutti i diritti riservati"
  }
};

// src/email/locales/ja/translation.json
var translation_default14 = {
  "email-test": {
    subject: "\u30E1\u30FC\u30EB\u30C6\u30B9\u30C8",
    greeting: "\u3053\u3093\u306B\u3061\u306F\u3001\u53CB\u4EBA",
    message: "\u3053\u308C\u306F {{realmName}} \u304B\u3089\u306E\u30C6\u30B9\u30C8\u30E1\u30FC\u30EB\u3067\u3059\u3002\u3053\u306E\u30E1\u30FC\u30EB\u3092\u53D7\u3051\u53D6\u3063\u305F\u5834\u5408\u306F\u3001\u30E1\u30FC\u30EB\u8A2D\u5B9A\u304C\u6B63\u3057\u304F\u69CB\u6210\u3055\u308C\u3066\u3044\u308B\u3053\u3068\u3092\u610F\u5473\u3057\u307E\u3059\u3002"
  },
  "email-update-confirmation": {
    subject: "\u65B0\u3057\u3044\u30E1\u30FC\u30EB\u3092\u78BA\u8A8D\u3059\u308B",
    linkExpiration: "\u3053\u306E\u30EA\u30F3\u30AF\u306F{{expiration}}\u4EE5\u5185\u306B\u671F\u9650\u5207\u308C\u306B\u306A\u308A\u307E\u3059\u3002",
    updateEmailAddress: "{{realmName}} \u30A2\u30AB\u30A6\u30F3\u30C8\u3092\u30E1\u30FC\u30EB \u30A2\u30C9\u30EC\u30B9 {{newEmail}} \u3067\u66F4\u65B0\u3059\u308B\u306B\u306F",
    clickLinkBelow: "\u4E0B\u306E\u30EA\u30F3\u30AF\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u304F\u3060\u3055\u3044",
    updateEmail: "\u66F4\u65B0\u30E1\u30FC\u30EB",
    ignoreMessage: "\u3053\u306E\u5909\u66F4\u3092\u7D9A\u884C\u3057\u305F\u304F\u306A\u3044\u5834\u5408\u306F\u3001\u3053\u306E\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u7121\u8996\u3057\u3066\u304F\u3060\u3055\u3044\u3002"
  },
  "email-verification": {
    subject: "\u30E1\u30FC\u30EB\u306E\u78BA\u8A8D",
    message: "\u8AB0\u304B\u304C\u3053\u306E\u30E1\u30FC\u30EB \u30A2\u30C9\u30EC\u30B9\u3067 {{firstName}} \u30A2\u30AB\u30A6\u30F3\u30C8\u3092\u4F5C\u6210\u3057\u307E\u3057\u305F\u3002\u3053\u308C\u304C\u3042\u306A\u305F\u306E\u5834\u5408\u306F\u3001\u4E0B\u306E\u30EA\u30F3\u30AF\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u96FB\u5B50\u30E1\u30FC\u30EB \u30A2\u30C9\u30EC\u30B9\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
    verifyButton: "\u30E1\u30FC\u30EB\u306E\u78BA\u8A8D",
    linkExpiration: "\u3053\u306E\u30EA\u30F3\u30AF\u306F{{expiration}}\u4EE5\u5185\u306B\u671F\u9650\u5207\u308C\u306B\u306A\u308A\u307E\u3059\u3002",
    ignoreMessage: "\u3053\u306E\u30A2\u30AB\u30A6\u30F3\u30C8\u3092\u4F5C\u6210\u3057\u3066\u3044\u306A\u3044\u5834\u5408\u306F\u3001\u3053\u306E\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u7121\u8996\u3057\u3066\u304F\u3060\u3055\u3044\u3002"
  },
  "event-login_error": {
    subject: "\u30ED\u30B0\u30A4\u30F3\u30A8\u30E9\u30FC",
    message: "{{date}} \u306B {{ipAddress}} \u304B\u3089\u306E\u30A2\u30AB\u30A6\u30F3\u30C8\u3078\u306E\u30ED\u30B0\u30A4\u30F3\u8A66\u884C\u306E\u5931\u6557\u304C\u691C\u51FA\u3055\u308C\u307E\u3057\u305F\u3002",
    contactAdmin: "\u3053\u308C\u304C\u81EA\u5206\u3067\u306F\u306A\u3044\u5834\u5408\u306F\u3001\u7BA1\u7406\u8005\u306B\u9023\u7D61\u3057\u3066\u304F\u3060\u3055\u3044\u3002"
  },
  "event-remove_credential": {
    subject: "\u8CC7\u683C\u60C5\u5831\u3092\u524A\u9664\u3059\u308B",
    message: "\u8A8D\u8A3C\u60C5\u5831 {{credentialType}} \u306F\u3001{{date}} \u304B\u3089 {{ipAddress}} \u306B\u30A2\u30AB\u30A6\u30F3\u30C8\u304B\u3089\u524A\u9664\u3055\u308C\u307E\u3057\u305F\u3002",
    contactAdmin: "\u3053\u308C\u304C\u81EA\u5206\u3067\u306F\u306A\u3044\u5834\u5408\u306F\u3001\u7BA1\u7406\u8005\u306B\u9023\u7D61\u3057\u3066\u304F\u3060\u3055\u3044\u3002"
  },
  "event-remove_totp": {
    subject: "OTP \u3092\u524A\u9664",
    message: "OTP \u306F\u3001{{date}} \u306B {{ipAddress}} \u304B\u3089\u30A2\u30AB\u30A6\u30F3\u30C8\u304B\u3089\u524A\u9664\u3055\u308C\u307E\u3057\u305F\u3002",
    contactAdmin: "\u3053\u308C\u304C\u81EA\u5206\u3067\u306F\u306A\u3044\u5834\u5408\u306F\u3001\u7BA1\u7406\u8005\u306B\u9023\u7D61\u3057\u3066\u304F\u3060\u3055\u3044\u3002"
  },
  "event-update_credential": {
    subject: "\u8CC7\u683C\u60C5\u5831\u3092\u66F4\u65B0\u3059\u308B",
    message: "{{credentialType}} \u8A8D\u8A3C\u60C5\u5831\u306F {{date}} \u306B {{ipAddress}} \u304B\u3089\u5909\u66F4\u3055\u308C\u307E\u3057\u305F\u3002",
    contactAdmin: "\u3053\u308C\u304C\u81EA\u5206\u3067\u306F\u306A\u3044\u5834\u5408\u306F\u3001\u7BA1\u7406\u8005\u306B\u9023\u7D61\u3057\u3066\u304F\u3060\u3055\u3044\u3002"
  },
  "event-update_password": {
    subject: "\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u66F4\u65B0\u3059\u308B",
    message: "\u30D1\u30B9\u30EF\u30FC\u30C9\u306F {{date}} \u306B {{ipAddress}} \u304B\u3089\u5909\u66F4\u3055\u308C\u307E\u3057\u305F\u3002",
    contactAdmin: "\u3053\u308C\u304C\u81EA\u5206\u3067\u306F\u306A\u3044\u5834\u5408\u306F\u3001\u7BA1\u7406\u8005\u306B\u9023\u7D61\u3057\u3066\u304F\u3060\u3055\u3044\u3002"
  },
  "event-update_totp": {
    subject: "OTP \u3092\u66F4\u65B0",
    message: "{{ipAddress}} \u304B\u3089 {{date}} \u306E\u30A2\u30AB\u30A6\u30F3\u30C8\u306E OTP \u304C\u66F4\u65B0\u3055\u308C\u307E\u3057\u305F\u3002",
    contactAdmin: "\u3053\u308C\u304C\u81EA\u5206\u3067\u306F\u306A\u3044\u5834\u5408\u306F\u3001\u7BA1\u7406\u8005\u306B\u9023\u7D61\u3057\u3066\u304F\u3060\u3055\u3044\u3002"
  },
  "event-user_disabled_by_permanent_lockout": {
    subject: "\u6C38\u4E45\u30ED\u30C3\u30AF\u30A2\u30A6\u30C8\u306B\u3088\u308A\u30E6\u30FC\u30B6\u30FC\u304C\u7121\u52B9\u5316\u3055\u308C\u307E\u3057\u305F",
    message: "{{date}} \u3067\u306E\u8A66\u884C\u304C\u8907\u6570\u56DE\u5931\u6557\u3057\u305F\u305F\u3081\u3001\u30E6\u30FC\u30B6\u30FC\u306F\u6C38\u4E45\u306B\u7121\u52B9\u306B\u306A\u308A\u307E\u3057\u305F\u3002",
    contactAdmin: "\u7BA1\u7406\u8005\u306B\u304A\u554F\u3044\u5408\u308F\u305B\u304F\u3060\u3055\u3044\u3002"
  },
  "event-user_disabled_by_temporary_lockout": {
    subject: "\u4E00\u6642\u7684\u306A\u30ED\u30C3\u30AF\u30A2\u30A6\u30C8\u306B\u3088\u308A\u30E6\u30FC\u30B6\u30FC\u304C\u7121\u52B9\u5316\u3055\u308C\u307E\u3057\u305F",
    message: "{{date}} \u3067\u306E\u8A66\u884C\u304C\u8907\u6570\u56DE\u5931\u6557\u3057\u305F\u305F\u3081\u3001\u30E6\u30FC\u30B6\u30FC\u306F\u4E00\u6642\u7684\u306B\u7121\u52B9\u306B\u306A\u3063\u3066\u3044\u307E\u3059\u3002",
    contactAdmin: "\u7BA1\u7406\u8005\u306B\u304A\u554F\u3044\u5408\u308F\u305B\u304F\u3060\u3055\u3044\u3002"
  },
  executeActions: {
    subject: "\u30A2\u30AB\u30A6\u30F3\u30C8\u3092\u66F4\u65B0\u3059\u308B",
    message: "\u7BA1\u7406\u8005\u306F\u3001\u6B21\u306E\u64CD\u4F5C\u3092\u5B9F\u884C\u3057\u3066 {{realmName}} \u30A2\u30AB\u30A6\u30F3\u30C8\u3092\u66F4\u65B0\u3059\u308B\u3088\u3046\u8981\u6C42\u3057\u307E\u3057\u305F:",
    clickLink: "\u3053\u306E\u30D7\u30ED\u30BB\u30B9\u3092\u958B\u59CB\u3059\u308B\u306B\u306F\u3001\u4E0B\u306E\u30EA\u30F3\u30AF\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
    linkExpiration: "\u3053\u306E\u30EA\u30F3\u30AF\u306F{{expiration}}\u4EE5\u5185\u306B\u671F\u9650\u5207\u308C\u306B\u306A\u308A\u307E\u3059\u3002",
    ignoreMessage: "\u7BA1\u7406\u8005\u304C\u3053\u308C\u3092\u8981\u6C42\u3057\u3066\u3044\u308B\u3053\u3068\u306B\u6C17\u3065\u3044\u3066\u3044\u306A\u3044\u5834\u5408\u306F\u3001\u3053\u306E\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u7121\u8996\u3057\u3066\u3082\u4F55\u3082\u5909\u66F4\u3055\u308C\u307E\u305B\u3093\u3002",
    updateAccountButton: "\u30A2\u30AB\u30A6\u30F3\u30C8\u3092\u66F4\u65B0\u3059\u308B"
  },
  "identity-provider-link": {
    subject: "{0} \u3092\u30A2\u30AB\u30A6\u30F3\u30C8\u306B\u30EA\u30F3\u30AF\u3057\u307E\u3059",
    message: "\u8AB0\u304B\u304C\u3042\u306A\u305F\u306E {{identityProviderDisplayName}} \u30A2\u30AB\u30A6\u30F3\u30C8\u3092\u30E6\u30FC\u30B6\u30FC {{username}} \u306E {{realmName}} \u30A2\u30AB\u30A6\u30F3\u30C8\u306B\u30EA\u30F3\u30AF\u3057\u3088\u3046\u3068\u3057\u3066\u3044\u307E\u3059\u3002",
    clickLink: "\u3053\u308C\u304C\u3042\u306A\u305F\u306E\u5834\u5408\u306F\u3001\u4E0B\u306E\u30EA\u30F3\u30AF\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u30A2\u30AB\u30A6\u30F3\u30C8\u3092\u30EA\u30F3\u30AF\u3057\u3066\u304F\u3060\u3055\u3044",
    linkExpiration: "\u3053\u306E\u30EA\u30F3\u30AF\u306F{{expiration}}\u4EE5\u5185\u306B\u671F\u9650\u5207\u308C\u306B\u306A\u308A\u307E\u3059\u3002",
    ignoreMessage: "\u3053\u306E\u5909\u66F4\u3092\u7D9A\u884C\u3057\u305F\u304F\u306A\u3044\u5834\u5408\u306F\u3001\u3053\u306E\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u7121\u8996\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
    linkAccountsButton: "\u30A2\u30AB\u30A6\u30F3\u30C8\u3092\u30EA\u30F3\u30AF\u3059\u308B",
    loginInfo: "\u30A2\u30AB\u30A6\u30F3\u30C8\u3092\u30EA\u30F3\u30AF\u3059\u308B\u3068\u3001{{identityProviderDisplayName}} \u304B\u3089 {{realmName}} \u307E\u3067\u30ED\u30B0\u30A4\u30F3\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002"
  },
  "org-invite": {
    subject: "{0} \u7D44\u7E54\u3078\u306E\u62DB\u5F85",
    greeting: "\u3053\u3093\u306B\u3061\u306F\u3001{{firstName}} {{lastName}} \u3055\u3093\u3002",
    message: "{{organizationName}} \u7D44\u7E54\u3078\u306E\u53C2\u52A0\u306B\u62DB\u5F85\u3055\u308C\u307E\u3057\u305F\u3002\u53C2\u52A0\u3059\u308B\u306B\u306F\u4E0B\u306E\u30EA\u30F3\u30AF\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
    linkExpiration: "\u3053\u306E\u30EA\u30F3\u30AF\u306F{{expiration}}\u4EE5\u5185\u306B\u671F\u9650\u5207\u308C\u306B\u306A\u308A\u307E\u3059\u3002",
    ignoreMessage: "\u7D44\u7E54\u306B\u53C2\u52A0\u3057\u305F\u304F\u306A\u3044\u5834\u5408\u306F\u3001\u3053\u306E\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u7121\u8996\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
    joinButton: "\u7D44\u7E54\u306B\u53C2\u52A0\u3059\u308B"
  },
  "password-reset": {
    subject: "\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u30EA\u30BB\u30C3\u30C8\u3059\u308B",
    message: "\u8AB0\u304B\u304C\u3042\u306A\u305F\u306E {{realmName}} \u30A2\u30AB\u30A6\u30F3\u30C8\u306E\u8CC7\u683C\u60C5\u5831\u306E\u5909\u66F4\u3092\u30EA\u30AF\u30A8\u30B9\u30C8\u3057\u307E\u3057\u305F\u3002\u3053\u308C\u304C\u3042\u306A\u305F\u306E\u5834\u5408\u306F\u3001\u4E0B\u306E\u30EA\u30F3\u30AF\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u30EA\u30BB\u30C3\u30C8\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
    linkExpiration: "\u3053\u306E\u30EA\u30F3\u30AF\u306F{{expiration}}\u4EE5\u5185\u306B\u671F\u9650\u5207\u308C\u306B\u306A\u308A\u307E\u3059\u3002",
    ignoreMessage: "\u8CC7\u683C\u60C5\u5831\u3092\u30EA\u30BB\u30C3\u30C8\u3057\u305F\u304F\u306A\u3044\u5834\u5408\u306F\u3001\u3053\u306E\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u7121\u8996\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u4F55\u3082\u5909\u66F4\u3055\u308C\u307E\u305B\u3093\u3002",
    resetButton: "\u8CC7\u683C\u60C5\u5831\u306E\u30EA\u30BB\u30C3\u30C8"
  },
  requiredAction: {
    configure_totp: "OTP \u3092\u69CB\u6210\u3059\u308B",
    terms_and_conditions: "\u5229\u7528\u898F\u7D04",
    update_password: "\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u66F4\u65B0\u3059\u308B",
    update_profile: "\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB\u3092\u66F4\u65B0\u3059\u308B",
    verify_email: "\u30E1\u30FC\u30EB\u306E\u78BA\u8A8D",
    configure_recovery_authn_codes: "\u30EA\u30AB\u30D0\u30EA\u30FC\u30B3\u30FC\u30C9\u306E\u751F\u6210",
    seconds: "{0,choice,0#\u79D2|1#\u79D2|1<\u79D2}",
    minutes: "{0,choice,0#\u5206|1#\u5206|1<\u5206}",
    hours: "{0,choice,0#\u6642\u9593|1#\u6642\u9593|1<\u6642\u9593}",
    days: "{0,choice,0#\u65E5|1#\u65E5|1<\u65E5}"
  },
  footer: {
    allRightsReserved: "\xA9 {{currentYear}} {{realmName}}\u3001\u5168\u8457\u4F5C\u6A29\u6240\u6709"
  }
};

// src/email/locales/ka/translation.json
var translation_default15 = {
  "email-test": {
    subject: "\u10D4\u10DA.\u10E4\u10DD\u10E1\u10E2\u10D8\u10E1 \u10E2\u10D4\u10E1\u10E2\u10D8",
    greeting: "\u10D2\u10D0\u10DB\u10D0\u10E0\u10EF\u10DD\u10D1\u10D0 \u10DB\u10D4\u10D2\u10DD\u10D1\u10D0\u10E0\u10DD",
    message: "\u10D4\u10E1 \u10D0\u10E0\u10D8\u10E1 \u10E1\u10D0\u10E2\u10D4\u10E1\u10E2\u10DD \u10D4\u10DA\u10E4\u10DD\u10E1\u10E2\u10D0 {{realmName}}-\u10D8\u10E1\u10D2\u10D0\u10DC. \u10D7\u10E3 \u10D4\u10E1 \u10D4\u10DA\u10E4\u10DD\u10E1\u10E2\u10D0 \u10DB\u10D8\u10D8\u10E6\u10D4\u10D7, \u10D4\u10E1 \u10DC\u10D8\u10E8\u10DC\u10D0\u10D5\u10E1, \u10E0\u10DD\u10DB \u10D7\u10E5\u10D5\u10D4\u10DC\u10D8 \u10D4\u10DA\u10E4\u10DD\u10E1\u10E2\u10D8\u10E1 \u10DE\u10D0\u10E0\u10D0\u10DB\u10D4\u10E2\u10E0\u10D4\u10D1\u10D8 \u10E1\u10EC\u10DD\u10E0\u10D0\u10D3 \u10D0\u10E0\u10D8\u10E1 \u10D9\u10DD\u10DC\u10E4\u10D8\u10D2\u10E3\u10E0\u10D8\u10E0\u10D4\u10D1\u10E3\u10DA\u10D8."
  },
  "email-update-confirmation": {
    subject: "\u10D3\u10D0\u10D0\u10D3\u10D0\u10E1\u10E2\u10E3\u10E0\u10D4\u10D7 \u10D0\u10EE\u10D0\u10DA\u10D8 \u10D4\u10DA\u10E4\u10DD\u10E1\u10E2\u10D0",
    linkExpiration: "\u10D0\u10DB \u10D1\u10DB\u10E3\u10DA\u10E1 \u10D5\u10D0\u10D3\u10D0 \u10D0\u10DB\u10DD\u10D8\u10EC\u10E3\u10E0\u10D4\u10D1\u10D0 {{expiration}}-\u10E8\u10D8.",
    updateEmailAddress: "\u10D7\u10E5\u10D5\u10D4\u10DC\u10D8 {{realmName}} \u10D0\u10DC\u10D2\u10D0\u10E0\u10D8\u10E8\u10D8\u10E1 \u10D2\u10D0\u10DC\u10D0\u10EE\u10DA\u10D4\u10D1\u10D8\u10E1\u10D7\u10D5\u10D8\u10E1 \u10D4\u10DA\u10E4\u10DD\u10E1\u10E2\u10D8\u10E1 \u10DB\u10D8\u10E1\u10D0\u10DB\u10D0\u10E0\u10D7\u10D8\u10D7 {{newEmail}}",
    clickLinkBelow: "\u10D3\u10D0\u10D0\u10ED\u10D8\u10E0\u10D4\u10D7 \u10E5\u10D5\u10D4\u10DB\u10DD\u10D7 \u10DB\u10DD\u10EA\u10D4\u10DB\u10E3\u10DA \u10D1\u10DB\u10E3\u10DA\u10E1",
    updateEmail: "\u10D4\u10DA.\u10E4\u10DD\u10E1\u10E2\u10D8\u10E1 \u10D2\u10D0\u10DC\u10D0\u10EE\u10DA\u10D4\u10D1\u10D0",
    ignoreMessage: "\u10D7\u10E3 \u10D0\u10E0 \u10D2\u10E1\u10E3\u10E0\u10D7 \u10D0\u10DB \u10DB\u10DD\u10D3\u10D8\u10E4\u10D8\u10D9\u10D0\u10EA\u10D8\u10D8\u10E1 \u10D2\u10D0\u10D2\u10E0\u10EB\u10D4\u10DA\u10D4\u10D1\u10D0, \u10E3\u10D1\u10E0\u10D0\u10DA\u10DD\u10D3 \u10D8\u10D2\u10DC\u10DD\u10E0\u10D8\u10E0\u10D4\u10D1\u10D0 \u10D2\u10D0\u10E3\u10D9\u10D4\u10D7\u10D4\u10D7 \u10D0\u10DB \u10E8\u10D4\u10E2\u10E7\u10DD\u10D1\u10D8\u10DC\u10D4\u10D1\u10D0\u10E1."
  },
  "email-verification": {
    subject: "\u10D3\u10D0\u10D0\u10D3\u10D0\u10E1\u10E2\u10E3\u10E0\u10D4\u10D7 \u10D4\u10DA\u10E4\u10DD\u10E1\u10E2\u10D0",
    message: "\u10D5\u10D8\u10E6\u10D0\u10EA\u10D0\u10DB \u10E8\u10D4\u10E5\u10DB\u10DC\u10D0 {{firstName}} \u10D0\u10DC\u10D2\u10D0\u10E0\u10D8\u10E8\u10D8 \u10D0\u10DB \u10D4\u10DA\u10E4\u10DD\u10E1\u10E2\u10D8\u10E1 \u10DB\u10D8\u10E1\u10D0\u10DB\u10D0\u10E0\u10D7\u10D8\u10D7. \u10D7\u10E3 \u10D4\u10E1 \u10D7\u10E5\u10D5\u10D4\u10DC \u10D8\u10E7\u10D0\u10D5\u10D8\u10D7, \u10D3\u10D0\u10D0\u10EC\u10D9\u10D0\u10DE\u10E3\u10DC\u10D4\u10D7 \u10E5\u10D5\u10D4\u10DB\u10DD\u10D7 \u10DB\u10DD\u10EA\u10D4\u10DB\u10E3\u10DA \u10D1\u10DB\u10E3\u10DA\u10D6\u10D4 \u10D7\u10E5\u10D5\u10D4\u10DC\u10D8 \u10D4\u10DA\u10E4\u10DD\u10E1\u10E2\u10D8\u10E1 \u10DB\u10D8\u10E1\u10D0\u10DB\u10D0\u10E0\u10D7\u10D8\u10E1 \u10D3\u10D0\u10E1\u10D0\u10D3\u10D0\u10E1\u10E2\u10E3\u10E0\u10D4\u10D1\u10DA\u10D0\u10D3.",
    verifyButton: "\u10D3\u10D0\u10D0\u10D3\u10D0\u10E1\u10E2\u10E3\u10E0\u10D4\u10D7 \u10D4\u10DA\u10E4\u10DD\u10E1\u10E2\u10D0",
    linkExpiration: "\u10D0\u10DB \u10D1\u10DB\u10E3\u10DA\u10E1 \u10D5\u10D0\u10D3\u10D0 \u10D0\u10DB\u10DD\u10D8\u10EC\u10E3\u10E0\u10D4\u10D1\u10D0 {{expiration}}-\u10E8\u10D8.",
    ignoreMessage: "\u10D7\u10E3 \u10D4\u10E1 \u10D0\u10DC\u10D2\u10D0\u10E0\u10D8\u10E8\u10D8 \u10D7\u10E5\u10D5\u10D4\u10DC \u10D0\u10E0 \u10E8\u10D4\u10D2\u10D8\u10E5\u10DB\u10DC\u10D8\u10D0\u10D7, \u10E3\u10D1\u10E0\u10D0\u10DA\u10DD\u10D3 \u10E3\u10D2\u10E3\u10DA\u10D4\u10D1\u10D4\u10DA\u10E7\u10D0\u10D5\u10D8\u10D7 \u10D4\u10E1 \u10E8\u10D4\u10E2\u10E7\u10DD\u10D1\u10D8\u10DC\u10D4\u10D1\u10D0."
  },
  "event-login_error": {
    subject: "\u10E8\u10D4\u10E1\u10D5\u10DA\u10D8\u10E1 \u10E8\u10D4\u10EA\u10D3\u10DD\u10DB\u10D0",
    message: "\u10D7\u10E5\u10D5\u10D4\u10DC\u10E1 \u10D0\u10DC\u10D2\u10D0\u10E0\u10D8\u10E8\u10E8\u10D8 \u10E8\u10D4\u10E1\u10D5\u10DA\u10D8\u10E1 \u10EC\u10D0\u10E0\u10E3\u10DB\u10D0\u10E2\u10D4\u10D1\u10D4\u10DA\u10D8 \u10DB\u10EA\u10D3\u10D4\u10DA\u10DD\u10D1\u10D0 \u10D2\u10D0\u10DB\u10DD\u10D5\u10DA\u10D8\u10DC\u10D3\u10D0 {{date}}-\u10D6\u10D4 {{ipAddress}}-\u10D3\u10D0\u10DC.",
    contactAdmin: "\u10D7\u10E3 \u10D4\u10E1 \u10D7\u10E5\u10D5\u10D4\u10DC \u10D0\u10E0 \u10D8\u10E7\u10D0\u10D5\u10D8\u10D7, \u10D2\u10D7\u10EE\u10DD\u10D5\u10D7, \u10D3\u10D0\u10E3\u10D9\u10D0\u10D5\u10E8\u10D8\u10E0\u10D3\u10D4\u10D7 \u10D0\u10D3\u10DB\u10D8\u10DC\u10D8\u10E1\u10E2\u10E0\u10D0\u10E2\u10DD\u10E0\u10E1."
  },
  "event-remove_credential": {
    subject: "\u10D0\u10DB\u10DD\u10D8\u10E6\u10D4\u10D7 \u10E0\u10EC\u10DB\u10E3\u10DC\u10D4\u10D1\u10D0\u10D7\u10D0 \u10E1\u10D8\u10D2\u10D4\u10DA\u10D4\u10D1\u10D8",
    message: "\u10E1\u10D4\u10E0\u10D7\u10D8\u10E4\u10D8\u10D9\u10D0\u10E2\u10D8 {{credentialType}} \u10EC\u10D0\u10D8\u10E8\u10D0\u10DA\u10D0 \u10D7\u10E5\u10D5\u10D4\u10DC\u10D8 \u10D0\u10DC\u10D2\u10D0\u10E0\u10D8\u10E8\u10D8\u10D3\u10D0\u10DC {{date}}-\u10E1 {{ipAddress}}-\u10D3\u10D0\u10DC.",
    contactAdmin: "\u10D7\u10E3 \u10D4\u10E1 \u10D7\u10E5\u10D5\u10D4\u10DC \u10D0\u10E0 \u10D8\u10E7\u10D0\u10D5\u10D8\u10D7, \u10D2\u10D7\u10EE\u10DD\u10D5\u10D7, \u10D3\u10D0\u10E3\u10D9\u10D0\u10D5\u10E8\u10D8\u10E0\u10D3\u10D4\u10D7 \u10D0\u10D3\u10DB\u10D8\u10DC\u10D8\u10E1\u10E2\u10E0\u10D0\u10E2\u10DD\u10E0\u10E1."
  },
  "event-remove_totp": {
    subject: "\u10EC\u10D0\u10E8\u10D0\u10DA\u10D4 OTP",
    message: "OTP \u10EC\u10D0\u10D8\u10E8\u10D0\u10DA\u10D0 \u10D7\u10E5\u10D5\u10D4\u10DC\u10D8 \u10D0\u10DC\u10D2\u10D0\u10E0\u10D8\u10E8\u10D8\u10D3\u10D0\u10DC {{date}}-\u10D6\u10D4 {{ipAddress}}-\u10D3\u10D0\u10DC.",
    contactAdmin: "\u10D7\u10E3 \u10D4\u10E1 \u10D7\u10E5\u10D5\u10D4\u10DC \u10D0\u10E0 \u10D8\u10E7\u10D0\u10D5\u10D8\u10D7, \u10D2\u10D7\u10EE\u10DD\u10D5\u10D7, \u10D3\u10D0\u10E3\u10D9\u10D0\u10D5\u10E8\u10D8\u10E0\u10D3\u10D4\u10D7 \u10D0\u10D3\u10DB\u10D8\u10DC\u10D8\u10E1\u10E2\u10E0\u10D0\u10E2\u10DD\u10E0\u10E1."
  },
  "event-update_credential": {
    subject: "\u10D2\u10D0\u10DC\u10D0\u10D0\u10EE\u10DA\u10D4\u10D7 \u10E0\u10EC\u10DB\u10E3\u10DC\u10D4\u10D1\u10D0\u10D7\u10D0 \u10E1\u10D8\u10D2\u10D4\u10DA\u10D4\u10D1\u10D8",
    message: "\u10D7\u10E5\u10D5\u10D4\u10DC\u10D8 {{credentialType}} \u10E0\u10EC\u10DB\u10E3\u10DC\u10D4\u10D1\u10D0\u10D7\u10D0 \u10E1\u10D8\u10D2\u10D4\u10DA\u10D4\u10D1\u10D8 \u10E8\u10D4\u10D8\u10EA\u10D5\u10D0\u10DA\u10D0 {{date}}-\u10D3\u10D0\u10DC {{ipAddress}}-\u10D3\u10D0\u10DC.",
    contactAdmin: "\u10D7\u10E3 \u10D4\u10E1 \u10D7\u10E5\u10D5\u10D4\u10DC \u10D0\u10E0 \u10D8\u10E7\u10D0\u10D5\u10D8\u10D7, \u10D2\u10D7\u10EE\u10DD\u10D5\u10D7, \u10D3\u10D0\u10E3\u10D9\u10D0\u10D5\u10E8\u10D8\u10E0\u10D3\u10D4\u10D7 \u10D0\u10D3\u10DB\u10D8\u10DC\u10D8\u10E1\u10E2\u10E0\u10D0\u10E2\u10DD\u10E0\u10E1."
  },
  "event-update_password": {
    subject: "\u10DE\u10D0\u10E0\u10DD\u10DA\u10D8\u10E1 \u10D2\u10D0\u10DC\u10D0\u10EE\u10DA\u10D4\u10D1\u10D0",
    message: "\u10D7\u10E5\u10D5\u10D4\u10DC\u10D8 \u10DE\u10D0\u10E0\u10DD\u10DA\u10D8 \u10E8\u10D4\u10D8\u10EA\u10D5\u10D0\u10DA\u10D0 {{date}}-\u10E1 {{ipAddress}}-\u10D3\u10D0\u10DC.",
    contactAdmin: "\u10D7\u10E3 \u10D4\u10E1 \u10D7\u10E5\u10D5\u10D4\u10DC \u10D0\u10E0 \u10D8\u10E7\u10D0\u10D5\u10D8\u10D7, \u10D2\u10D7\u10EE\u10DD\u10D5\u10D7, \u10D3\u10D0\u10E3\u10D9\u10D0\u10D5\u10E8\u10D8\u10E0\u10D3\u10D4\u10D7 \u10D0\u10D3\u10DB\u10D8\u10DC\u10D8\u10E1\u10E2\u10E0\u10D0\u10E2\u10DD\u10E0\u10E1."
  },
  "event-update_totp": {
    subject: "\u10D2\u10D0\u10DC\u10D0\u10EE\u10DA\u10D4\u10D1\u10D0 OTP",
    message: "OTP \u10D2\u10D0\u10DC\u10D0\u10EE\u10DA\u10D3\u10D0 \u10D7\u10E5\u10D5\u10D4\u10DC\u10D8 \u10D0\u10DC\u10D2\u10D0\u10E0\u10D8\u10E8\u10D8\u10E1\u10D7\u10D5\u10D8\u10E1 {{date}}-\u10D6\u10D4 {{ipAddress}}-\u10D3\u10D0\u10DC.",
    contactAdmin: "\u10D7\u10E3 \u10D4\u10E1 \u10D7\u10E5\u10D5\u10D4\u10DC \u10D0\u10E0 \u10D8\u10E7\u10D0\u10D5\u10D8\u10D7, \u10D2\u10D7\u10EE\u10DD\u10D5\u10D7, \u10D3\u10D0\u10E3\u10D9\u10D0\u10D5\u10E8\u10D8\u10E0\u10D3\u10D4\u10D7 \u10D0\u10D3\u10DB\u10D8\u10DC\u10D8\u10E1\u10E2\u10E0\u10D0\u10E2\u10DD\u10E0\u10E1."
  },
  "event-user_disabled_by_permanent_lockout": {
    subject: "\u10DB\u10DD\u10DB\u10EE\u10DB\u10D0\u10E0\u10D4\u10D1\u10D4\u10DA\u10D8 \u10D2\u10D0\u10DB\u10DD\u10E0\u10D7\u10E3\u10DA\u10D8\u10D0 \u10DB\u10E3\u10D3\u10DB\u10D8\u10D5\u10D8 \u10D3\u10D0\u10D1\u10DA\u10DD\u10D9\u10D5\u10D8\u10D7",
    message: "\u10D7\u10E5\u10D5\u10D4\u10DC\u10D8 \u10DB\u10DD\u10DB\u10EE\u10DB\u10D0\u10E0\u10D4\u10D1\u10D4\u10DA\u10D8 \u10E1\u10D0\u10DB\u10E3\u10D3\u10D0\u10DB\u10DD\u10D3 \u10D2\u10D0\u10D7\u10D8\u10E8\u10E3\u10DA\u10D8\u10D0 {{date}}-\u10D6\u10D4 \u10DB\u10E0\u10D0\u10D5\u10D0\u10DA\u10D8 \u10EC\u10D0\u10E0\u10E3\u10DB\u10D0\u10E2\u10D4\u10D1\u10D4\u10DA\u10D8 \u10DB\u10EA\u10D3\u10D4\u10DA\u10DD\u10D1\u10D8\u10E1 \u10D2\u10D0\u10DB\u10DD.",
    contactAdmin: "\u10D2\u10D7\u10EE\u10DD\u10D5\u10D7, \u10D3\u10D0\u10E3\u10D9\u10D0\u10D5\u10E8\u10D8\u10E0\u10D3\u10D4\u10D7 \u10D0\u10D3\u10DB\u10D8\u10DC\u10D8\u10E1\u10E2\u10E0\u10D0\u10E2\u10DD\u10E0\u10E1."
  },
  "event-user_disabled_by_temporary_lockout": {
    subject: "\u10DB\u10DD\u10DB\u10EE\u10DB\u10D0\u10E0\u10D4\u10D1\u10D4\u10DA\u10D8 \u10D2\u10D0\u10DB\u10DD\u10E0\u10D7\u10E3\u10DA\u10D8\u10D0 \u10D3\u10E0\u10DD\u10D4\u10D1\u10D8\u10D7\u10D8 \u10D3\u10D0\u10D1\u10DA\u10DD\u10D9\u10D5\u10D8\u10D7",
    message: "\u10D7\u10E5\u10D5\u10D4\u10DC\u10D8 \u10DB\u10DD\u10DB\u10EE\u10DB\u10D0\u10E0\u10D4\u10D1\u10D4\u10DA\u10D8 \u10D3\u10E0\u10DD\u10D4\u10D1\u10D8\u10D7 \u10D2\u10D0\u10D7\u10D8\u10E8\u10E3\u10DA\u10D8\u10D0 {{date}}-\u10D6\u10D4 \u10DB\u10E0\u10D0\u10D5\u10D0\u10DA\u10EF\u10D4\u10E0\u10D0\u10D3\u10D8 \u10EC\u10D0\u10E0\u10E3\u10DB\u10D0\u10E2\u10D4\u10D1\u10D4\u10DA\u10D8 \u10DB\u10EA\u10D3\u10D4\u10DA\u10DD\u10D1\u10D8\u10E1 \u10D2\u10D0\u10DB\u10DD.",
    contactAdmin: "\u10D2\u10D7\u10EE\u10DD\u10D5\u10D7, \u10D3\u10D0\u10E3\u10D9\u10D0\u10D5\u10E8\u10D8\u10E0\u10D3\u10D4\u10D7 \u10D0\u10D3\u10DB\u10D8\u10DC\u10D8\u10E1\u10E2\u10E0\u10D0\u10E2\u10DD\u10E0\u10E1."
  },
  executeActions: {
    subject: "\u10D2\u10D0\u10DC\u10D0\u10D0\u10EE\u10DA\u10D4\u10D7 \u10D7\u10E5\u10D5\u10D4\u10DC\u10D8 \u10D0\u10DC\u10D2\u10D0\u10E0\u10D8\u10E8\u10D8",
    message: "\u10D7\u10E5\u10D5\u10D4\u10DC\u10DB\u10D0 \u10D0\u10D3\u10DB\u10D8\u10DC\u10D8\u10E1\u10E2\u10E0\u10D0\u10E2\u10DD\u10E0\u10DB\u10D0 \u10D0\u10EE\u10DA\u10D0\u10EE\u10D0\u10DC \u10DB\u10DD\u10D8\u10D7\u10EE\u10DD\u10D5\u10D0 \u10D7\u10E5\u10D5\u10D4\u10DC\u10D8 {{realmName}} \u10D0\u10DC\u10D2\u10D0\u10E0\u10D8\u10E8\u10D8\u10E1 \u10D2\u10D0\u10DC\u10D0\u10EE\u10DA\u10D4\u10D1\u10D0 \u10E8\u10D4\u10DB\u10D3\u10D4\u10D2\u10D8 \u10E5\u10DB\u10D4\u10D3\u10D4\u10D1\u10D4\u10D1\u10D8\u10D7:",
    clickLink: "\u10D3\u10D0\u10D0\u10EC\u10D9\u10D0\u10DE\u10E3\u10DC\u10D4\u10D7 \u10E5\u10D5\u10D4\u10DB\u10DD\u10D7 \u10DB\u10DD\u10EA\u10D4\u10DB\u10E3\u10DA \u10D1\u10DB\u10E3\u10DA\u10D6\u10D4 \u10D0\u10DB \u10DE\u10E0\u10DD\u10EA\u10D4\u10E1\u10D8\u10E1 \u10D3\u10D0\u10E1\u10D0\u10EC\u10E7\u10D4\u10D1\u10D0\u10D3.",
    linkExpiration: "\u10D0\u10DB \u10D1\u10DB\u10E3\u10DA\u10E1 \u10D5\u10D0\u10D3\u10D0 \u10D0\u10DB\u10DD\u10D8\u10EC\u10E3\u10E0\u10D4\u10D1\u10D0 {{expiration}}-\u10E8\u10D8.",
    ignoreMessage: "\u10D7\u10E3 \u10D0\u10E0 \u10D8\u10EA\u10D8\u10D7, \u10E0\u10DD\u10DB \u10D7\u10E5\u10D5\u10D4\u10DC\u10DB\u10D0 \u10D0\u10D3\u10DB\u10D8\u10DC\u10D8\u10E1\u10E2\u10E0\u10D0\u10E2\u10DD\u10E0\u10DB\u10D0 \u10DB\u10DD\u10D8\u10D7\u10EE\u10DD\u10D5\u10D0 \u10D4\u10E1, \u10E3\u10D1\u10E0\u10D0\u10DA\u10DD\u10D3 \u10D8\u10D2\u10DC\u10DD\u10E0\u10D8\u10E0\u10D4\u10D1\u10D0 \u10D2\u10D0\u10E3\u10D9\u10D4\u10D7\u10D4\u10D7 \u10D0\u10DB \u10E8\u10D4\u10E2\u10E7\u10DD\u10D1\u10D8\u10DC\u10D4\u10D1\u10D0\u10E1 \u10D3\u10D0 \u10D0\u10E0\u10D0\u10E4\u10D4\u10E0\u10D8 \u10E8\u10D4\u10D8\u10EA\u10D5\u10DA\u10D4\u10D1\u10D0.",
    updateAccountButton: "\u10D0\u10DC\u10D2\u10D0\u10E0\u10D8\u10E8\u10D8\u10E1 \u10D2\u10D0\u10DC\u10D0\u10EE\u10DA\u10D4\u10D1\u10D0"
  },
  "identity-provider-link": {
    subject: "\u10D3\u10D0\u10D0\u10D9\u10D0\u10D5\u10E8\u10D8\u10E0\u10D4\u10D7 {0} \u10D7\u10E5\u10D5\u10D4\u10DC\u10E1 \u10D0\u10DC\u10D2\u10D0\u10E0\u10D8\u10E8\u10D7\u10D0\u10DC",
    message: "\u10D5\u10D8\u10DC\u10DB\u10D4\u10E1 \u10E1\u10E3\u10E0\u10E1 \u10D3\u10D0\u10D0\u10D9\u10D0\u10D5\u10E8\u10D8\u10E0\u10DD\u10E1 \u10D7\u10E5\u10D5\u10D4\u10DC\u10D8 {{identityProviderDisplayName}} \u10D0\u10DC\u10D2\u10D0\u10E0\u10D8\u10E8\u10D8 \u10DB\u10DD\u10DB\u10EE\u10DB\u10D0\u10E0\u10D4\u10D1\u10DA\u10D8\u10E1 {{realmName}} \u10D0\u10DC\u10D2\u10D0\u10E0\u10D8\u10E8\u10D7\u10D0\u10DC {{username}}.",
    clickLink: "\u10D7\u10E3 \u10D4\u10E1 \u10D7\u10E5\u10D5\u10D4\u10DC \u10D8\u10E7\u10D0\u10D5\u10D8\u10D7, \u10D3\u10D0\u10D0\u10EC\u10D9\u10D0\u10DE\u10E3\u10DC\u10D4\u10D7 \u10E5\u10D5\u10D4\u10DB\u10DD\u10D7 \u10DB\u10DD\u10EA\u10D4\u10DB\u10E3\u10DA \u10D1\u10DB\u10E3\u10DA\u10D6\u10D4 \u10D0\u10DC\u10D2\u10D0\u10E0\u10D8\u10E8\u10D4\u10D1\u10D8\u10E1 \u10D3\u10D0\u10E1\u10D0\u10D9\u10D0\u10D5\u10E8\u10D8\u10E0\u10D4\u10D1\u10DA\u10D0\u10D3",
    linkExpiration: "\u10D0\u10DB \u10D1\u10DB\u10E3\u10DA\u10E1 \u10D5\u10D0\u10D3\u10D0 \u10D0\u10DB\u10DD\u10D8\u10EC\u10E3\u10E0\u10D4\u10D1\u10D0 {{expiration}}-\u10E8\u10D8.",
    ignoreMessage: "\u10D7\u10E3 \u10D0\u10E0 \u10D2\u10E1\u10E3\u10E0\u10D7 \u10D0\u10DB \u10DB\u10DD\u10D3\u10D8\u10E4\u10D8\u10D9\u10D0\u10EA\u10D8\u10D8\u10E1 \u10D2\u10D0\u10D2\u10E0\u10EB\u10D4\u10DA\u10D4\u10D1\u10D0, \u10E3\u10D1\u10E0\u10D0\u10DA\u10DD\u10D3 \u10D8\u10D2\u10DC\u10DD\u10E0\u10D8\u10E0\u10D4\u10D1\u10D0 \u10D2\u10D0\u10E3\u10D9\u10D4\u10D7\u10D4\u10D7 \u10D0\u10DB \u10E8\u10D4\u10E2\u10E7\u10DD\u10D1\u10D8\u10DC\u10D4\u10D1\u10D0\u10E1.",
    linkAccountsButton: "\u10D3\u10D0\u10D0\u10D9\u10D0\u10D5\u10E8\u10D8\u10E0\u10D4\u10D7 \u10D0\u10DC\u10D2\u10D0\u10E0\u10D8\u10E8\u10D4\u10D1\u10D8",
    loginInfo: "\u10D7\u10E3 \u10D3\u10D0\u10D0\u10D9\u10D0\u10D5\u10E8\u10D8\u10E0\u10D4\u10D1\u10D7 \u10D0\u10DC\u10D2\u10D0\u10E0\u10D8\u10E8\u10D4\u10D1\u10E1, \u10E8\u10D4\u10EB\u10DA\u10D4\u10D1\u10D7 \u10E8\u10D4\u10EE\u10D5\u10D8\u10D3\u10D4\u10D7 {{identityProviderDisplayName}}-\u10E8\u10D8 {{realmName}}-\u10D3\u10D0\u10DC."
  },
  "org-invite": {
    subject: "\u10DB\u10DD\u10EC\u10D5\u10D4\u10D5\u10D0 {0} \u10DD\u10E0\u10D2\u10D0\u10DC\u10D8\u10D6\u10D0\u10EA\u10D8\u10D0\u10E8\u10D8 \u10D2\u10D0\u10E1\u10D0\u10EC\u10D4\u10D5\u10E0\u10D8\u10D0\u10DC\u10D4\u10D1\u10DA\u10D0\u10D3",
    greeting: "\u10D2\u10D0\u10DB\u10D0\u10E0\u10EF\u10DD\u10D1\u10D0, {{firstName}} {{lastName}}.",
    message: "\u10D7\u10E5\u10D5\u10D4\u10DC \u10DB\u10D8\u10EC\u10D5\u10D4\u10E3\u10DA\u10D8 \u10EE\u10D0\u10E0\u10D7 \u10E8\u10D4\u10E3\u10D4\u10E0\u10D7\u10D3\u10D4\u10D7 {{organizationName}} \u10DD\u10E0\u10D2\u10D0\u10DC\u10D8\u10D6\u10D0\u10EA\u10D8\u10D0\u10E1. \u10D3\u10D0\u10D0\u10EC\u10D9\u10D0\u10DE\u10E3\u10DC\u10D4\u10D7 \u10E5\u10D5\u10D4\u10DB\u10DD\u10D7 \u10DB\u10DD\u10EA\u10D4\u10DB\u10E3\u10DA \u10D1\u10DB\u10E3\u10DA\u10D6\u10D4 \u10D2\u10D0\u10E1\u10D0\u10EC\u10D4\u10D5\u10E0\u10D8\u10D0\u10DC\u10D4\u10D1\u10DA\u10D0\u10D3.",
    linkExpiration: "\u10D0\u10DB \u10D1\u10DB\u10E3\u10DA\u10E1 \u10D5\u10D0\u10D3\u10D0 \u10D0\u10DB\u10DD\u10D8\u10EC\u10E3\u10E0\u10D4\u10D1\u10D0 {{expiration}}-\u10E8\u10D8.",
    ignoreMessage: "\u10D7\u10E3 \u10D0\u10E0 \u10D2\u10E1\u10E3\u10E0\u10D7 \u10DD\u10E0\u10D2\u10D0\u10DC\u10D8\u10D6\u10D0\u10EA\u10D8\u10D0\u10E8\u10D8 \u10D2\u10D0\u10EC\u10D4\u10D5\u10E0\u10D8\u10D0\u10DC\u10D4\u10D1\u10D0, \u10E3\u10D1\u10E0\u10D0\u10DA\u10DD\u10D3 \u10E3\u10D2\u10E3\u10DA\u10D4\u10D1\u10D4\u10DA\u10E7\u10DD\u10D7 \u10D4\u10E1 \u10E8\u10D4\u10E2\u10E7\u10DD\u10D1\u10D8\u10DC\u10D4\u10D1\u10D0.",
    joinButton: "\u10E8\u10D4\u10E3\u10D4\u10E0\u10D7\u10D3\u10D8 \u10DD\u10E0\u10D2\u10D0\u10DC\u10D8\u10D6\u10D0\u10EA\u10D8\u10D0\u10E1"
  },
  "password-reset": {
    subject: "\u10DE\u10D0\u10E0\u10DD\u10DA\u10D8\u10E1 \u10D2\u10D0\u10D3\u10D0\u10E2\u10D5\u10D8\u10E0\u10D7\u10D5\u10D0",
    message: "\u10D5\u10D8\u10E6\u10D0\u10EA\u10D0\u10DB \u10D0\u10EE\u10DA\u10D0\u10EE\u10D0\u10DC \u10DB\u10DD\u10D8\u10D7\u10EE\u10DD\u10D5\u10D0 \u10D7\u10E5\u10D5\u10D4\u10DC\u10D8 {{realmName}} \u10D0\u10DC\u10D2\u10D0\u10E0\u10D8\u10E8\u10D8\u10E1 \u10D0\u10D5\u10E2\u10DD\u10E0\u10D8\u10D6\u10D0\u10EA\u10D8\u10D8\u10E1 \u10DB\u10DD\u10DC\u10D0\u10EA\u10D4\u10DB\u10D4\u10D1\u10D8\u10E1 \u10E8\u10D4\u10EA\u10D5\u10DA\u10D0. \u10D7\u10E3 \u10D4\u10E1 \u10D7\u10E5\u10D5\u10D4\u10DC \u10D8\u10E7\u10D0\u10D5\u10D8\u10D7, \u10D3\u10D0\u10D0\u10EC\u10D9\u10D0\u10DE\u10E3\u10DC\u10D4\u10D7 \u10E5\u10D5\u10D4\u10DB\u10DD\u10D7 \u10DB\u10DD\u10EA\u10D4\u10DB\u10E3\u10DA \u10D1\u10DB\u10E3\u10DA\u10D6\u10D4 \u10DB\u10D0\u10D7\u10D8 \u10D2\u10D0\u10D3\u10D0\u10E2\u10D5\u10D8\u10E0\u10D7\u10D5\u10D8\u10E1\u10D7\u10D5\u10D8\u10E1.",
    linkExpiration: "\u10D0\u10DB \u10D1\u10DB\u10E3\u10DA\u10E1 \u10D5\u10D0\u10D3\u10D0 \u10D0\u10DB\u10DD\u10D8\u10EC\u10E3\u10E0\u10D4\u10D1\u10D0 {{expiration}}-\u10E8\u10D8.",
    ignoreMessage: "\u10D7\u10E3 \u10D0\u10E0 \u10D2\u10E1\u10E3\u10E0\u10D7 \u10D7\u10E5\u10D5\u10D4\u10DC\u10D8 \u10E0\u10EC\u10DB\u10E3\u10DC\u10D4\u10D1\u10D0\u10D7\u10D0 \u10E1\u10D8\u10D2\u10D4\u10DA\u10D4\u10D1\u10D8\u10E1 \u10D2\u10D0\u10D3\u10D0\u10E2\u10D5\u10D8\u10E0\u10D7\u10D5\u10D0, \u10E3\u10D1\u10E0\u10D0\u10DA\u10DD\u10D3 \u10D3\u10D0\u10D0\u10D8\u10D2\u10DC\u10DD\u10E0\u10D4\u10D7 \u10D4\u10E1 \u10E8\u10D4\u10E2\u10E7\u10DD\u10D1\u10D8\u10DC\u10D4\u10D1\u10D0 \u10D3\u10D0 \u10D0\u10E0\u10D0\u10E4\u10D4\u10E0\u10D8 \u10E8\u10D4\u10D8\u10EA\u10D5\u10DA\u10D4\u10D1\u10D0.",
    resetButton: "\u10E0\u10EC\u10DB\u10E3\u10DC\u10D4\u10D1\u10D0\u10D7\u10D0 \u10E1\u10D8\u10D2\u10D4\u10DA\u10D4\u10D1\u10D8\u10E1 \u10D2\u10D0\u10D3\u10D0\u10E2\u10D5\u10D8\u10E0\u10D7\u10D5\u10D0"
  },
  requiredAction: {
    configure_totp: "\u10D9\u10DD\u10DC\u10E4\u10D8\u10D2\u10E3\u10E0\u10D0\u10EA\u10D8\u10D0 OTP",
    terms_and_conditions: "\u10EC\u10D4\u10E1\u10D4\u10D1\u10D8 \u10D3\u10D0 \u10DE\u10D8\u10E0\u10DD\u10D1\u10D4\u10D1\u10D8",
    update_password: "\u10DE\u10D0\u10E0\u10DD\u10DA\u10D8\u10E1 \u10D2\u10D0\u10DC\u10D0\u10EE\u10DA\u10D4\u10D1\u10D0",
    update_profile: "\u10DE\u10E0\u10DD\u10E4\u10D8\u10DA\u10D8\u10E1 \u10D2\u10D0\u10DC\u10D0\u10EE\u10DA\u10D4\u10D1\u10D0",
    verify_email: "\u10D3\u10D0\u10D0\u10D3\u10D0\u10E1\u10E2\u10E3\u10E0\u10D4\u10D7 \u10D4\u10DA\u10E4\u10DD\u10E1\u10E2\u10D0",
    configure_recovery_authn_codes: "\u10E8\u10D4\u10E5\u10DB\u10D4\u10DC\u10D8\u10D7 \u10D0\u10E6\u10D3\u10D2\u10D4\u10DC\u10D8\u10E1 \u10D9\u10DD\u10D3\u10D4\u10D1\u10D8",
    seconds: "{0,choice,0#\u10EC\u10D0\u10DB\u10D8|1#\u10EC\u10D0\u10DB\u10D8|1<\u10EC\u10D0\u10DB\u10D8}",
    minutes: "{0,choice,0#\u10EC\u10E3\u10D7\u10D4\u10D1\u10D8|1#\u10EC\u10E3\u10D7\u10D8|1<\u10EC\u10E3\u10D7\u10D4\u10D1\u10D8}",
    hours: "{0,choice,0#\u10E1\u10D0\u10D0\u10D7\u10D4\u10D1\u10D8|1#\u10E1\u10D0\u10D0\u10D7\u10D8|1<\u10E1\u10D0\u10D0\u10D7\u10D4\u10D1\u10D8}",
    days: "{0,choice,0#\u10D3\u10E6\u10D4\u10D4\u10D1\u10D8|1#\u10D3\u10E6\u10D4|1<\u10D3\u10E6\u10D4\u10D4\u10D1\u10D8}"
  },
  footer: {
    allRightsReserved: "\xA9 {{currentYear}} {{realmName}}, \u10E7\u10D5\u10D4\u10DA\u10D0 \u10E3\u10E4\u10DA\u10D4\u10D1\u10D0 \u10D3\u10D0\u10EA\u10E3\u10DA\u10D8\u10D0"
  }
};

// src/email/locales/lt/translation.json
var translation_default16 = {
  "email-test": {
    subject: "El. pa\u0161to testas",
    greeting: "Labas drauge",
    message: "Tai bandomasis el. lai\u0161kas nuo {{realmName}}. Jei gavote \u0161\u012F el. lai\u0161k\u0105, tai rei\u0161kia, kad j\u016Bs\u0173 el. pa\u0161to nustatymai sukonfig\u016Bruoti tinkamai."
  },
  "email-update-confirmation": {
    subject: "Patvirtinkite nauj\u0105 el",
    linkExpiration: "\u0160i nuoroda nustos galioti per {{expiration}}.",
    updateEmailAddress: "Nor\u0117dami atnaujinti savo {{realmName}} paskyr\u0105 el. pa\u0161to adresu {{newEmail}}",
    clickLinkBelow: "spustel\u0117kite \u017Eemiau esan\u010Di\u0105 nuorod\u0105",
    updateEmail: "Atnaujinti el",
    ignoreMessage: "Jei nenorite t\u0119sti \u0161io pakeitimo, tiesiog nepaisykite \u0161io prane\u0161imo."
  },
  "email-verification": {
    subject: "Patvirtinkite el",
    message: "Ka\u017Ekas suk\u016Br\u0117 {{firstName}} paskyr\u0105 \u0161iuo el. pa\u0161to adresu. Jei tai buvote j\u016Bs, spustel\u0117kite toliau pateikt\u0105 nuorod\u0105, kad patvirtintum\u0117te savo el. pa\u0161to adres\u0105.",
    verifyButton: "Patvirtinkite el",
    linkExpiration: "\u0160i nuoroda nustos galioti per {{expiration}}.",
    ignoreMessage: "Jei nesuk\u016Br\u0117te \u0161ios paskyros, tiesiog nepaisykite \u0161io prane\u0161imo."
  },
  "event-login_error": {
    subject: "Prisijungimo klaida",
    message: "{{date}} nuo {{ipAddress}} buvo aptiktas nes\u0117kmingas bandymas prisijungti prie j\u016Bs\u0173 paskyros.",
    contactAdmin: "Jei tai ne j\u016Bs, susisiekite su administratoriumi."
  },
  "event-remove_credential": {
    subject: "Pa\u0161alinti kredencialus",
    message: "Kredencialas {{credentialType}} buvo pa\u0161alintas i\u0161 j\u016Bs\u0173 paskyros {{date}} nuo {{ipAddress}}.",
    contactAdmin: "Jei tai ne j\u016Bs, susisiekite su administratoriumi."
  },
  "event-remove_totp": {
    subject: "Pa\u0161alinti OTP",
    message: "OTP buvo pa\u0161alintas i\u0161 j\u016Bs\u0173 paskyros {{date}} nuo {{ipAddress}}.",
    contactAdmin: "Jei tai ne j\u016Bs, susisiekite su administratoriumi."
  },
  "event-update_credential": {
    subject: "Atnaujinti kredencialus",
    message: "J\u016Bs\u0173 {{credentialType}} kredencialas buvo pakeistas {{date}} i\u0161 {{ipAddress}}.",
    contactAdmin: "Jei tai ne j\u016Bs, susisiekite su administratoriumi."
  },
  "event-update_password": {
    subject: "Atnaujinti slapta\u017Eod\u012F",
    message: "J\u016Bs\u0173 slapta\u017Eodis buvo pakeistas {{date}} nuo {{ipAddress}}.",
    contactAdmin: "Jei tai ne j\u016Bs, susisiekite su administratoriumi."
  },
  "event-update_totp": {
    subject: "Atnaujinti OTP",
    message: "OTP buvo atnaujintas j\u016Bs\u0173 paskyroje {{date}} nuo {{ipAddress}}.",
    contactAdmin: "Jei tai ne j\u016Bs, susisiekite su administratoriumi."
  },
  "event-user_disabled_by_permanent_lockout": {
    subject: "Vartotojas i\u0161jungtas d\u0117l nuolatinio blokavimo",
    message: "J\u016Bs\u0173 naudotojas buvo visam laikui i\u0161jungtas d\u0117l keli\u0173 nes\u0117kming\u0173 bandym\u0173 {{date}}.",
    contactAdmin: "Susisiekite su administratoriumi."
  },
  "event-user_disabled_by_temporary_lockout": {
    subject: "Vartotojas i\u0161jungtas d\u0117l laikino blokavimo",
    message: "J\u016Bs\u0173 naudotojas buvo laikinai i\u0161jungtas d\u0117l keli\u0173 nes\u0117kming\u0173 bandym\u0173 {{date}}.",
    contactAdmin: "Susisiekite su administratoriumi."
  },
  executeActions: {
    subject: "Atnaujinkite savo paskyr\u0105",
    message: "J\u016Bs\u0173 administratorius k\u0105 tik papra\u0161\u0117 atnaujinti {{realmName}} paskyr\u0105, atlikdamas \u0161iuos veiksmus:",
    clickLink: "Nor\u0117dami prad\u0117ti \u0161\u012F proces\u0105, spustel\u0117kite toliau pateikt\u0105 nuorod\u0105.",
    linkExpiration: "\u0160i nuoroda nustos galioti per {{expiration}}.",
    ignoreMessage: "Jei ne\u017Einote, kad j\u016Bs\u0173 administratorius to papra\u0161\u0117, tiesiog nepaisykite \u0161io prane\u0161imo ir niekas nepasikeis.",
    updateAccountButton: "Atnaujinti paskyr\u0105"
  },
  "identity-provider-link": {
    subject: "Susiekite {0} su savo paskyra",
    message: "Ka\u017Ekas nori susieti j\u016Bs\u0173 {{identityProviderDisplayName}} paskyr\u0105 su vartotojo {{username}} {{realmName}} paskyra.",
    clickLink: "Jei tai buvote j\u016Bs, spustel\u0117kite toliau pateikt\u0105 nuorod\u0105, kad susietum\u0117te paskyras",
    linkExpiration: "\u0160i nuoroda nustos galioti per {{expiration}}.",
    ignoreMessage: "Jei nenorite t\u0119sti \u0161io pakeitimo, tiesiog nepaisykite \u0161io prane\u0161imo.",
    linkAccountsButton: "Susieti paskyras",
    loginInfo: "Jei susiesite paskyras, gal\u0117site prisijungti prie {{identityProviderDisplayName}} iki {{realmName}}."
  },
  "org-invite": {
    subject: "Kvietimas prisijungti prie {0} organizacijos",
    greeting: "Sveiki, {{firstName}} {{lastName}}.",
    message: "Jus pakviet\u0117 prisijungti prie {{organizationName}} organizacijos. Nor\u0117dami prisijungti, spustel\u0117kite \u017Eemiau esan\u010Di\u0105 nuorod\u0105.",
    linkExpiration: "\u0160i nuoroda nustos galioti per {{expiration}}.",
    ignoreMessage: "Jei nenorite prisijungti prie organizacijos, tiesiog nepaisykite \u0161io prane\u0161imo.",
    joinButton: "Prisijunkite prie organizacijos"
  },
  "password-reset": {
    subject: "I\u0161 naujo nustatyti slapta\u017Eod\u012F",
    message: "Ka\u017Ekas k\u0105 tik papra\u0161\u0117 pakeisti j\u016Bs\u0173 {{realmName}} paskyros kredencialus. Jei tai buvote j\u016Bs, spustel\u0117kite toliau pateikt\u0105 nuorod\u0105, kad nustatytum\u0117te juos i\u0161 naujo.",
    linkExpiration: "\u0160i nuoroda nustos galioti per {{expiration}}.",
    ignoreMessage: "Jei nenorite i\u0161 naujo nustatyti kredencial\u0173, tiesiog nepaisykite \u0161io prane\u0161imo ir niekas nepasikeis.",
    resetButton: "I\u0161 naujo nustatyti kredencialus"
  },
  requiredAction: {
    configure_totp: "Konfig\u016Bruoti OTP",
    terms_and_conditions: "Taisykl\u0117s ir s\u0105lygos",
    update_password: "Atnaujinti slapta\u017Eod\u012F",
    update_profile: "Atnaujinti profil\u012F",
    verify_email: "Patvirtinkite el",
    configure_recovery_authn_codes: "Generuokite atk\u016Brimo kodus",
    seconds: "{0,choice,0#sekund\u017Ei\u0173|1#sekund\u0117|1<sekund\u017Ei\u0173}",
    minutes: "{0,choice,0#minu\u010Di\u0173|1#minut\u0119|1<minu\u010Di\u0173}",
    hours: "{0,choice,0#valand\u0173|1#valanda|1<valand\u0173}",
    days: "{0,choice,0#dien\u0173|1#diena|1<dien\u0173}"
  },
  footer: {
    allRightsReserved: "\xA9 {{currentYear}} {{realmName}}, Visos teis\u0117s saugomos"
  }
};

// src/email/locales/lv/translation.json
var translation_default17 = {
  "email-test": {
    subject: "E-pasta p\u0101rbaude",
    greeting: "Sveiks draugs",
    message: "\u0160is ir testa e-pasts no {{realmName}}. Ja sa\u0146\u0113m\u0101t \u0161o e-pasta zi\u0146ojumu, tas noz\u012Bm\u0113, ka j\u016Bsu e-pasta iestat\u012Bjumi ir pareizi konfigur\u0113ti."
  },
  "email-update-confirmation": {
    subject: "Apstipriniet jauno e-pastu",
    linkExpiration: "\u0160\u012Bs saites der\u012Bguma termi\u0146\u0161 beigsies {{expiration}}.",
    updateEmailAddress: "Lai atjaunin\u0101tu savu {{realmName}} kontu ar e-pasta adresi {{newEmail}}",
    clickLinkBelow: "noklik\u0161\u0137iniet uz saites zem\u0101k",
    updateEmail: "Atjaunin\u0101t e-pastu",
    ignoreMessage: "Ja nev\u0113laties turpin\u0101t \u0161o modifik\u0101ciju, vienk\u0101r\u0161i ignor\u0113jiet \u0161o zi\u0146ojumu."
  },
  "email-verification": {
    subject: "Apstipriniet e-pastu",
    message: "K\u0101ds ir izveidojis {{firstName}} kontu ar \u0161o e-pasta adresi. Ja tas bij\u0101t j\u016Bs, noklik\u0161\u0137iniet uz t\u0101l\u0101k eso\u0161\u0101s saites, lai verific\u0113tu savu e-pasta adresi.",
    verifyButton: "Apstipriniet e-pastu",
    linkExpiration: "\u0160\u012Bs saites der\u012Bguma termi\u0146\u0161 beigsies {{expiration}}.",
    ignoreMessage: "Ja neizveidoj\u0101t \u0161o kontu, vienk\u0101r\u0161i ignor\u0113jiet \u0161o zi\u0146ojumu."
  },
  "event-login_error": {
    subject: "Pieteik\u0161an\u0101s k\u013C\u016Bda",
    message: "Neveiksm\u012Bgs pieteik\u0161an\u0101s m\u0113\u0123in\u0101jums j\u016Bsu kont\u0101 tika konstat\u0113ts {{date}} no {{ipAddress}}.",
    contactAdmin: "Ja tas nebij\u0101t j\u016Bs, l\u016Bdzu, sazinieties ar administratoru."
  },
  "event-remove_credential": {
    subject: "No\u0146emt akredit\u0101cijas datus",
    message: "Akredit\u0101cijas dati {{credentialType}} tika no\u0146emti no j\u016Bsu konta {{date}} no {{ipAddress}}.",
    contactAdmin: "Ja tas nebij\u0101t j\u016Bs, l\u016Bdzu, sazinieties ar administratoru."
  },
  "event-remove_totp": {
    subject: "No\u0146emt OTP",
    message: "OTP tika no\u0146emts no j\u016Bsu konta {{date}} no {{ipAddress}}.",
    contactAdmin: "Ja tas nebij\u0101t j\u016Bs, l\u016Bdzu, sazinieties ar administratoru."
  },
  "event-update_credential": {
    subject: "Atjaunin\u0101t akredit\u0101cijas datus",
    message: "J\u016Bsu {{credentialType}} akredit\u0101cijas dati tika main\u012Bti {{date}} no {{ipAddress}}.",
    contactAdmin: "Ja tas nebij\u0101t j\u016Bs, l\u016Bdzu, sazinieties ar administratoru."
  },
  "event-update_password": {
    subject: "Atjaunin\u0101t paroli",
    message: "J\u016Bsu parole tika main\u012Bta {{date}} no {{ipAddress}}.",
    contactAdmin: "Ja tas nebij\u0101t j\u016Bs, l\u016Bdzu, sazinieties ar administratoru."
  },
  "event-update_totp": {
    subject: "Atjaunin\u0101t OTP",
    message: "OTP tika atjaunin\u0101ts j\u016Bsu kontam {{date}} no {{ipAddress}}.",
    contactAdmin: "Ja tas nebij\u0101t j\u016Bs, l\u016Bdzu, sazinieties ar administratoru."
  },
  "event-user_disabled_by_permanent_lockout": {
    subject: "Lietot\u0101js ir atsp\u0113jots past\u0101v\u012Bgas blo\u0137\u0113\u0161anas d\u0113\u013C",
    message: "J\u016Bsu lietot\u0101js ir neatgriezeniski atsp\u0113jots vair\u0101ku neveiksm\u012Bgu m\u0113\u0123in\u0101jumu d\u0113\u013C {{date}}.",
    contactAdmin: "L\u016Bdzu, sazinieties ar administratoru."
  },
  "event-user_disabled_by_temporary_lockout": {
    subject: "Lietot\u0101js ir atsp\u0113jots pagaidu blo\u0137\u0113\u0161anas d\u0113\u013C",
    message: "J\u016Bsu lietot\u0101js ir \u012Bslaic\u012Bgi atsp\u0113jots vair\u0101ku neveiksm\u012Bgu m\u0113\u0123in\u0101jumu d\u0113\u013C {{date}}.",
    contactAdmin: "L\u016Bdzu, sazinieties ar administratoru."
  },
  executeActions: {
    subject: "Atjauniniet savu kontu",
    message: "J\u016Bsu administrators tikko piepras\u012Bja, lai j\u016Bs atjaunin\u0101tu savu {{realmName}} kontu, veicot \u0161\u0101das darb\u012Bbas:",
    clickLink: "Noklik\u0161\u0137iniet uz t\u0101l\u0101k eso\u0161\u0101s saites, lai s\u0101ktu \u0161o procesu.",
    linkExpiration: "\u0160\u012Bs saites der\u012Bguma termi\u0146\u0161 beigsies {{expiration}}.",
    ignoreMessage: "Ja nezin\u0101t, ka j\u016Bsu administrators to ir piepras\u012Bjis, vienk\u0101r\u0161i ignor\u0113jiet \u0161o zi\u0146ojumu, un nekas netiks main\u012Bts.",
    updateAccountButton: "Atjaunin\u0101t kontu"
  },
  "identity-provider-link": {
    subject: "Saistiet {0} ar savu kontu",
    message: "K\u0101ds v\u0113las saist\u012Bt j\u016Bsu {{identityProviderDisplayName}} kontu ar lietot\u0101ja {{username}} {{realmName}} kontu.",
    clickLink: "Ja tas bij\u0101t j\u016Bs, noklik\u0161\u0137iniet uz t\u0101l\u0101k eso\u0161\u0101s saites, lai saist\u012Btu kontus",
    linkExpiration: "\u0160\u012Bs saites der\u012Bguma termi\u0146\u0161 beigsies {{expiration}}.",
    ignoreMessage: "Ja nev\u0113laties turpin\u0101t \u0161o modifik\u0101ciju, vienk\u0101r\u0161i ignor\u0113jiet \u0161o zi\u0146ojumu.",
    linkAccountsButton: "Saistiet kontus",
    loginInfo: "Ja saist\u012Bsit kontus, var\u0113sit pieteikties {{identityProviderDisplayName}} l\u012Bdz {{realmName}}."
  },
  "org-invite": {
    subject: "Uzaicin\u0101jums pievienoties organiz\u0101cijai {0}",
    greeting: "Sveiki, {{firstName}} {{lastName}}.",
    message: "J\u016Bs tik\u0101t uzaicin\u0101ts pievienoties organiz\u0101cijai {{organizationName}}. Noklik\u0161\u0137iniet uz t\u0101l\u0101k eso\u0161\u0101s saites, lai pievienotos.",
    linkExpiration: "\u0160\u012Bs saites der\u012Bguma termi\u0146\u0161 beigsies {{expiration}}.",
    ignoreMessage: "Ja nev\u0113laties pievienoties organiz\u0101cijai, vienk\u0101r\u0161i ignor\u0113jiet \u0161o zi\u0146ojumu.",
    joinButton: "Pievienojieties organiz\u0101cijai"
  },
  "password-reset": {
    subject: "Atiestat\u012Bt paroli",
    message: "K\u0101ds tikko piepras\u012Bja main\u012Bt j\u016Bsu {{realmName}} konta akredit\u0101cijas datus. Ja tas bij\u0101t j\u016Bs, noklik\u0161\u0137iniet uz t\u0101l\u0101k eso\u0161\u0101s saites, lai tos atiestat\u012Btu.",
    linkExpiration: "\u0160\u012Bs saites der\u012Bguma termi\u0146\u0161 beigsies {{expiration}}.",
    ignoreMessage: "Ja nev\u0113laties atiestat\u012Bt savus akredit\u0101cijas datus, vienk\u0101r\u0161i ignor\u0113jiet \u0161o zi\u0146ojumu, un nekas netiks main\u012Bts.",
    resetButton: "Atiestat\u012Bt akredit\u0101cijas datus"
  },
  requiredAction: {
    configure_totp: "Konfigur\u0113t OTP",
    terms_and_conditions: "Noteikumi un nosac\u012Bjumi",
    update_password: "Atjaunin\u0101t paroli",
    update_profile: "Atjaunin\u0101t profilu",
    verify_email: "Apstipriniet e-pastu",
    configure_recovery_authn_codes: "\u0122ener\u0113jiet atkop\u0161anas kodus",
    seconds: "{0,choice,0#sekundes|1#sekunde|1<sekundes}",
    minutes: "{0,choice,0#min\u016Btes|1#min\u016Bte|1<min\u016Btes}",
    hours: "{0,choice,0#stundas|1#stunda|1<stundas}",
    days: "{0,choice,0#dienas|1#diena|1<dienas}"
  },
  footer: {
    allRightsReserved: "\xA9 {{currentYear}} {{realmName}}, Visas ties\u012Bbas aizsarg\u0101tas"
  }
};

// src/email/locales/nl/translation.json
var translation_default18 = {
  "email-test": {
    subject: "E-mailtest",
    greeting: "Hallo vriend",
    message: "Dit is een test-e-mail van {{realmName}}. Als u deze e-mail heeft ontvangen, betekent dit dat uw e-mailinstellingen correct zijn geconfigureerd."
  },
  "email-update-confirmation": {
    subject: "Controleer nieuwe e-mail",
    linkExpiration: "Deze link verloopt binnen {{expiration}}.",
    updateEmailAddress: "Om uw {{realmName}}-account bij te werken met e-mailadres {{newEmail}}",
    clickLinkBelow: "klik op de onderstaande link",
    updateEmail: "E-mail bijwerken",
    ignoreMessage: "Als u niet door wilt gaan met deze wijziging, kunt u dit bericht negeren."
  },
  "email-verification": {
    subject: "E-mail verifi\xEBren",
    message: "Iemand heeft een {{firstName}} account aangemaakt met dit e-mailadres. Als u dit was, klikt u op de onderstaande link om uw e-mailadres te verifi\xEBren.",
    verifyButton: "E-mail verifi\xEBren",
    linkExpiration: "Deze link verloopt binnen {{expiration}}.",
    ignoreMessage: "Als u dit account niet heeft aangemaakt, negeert u dit bericht gewoon."
  },
  "event-login_error": {
    subject: "Inlogfout",
    message: "Er is op {{date}} vanaf {{ipAddress}} een mislukte inlogpoging voor uw account gedetecteerd.",
    contactAdmin: "Bent u dit niet, neem dan contact op met een beheerder."
  },
  "event-remove_credential": {
    subject: "Referentie verwijderen",
    message: "Inloggegevens {{credentialType}} zijn op {{date}} van {{ipAddress}} uit uw account verwijderd.",
    contactAdmin: "Bent u dit niet, neem dan contact op met een beheerder."
  },
  "event-remove_totp": {
    subject: "Verwijder OTP",
    message: "OTP is op {{date}} van {{ipAddress}} uit uw account verwijderd.",
    contactAdmin: "Bent u dit niet, neem dan contact op met een beheerder."
  },
  "event-update_credential": {
    subject: "Referentie bijwerken",
    message: "Uw {{credentialType}}-inloggegevens zijn gewijzigd op {{date}} van {{ipAddress}}.",
    contactAdmin: "Bent u dit niet, neem dan contact op met een beheerder."
  },
  "event-update_password": {
    subject: "Wachtwoord bijwerken",
    message: "Uw wachtwoord is gewijzigd op {{date}} van {{ipAddress}}.",
    contactAdmin: "Bent u dit niet, neem dan contact op met een beheerder."
  },
  "event-update_totp": {
    subject: "Update OTP",
    message: "OTP is bijgewerkt voor uw account op {{date}} vanaf {{ipAddress}}.",
    contactAdmin: "Bent u dit niet, neem dan contact op met een beheerder."
  },
  "event-user_disabled_by_permanent_lockout": {
    subject: "Gebruiker uitgeschakeld door permanente uitsluiting",
    message: "Uw gebruiker is permanent uitgeschakeld vanwege meerdere mislukte pogingen op {{date}}.",
    contactAdmin: "Neem contact op met een beheerder."
  },
  "event-user_disabled_by_temporary_lockout": {
    subject: "Gebruiker uitgeschakeld door tijdelijke uitsluiting",
    message: "Uw gebruiker is tijdelijk uitgeschakeld vanwege meerdere mislukte pogingen op {{date}}.",
    contactAdmin: "Neem contact op met een beheerder."
  },
  executeActions: {
    subject: "Update uw account",
    message: "Uw beheerder heeft u zojuist verzocht uw {{realmName}}-account bij te werken door de volgende actie(s) uit te voeren:",
    clickLink: "Klik op onderstaande link om dit proces te starten.",
    linkExpiration: "Deze link verloopt binnen {{expiration}}.",
    ignoreMessage: "Als u niet weet dat uw beheerder hierom heeft gevraagd, negeert u dit bericht en er wordt niets gewijzigd.",
    updateAccountButton: "Account bijwerken"
  },
  "identity-provider-link": {
    subject: "Koppel {0} aan uw account",
    message: "Iemand wil uw {{identityProviderDisplayName}} account koppelen aan {{realmName}} account van gebruiker {{username}}.",
    clickLink: "Als u dit was, klikt u op de onderstaande link om accounts te koppelen",
    linkExpiration: "Deze link verloopt binnen {{expiration}}.",
    ignoreMessage: "Als u niet door wilt gaan met deze wijziging, kunt u dit bericht negeren.",
    linkAccountsButton: "Accounts koppelen",
    loginInfo: "Als u accounts koppelt, kunt u inloggen op {{identityProviderDisplayName}} tot en met {{realmName}}."
  },
  "org-invite": {
    subject: "Uitnodiging om lid te worden van de organisatie {0}",
    greeting: "Hallo, {{firstName}} {{lastName}}.",
    message: "Je bent uitgenodigd om lid te worden van de organisatie {{organizationName}}. Klik op onderstaande link om mee te doen.",
    linkExpiration: "Deze link verloopt binnen {{expiration}}.",
    ignoreMessage: "Als je geen lid wilt worden van de organisatie, negeer dan gewoon dit bericht.",
    joinButton: "Sluit je aan bij de organisatie"
  },
  "password-reset": {
    subject: "Wachtwoord opnieuw instellen",
    message: "Iemand heeft zojuist verzocht om de inloggegevens van uw {{realmName}}-account te wijzigen. Als jij dit was, klik dan op de onderstaande link om ze opnieuw in te stellen.",
    linkExpiration: "Deze link verloopt binnen {{expiration}}.",
    ignoreMessage: "Als u uw inloggegevens niet opnieuw wilt instellen, negeert u dit bericht en er zal niets worden gewijzigd.",
    resetButton: "Inloggegevens opnieuw instellen"
  },
  requiredAction: {
    configure_totp: "Configureer OTP",
    terms_and_conditions: "Algemene voorwaarden",
    update_password: "Wachtwoord bijwerken",
    update_profile: "Profiel bijwerken",
    verify_email: "E-mail verifi\xEBren",
    configure_recovery_authn_codes: "Herstelcodes genereren",
    seconds: "{0,choice,0#seconden|1#seconde|1<seconden}",
    minutes: "{0,choice,0#notulen|1#minuut|1<notulen}",
    hours: "{0,choice,0#uur|1#uur|1<uur}",
    days: "{0,choice,0#dagen|1#dag|1<dagen}"
  },
  footer: {
    allRightsReserved: "\xA9 {{currentYear}} {{realmName}}, Alle rechten voorbehouden"
  }
};

// src/email/locales/no/translation.json
var translation_default19 = {
  "email-test": {
    subject: "E-posttest",
    greeting: "Hei venn",
    message: "Dette er en test-e-post fra {{realmName}}. Hvis du mottok denne e-posten, betyr det at e-postinnstillingene dine er riktig konfigurert."
  },
  "email-update-confirmation": {
    subject: "Bekreft ny e-post",
    linkExpiration: "Denne koblingen utl\xF8per innen {{expiration}}.",
    updateEmailAddress: "For \xE5 oppdatere {{realmName}}-kontoen din med e-postadresse {{newEmail}}",
    clickLinkBelow: "klikk p\xE5 lenken nedenfor",
    updateEmail: "Oppdater e-post",
    ignoreMessage: "Hvis du ikke vil fortsette med denne endringen, bare ignorer denne meldingen."
  },
  "email-verification": {
    subject: "Bekreft e-post",
    message: "Noen har opprettet en {{firstName}} konto med denne e-postadressen. Hvis dette var deg, klikk p\xE5 linken nedenfor for \xE5 bekrefte e-postadressen din.",
    verifyButton: "Bekreft e-post",
    linkExpiration: "Denne koblingen utl\xF8per innen {{expiration}}.",
    ignoreMessage: "Hvis du ikke opprettet denne kontoen, bare ignorer denne meldingen."
  },
  "event-login_error": {
    subject: "P\xE5loggingsfeil",
    message: "Et mislykket p\xE5loggingsfors\xF8k ble oppdaget til kontoen din p\xE5 {{date}} fra {{ipAddress}}.",
    contactAdmin: "Hvis dette ikke var deg, vennligst kontakt en administrator."
  },
  "event-remove_credential": {
    subject: "Fjern legitimasjon",
    message: "Legitimasjonen {{credentialType}} ble fjernet fra kontoen din {{date}} fra {{ipAddress}}.",
    contactAdmin: "Hvis dette ikke var deg, vennligst kontakt en administrator."
  },
  "event-remove_totp": {
    subject: "Fjern OTP",
    message: "OTP ble fjernet fra kontoen din {{date}} fra {{ipAddress}}.",
    contactAdmin: "Hvis dette ikke var deg, vennligst kontakt en administrator."
  },
  "event-update_credential": {
    subject: "Oppdater legitimasjonen",
    message: "{{credentialType}}-legitimasjonen din ble endret {{date}} fra {{ipAddress}}.",
    contactAdmin: "Hvis dette ikke var deg, vennligst kontakt en administrator."
  },
  "event-update_password": {
    subject: "Oppdater passord",
    message: "Passordet ditt ble endret {{date}} fra {{ipAddress}}.",
    contactAdmin: "Hvis dette ikke var deg, vennligst kontakt en administrator."
  },
  "event-update_totp": {
    subject: "Oppdater OTP",
    message: "OTP ble oppdatert for kontoen din p\xE5 {{date}} fra {{ipAddress}}.",
    contactAdmin: "Hvis dette ikke var deg, vennligst kontakt en administrator."
  },
  "event-user_disabled_by_permanent_lockout": {
    subject: "Bruker deaktivert av permanent lockout",
    message: "Brukeren din har blitt deaktivert permanent p\xE5 grunn av flere mislykkede fors\xF8k p\xE5 {{date}}.",
    contactAdmin: "Vennligst kontakt en administrator."
  },
  "event-user_disabled_by_temporary_lockout": {
    subject: "Bruker deaktivert av midlertidig lockout",
    message: "Brukeren din har blitt deaktivert midlertidig p\xE5 grunn av flere mislykkede fors\xF8k p\xE5 {{date}}.",
    contactAdmin: "Vennligst kontakt en administrator."
  },
  executeActions: {
    subject: "Oppdater kontoen din",
    message: "Administratoren din har nettopp bedt om at du oppdaterer {{realmName}}-kontoen din ved \xE5 utf\xF8re f\xF8lgende handling(er):",
    clickLink: "Klikk p\xE5 lenken nedenfor for \xE5 starte denne prosessen.",
    linkExpiration: "Denne koblingen utl\xF8per innen {{expiration}}.",
    ignoreMessage: "Hvis du ikke er klar over at administratoren din har bedt om dette, bare ignorer denne meldingen og ingenting vil bli endret.",
    updateAccountButton: "Oppdater konto"
  },
  "identity-provider-link": {
    subject: "Koble {0} til kontoen din",
    message: "Noen vil koble {{identityProviderDisplayName}}-kontoen din til {{realmName}}-kontoen til brukeren {{username}}.",
    clickLink: "Hvis dette var deg, klikk p\xE5 koblingen nedenfor for \xE5 koble sammen kontoer",
    linkExpiration: "Denne koblingen utl\xF8per innen {{expiration}}.",
    ignoreMessage: "Hvis du ikke vil fortsette med denne endringen, bare ignorer denne meldingen.",
    linkAccountsButton: "Koble sammen kontoer",
    loginInfo: "Hvis du kobler sammen kontoer, vil du kunne logge p\xE5 {{identityProviderDisplayName}} gjennom {{realmName}}."
  },
  "org-invite": {
    subject: "Invitasjon til \xE5 bli med i {0}-organisasjonen",
    greeting: "Hei, {{firstName}} {{lastName}}.",
    message: "Du ble invitert til \xE5 bli med i organisasjonen {{organizationName}}. Klikk p\xE5 lenken nedenfor for \xE5 bli med.",
    linkExpiration: "Denne koblingen utl\xF8per innen {{expiration}}.",
    ignoreMessage: "Hvis du ikke vil bli med i organisasjonen, bare ignorer denne meldingen.",
    joinButton: "Bli med i organisasjonen"
  },
  "password-reset": {
    subject: "Tilbakestill passord",
    message: "Noen har nettopp bedt om \xE5 endre p\xE5loggingsinformasjonen til {{realmName}}-kontoen din. Hvis dette var deg, klikk p\xE5 lenken nedenfor for \xE5 tilbakestille dem.",
    linkExpiration: "Denne koblingen utl\xF8per innen {{expiration}}.",
    ignoreMessage: "Hvis du ikke vil tilbakestille legitimasjonen din, bare ignorer denne meldingen og ingenting vil bli endret.",
    resetButton: "Tilbakestill legitimasjon"
  },
  requiredAction: {
    configure_totp: "Konfigurer OTP",
    terms_and_conditions: "Vilk\xE5r og betingelser",
    update_password: "Oppdater passord",
    update_profile: "Oppdater profil",
    verify_email: "Bekreft e-post",
    configure_recovery_authn_codes: "Generer gjenopprettingskoder",
    seconds: "{0,choice,0#sekunder|1#sekund|1<sekunder}",
    minutes: "{0,choice,0#minutter|1#minutt|1<minutter}",
    hours: "{0,choice,0#timer|1#time|1<timer}",
    days: "{0,choice,0#dager|1#dag|1<dager}"
  },
  footer: {
    allRightsReserved: "\xA9 {{currentYear}} {{realmName}}, Alle rettigheter forbeholdt"
  }
};

// src/email/locales/pl/translation.json
var translation_default20 = {
  "email-test": {
    subject: "Test e-mailowy",
    greeting: "Cze\u015B\u0107 przyjacielu",
    message: "To jest testowy e-mail od {{realmName}}. Je\u015Bli otrzyma\u0142e\u015B tego e-maila, oznacza to, \u017Ce Twoje ustawienia poczty e-mail s\u0105 poprawnie skonfigurowane."
  },
  "email-update-confirmation": {
    subject: "Zweryfikuj nowy adres e-mail",
    linkExpiration: "Ten link wyga\u015Bnie w ci\u0105gu {{expiration}}.",
    updateEmailAddress: "Aby zaktualizowa\u0107 swoje konto {{realmName}} za pomoc\u0105 adresu e-mail {{newEmail}}",
    clickLinkBelow: "kliknij poni\u017Cszy link",
    updateEmail: "Zaktualizuj e-mail",
    ignoreMessage: "Je\u015Bli nie chcesz kontynuowa\u0107 tej modyfikacji, po prostu zignoruj \u200B\u200Bt\u0119 wiadomo\u015B\u0107."
  },
  "email-verification": {
    subject: "Zweryfikuj adres e-mail",
    message: "Kto\u015B utworzy\u0142 konto {{firstName}} z tym adresem e-mail. Je\u015Bli to by\u0142e\u015B Ty, kliknij poni\u017Cszy link, aby zweryfikowa\u0107 sw\xF3j adres e-mail.",
    verifyButton: "Zweryfikuj adres e-mail",
    linkExpiration: "Ten link wyga\u015Bnie w ci\u0105gu {{expiration}}.",
    ignoreMessage: "Je\u015Bli to nie Ty utworzy\u0142e\u015B to konto, po prostu zignoruj \u200B\u200Bt\u0119 wiadomo\u015B\u0107."
  },
  "event-login_error": {
    subject: "B\u0142\u0105d logowania",
    message: "Wykryto nieudan\u0105 pr\xF3b\u0119 logowania na Twoje konto w dniu {{date}} z {{ipAddress}}.",
    contactAdmin: "Je\u015Bli to nie by\u0142e\u015B Ty, skontaktuj si\u0119 z administratorem."
  },
  "event-remove_credential": {
    subject: "Usu\u0144 dane uwierzytelniaj\u0105ce",
    message: "Dane uwierzytelniaj\u0105ce {{credentialType}} zosta\u0142y usuni\u0119te z Twojego konta w dniu {{date}} z {{ipAddress}}.",
    contactAdmin: "Je\u015Bli to nie by\u0142e\u015B Ty, skontaktuj si\u0119 z administratorem."
  },
  "event-remove_totp": {
    subject: "Usu\u0144 OTP",
    message: "OTP zosta\u0142 usuni\u0119ty z Twojego konta {{date}} z {{ipAddress}}.",
    contactAdmin: "Je\u015Bli to nie by\u0142e\u015B Ty, skontaktuj si\u0119 z administratorem."
  },
  "event-update_credential": {
    subject: "Zaktualizuj dane uwierzytelniaj\u0105ce",
    message: "Twoje dane uwierzytelniaj\u0105ce {{credentialType}} zosta\u0142y zmienione {{date}} z {{ipAddress}}.",
    contactAdmin: "Je\u015Bli to nie by\u0142e\u015B Ty, skontaktuj si\u0119 z administratorem."
  },
  "event-update_password": {
    subject: "Zaktualizuj has\u0142o",
    message: "Twoje has\u0142o zosta\u0142o zmienione {{date}} z {{ipAddress}}.",
    contactAdmin: "Je\u015Bli to nie by\u0142e\u015B Ty, skontaktuj si\u0119 z administratorem."
  },
  "event-update_totp": {
    subject: "Zaktualizuj OTP",
    message: "OTP zosta\u0142 zaktualizowany dla Twojego konta w dniu {{date}} z {{ipAddress}}.",
    contactAdmin: "Je\u015Bli to nie by\u0142e\u015B Ty, skontaktuj si\u0119 z administratorem."
  },
  "event-user_disabled_by_permanent_lockout": {
    subject: "U\u017Cytkownik wy\u0142\u0105czony przez trwa\u0142\u0105 blokad\u0119",
    message: "Tw\xF3j u\u017Cytkownik zosta\u0142 trwale wy\u0142\u0105czony z powodu wielu nieudanych pr\xF3b w dniu {{date}}.",
    contactAdmin: "Skontaktuj si\u0119 z administratorem."
  },
  "event-user_disabled_by_temporary_lockout": {
    subject: "U\u017Cytkownik wy\u0142\u0105czony przez tymczasow\u0105 blokad\u0119",
    message: "Tw\xF3j u\u017Cytkownik zosta\u0142 tymczasowo wy\u0142\u0105czony z powodu wielu nieudanych pr\xF3b w dniu {{date}}.",
    contactAdmin: "Skontaktuj si\u0119 z administratorem."
  },
  executeActions: {
    subject: "Zaktualizuj swoje konto",
    message: "Tw\xF3j administrator w\u0142a\u015Bnie za\u017C\u0105da\u0142 aktualizacji Twojego konta {{realmName}} poprzez wykonanie nast\u0119puj\u0105cych dzia\u0142a\u0144:",
    clickLink: "Kliknij poni\u017Cszy link, aby rozpocz\u0105\u0107 ten proces.",
    linkExpiration: "Ten link wyga\u015Bnie w ci\u0105gu {{expiration}}.",
    ignoreMessage: "Je\u015Bli nie wiesz, \u017Ce administrator o to poprosi\u0142, po prostu zignoruj \u200B\u200Bt\u0119 wiadomo\u015B\u0107, a nic nie ulegnie zmianie.",
    updateAccountButton: "Zaktualizuj konto"
  },
  "identity-provider-link": {
    subject: "Po\u0142\u0105cz {0} ze swoim kontem",
    message: "Kto\u015B chce po\u0142\u0105czy\u0107 Twoje konto {{identityProviderDisplayName}} z {{realmName}} kontem u\u017Cytkownika {{username}}.",
    clickLink: "Je\u015Bli to by\u0142e\u015B Ty, kliknij poni\u017Cszy link, aby po\u0142\u0105czy\u0107 konta",
    linkExpiration: "Ten link wyga\u015Bnie w ci\u0105gu {{expiration}}.",
    ignoreMessage: "Je\u015Bli nie chcesz kontynuowa\u0107 tej modyfikacji, po prostu zignoruj \u200B\u200Bt\u0119 wiadomo\u015B\u0107.",
    linkAccountsButton: "Po\u0142\u0105cz konta",
    loginInfo: "Je\u015Bli po\u0142\u0105czysz konta, b\u0119dziesz m\xF3g\u0142 zalogowa\u0107 si\u0119 do {{identityProviderDisplayName}} za po\u015Brednictwem {{realmName}}."
  },
  "org-invite": {
    subject: "Zaproszenie do przy\u0142\u0105czenia si\u0119 do organizacji {0}",
    greeting: "Cze\u015B\u0107, {{firstName}} {{lastName}}.",
    message: "Zosta\u0142e\u015B zaproszony do przy\u0142\u0105czenia si\u0119 do organizacji {{organizationName}}. Kliknij poni\u017Cszy link, aby do\u0142\u0105czy\u0107.",
    linkExpiration: "Ten link wyga\u015Bnie w ci\u0105gu {{expiration}}.",
    ignoreMessage: "Je\u015Bli nie chcesz do\u0142\u0105czy\u0107 do organizacji, po prostu zignoruj \u200B\u200Bt\u0119 wiadomo\u015B\u0107.",
    joinButton: "Do\u0142\u0105cz do organizacji"
  },
  "password-reset": {
    subject: "Zresetuj has\u0142o",
    message: "Kto\u015B w\u0142a\u015Bnie poprosi\u0142 o zmian\u0119 danych uwierzytelniaj\u0105cych Twojego konta {{realmName}}. Je\u015Bli to by\u0142e\u015B Ty, kliknij poni\u017Cszy link, aby je zresetowa\u0107.",
    linkExpiration: "Ten link wyga\u015Bnie w ci\u0105gu {{expiration}}.",
    ignoreMessage: "Je\u015Bli nie chcesz resetowa\u0107 swoich danych uwierzytelniaj\u0105cych, po prostu zignoruj \u200B\u200Bt\u0119 wiadomo\u015B\u0107 i nic nie ulegnie zmianie.",
    resetButton: "Zresetuj dane uwierzytelniaj\u0105ce"
  },
  requiredAction: {
    configure_totp: "Skonfiguruj OTP",
    terms_and_conditions: "Regulamin",
    update_password: "Zaktualizuj has\u0142o",
    update_profile: "Zaktualizuj profil",
    verify_email: "Zweryfikuj adres e-mail",
    configure_recovery_authn_codes: "Wygeneruj kody odzyskiwania",
    seconds: "{0,choice,0#towary drugiej jako\u015Bci|1#sekunda|1<towary drugiej jako\u015Bci}",
    minutes: "{0,choice,0#protok\xF3\u0142|1#minuta|1<protok\xF3\u0142}",
    hours: "{0,choice,0#godziny|1#godzina|1<godziny}",
    days: "{0,choice,0#dni|1#dzie\u0144|1<dni}"
  },
  footer: {
    allRightsReserved: "\xA9 {{currentYear}} {{realmName}}, Wszelkie prawa zastrze\u017Cone"
  }
};

// src/email/locales/pt/translation.json
var translation_default21 = {
  "email-test": {
    subject: "Teste de e-mail",
    greeting: "Oi amigo",
    message: "Este \xE9 um e-mail de teste de {{realmName}}. Se voc\xEA recebeu este e-mail, significa que suas configura\xE7\xF5es de e-mail est\xE3o configuradas corretamente."
  },
  "email-update-confirmation": {
    subject: "Verifique o novo e-mail",
    linkExpiration: "Este link expirar\xE1 em {{expiration}}.",
    updateEmailAddress: "Para atualizar sua conta {{realmName}} com o endere\xE7o de e-mail {{newEmail}}",
    clickLinkBelow: "clique no link abaixo",
    updateEmail: "Atualizar e-mail",
    ignoreMessage: "Se voc\xEA n\xE3o quiser prosseguir com esta modifica\xE7\xE3o, simplesmente ignore esta mensagem."
  },
  "email-verification": {
    subject: "Verificar e-mail",
    message: "Algu\xE9m criou uma conta {{firstName}} com este endere\xE7o de e-mail. Se foi voc\xEA, clique no link abaixo para verificar seu endere\xE7o de e-mail.",
    verifyButton: "Verificar e-mail",
    linkExpiration: "Este link expirar\xE1 em {{expiration}}.",
    ignoreMessage: "Se voc\xEA n\xE3o criou esta conta, ignore esta mensagem."
  },
  "event-login_error": {
    subject: "Erro de login",
    message: "Uma tentativa de login malsucedida foi detectada em sua conta em {{date}} de {{ipAddress}}.",
    contactAdmin: "Se n\xE3o foi voc\xEA, entre em contato com um administrador."
  },
  "event-remove_credential": {
    subject: "Remover credencial",
    message: "A credencial {{credentialType}} foi removida da sua conta em {{date}} de {{ipAddress}}.",
    contactAdmin: "Se n\xE3o foi voc\xEA, entre em contato com um administrador."
  },
  "event-remove_totp": {
    subject: "Remover OTP",
    message: "OTP foi removido da sua conta em {{date}} de {{ipAddress}}.",
    contactAdmin: "Se n\xE3o foi voc\xEA, entre em contato com um administrador."
  },
  "event-update_credential": {
    subject: "Atualizar credencial",
    message: "Sua credencial {{credentialType}} foi alterada em {{date}} de {{ipAddress}}.",
    contactAdmin: "Se n\xE3o foi voc\xEA, entre em contato com um administrador."
  },
  "event-update_password": {
    subject: "Atualizar senha",
    message: "Sua senha foi alterada em {{date}} de {{ipAddress}}.",
    contactAdmin: "Se n\xE3o foi voc\xEA, entre em contato com um administrador."
  },
  "event-update_totp": {
    subject: "Atualizar OTP",
    message: "OTP foi atualizado para sua conta em {{date}} de {{ipAddress}}.",
    contactAdmin: "Se n\xE3o foi voc\xEA, entre em contato com um administrador."
  },
  "event-user_disabled_by_permanent_lockout": {
    subject: "Usu\xE1rio desabilitado por bloqueio permanente",
    message: "Seu usu\xE1rio foi desativado permanentemente devido a diversas tentativas malsucedidas em {{date}}.",
    contactAdmin: "Entre em contato com um administrador."
  },
  "event-user_disabled_by_temporary_lockout": {
    subject: "Usu\xE1rio desativado por bloqueio tempor\xE1rio",
    message: "Seu usu\xE1rio foi desativado temporariamente devido a diversas tentativas malsucedidas em {{date}}.",
    contactAdmin: "Entre em contato com um administrador."
  },
  executeActions: {
    subject: "Atualize sua conta",
    message: "Seu administrador acaba de solicitar que voc\xEA atualize sua conta {{realmName}} executando as seguintes a\xE7\xF5es:",
    clickLink: "Clique no link abaixo para iniciar este processo.",
    linkExpiration: "Este link expirar\xE1 em {{expiration}}.",
    ignoreMessage: "Se voc\xEA n\xE3o sabe que seu administrador solicitou isso, ignore esta mensagem e nada ser\xE1 alterado.",
    updateAccountButton: "Atualizar conta"
  },
  "identity-provider-link": {
    subject: "Vincule {0} \xE0 sua conta",
    message: "Algu\xE9m deseja vincular sua conta {{identityProviderDisplayName}} \xE0 conta {{realmName}} do usu\xE1rio {{username}}.",
    clickLink: "Se foi voc\xEA, clique no link abaixo para vincular contas",
    linkExpiration: "Este link expirar\xE1 em {{expiration}}.",
    ignoreMessage: "Se voc\xEA n\xE3o quiser prosseguir com esta modifica\xE7\xE3o, simplesmente ignore esta mensagem.",
    linkAccountsButton: "Vincular contas",
    loginInfo: "Se vincular contas, voc\xEA poder\xE1 fazer login em {{identityProviderDisplayName}} atrav\xE9s de {{realmName}}."
  },
  "org-invite": {
    subject: "Convite para ingressar na organiza\xE7\xE3o {0}",
    greeting: "Ol\xE1, {{firstName}} {{lastName}}.",
    message: "Voc\xEA foi convidado para ingressar na organiza\xE7\xE3o {{organizationName}}. Clique no link abaixo para participar.",
    linkExpiration: "Este link expirar\xE1 em {{expiration}}.",
    ignoreMessage: "Se voc\xEA n\xE3o quiser ingressar na organiza\xE7\xE3o, ignore esta mensagem.",
    joinButton: "Junte-se \xE0 organiza\xE7\xE3o"
  },
  "password-reset": {
    subject: "Redefinir senha",
    message: "Algu\xE9m acabou de solicitar a altera\xE7\xE3o das credenciais da sua conta {{realmName}}. Se foi voc\xEA, clique no link abaixo para redefini-los.",
    linkExpiration: "Este link expirar\xE1 em {{expiration}}.",
    ignoreMessage: "Se voc\xEA n\xE3o quiser redefinir suas credenciais, ignore esta mensagem e nada ser\xE1 alterado.",
    resetButton: "Redefinir credenciais"
  },
  requiredAction: {
    configure_totp: "Configurar OTP",
    terms_and_conditions: "Termos e Condi\xE7\xF5es",
    update_password: "Atualizar senha",
    update_profile: "Atualizar perfil",
    verify_email: "Verificar e-mail",
    configure_recovery_authn_codes: "Gerar c\xF3digos de recupera\xE7\xE3o",
    seconds: "{0,choice,0#segundos|1#segundo|1<segundos}",
    minutes: "{0,choice,0#minutos|1#minuto|1<minutos}",
    hours: "{0,choice,0#horas|1#hora|1<horas}",
    days: "{0,choice,0#dias|1#dia|1<dias}"
  },
  footer: {
    allRightsReserved: "\xA9 {{currentYear}} {{realmName}}, Todos os direitos reservados"
  }
};

// src/email/locales/pt-BR/translation.json
var translation_default22 = {
  "email-test": {
    subject: "Teste de e-mail",
    greeting: "Oi amigo",
    message: "Este \xE9 um e-mail de teste de {{realmName}}. Se voc\xEA recebeu este e-mail, significa que suas configura\xE7\xF5es de e-mail est\xE3o configuradas corretamente."
  },
  "email-update-confirmation": {
    subject: "Verifique o novo e-mail",
    linkExpiration: "Este link expirar\xE1 em {{expiration}}.",
    updateEmailAddress: "Para atualizar sua conta {{realmName}} com o endere\xE7o de e-mail {{newEmail}}",
    clickLinkBelow: "clique no link abaixo",
    updateEmail: "Atualizar e-mail",
    ignoreMessage: "Se voc\xEA n\xE3o quiser prosseguir com esta modifica\xE7\xE3o, simplesmente ignore esta mensagem."
  },
  "email-verification": {
    subject: "Verificar e-mail",
    message: "Algu\xE9m criou uma conta {{firstName}} com este endere\xE7o de e-mail. Se foi voc\xEA, clique no link abaixo para verificar seu endere\xE7o de e-mail.",
    verifyButton: "Verificar e-mail",
    linkExpiration: "Este link expirar\xE1 em {{expiration}}.",
    ignoreMessage: "Se voc\xEA n\xE3o criou esta conta, ignore esta mensagem."
  },
  "event-login_error": {
    subject: "Erro de login",
    message: "Uma tentativa de login malsucedida foi detectada em sua conta em {{date}} de {{ipAddress}}.",
    contactAdmin: "Se n\xE3o foi voc\xEA, entre em contato com um administrador."
  },
  "event-remove_credential": {
    subject: "Remover credencial",
    message: "A credencial {{credentialType}} foi removida da sua conta em {{date}} de {{ipAddress}}.",
    contactAdmin: "Se n\xE3o foi voc\xEA, entre em contato com um administrador."
  },
  "event-remove_totp": {
    subject: "Remover OTP",
    message: "OTP foi removido da sua conta em {{date}} de {{ipAddress}}.",
    contactAdmin: "Se n\xE3o foi voc\xEA, entre em contato com um administrador."
  },
  "event-update_credential": {
    subject: "Atualizar credencial",
    message: "Sua credencial {{credentialType}} foi alterada em {{date}} de {{ipAddress}}.",
    contactAdmin: "Se n\xE3o foi voc\xEA, entre em contato com um administrador."
  },
  "event-update_password": {
    subject: "Atualizar senha",
    message: "Sua senha foi alterada em {{date}} de {{ipAddress}}.",
    contactAdmin: "Se n\xE3o foi voc\xEA, entre em contato com um administrador."
  },
  "event-update_totp": {
    subject: "Atualizar OTP",
    message: "OTP foi atualizado para sua conta em {{date}} de {{ipAddress}}.",
    contactAdmin: "Se n\xE3o foi voc\xEA, entre em contato com um administrador."
  },
  "event-user_disabled_by_permanent_lockout": {
    subject: "Usu\xE1rio desabilitado por bloqueio permanente",
    message: "Seu usu\xE1rio foi desativado permanentemente devido a diversas tentativas malsucedidas em {{date}}.",
    contactAdmin: "Entre em contato com um administrador."
  },
  "event-user_disabled_by_temporary_lockout": {
    subject: "Usu\xE1rio desativado por bloqueio tempor\xE1rio",
    message: "Seu usu\xE1rio foi desativado temporariamente devido a diversas tentativas malsucedidas em {{date}}.",
    contactAdmin: "Entre em contato com um administrador."
  },
  executeActions: {
    subject: "Atualize sua conta",
    message: "Seu administrador acaba de solicitar que voc\xEA atualize sua conta {{realmName}} executando as seguintes a\xE7\xF5es:",
    clickLink: "Clique no link abaixo para iniciar este processo.",
    linkExpiration: "Este link expirar\xE1 em {{expiration}}.",
    ignoreMessage: "Se voc\xEA n\xE3o sabe que seu administrador solicitou isso, ignore esta mensagem e nada ser\xE1 alterado.",
    updateAccountButton: "Atualizar conta"
  },
  "identity-provider-link": {
    subject: "Vincule {0} \xE0 sua conta",
    message: "Algu\xE9m deseja vincular sua conta {{identityProviderDisplayName}} \xE0 conta {{realmName}} do usu\xE1rio {{username}}.",
    clickLink: "Se foi voc\xEA, clique no link abaixo para vincular contas",
    linkExpiration: "Este link expirar\xE1 em {{expiration}}.",
    ignoreMessage: "Se voc\xEA n\xE3o quiser prosseguir com esta modifica\xE7\xE3o, simplesmente ignore esta mensagem.",
    linkAccountsButton: "Vincular contas",
    loginInfo: "Se vincular contas, voc\xEA poder\xE1 fazer login em {{identityProviderDisplayName}} atrav\xE9s de {{realmName}}."
  },
  "org-invite": {
    subject: "Convite para ingressar na organiza\xE7\xE3o {0}",
    greeting: "Ol\xE1, {{firstName}} {{lastName}}.",
    message: "Voc\xEA foi convidado para ingressar na organiza\xE7\xE3o {{organizationName}}. Clique no link abaixo para participar.",
    linkExpiration: "Este link expirar\xE1 em {{expiration}}.",
    ignoreMessage: "Se voc\xEA n\xE3o quiser ingressar na organiza\xE7\xE3o, ignore esta mensagem.",
    joinButton: "Junte-se \xE0 organiza\xE7\xE3o"
  },
  "password-reset": {
    subject: "Redefinir senha",
    message: "Algu\xE9m acabou de solicitar a altera\xE7\xE3o das credenciais da sua conta {{realmName}}. Se foi voc\xEA, clique no link abaixo para redefini-los.",
    linkExpiration: "Este link expirar\xE1 em {{expiration}}.",
    ignoreMessage: "Se voc\xEA n\xE3o quiser redefinir suas credenciais, ignore esta mensagem e nada ser\xE1 alterado.",
    resetButton: "Redefinir credenciais"
  },
  requiredAction: {
    configure_totp: "Configurar OTP",
    terms_and_conditions: "Termos e Condi\xE7\xF5es",
    update_password: "Atualizar senha",
    update_profile: "Atualizar perfil",
    verify_email: "Verificar e-mail",
    configure_recovery_authn_codes: "Gerar c\xF3digos de recupera\xE7\xE3o",
    seconds: "{0,choice,0#segundos|1#segundo|1<segundos}",
    minutes: "{0,choice,0#minutos|1#minuto|1<minutos}",
    hours: "{0,choice,0#horas|1#hora|1<horas}",
    days: "{0,choice,0#dias|1#dia|1<dias}"
  },
  footer: {
    allRightsReserved: "\xA9 {{currentYear}} {{realmName}}, Todos os direitos reservados"
  }
};

// src/email/locales/ru/translation.json
var translation_default23 = {
  "email-test": {
    subject: "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u044B\u0439 \u0442\u0435\u0441\u0442",
    greeting: "\u041F\u0440\u0438\u0432\u0435\u0442, \u0434\u0440\u0443\u0433",
    message: "\u042D\u0442\u043E \u0442\u0435\u0441\u0442\u043E\u0432\u043E\u0435 \u043F\u0438\u0441\u044C\u043C\u043E \u043E\u0442 {{realmName}}. \u0415\u0441\u043B\u0438 \u0432\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u0438 \u044D\u0442\u043E \u043F\u0438\u0441\u044C\u043C\u043E, \u044D\u0442\u043E \u043E\u0437\u043D\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043E \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0432\u0430\u0448\u0435\u0439 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0447\u0442\u044B \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043D\u044B \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E."
  },
  "email-update-confirmation": {
    subject: "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C \u043D\u043E\u0432\u044B\u0439 \u0430\u0434\u0440\u0435\u0441 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0447\u0442\u044B",
    linkExpiration: "\u0421\u0440\u043E\u043A \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u044D\u0442\u043E\u0439 \u0441\u0441\u044B\u043B\u043A\u0438 \u0438\u0441\u0442\u0435\u043A\u0430\u0435\u0442 \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 {{expiration}}.",
    updateEmailAddress: "\u0427\u0442\u043E\u0431\u044B \u043E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u0441\u0432\u043E\u044E \u0443\u0447\u0435\u0442\u043D\u0443\u044E \u0437\u0430\u043F\u0438\u0441\u044C {{realmName}} \u0441 \u0430\u0434\u0440\u0435\u0441\u043E\u043C \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0447\u0442\u044B {{newEmail}}.",
    clickLinkBelow: "\u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 \u0441\u0441\u044B\u043B\u043A\u0443 \u043D\u0438\u0436\u0435",
    updateEmail: "\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0443\u044E \u043F\u043E\u0447\u0442\u0443",
    ignoreMessage: "\u0415\u0441\u043B\u0438 \u0432\u044B \u043D\u0435 \u0445\u043E\u0442\u0438\u0442\u0435 \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0430\u0442\u044C \u044D\u0442\u043E \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435, \u043F\u0440\u043E\u0441\u0442\u043E \u043F\u0440\u043E\u0438\u0433\u043D\u043E\u0440\u0438\u0440\u0443\u0439\u0442\u0435 \u044D\u0442\u043E \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435."
  },
  "email-verification": {
    subject: "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0447\u0442\u044B",
    message: "\u041A\u0442\u043E-\u0442\u043E \u0441\u043E\u0437\u0434\u0430\u043B \u0443\u0447\u0435\u0442\u043D\u0443\u044E \u0437\u0430\u043F\u0438\u0441\u044C {{firstName}} \u0441 \u044D\u0442\u0438\u043C \u0430\u0434\u0440\u0435\u0441\u043E\u043C \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0447\u0442\u044B. \u0415\u0441\u043B\u0438 \u044D\u0442\u043E \u0431\u044B\u043B\u0438 \u0432\u044B, \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u0441\u0441\u044B\u043B\u043A\u0443 \u043D\u0438\u0436\u0435, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C \u0441\u0432\u043E\u0439 \u0430\u0434\u0440\u0435\u0441 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0447\u0442\u044B.",
    verifyButton: "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0447\u0442\u044B",
    linkExpiration: "\u0421\u0440\u043E\u043A \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u044D\u0442\u043E\u0439 \u0441\u0441\u044B\u043B\u043A\u0438 \u0438\u0441\u0442\u0435\u043A\u0430\u0435\u0442 \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 {{expiration}}.",
    ignoreMessage: "\u0415\u0441\u043B\u0438 \u0432\u044B \u043D\u0435 \u0441\u043E\u0437\u0434\u0430\u0432\u0430\u043B\u0438 \u044D\u0442\u0443 \u0443\u0447\u0435\u0442\u043D\u0443\u044E \u0437\u0430\u043F\u0438\u0441\u044C, \u043F\u0440\u043E\u0441\u0442\u043E \u043F\u0440\u043E\u0438\u0433\u043D\u043E\u0440\u0438\u0440\u0443\u0439\u0442\u0435 \u044D\u0442\u043E \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435."
  },
  "event-login_error": {
    subject: "\u041E\u0448\u0438\u0431\u043A\u0430 \u0432\u0445\u043E\u0434\u0430",
    message: "{{date}} \u0441 {{ipAddress}} \u0431\u044B\u043B\u0430 \u043E\u0431\u043D\u0430\u0440\u0443\u0436\u0435\u043D\u0430 \u043D\u0435\u0443\u0434\u0430\u0447\u043D\u0430\u044F \u043F\u043E\u043F\u044B\u0442\u043A\u0430 \u0432\u0445\u043E\u0434\u0430 \u0432 \u0432\u0430\u0448\u0443 \u0443\u0447\u0435\u0442\u043D\u0443\u044E \u0437\u0430\u043F\u0438\u0441\u044C.",
    contactAdmin: "\u0415\u0441\u043B\u0438 \u044D\u0442\u043E \u0431\u044B\u043B\u0438 \u043D\u0435 \u0432\u044B, \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0441\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u043E\u043C."
  },
  "event-remove_credential": {
    subject: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0443\u0447\u0435\u0442\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435",
    message: "\u0423\u0447\u0435\u0442\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 {{credentialType}} \u0431\u044B\u043B\u0438 \u0443\u0434\u0430\u043B\u0435\u043D\u044B \u0438\u0437 \u0432\u0430\u0448\u0435\u0439 \u0443\u0447\u0435\u0442\u043D\u043E\u0439 \u0437\u0430\u043F\u0438\u0441\u0438 {{date}} \u0441 {{ipAddress}}.",
    contactAdmin: "\u0415\u0441\u043B\u0438 \u044D\u0442\u043E \u0431\u044B\u043B\u0438 \u043D\u0435 \u0432\u044B, \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0441\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u043E\u043C."
  },
  "event-remove_totp": {
    subject: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C OTP",
    message: "OTP \u0431\u044B\u043B \u0443\u0434\u0430\u043B\u0435\u043D \u0438\u0437 \u0432\u0430\u0448\u0435\u0439 \u0443\u0447\u0435\u0442\u043D\u043E\u0439 \u0437\u0430\u043F\u0438\u0441\u0438 {{date}} \u043E\u0442 {{ipAddress}}.",
    contactAdmin: "\u0415\u0441\u043B\u0438 \u044D\u0442\u043E \u0431\u044B\u043B\u0438 \u043D\u0435 \u0432\u044B, \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0441\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u043E\u043C."
  },
  "event-update_credential": {
    subject: "\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u0443\u0447\u0435\u0442\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435",
    message: "\u0412\u0430\u0448\u0438 \u0443\u0447\u0435\u0442\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 {{credentialType}} \u0431\u044B\u043B\u0438 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u044B {{date}} \u0441 {{ipAddress}}.",
    contactAdmin: "\u0415\u0441\u043B\u0438 \u044D\u0442\u043E \u0431\u044B\u043B\u0438 \u043D\u0435 \u0432\u044B, \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0441\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u043E\u043C."
  },
  "event-update_password": {
    subject: "\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C",
    message: "\u0412\u0430\u0448 \u043F\u0430\u0440\u043E\u043B\u044C \u0431\u044B\u043B \u0438\u0437\u043C\u0435\u043D\u0435\u043D {{date}} \u0441 {{ipAddress}}.",
    contactAdmin: "\u0415\u0441\u043B\u0438 \u044D\u0442\u043E \u0431\u044B\u043B\u0438 \u043D\u0435 \u0432\u044B, \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0441\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u043E\u043C."
  },
  "event-update_totp": {
    subject: "\u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435 OTP",
    message: "OTP \u0434\u043B\u044F \u0432\u0430\u0448\u0435\u0439 \u0443\u0447\u0435\u0442\u043D\u043E\u0439 \u0437\u0430\u043F\u0438\u0441\u0438 \u0431\u044B\u043B \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D {{date}} \u0441 {{ipAddress}}.",
    contactAdmin: "\u0415\u0441\u043B\u0438 \u044D\u0442\u043E \u0431\u044B\u043B\u0438 \u043D\u0435 \u0432\u044B, \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0441\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u043E\u043C."
  },
  "event-user_disabled_by_permanent_lockout": {
    subject: "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u043E\u0442\u043A\u043B\u044E\u0447\u0435\u043D \u0438\u0437-\u0437\u0430 \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E\u0439 \u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u043A\u0438",
    message: "\u0412\u0430\u0448 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0431\u044B\u043B \u043E\u043A\u043E\u043D\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u043E\u0442\u043A\u043B\u044E\u0447\u0435\u043D \u0438\u0437-\u0437\u0430 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u0438\u0445 \u043D\u0435\u0443\u0434\u0430\u0447\u043D\u044B\u0445 \u043F\u043E\u043F\u044B\u0442\u043E\u043A \u043D\u0430 {{date}}.",
    contactAdmin: "\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0441\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u043E\u043C."
  },
  "event-user_disabled_by_temporary_lockout": {
    subject: "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u043E\u0442\u043A\u043B\u044E\u0447\u0435\u043D \u0438\u0437-\u0437\u0430 \u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 \u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u043A\u0438",
    message: "\u0412\u0430\u0448 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E \u043E\u0442\u043A\u043B\u044E\u0447\u0435\u043D \u0438\u0437-\u0437\u0430 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u0438\u0445 \u043D\u0435\u0443\u0434\u0430\u0447\u043D\u044B\u0445 \u043F\u043E\u043F\u044B\u0442\u043E\u043A \u043D\u0430 {{date}}.",
    contactAdmin: "\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0441\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u043E\u043C."
  },
  executeActions: {
    subject: "\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u0435 \u0441\u0432\u043E\u044E \u0443\u0447\u0435\u0442\u043D\u0443\u044E \u0437\u0430\u043F\u0438\u0441\u044C",
    message: "\u0412\u0430\u0448 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440 \u0442\u043E\u043B\u044C\u043A\u043E \u0447\u0442\u043E \u043F\u043E\u043F\u0440\u043E\u0441\u0438\u043B \u0432\u0430\u0441 \u043E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u0432\u0430\u0448\u0443 \u0443\u0447\u0435\u0442\u043D\u0443\u044E \u0437\u0430\u043F\u0438\u0441\u044C {{realmName}}, \u0432\u044B\u043F\u043E\u043B\u043D\u0438\u0432 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F:",
    clickLink: "\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 \u0441\u0441\u044B\u043B\u043A\u0443 \u043D\u0438\u0436\u0435, \u0447\u0442\u043E\u0431\u044B \u043D\u0430\u0447\u0430\u0442\u044C \u044D\u0442\u043E\u0442 \u043F\u0440\u043E\u0446\u0435\u0441\u0441.",
    linkExpiration: "\u0421\u0440\u043E\u043A \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u044D\u0442\u043E\u0439 \u0441\u0441\u044B\u043B\u043A\u0438 \u0438\u0441\u0442\u0435\u043A\u0430\u0435\u0442 \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 {{expiration}}.",
    ignoreMessage: "\u0415\u0441\u043B\u0438 \u0432\u044B \u043D\u0435 \u0437\u043D\u0430\u0435\u0442\u0435, \u0447\u0442\u043E \u0432\u0430\u0448 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440 \u0437\u0430\u043F\u0440\u043E\u0441\u0438\u043B \u044D\u0442\u043E, \u043F\u0440\u043E\u0441\u0442\u043E \u043F\u0440\u043E\u0438\u0433\u043D\u043E\u0440\u0438\u0440\u0443\u0439\u0442\u0435 \u044D\u0442\u043E \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435, \u0438 \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u0441\u044F.",
    updateAccountButton: "\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u0443\u0447\u0435\u0442\u043D\u0443\u044E \u0437\u0430\u043F\u0438\u0441\u044C"
  },
  "identity-provider-link": {
    subject: "\u0421\u0432\u044F\u0436\u0438\u0442\u0435 {0} \u0441\u043E \u0441\u0432\u043E\u0435\u0439 \u0443\u0447\u0435\u0442\u043D\u043E\u0439 \u0437\u0430\u043F\u0438\u0441\u044C\u044E",
    message: "\u041A\u0442\u043E-\u0442\u043E \u0445\u043E\u0447\u0435\u0442 \u0441\u0432\u044F\u0437\u0430\u0442\u044C \u0432\u0430\u0448\u0443 \u0443\u0447\u0435\u0442\u043D\u0443\u044E \u0437\u0430\u043F\u0438\u0441\u044C {{identityProviderDisplayName}} \u0441 \u0443\u0447\u0435\u0442\u043D\u043E\u0439 \u0437\u0430\u043F\u0438\u0441\u044C\u044E {{realmName}} \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F {{username}}.",
    clickLink: "\u0415\u0441\u043B\u0438 \u044D\u0442\u043E \u0431\u044B\u043B\u0438 \u0432\u044B, \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u0441\u0441\u044B\u043B\u043A\u0443 \u043D\u0438\u0436\u0435, \u0447\u0442\u043E\u0431\u044B \u0441\u0432\u044F\u0437\u0430\u0442\u044C \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u044B.",
    linkExpiration: "\u0421\u0440\u043E\u043A \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u044D\u0442\u043E\u0439 \u0441\u0441\u044B\u043B\u043A\u0438 \u0438\u0441\u0442\u0435\u043A\u0430\u0435\u0442 \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 {{expiration}}.",
    ignoreMessage: "\u0415\u0441\u043B\u0438 \u0432\u044B \u043D\u0435 \u0445\u043E\u0442\u0438\u0442\u0435 \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0430\u0442\u044C \u044D\u0442\u043E \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435, \u043F\u0440\u043E\u0441\u0442\u043E \u043F\u0440\u043E\u0438\u0433\u043D\u043E\u0440\u0438\u0440\u0443\u0439\u0442\u0435 \u044D\u0442\u043E \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435.",
    linkAccountsButton: "\u0421\u0432\u044F\u0437\u0430\u0442\u044C \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u044B",
    loginInfo: "\u0415\u0441\u043B\u0438 \u0432\u044B \u0441\u0432\u044F\u0436\u0435\u0442\u0435 \u0443\u0447\u0435\u0442\u043D\u044B\u0435 \u0437\u0430\u043F\u0438\u0441\u0438, \u0432\u044B \u0441\u043C\u043E\u0436\u0435\u0442\u0435 \u0432\u043E\u0439\u0442\u0438 \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0443 \u0441 {{identityProviderDisplayName}} \u043F\u043E {{realmName}}."
  },
  "org-invite": {
    subject: "\u041F\u0440\u0438\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435 \u043F\u0440\u0438\u0441\u043E\u0435\u0434\u0438\u043D\u0438\u0442\u044C\u0441\u044F \u043A \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438 {0}",
    greeting: "\u041F\u0440\u0438\u0432\u0435\u0442, {{firstName}} {{lastName}}.",
    message: "\u0412\u0430\u0441 \u043F\u0440\u0438\u0433\u043B\u0430\u0441\u0438\u043B\u0438 \u043F\u0440\u0438\u0441\u043E\u0435\u0434\u0438\u043D\u0438\u0442\u044C\u0441\u044F \u043A \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438 {{organizationName}}. \u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 \u0441\u0441\u044B\u043B\u043A\u0443 \u043D\u0438\u0436\u0435, \u0447\u0442\u043E\u0431\u044B \u043F\u0440\u0438\u0441\u043E\u0435\u0434\u0438\u043D\u0438\u0442\u044C\u0441\u044F.",
    linkExpiration: "\u0421\u0440\u043E\u043A \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u044D\u0442\u043E\u0439 \u0441\u0441\u044B\u043B\u043A\u0438 \u0438\u0441\u0442\u0435\u043A\u0430\u0435\u0442 \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 {{expiration}}.",
    ignoreMessage: "\u0415\u0441\u043B\u0438 \u0432\u044B \u043D\u0435 \u0445\u043E\u0442\u0438\u0442\u0435 \u0432\u0441\u0442\u0443\u043F\u0430\u0442\u044C \u0432 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044E, \u043F\u0440\u043E\u0441\u0442\u043E \u043F\u0440\u043E\u0438\u0433\u043D\u043E\u0440\u0438\u0440\u0443\u0439\u0442\u0435 \u044D\u0442\u043E \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435.",
    joinButton: "\u041F\u0440\u0438\u0441\u043E\u0435\u0434\u0438\u043D\u044F\u0439\u0442\u0435\u0441\u044C \u043A \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438"
  },
  "password-reset": {
    subject: "\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C",
    message: "\u041A\u0442\u043E-\u0442\u043E \u0442\u043E\u043B\u044C\u043A\u043E \u0447\u0442\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0438\u043B \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u0443\u0447\u0435\u0442\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0432\u0430\u0448\u0435\u0439 \u0443\u0447\u0435\u0442\u043D\u043E\u0439 \u0437\u0430\u043F\u0438\u0441\u0438 {{realmName}}. \u0415\u0441\u043B\u0438 \u044D\u0442\u043E \u0431\u044B\u043B\u0438 \u0432\u044B, \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 \u0441\u0441\u044B\u043B\u043A\u0443 \u043D\u0438\u0436\u0435, \u0447\u0442\u043E\u0431\u044B \u0441\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0438\u0445.",
    linkExpiration: "\u0421\u0440\u043E\u043A \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u044D\u0442\u043E\u0439 \u0441\u0441\u044B\u043B\u043A\u0438 \u0438\u0441\u0442\u0435\u043A\u0430\u0435\u0442 \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 {{expiration}}.",
    ignoreMessage: "\u0415\u0441\u043B\u0438 \u0432\u044B \u043D\u0435 \u0445\u043E\u0442\u0438\u0442\u0435 \u0441\u0431\u0440\u0430\u0441\u044B\u0432\u0430\u0442\u044C \u0441\u0432\u043E\u0438 \u0443\u0447\u0435\u0442\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435, \u043F\u0440\u043E\u0441\u0442\u043E \u043F\u0440\u043E\u0438\u0433\u043D\u043E\u0440\u0438\u0440\u0443\u0439\u0442\u0435 \u044D\u0442\u043E \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435, \u0438 \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u0441\u044F.",
    resetButton: "\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0443\u0447\u0435\u0442\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435"
  },
  requiredAction: {
    configure_totp: "\u041D\u0430\u0441\u0442\u0440\u043E\u0438\u0442\u044C OTP",
    terms_and_conditions: "\u0423\u0441\u043B\u043E\u0432\u0438\u044F \u0438 \u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
    update_password: "\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C",
    update_profile: "\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u043F\u0440\u043E\u0444\u0438\u043B\u044C",
    verify_email: "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0447\u0442\u044B",
    configure_recovery_authn_codes: "\u0413\u0435\u043D\u0435\u0440\u0430\u0446\u0438\u044F \u043A\u043E\u0434\u043E\u0432 \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F",
    seconds: "{0,choice,0#\u0441\u0435\u043A\u0443\u043D\u0434\u044B|1#\u0441\u0435\u043A\u0443\u043D\u0434\u0430|1<\u0441\u0435\u043A\u0443\u043D\u0434\u044B}",
    minutes: "{0,choice,0#\u043C\u0438\u043D\u0443\u0442\u044B|1#\u043C\u0438\u043D\u0443\u0442\u0430|1<\u043C\u0438\u043D\u0443\u0442\u044B}",
    hours: "{0,choice,0#\u0447\u0430\u0441\u044B|1#\u0447\u0430\u0441|1<\u0447\u0430\u0441\u044B}",
    days: "{0,choice,0#\u0434\u043D\u0438|1#\u0434\u0435\u043D\u044C|1<\u0434\u043D\u0438}"
  },
  footer: {
    allRightsReserved: "\xA9 {{currentYear}} {{realmName}}, \u0432\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B."
  }
};

// src/email/locales/sk/translation.json
var translation_default24 = {
  "email-test": {
    subject: "Test e-mailom",
    greeting: "Ahoj kamar\xE1t",
    message: "Toto je testovac\xED e-mail od pou\u017E\xEDvate\u013Ea {{realmName}}. Ak ste dostali tento e-mail, znamen\xE1 to, \u017Ee va\u0161e nastavenia e-mailu s\xFA nakonfigurovan\xE9 spr\xE1vne."
  },
  "email-update-confirmation": {
    subject: "Overte nov\xFD e-mail",
    linkExpiration: "Platnos\u0165 tohto odkazu vypr\u0161\xED do {{expiration}}.",
    updateEmailAddress: "Ak chcete aktualizova\u0165 svoj \xFA\u010Det {{realmName}} pomocou e-mailovej adresy {{newEmail}}",
    clickLinkBelow: "kliknite na odkaz ni\u017E\u0161ie",
    updateEmail: "Aktualizova\u0165 e-mail",
    ignoreMessage: "Ak nechcete pokra\u010Dova\u0165 v tejto \xFAprave, jednoducho t\xFAto spr\xE1vu ignorujte."
  },
  "email-verification": {
    subject: "Overte e-mail",
    message: "Niekto vytvoril \xFA\u010Det {{firstName}} s touto e-mailovou adresou. Ak ste to boli vy, kliknite na odkaz ni\u017E\u0161ie a overte svoju e-mailov\xFA adresu.",
    verifyButton: "Overte e-mail",
    linkExpiration: "Platnos\u0165 tohto odkazu vypr\u0161\xED do {{expiration}}.",
    ignoreMessage: "Ak ste si tento \xFA\u010Det nevytvorili, jednoducho t\xFAto spr\xE1vu ignorujte."
  },
  "event-login_error": {
    subject: "Chyba pri prihlasovan\xED",
    message: "Z {{date}} sa zistil ne\xFAspe\u0161n\xFD pokus o prihl\xE1senie do v\xE1\u0161ho \xFA\u010Dtu z {{ipAddress}}.",
    contactAdmin: "Ak ste to neboli vy, kontaktujte spr\xE1vcu."
  },
  "event-remove_credential": {
    subject: "Odstr\xE1\u0148te poverenie",
    message: "Poverenie {{credentialType}} bolo odstr\xE1nen\xE9 z v\xE1\u0161ho \xFA\u010Dtu d\u0148a {{date}} z {{ipAddress}}.",
    contactAdmin: "Ak ste to neboli vy, kontaktujte spr\xE1vcu."
  },
  "event-remove_totp": {
    subject: "Odstr\xE1ni\u0165 OTP",
    message: "OTP bol odstr\xE1nen\xFD z v\xE1\u0161ho \xFA\u010Dtu d\u0148a {{date}} z {{ipAddress}}.",
    contactAdmin: "Ak ste to neboli vy, kontaktujte spr\xE1vcu."
  },
  "event-update_credential": {
    subject: "Aktualizujte poverenia",
    message: "Va\u0161e poverenia {{credentialType}} boli zmenen\xE9 d\u0148a {{date}} z {{ipAddress}}.",
    contactAdmin: "Ak ste to neboli vy, kontaktujte spr\xE1vcu."
  },
  "event-update_password": {
    subject: "Aktualizova\u0165 heslo",
    message: "Va\u0161e heslo bolo zmenen\xE9 d\u0148a {{date}} z {{ipAddress}}.",
    contactAdmin: "Ak ste to neboli vy, kontaktujte spr\xE1vcu."
  },
  "event-update_totp": {
    subject: "Aktualizova\u0165 OTP",
    message: "OTP bola pre v\xE1\u0161 \xFA\u010Det aktualizovan\xE1 d\u0148a {{date}} od {{ipAddress}}.",
    contactAdmin: "Ak ste to neboli vy, kontaktujte spr\xE1vcu."
  },
  "event-user_disabled_by_permanent_lockout": {
    subject: "Pou\u017E\xEDvate\u013E je zak\xE1zan\xFD trval\xFDm uzamknut\xEDm",
    message: "V\xE1\u0161 pou\u017E\xEDvate\u013E bol natrvalo zak\xE1zan\xFD z d\xF4vodu viacer\xFDch ne\xFAspe\u0161n\xFDch pokusov na {{date}}.",
    contactAdmin: "Kontaktujte spr\xE1vcu."
  },
  "event-user_disabled_by_temporary_lockout": {
    subject: "Pou\u017E\xEDvate\u013E je zak\xE1zan\xFD do\u010Dasn\xFDm uzamknut\xEDm",
    message: "V\xE1\u0161 pou\u017E\xEDvate\u013E bol do\u010Dasne zak\xE1zan\xFD z d\xF4vodu viacer\xFDch ne\xFAspe\u0161n\xFDch pokusov na {{date}}.",
    contactAdmin: "Kontaktujte spr\xE1vcu."
  },
  executeActions: {
    subject: "Aktualizujte svoj \xFA\u010Det",
    message: "V\xE1\u0161 spr\xE1vca pr\xE1ve po\u017Eiadal, aby ste aktualizovali svoj \xFA\u010Det {{realmName}} vykonan\xEDm nasleduj\xFAcich akci\xED:",
    clickLink: "Kliknut\xEDm na odkaz ni\u017E\u0161ie spust\xEDte tento proces.",
    linkExpiration: "Platnos\u0165 tohto odkazu vypr\u0161\xED do {{expiration}}.",
    ignoreMessage: "Ak neviete, \u017Ee o to po\u017Eiadal v\xE1\u0161 administr\xE1tor, jednoducho t\xFAto spr\xE1vu ignorujte a ni\u010D sa nezmen\xED.",
    updateAccountButton: "Aktualizova\u0165 \xFA\u010Det"
  },
  "identity-provider-link": {
    subject: "Prepojte {0} so svoj\xEDm \xFA\u010Dtom",
    message: "Niekto chce prepoji\u0165 v\xE1\u0161 \xFA\u010Det {{identityProviderDisplayName}} s \xFA\u010Dtom {{realmName}} pou\u017E\xEDvate\u013Ea {{username}}.",
    clickLink: "Ak ste to boli vy, kliknut\xEDm na odkaz ni\u017E\u0161ie prepojte \xFA\u010Dty",
    linkExpiration: "Platnos\u0165 tohto odkazu vypr\u0161\xED do {{expiration}}.",
    ignoreMessage: "Ak nechcete pokra\u010Dova\u0165 v tejto \xFAprave, jednoducho t\xFAto spr\xE1vu ignorujte.",
    linkAccountsButton: "Prepoji\u0165 \xFA\u010Dty",
    loginInfo: "Ak prepoj\xEDte \xFA\u010Dty, budete sa m\xF4c\u0165 prihl\xE1si\u0165 do {{identityProviderDisplayName}} cez {{realmName}}."
  },
  "org-invite": {
    subject: "Pozv\xE1nka na pripojenie k organiz\xE1cii {0}",
    greeting: "Dobr\xFD de\u0148, {{firstName}} {{lastName}}.",
    message: "Boli ste pozvan\xED, aby ste sa pripojili k organiz\xE1cii {{organizationName}}. Ak sa chcete pripoji\u0165, kliknite na odkaz ni\u017E\u0161ie.",
    linkExpiration: "Platnos\u0165 tohto odkazu vypr\u0161\xED do {{expiration}}.",
    ignoreMessage: "Ak sa nechcete pripoji\u0165 k organiz\xE1cii, jednoducho t\xFAto spr\xE1vu ignorujte.",
    joinButton: "Pripojte sa k organiz\xE1cii"
  },
  "password-reset": {
    subject: "Obnovi\u0165 heslo",
    message: "Niekto pr\xE1ve po\u017Eiadal o zmenu poveren\xED v\xE1\u0161ho \xFA\u010Dtu {{realmName}}. Ak ste to boli vy, kliknite na odkaz ni\u017E\u0161ie a obnovte ich.",
    linkExpiration: "Platnos\u0165 tohto odkazu vypr\u0161\xED do {{expiration}}.",
    ignoreMessage: "Ak nechcete resetova\u0165 svoje poverenia, jednoducho t\xFAto spr\xE1vu ignorujte a ni\u010D sa nezmen\xED.",
    resetButton: "Obnovi\u0165 poverenia"
  },
  requiredAction: {
    configure_totp: "Konfigurova\u0165 OTP",
    terms_and_conditions: "Zmluvn\xE9 podmienky",
    update_password: "Aktualizova\u0165 heslo",
    update_profile: "Aktualizova\u0165 profil",
    verify_email: "Overi\u0165 e-mail",
    configure_recovery_authn_codes: "Generova\u0165 obnovovacie k\xF3dy",
    seconds: "{0,choice,0#sek\xFAnd|1#sekunda|1<sek\xFAnd}",
    minutes: "{0,choice,0#min\xFAt|1#min\xFAta|1<min\xFAt}",
    hours: "{0,choice,0#hodiny|1#hodina|1<hodiny}",
    days: "{0,choice,0#dn\xED|1#de\u0148|1<dn\xED}"
  },
  footer: {
    allRightsReserved: "\xA9 {{currentYear}} {{realmName}}, V\u0161etky pr\xE1va vyhraden\xE9"
  }
};

// src/email/locales/sv/translation.json
var translation_default25 = {
  "email-test": {
    subject: "E-posttest",
    greeting: "Hej v\xE4nnen",
    message: "Detta \xE4r ett testmeddelande fr\xE5n {{realmName}}. Om du har f\xE5tt det h\xE4r e-postmeddelandet betyder det att dina e-postinst\xE4llningar \xE4r korrekt konfigurerade."
  },
  "email-update-confirmation": {
    subject: "Verifiera ny e-post",
    linkExpiration: "Den h\xE4r l\xE4nken upph\xF6r att g\xE4lla inom {{expiration}}.",
    updateEmailAddress: "S\xE5 h\xE4r uppdaterar du ditt {{realmName}}-konto med e-postadress {{newEmail}}",
    clickLinkBelow: "klicka p\xE5 l\xE4nken nedan",
    updateEmail: "Uppdatera e-post",
    ignoreMessage: "Om du inte vill forts\xE4tta med denna \xE4ndring, ignorera bara det h\xE4r meddelandet."
  },
  "email-verification": {
    subject: "Verifiera e-post",
    message: "N\xE5gon har skapat ett {{firstName}}-konto med den h\xE4r e-postadressen. Om det h\xE4r var du, klicka p\xE5 l\xE4nken nedan f\xF6r att verifiera din e-postadress.",
    verifyButton: "Verifiera e-post",
    linkExpiration: "Den h\xE4r l\xE4nken upph\xF6r att g\xE4lla inom {{expiration}}.",
    ignoreMessage: "Om du inte skapade det h\xE4r kontot, ignorera bara det h\xE4r meddelandet."
  },
  "event-login_error": {
    subject: "Inloggningsfel",
    message: "Ett misslyckat inloggningsf\xF6rs\xF6k uppt\xE4cktes p\xE5 ditt konto p\xE5 {{date}} fr\xE5n {{ipAddress}}.",
    contactAdmin: "Om detta inte var du, kontakta en administrat\xF6r."
  },
  "event-remove_credential": {
    subject: "Ta bort autentiseringsuppgifter",
    message: "Autentiseringsuppgifter {{credentialType}} togs bort fr\xE5n ditt konto den {{date}} fr\xE5n {{ipAddress}}.",
    contactAdmin: "Om detta inte var du, kontakta en administrat\xF6r."
  },
  "event-remove_totp": {
    subject: "Ta bort OTP",
    message: "OTP togs bort fr\xE5n ditt konto den {{date}} fr\xE5n {{ipAddress}}.",
    contactAdmin: "Om detta inte var du, kontakta en administrat\xF6r."
  },
  "event-update_credential": {
    subject: "Uppdatera autentiseringsuppgifter",
    message: "Dina {{credentialType}}-uppgifter \xE4ndrades den {{date}} fr\xE5n {{ipAddress}}.",
    contactAdmin: "Om detta inte var du, kontakta en administrat\xF6r."
  },
  "event-update_password": {
    subject: "Uppdatera l\xF6senord",
    message: "Ditt l\xF6senord \xE4ndrades {{date}} fr\xE5n {{ipAddress}}.",
    contactAdmin: "Om detta inte var du, kontakta en administrat\xF6r."
  },
  "event-update_totp": {
    subject: "Uppdatera OTP",
    message: "OTP uppdaterades f\xF6r ditt konto p\xE5 {{date}} fr\xE5n {{ipAddress}}.",
    contactAdmin: "Om detta inte var du, kontakta en administrat\xF6r."
  },
  "event-user_disabled_by_permanent_lockout": {
    subject: "Anv\xE4ndaren inaktiverad genom permanent lockout",
    message: "Din anv\xE4ndare har inaktiverats permanent p\xE5 grund av flera misslyckade f\xF6rs\xF6k p\xE5 {{date}}.",
    contactAdmin: "Kontakta en administrat\xF6r."
  },
  "event-user_disabled_by_temporary_lockout": {
    subject: "Anv\xE4ndaren inaktiverad genom tillf\xE4llig lockout",
    message: "Din anv\xE4ndare har inaktiverats tillf\xE4lligt p\xE5 grund av flera misslyckade f\xF6rs\xF6k p\xE5 {{date}}.",
    contactAdmin: "Kontakta en administrat\xF6r."
  },
  executeActions: {
    subject: "Uppdatera ditt konto",
    message: "Din administrat\xF6r har just beg\xE4rt att du uppdaterar ditt {{realmName}}-konto genom att utf\xF6ra f\xF6ljande \xE5tg\xE4rder:",
    clickLink: "Klicka p\xE5 l\xE4nken nedan f\xF6r att starta denna process.",
    linkExpiration: "Den h\xE4r l\xE4nken upph\xF6r att g\xE4lla inom {{expiration}}.",
    ignoreMessage: "Om du inte \xE4r medveten om att din administrat\xF6r har beg\xE4rt detta, ignorera bara detta meddelande och ingenting kommer att \xE4ndras.",
    updateAccountButton: "Uppdatera konto"
  },
  "identity-provider-link": {
    subject: "L\xE4nka {0} till ditt konto",
    message: "N\xE5gon vill l\xE4nka ditt {{identityProviderDisplayName}}-konto med {{realmName}}-kontot f\xF6r anv\xE4ndaren {{username}}.",
    clickLink: "Om det h\xE4r var du klickar du p\xE5 l\xE4nken nedan f\xF6r att l\xE4nka konton",
    linkExpiration: "Den h\xE4r l\xE4nken upph\xF6r att g\xE4lla inom {{expiration}}.",
    ignoreMessage: "Om du inte vill forts\xE4tta med denna \xE4ndring, ignorera bara det h\xE4r meddelandet.",
    linkAccountsButton: "L\xE4nka konton",
    loginInfo: "Om du l\xE4nkar konton kommer du att kunna logga in p\xE5 {{identityProviderDisplayName}} till {{realmName}}."
  },
  "org-invite": {
    subject: "Inbjudan att g\xE5 med i organisationen {0}",
    greeting: "Hej, {{firstName}} {{lastName}}.",
    message: "Du blev inbjuden att g\xE5 med i organisationen {{organizationName}}. Klicka p\xE5 l\xE4nken nedan f\xF6r att g\xE5 med.",
    linkExpiration: "Den h\xE4r l\xE4nken upph\xF6r att g\xE4lla inom {{expiration}}.",
    ignoreMessage: "Om du inte vill g\xE5 med i organisationen, ignorera bara det h\xE4r meddelandet.",
    joinButton: "G\xE5 med i organisationen"
  },
  "password-reset": {
    subject: "\xC5terst\xE4ll l\xF6senord",
    message: "N\xE5gon har precis beg\xE4rt att f\xE5 \xE4ndra anv\xE4ndaruppgifterna f\xF6r ditt {{realmName}}-konto. Om det h\xE4r var du, klicka p\xE5 l\xE4nken nedan f\xF6r att \xE5terst\xE4lla dem.",
    linkExpiration: "Den h\xE4r l\xE4nken upph\xF6r att g\xE4lla inom {{expiration}}.",
    ignoreMessage: "Om du inte vill \xE5terst\xE4lla dina referenser, ignorera bara det h\xE4r meddelandet och ingenting kommer att \xE4ndras.",
    resetButton: "\xC5terst\xE4ll autentiseringsuppgifter"
  },
  requiredAction: {
    configure_totp: "Konfigurera OTP",
    terms_and_conditions: "Regler och villkor",
    update_password: "Uppdatera l\xF6senord",
    update_profile: "Uppdatera profil",
    verify_email: "Verifiera e-post",
    configure_recovery_authn_codes: "Generera \xE5terst\xE4llningskoder",
    seconds: "{0,choice,0#sekunder|1#sekund|1<sekunder}",
    minutes: "{0,choice,0#minuter|1#minut|1<minuter}",
    hours: "{0,choice,0#timmar|1#timme|1<timmar}",
    days: "{0,choice,0#dagar|1#dag|1<dagar}"
  },
  footer: {
    allRightsReserved: "\xA9 {{currentYear}} {{realmName}}, med ensamr\xE4tt"
  }
};

// src/email/locales/th/translation.json
var translation_default26 = {
  "email-test": {
    subject: "\u0E01\u0E32\u0E23\u0E17\u0E14\u0E2A\u0E2D\u0E1A\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E4C",
    greeting: "\u0E2A\u0E27\u0E31\u0E2A\u0E14\u0E35\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19",
    message: "\u0E19\u0E35\u0E48\u0E04\u0E37\u0E2D\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E17\u0E14\u0E2A\u0E2D\u0E1A\u0E08\u0E32\u0E01 {{realmName}} \u0E2B\u0E32\u0E01\u0E04\u0E38\u0E13\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E19\u0E35\u0E49 \u0E41\u0E2A\u0E14\u0E07\u0E27\u0E48\u0E32\u0E01\u0E32\u0E23\u0E15\u0E31\u0E49\u0E07\u0E04\u0E48\u0E32\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E04\u0E48\u0E32\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07"
  },
  "email-update-confirmation": {
    subject: "\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E43\u0E2B\u0E21\u0E48",
    linkExpiration: "\u0E25\u0E34\u0E07\u0E01\u0E4C\u0E19\u0E35\u0E49\u0E08\u0E30\u0E2B\u0E21\u0E14\u0E2D\u0E32\u0E22\u0E38\u0E20\u0E32\u0E22\u0E43\u0E19 {{expiration}}",
    updateEmailAddress: "\u0E2B\u0E32\u0E01\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E2D\u0E31\u0E1B\u0E40\u0E14\u0E15\u0E1A\u0E31\u0E0D\u0E0A\u0E35 {{realmName}} \u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E14\u0E49\u0E27\u0E22\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48\u0E2D\u0E35\u0E40\u0E21\u0E25 {{newEmail}}",
    clickLinkBelow: "\u0E04\u0E25\u0E34\u0E01\u0E25\u0E34\u0E07\u0E04\u0E4C\u0E14\u0E49\u0E32\u0E19\u0E25\u0E48\u0E32\u0E07",
    updateEmail: "\u0E2D\u0E31\u0E1E\u0E40\u0E14\u0E17\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E4C",
    ignoreMessage: "\u0E2B\u0E32\u0E01\u0E04\u0E38\u0E13\u0E44\u0E21\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23\u0E41\u0E01\u0E49\u0E44\u0E02\u0E19\u0E35\u0E49\u0E15\u0E48\u0E2D \u0E01\u0E47\u0E44\u0E21\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E2A\u0E19\u0E43\u0E08\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E19\u0E35\u0E49"
  },
  "email-verification": {
    subject: "\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E2D\u0E35\u0E40\u0E21\u0E25",
    message: "\u0E21\u0E35\u0E04\u0E19\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E1A\u0E31\u0E0D\u0E0A\u0E35 {{firstName}} \u0E14\u0E49\u0E27\u0E22\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E19\u0E35\u0E49 \u0E2B\u0E32\u0E01\u0E40\u0E1B\u0E47\u0E19\u0E04\u0E38\u0E13 \u0E43\u0E2B\u0E49\u0E04\u0E25\u0E34\u0E01\u0E25\u0E34\u0E07\u0E01\u0E4C\u0E14\u0E49\u0E32\u0E19\u0E25\u0E48\u0E32\u0E07\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13",
    verifyButton: "\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E2D\u0E35\u0E40\u0E21\u0E25",
    linkExpiration: "\u0E25\u0E34\u0E07\u0E01\u0E4C\u0E19\u0E35\u0E49\u0E08\u0E30\u0E2B\u0E21\u0E14\u0E2D\u0E32\u0E22\u0E38\u0E20\u0E32\u0E22\u0E43\u0E19 {{expiration}}",
    ignoreMessage: "\u0E2B\u0E32\u0E01\u0E04\u0E38\u0E13\u0E44\u0E21\u0E48\u0E44\u0E14\u0E49\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E1A\u0E31\u0E0D\u0E0A\u0E35\u0E19\u0E35\u0E49 \u0E01\u0E47\u0E44\u0E21\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E2A\u0E19\u0E43\u0E08\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E19\u0E35\u0E49"
  },
  "event-login_error": {
    subject: "\u0E02\u0E49\u0E2D\u0E1C\u0E34\u0E14\u0E1E\u0E25\u0E32\u0E14\u0E43\u0E19\u0E01\u0E32\u0E23\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A",
    message: "\u0E15\u0E23\u0E27\u0E08\u0E1E\u0E1A\u0E04\u0E27\u0E32\u0E21\u0E1E\u0E22\u0E32\u0E22\u0E32\u0E21\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A\u0E17\u0E35\u0E48\u0E25\u0E49\u0E21\u0E40\u0E2B\u0E25\u0E27\u0E43\u0E19\u0E1A\u0E31\u0E0D\u0E0A\u0E35\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E40\u0E21\u0E37\u0E48\u0E2D {{date}} \u0E08\u0E32\u0E01 {{ipAddress}}",
    contactAdmin: "\u0E2B\u0E32\u0E01\u0E44\u0E21\u0E48\u0E43\u0E0A\u0E48\u0E04\u0E38\u0E13 \u0E42\u0E1B\u0E23\u0E14\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E14\u0E39\u0E41\u0E25\u0E23\u0E30\u0E1A\u0E1A"
  },
  "event-remove_credential": {
    subject: "\u0E25\u0E1A\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E23\u0E31\u0E1A\u0E23\u0E2D\u0E07",
    message: "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E23\u0E31\u0E1A\u0E23\u0E2D\u0E07 {{credentialType}} \u0E16\u0E39\u0E01\u0E25\u0E1A\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E1A\u0E31\u0E0D\u0E0A\u0E35\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E40\u0E21\u0E37\u0E48\u0E2D {{date}} \u0E08\u0E32\u0E01 {{ipAddress}}",
    contactAdmin: "\u0E2B\u0E32\u0E01\u0E44\u0E21\u0E48\u0E43\u0E0A\u0E48\u0E04\u0E38\u0E13 \u0E42\u0E1B\u0E23\u0E14\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E14\u0E39\u0E41\u0E25\u0E23\u0E30\u0E1A\u0E1A"
  },
  "event-remove_totp": {
    subject: "\u0E25\u0E1A OTP",
    message: "OTP \u0E16\u0E39\u0E01\u0E25\u0E1A\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E1A\u0E31\u0E0D\u0E0A\u0E35\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E40\u0E21\u0E37\u0E48\u0E2D {{date}} \u0E08\u0E32\u0E01 {{ipAddress}}",
    contactAdmin: "\u0E2B\u0E32\u0E01\u0E44\u0E21\u0E48\u0E43\u0E0A\u0E48\u0E04\u0E38\u0E13 \u0E42\u0E1B\u0E23\u0E14\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E14\u0E39\u0E41\u0E25\u0E23\u0E30\u0E1A\u0E1A"
  },
  "event-update_credential": {
    subject: "\u0E2D\u0E31\u0E1B\u0E40\u0E14\u0E15\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E23\u0E31\u0E1A\u0E23\u0E2D\u0E07",
    message: "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E1B\u0E23\u0E30\u0E08\u0E33\u0E15\u0E31\u0E27 {{credentialType}} \u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E21\u0E35\u0E01\u0E32\u0E23\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E41\u0E1B\u0E25\u0E07\u0E40\u0E21\u0E37\u0E48\u0E2D {{date}} \u0E08\u0E32\u0E01 {{ipAddress}}",
    contactAdmin: "\u0E2B\u0E32\u0E01\u0E44\u0E21\u0E48\u0E43\u0E0A\u0E48\u0E04\u0E38\u0E13 \u0E42\u0E1B\u0E23\u0E14\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E14\u0E39\u0E41\u0E25\u0E23\u0E30\u0E1A\u0E1A"
  },
  "event-update_password": {
    subject: "\u0E2D\u0E31\u0E1B\u0E40\u0E14\u0E15\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19",
    message: "\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E16\u0E39\u0E01\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E40\u0E21\u0E37\u0E48\u0E2D {{date}} \u0E08\u0E32\u0E01 {{ipAddress}}",
    contactAdmin: "\u0E2B\u0E32\u0E01\u0E44\u0E21\u0E48\u0E43\u0E0A\u0E48\u0E04\u0E38\u0E13 \u0E42\u0E1B\u0E23\u0E14\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E14\u0E39\u0E41\u0E25\u0E23\u0E30\u0E1A\u0E1A"
  },
  "event-update_totp": {
    subject: "\u0E2D\u0E31\u0E1B\u0E40\u0E14\u0E15 OTP",
    message: "OTP \u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E2D\u0E31\u0E1B\u0E40\u0E14\u0E15\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E1A\u0E31\u0E0D\u0E0A\u0E35\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E40\u0E21\u0E37\u0E48\u0E2D {{date}} \u0E08\u0E32\u0E01 {{ipAddress}}",
    contactAdmin: "\u0E2B\u0E32\u0E01\u0E44\u0E21\u0E48\u0E43\u0E0A\u0E48\u0E04\u0E38\u0E13 \u0E42\u0E1B\u0E23\u0E14\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E14\u0E39\u0E41\u0E25\u0E23\u0E30\u0E1A\u0E1A"
  },
  "event-user_disabled_by_permanent_lockout": {
    subject: "\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E16\u0E39\u0E01\u0E1B\u0E34\u0E14\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E42\u0E14\u0E22\u0E01\u0E32\u0E23\u0E25\u0E47\u0E2D\u0E01\u0E16\u0E32\u0E27\u0E23",
    message: "\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E16\u0E39\u0E01\u0E1B\u0E34\u0E14\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E16\u0E32\u0E27\u0E23\u0E40\u0E19\u0E37\u0E48\u0E2D\u0E07\u0E08\u0E32\u0E01\u0E01\u0E32\u0E23\u0E1E\u0E22\u0E32\u0E22\u0E32\u0E21\u0E25\u0E49\u0E21\u0E40\u0E2B\u0E25\u0E27\u0E2B\u0E25\u0E32\u0E22\u0E04\u0E23\u0E31\u0E49\u0E07\u0E43\u0E19 {{date}}",
    contactAdmin: "\u0E42\u0E1B\u0E23\u0E14\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E14\u0E39\u0E41\u0E25\u0E23\u0E30\u0E1A\u0E1A"
  },
  "event-user_disabled_by_temporary_lockout": {
    subject: "\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E16\u0E39\u0E01\u0E1B\u0E34\u0E14\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E42\u0E14\u0E22\u0E01\u0E32\u0E23\u0E25\u0E47\u0E2D\u0E04\u0E0A\u0E31\u0E48\u0E27\u0E04\u0E23\u0E32\u0E27",
    message: "\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E16\u0E39\u0E01\u0E1B\u0E34\u0E14\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E0A\u0E31\u0E48\u0E27\u0E04\u0E23\u0E32\u0E27\u0E40\u0E19\u0E37\u0E48\u0E2D\u0E07\u0E08\u0E32\u0E01\u0E01\u0E32\u0E23\u0E1E\u0E22\u0E32\u0E22\u0E32\u0E21\u0E25\u0E49\u0E21\u0E40\u0E2B\u0E25\u0E27\u0E2B\u0E25\u0E32\u0E22\u0E04\u0E23\u0E31\u0E49\u0E07\u0E43\u0E19 {{date}}",
    contactAdmin: "\u0E42\u0E1B\u0E23\u0E14\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E14\u0E39\u0E41\u0E25\u0E23\u0E30\u0E1A\u0E1A"
  },
  executeActions: {
    subject: "\u0E2D\u0E31\u0E1B\u0E40\u0E14\u0E15\u0E1A\u0E31\u0E0D\u0E0A\u0E35\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13",
    message: "\u0E1C\u0E39\u0E49\u0E14\u0E39\u0E41\u0E25\u0E23\u0E30\u0E1A\u0E1A\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E40\u0E1E\u0E34\u0E48\u0E07\u0E02\u0E2D\u0E43\u0E2B\u0E49\u0E04\u0E38\u0E13\u0E2D\u0E31\u0E1B\u0E40\u0E14\u0E15\u0E1A\u0E31\u0E0D\u0E0A\u0E35 {{realmName}} \u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E42\u0E14\u0E22\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23\u0E14\u0E31\u0E07\u0E15\u0E48\u0E2D\u0E44\u0E1B\u0E19\u0E35\u0E49:",
    clickLink: "\u0E04\u0E25\u0E34\u0E01\u0E17\u0E35\u0E48\u0E25\u0E34\u0E07\u0E04\u0E4C\u0E14\u0E49\u0E32\u0E19\u0E25\u0E48\u0E32\u0E07\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E40\u0E23\u0E34\u0E48\u0E21\u0E01\u0E23\u0E30\u0E1A\u0E27\u0E19\u0E01\u0E32\u0E23\u0E19\u0E35\u0E49",
    linkExpiration: "\u0E25\u0E34\u0E07\u0E01\u0E4C\u0E19\u0E35\u0E49\u0E08\u0E30\u0E2B\u0E21\u0E14\u0E2D\u0E32\u0E22\u0E38\u0E20\u0E32\u0E22\u0E43\u0E19 {{expiration}}",
    ignoreMessage: "\u0E2B\u0E32\u0E01\u0E04\u0E38\u0E13\u0E44\u0E21\u0E48\u0E17\u0E23\u0E32\u0E1A\u0E27\u0E48\u0E32\u0E1C\u0E39\u0E49\u0E14\u0E39\u0E41\u0E25\u0E23\u0E30\u0E1A\u0E1A\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E23\u0E49\u0E2D\u0E07\u0E02\u0E2D\u0E2A\u0E34\u0E48\u0E07\u0E19\u0E35\u0E49 \u0E40\u0E1E\u0E35\u0E22\u0E07\u0E40\u0E1E\u0E34\u0E01\u0E40\u0E09\u0E22\u0E15\u0E48\u0E2D\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E19\u0E35\u0E49\u0E41\u0E25\u0E30\u0E08\u0E30\u0E44\u0E21\u0E48\u0E21\u0E35\u0E2D\u0E30\u0E44\u0E23\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E41\u0E1B\u0E25\u0E07",
    updateAccountButton: "\u0E2D\u0E31\u0E1B\u0E40\u0E14\u0E15\u0E1A\u0E31\u0E0D\u0E0A\u0E35"
  },
  "identity-provider-link": {
    subject: "\u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E21\u0E42\u0E22\u0E07 {0} \u0E01\u0E31\u0E1A\u0E1A\u0E31\u0E0D\u0E0A\u0E35\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13",
    message: "\u0E21\u0E35\u0E04\u0E19\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E21\u0E42\u0E22\u0E07\u0E1A\u0E31\u0E0D\u0E0A\u0E35 {{identityProviderDisplayName}} \u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E01\u0E31\u0E1A\u0E1A\u0E31\u0E0D\u0E0A\u0E35 {{realmName}} \u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49 {{username}}",
    clickLink: "\u0E2B\u0E32\u0E01\u0E40\u0E1B\u0E47\u0E19\u0E04\u0E38\u0E13 \u0E43\u0E2B\u0E49\u0E04\u0E25\u0E34\u0E01\u0E25\u0E34\u0E07\u0E01\u0E4C\u0E14\u0E49\u0E32\u0E19\u0E25\u0E48\u0E32\u0E07\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E21\u0E42\u0E22\u0E07\u0E1A\u0E31\u0E0D\u0E0A\u0E35",
    linkExpiration: "\u0E25\u0E34\u0E07\u0E01\u0E4C\u0E19\u0E35\u0E49\u0E08\u0E30\u0E2B\u0E21\u0E14\u0E2D\u0E32\u0E22\u0E38\u0E20\u0E32\u0E22\u0E43\u0E19 {{expiration}}",
    ignoreMessage: "\u0E2B\u0E32\u0E01\u0E04\u0E38\u0E13\u0E44\u0E21\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23\u0E41\u0E01\u0E49\u0E44\u0E02\u0E19\u0E35\u0E49\u0E15\u0E48\u0E2D \u0E01\u0E47\u0E44\u0E21\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E2A\u0E19\u0E43\u0E08\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E19\u0E35\u0E49",
    linkAccountsButton: "\u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E21\u0E42\u0E22\u0E07\u0E1A\u0E31\u0E0D\u0E0A\u0E35",
    loginInfo: "\u0E2B\u0E32\u0E01\u0E04\u0E38\u0E13\u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E21\u0E42\u0E22\u0E07\u0E1A\u0E31\u0E0D\u0E0A\u0E35 \u0E04\u0E38\u0E13\u0E08\u0E30\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A {{identityProviderDisplayName}} \u0E1C\u0E48\u0E32\u0E19 {{realmName}} \u0E44\u0E14\u0E49"
  },
  "org-invite": {
    subject: "\u0E04\u0E33\u0E40\u0E0A\u0E34\u0E0D\u0E43\u0E2B\u0E49\u0E40\u0E02\u0E49\u0E32\u0E23\u0E48\u0E27\u0E21\u0E2D\u0E07\u0E04\u0E4C\u0E01\u0E23 {0}",
    greeting: "\u0E2A\u0E27\u0E31\u0E2A\u0E14\u0E35 {{firstName}} {{lastName}}",
    message: "\u0E04\u0E38\u0E13\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E40\u0E0A\u0E34\u0E0D\u0E43\u0E2B\u0E49\u0E40\u0E02\u0E49\u0E32\u0E23\u0E48\u0E27\u0E21\u0E2D\u0E07\u0E04\u0E4C\u0E01\u0E23 {{organizationName}} \u0E04\u0E25\u0E34\u0E01\u0E25\u0E34\u0E07\u0E04\u0E4C\u0E14\u0E49\u0E32\u0E19\u0E25\u0E48\u0E32\u0E07\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E40\u0E02\u0E49\u0E32\u0E23\u0E48\u0E27\u0E21",
    linkExpiration: "\u0E25\u0E34\u0E07\u0E01\u0E4C\u0E19\u0E35\u0E49\u0E08\u0E30\u0E2B\u0E21\u0E14\u0E2D\u0E32\u0E22\u0E38\u0E20\u0E32\u0E22\u0E43\u0E19 {{expiration}}",
    ignoreMessage: "\u0E2B\u0E32\u0E01\u0E04\u0E38\u0E13\u0E44\u0E21\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E40\u0E02\u0E49\u0E32\u0E23\u0E48\u0E27\u0E21\u0E2D\u0E07\u0E04\u0E4C\u0E01\u0E23 \u0E01\u0E47\u0E44\u0E21\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E2A\u0E19\u0E43\u0E08\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E19\u0E35\u0E49",
    joinButton: "\u0E40\u0E02\u0E49\u0E32\u0E23\u0E48\u0E27\u0E21\u0E01\u0E31\u0E1A\u0E2D\u0E07\u0E04\u0E4C\u0E01\u0E23"
  },
  "password-reset": {
    subject: "\u0E23\u0E35\u0E40\u0E0B\u0E47\u0E15\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19",
    message: "\u0E40\u0E1E\u0E34\u0E48\u0E07\u0E21\u0E35\u0E04\u0E19\u0E02\u0E2D\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E23\u0E31\u0E1A\u0E23\u0E2D\u0E07\u0E1A\u0E31\u0E0D\u0E0A\u0E35 {{realmName}} \u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13 \u0E2B\u0E32\u0E01\u0E40\u0E1B\u0E47\u0E19\u0E04\u0E38\u0E13 \u0E43\u0E2B\u0E49\u0E04\u0E25\u0E34\u0E01\u0E17\u0E35\u0E48\u0E25\u0E34\u0E07\u0E01\u0E4C\u0E14\u0E49\u0E32\u0E19\u0E25\u0E48\u0E32\u0E07\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E23\u0E35\u0E40\u0E0B\u0E47\u0E15",
    linkExpiration: "\u0E25\u0E34\u0E07\u0E01\u0E4C\u0E19\u0E35\u0E49\u0E08\u0E30\u0E2B\u0E21\u0E14\u0E2D\u0E32\u0E22\u0E38\u0E20\u0E32\u0E22\u0E43\u0E19 {{expiration}}",
    ignoreMessage: "\u0E2B\u0E32\u0E01\u0E04\u0E38\u0E13\u0E44\u0E21\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E23\u0E35\u0E40\u0E0B\u0E47\u0E15\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E23\u0E31\u0E1A\u0E23\u0E2D\u0E07\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13 \u0E40\u0E1E\u0E35\u0E22\u0E07\u0E40\u0E1E\u0E34\u0E01\u0E40\u0E09\u0E22\u0E15\u0E48\u0E2D\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E19\u0E35\u0E49\u0E41\u0E25\u0E30\u0E08\u0E30\u0E44\u0E21\u0E48\u0E21\u0E35\u0E2D\u0E30\u0E44\u0E23\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E41\u0E1B\u0E25\u0E07",
    resetButton: "\u0E23\u0E35\u0E40\u0E0B\u0E47\u0E15\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E23\u0E31\u0E1A\u0E23\u0E2D\u0E07"
  },
  requiredAction: {
    configure_totp: "\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E04\u0E48\u0E32 OTP",
    terms_and_conditions: "\u0E02\u0E49\u0E2D\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E41\u0E25\u0E30\u0E40\u0E07\u0E37\u0E48\u0E2D\u0E19\u0E44\u0E02",
    update_password: "\u0E2D\u0E31\u0E1B\u0E40\u0E14\u0E15\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19",
    update_profile: "\u0E2D\u0E31\u0E1E\u0E40\u0E14\u0E15\u0E42\u0E1B\u0E23\u0E44\u0E1F\u0E25\u0E4C",
    verify_email: "\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E2D\u0E35\u0E40\u0E21\u0E25",
    configure_recovery_authn_codes: "\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E23\u0E2B\u0E31\u0E2A\u0E01\u0E32\u0E23\u0E01\u0E39\u0E49\u0E04\u0E37\u0E19",
    seconds: "{0,choice,0#\u0E27\u0E34\u0E19\u0E32\u0E17\u0E35|1#\u0E27\u0E34\u0E19\u0E32\u0E17\u0E35|1<\u0E27\u0E34\u0E19\u0E32\u0E17\u0E35}",
    minutes: "{0,choice,0#\u0E19\u0E32\u0E17\u0E35|1#\u0E19\u0E32\u0E17\u0E35|1<\u0E19\u0E32\u0E17\u0E35}",
    hours: "{0,choice,0#\u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07|1#\u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07|1<\u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07}",
    days: "{0,choice,0#\u0E27\u0E31\u0E19|1#\u0E27\u0E31\u0E19|1<\u0E27\u0E31\u0E19}"
  },
  footer: {
    allRightsReserved: "\xA9 {{currentYear}} {{realmName}} \u0E2A\u0E07\u0E27\u0E19\u0E25\u0E34\u0E02\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E4C"
  }
};

// src/email/locales/tr/translation.json
var translation_default27 = {
  "email-test": {
    subject: "E-posta Testi",
    greeting: "Merhaba arkada\u015F\u0131m",
    message: "Bu, {{realmName}} adresinden gelen bir test e-postas\u0131d\u0131r. Bu e-postay\u0131 ald\u0131ysan\u0131z e-posta ayarlar\u0131n\u0131z\u0131n do\u011Fru yap\u0131land\u0131r\u0131ld\u0131\u011F\u0131 anlam\u0131na gelir."
  },
  "email-update-confirmation": {
    subject: "Yeni e-postay\u0131 do\u011Frulay\u0131n",
    linkExpiration: "Bu ba\u011Flant\u0131n\u0131n s\xFCresi {{expiration}} i\xE7inde dolacak.",
    updateEmailAddress: "{{realmName}} hesab\u0131n\u0131z\u0131 {{newEmail}} e-posta adresiyle g\xFCncellemek i\xE7in",
    clickLinkBelow: "a\u015Fa\u011F\u0131daki ba\u011Flant\u0131ya t\u0131klay\u0131n",
    updateEmail: "E-postay\u0131 G\xFCncelle",
    ignoreMessage: "Bu de\u011Fi\u015Fikli\u011Fe devam etmek istemiyorsan\u0131z bu mesaj\u0131 dikkate almay\u0131n."
  },
  "email-verification": {
    subject: "E-postay\u0131 do\u011Frula",
    message: "Birisi bu e-posta adresiyle {{firstName}} bir hesap olu\u015Fturdu. Bu sizseniz, e-posta adresinizi do\u011Frulamak i\xE7in a\u015Fa\u011F\u0131daki ba\u011Flant\u0131ya t\u0131klay\u0131n.",
    verifyButton: "E-postay\u0131 do\u011Frula",
    linkExpiration: "Bu ba\u011Flant\u0131n\u0131n s\xFCresi {{expiration}} i\xE7inde dolacak.",
    ignoreMessage: "Bu hesab\u0131 siz olu\u015Fturmad\u0131ysan\u0131z bu mesaj\u0131 dikkate almay\u0131n."
  },
  "event-login_error": {
    subject: "Giri\u015F hatas\u0131",
    message: "{{date}} tarihinde, {{ipAddress}} adresinden hesab\u0131n\u0131za ba\u015Far\u0131s\u0131z bir giri\u015F denemesi alg\u0131land\u0131.",
    contactAdmin: "Bu siz de\u011Filseniz l\xFCtfen bir y\xF6neticiyle ileti\u015Fime ge\xE7in."
  },
  "event-remove_credential": {
    subject: "Kimlik bilgisini kald\u0131r",
    message: "{{credentialType}} kimlik bilgisi {{date}} tarihinde {{ipAddress}} adresinden hesab\u0131n\u0131zdan kald\u0131r\u0131ld\u0131.",
    contactAdmin: "Bu siz de\u011Filseniz l\xFCtfen bir y\xF6neticiyle ileti\u015Fime ge\xE7in."
  },
  "event-remove_totp": {
    subject: "OTP \xF6\u011Fesini kald\u0131r",
    message: "OTP, {{date}} tarihinde {{ipAddress}} adresinden hesab\u0131n\u0131zdan kald\u0131r\u0131ld\u0131.",
    contactAdmin: "Bu siz de\u011Filseniz l\xFCtfen bir y\xF6neticiyle ileti\u015Fime ge\xE7in."
  },
  "event-update_credential": {
    subject: "Kimlik bilgilerini g\xFCncelle",
    message: "{{credentialType}} kimlik bilgileriniz {{date}} tarihinde {{ipAddress}} iken de\u011Fi\u015Ftirildi.",
    contactAdmin: "Bu siz de\u011Filseniz l\xFCtfen bir y\xF6neticiyle ileti\u015Fime ge\xE7in."
  },
  "event-update_password": {
    subject: "\u015Eifreyi g\xFCncelle",
    message: "\u015Eifreniz {{date}} tarihinde {{ipAddress}} iken de\u011Fi\u015Ftirildi.",
    contactAdmin: "Bu siz de\u011Filseniz l\xFCtfen bir y\xF6neticiyle ileti\u015Fime ge\xE7in."
  },
  "event-update_totp": {
    subject: "OTP G\xFCncellemesi",
    message: "OTP, hesab\u0131n\u0131z i\xE7in {{date}} tarihinde {{ipAddress}} tarihinden itibaren g\xFCncellendi.",
    contactAdmin: "Bu siz de\u011Filseniz l\xFCtfen bir y\xF6neticiyle ileti\u015Fime ge\xE7in."
  },
  "event-user_disabled_by_permanent_lockout": {
    subject: "Kullan\u0131c\u0131 kal\u0131c\u0131 kilitlenme nedeniyle devre d\u0131\u015F\u0131 b\u0131rak\u0131ld\u0131",
    message: "{{date}} \xFCzerinde birden fazla ba\u015Far\u0131s\u0131z giri\u015Fimde bulunulmas\u0131 nedeniyle kullan\u0131c\u0131n\u0131z kal\u0131c\u0131 olarak devre d\u0131\u015F\u0131 b\u0131rak\u0131ld\u0131.",
    contactAdmin: "L\xFCtfen bir y\xF6neticiyle ileti\u015Fime ge\xE7in."
  },
  "event-user_disabled_by_temporary_lockout": {
    subject: "Kullan\u0131c\u0131 ge\xE7ici kilitlenme nedeniyle devre d\u0131\u015F\u0131 b\u0131rak\u0131ld\u0131",
    message: "{{date}} \xFCzerinde birden fazla ba\u015Far\u0131s\u0131z giri\u015Fimde bulunulmas\u0131 nedeniyle kullan\u0131c\u0131n\u0131z ge\xE7ici olarak devre d\u0131\u015F\u0131 b\u0131rak\u0131ld\u0131.",
    contactAdmin: "L\xFCtfen bir y\xF6neticiyle ileti\u015Fime ge\xE7in."
  },
  executeActions: {
    subject: "Hesab\u0131n\u0131z\u0131 G\xFCncelleyin",
    message: "Y\xF6neticiniz az \xF6nce a\u015Fa\u011F\u0131daki i\u015Flemleri ger\xE7ekle\u015Ftirerek {{realmName}} hesab\u0131n\u0131z\u0131 g\xFCncellemenizi istedi:",
    clickLink: "Bu i\u015Flemi ba\u015Flatmak i\xE7in a\u015Fa\u011F\u0131daki ba\u011Flant\u0131ya t\u0131klay\u0131n.",
    linkExpiration: "Bu ba\u011Flant\u0131n\u0131n s\xFCresi {{expiration}} i\xE7inde dolacak.",
    ignoreMessage: "Y\xF6neticinizin bunu istedi\u011Finin fark\u0131nda de\u011Filseniz, bu mesaj\u0131 dikkate almay\u0131n; hi\xE7bir \u015Fey de\u011Fi\u015Fmeyecektir.",
    updateAccountButton: "Hesab\u0131 G\xFCncelle"
  },
  "identity-provider-link": {
    subject: "{0} hesab\u0131n\u0131 hesab\u0131n\u0131za ba\u011Flay\u0131n",
    message: "Birisi {{identityProviderDisplayName}} hesab\u0131n\u0131z\u0131 {{username}} kullan\u0131c\u0131s\u0131n\u0131n {{realmName}} hesab\u0131na ba\u011Flamak istiyor.",
    clickLink: "Bu sizseniz, hesaplar\u0131 ba\u011Flamak i\xE7in a\u015Fa\u011F\u0131daki ba\u011Flant\u0131ya t\u0131klay\u0131n",
    linkExpiration: "Bu ba\u011Flant\u0131n\u0131n s\xFCresi {{expiration}} i\xE7inde dolacak.",
    ignoreMessage: "Bu de\u011Fi\u015Fikli\u011Fe devam etmek istemiyorsan\u0131z bu mesaj\u0131 dikkate almay\u0131n.",
    linkAccountsButton: "Hesaplar\u0131 Ba\u011Fla",
    loginInfo: "Hesaplar\u0131 ba\u011Flarsan\u0131z, {{realmName}} arac\u0131l\u0131\u011F\u0131yla {{identityProviderDisplayName}} hesab\u0131na giri\u015F yapabileceksiniz."
  },
  "org-invite": {
    subject: "{0} kurulu\u015Funa kat\u0131lma daveti",
    greeting: "Merhaba, {{firstName}} {{lastName}}.",
    message: "{{organizationName}} kurulu\u015Funa kat\u0131lmaya davet edildiniz. Kat\u0131lmak i\xE7in a\u015Fa\u011F\u0131daki ba\u011Flant\u0131ya t\u0131klay\u0131n.",
    linkExpiration: "Bu ba\u011Flant\u0131n\u0131n s\xFCresi {{expiration}} i\xE7inde dolacak.",
    ignoreMessage: "Organizasyona kat\u0131lmak istemiyorsan\u0131z bu mesaj\u0131 dikkate almay\u0131n.",
    joinButton: "Organizasyona kat\u0131l\u0131n"
  },
  "password-reset": {
    subject: "\u015Eifreyi s\u0131f\u0131rla",
    message: "Birisi az \xF6nce {{realmName}} hesab\u0131n\u0131z\u0131n kimlik bilgilerini de\u011Fi\u015Ftirme talebinde bulundu. E\u011Fer bu sizseniz, s\u0131f\u0131rlamak i\xE7in a\u015Fa\u011F\u0131daki ba\u011Flant\u0131ya t\u0131klay\u0131n.",
    linkExpiration: "Bu ba\u011Flant\u0131n\u0131n s\xFCresi {{expiration}} i\xE7inde dolacak.",
    ignoreMessage: "Kimlik bilgilerinizi s\u0131f\u0131rlamak istemiyorsan\u0131z bu mesaj\u0131 dikkate almay\u0131n; hi\xE7bir \u015Fey de\u011Fi\u015Fmeyecektir.",
    resetButton: "Kimlik bilgilerini s\u0131f\u0131rla"
  },
  requiredAction: {
    configure_totp: "OTP \xF6\u011Fesini yap\u0131land\u0131r\u0131n",
    terms_and_conditions: "\u015Eartlar ve ko\u015Fullar",
    update_password: "\u015Eifreyi G\xFCncelle",
    update_profile: "Profili G\xFCncelle",
    verify_email: "E-postay\u0131 Do\u011Frula",
    configure_recovery_authn_codes: "Kurtarma Kodlar\u0131 Olu\u015Fturun",
    seconds: "{0,choice,0#saniye|1#saniye|1<saniye}",
    minutes: "{0,choice,0#dakika|1#dakika|1<dakika}",
    hours: "{0,choice,0#saat|1#saat|1<saat}",
    days: "{0,choice,0#g\xFCnler|1#g\xFCn|1<g\xFCnler}"
  },
  footer: {
    allRightsReserved: "\xA9 {{currentYear}} {{realmName}}, T\xFCm Haklar\u0131 Sakl\u0131d\u0131r"
  }
};

// src/email/locales/uk/translation.json
var translation_default28 = {
  "email-test": {
    subject: "\u0422\u0435\u0441\u0442 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0457 \u043F\u043E\u0448\u0442\u0438",
    greeting: "\u043F\u0440\u0438\u0432\u0456\u0442 \u0434\u0440\u0443\u0436\u0435",
    message: "\u0426\u0435 \u0442\u0435\u0441\u0442\u043E\u0432\u0438\u0439 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0438\u0439 \u043B\u0438\u0441\u0442 \u0432\u0456\u0434 {{realmName}}. \u042F\u043A\u0449\u043E \u0432\u0438 \u043E\u0442\u0440\u0438\u043C\u0430\u043B\u0438 \u0446\u0435\u0439 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0438\u0439 \u043B\u0438\u0441\u0442, \u0446\u0435 \u043E\u0437\u043D\u0430\u0447\u0430\u0454, \u0449\u043E \u0432\u0430\u0448\u0456 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0438 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0457 \u043F\u043E\u0448\u0442\u0438 \u043D\u0430\u043B\u0430\u0448\u0442\u043E\u0432\u0430\u043D\u043E \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E."
  },
  "email-update-confirmation": {
    subject: "\u041F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0438 \u043D\u043E\u0432\u0443 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0443 \u0430\u0434\u0440\u0435\u0441\u0443",
    linkExpiration: "\u0422\u0435\u0440\u043C\u0456\u043D \u0434\u0456\u0457 \u0446\u044C\u043E\u0433\u043E \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F \u0437\u0430\u043A\u0456\u043D\u0447\u0438\u0442\u044C\u0441\u044F \u043F\u0440\u043E\u0442\u044F\u0433\u043E\u043C {{expiration}}.",
    updateEmailAddress: "\u0429\u043E\u0431 \u043E\u043D\u043E\u0432\u0438\u0442\u0438 \u043E\u0431\u043B\u0456\u043A\u043E\u0432\u0438\u0439 \u0437\u0430\u043F\u0438\u0441 {{realmName}} \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u044E \u0430\u0434\u0440\u0435\u0441\u043E\u044E {{newEmail}}",
    clickLinkBelow: "\u043D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F \u043D\u0438\u0436\u0447\u0435",
    updateEmail: "\u041E\u043D\u043E\u0432\u0438\u0442\u0438 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0443 \u0430\u0434\u0440\u0435\u0441\u0443",
    ignoreMessage: "\u042F\u043A\u0449\u043E \u0432\u0438 \u043D\u0435 \u0445\u043E\u0447\u0435\u0442\u0435 \u043F\u0440\u043E\u0434\u043E\u0432\u0436\u0443\u0432\u0430\u0442\u0438 \u0446\u044E \u0437\u043C\u0456\u043D\u0443, \u043F\u0440\u043E\u0441\u0442\u043E \u0456\u0433\u043D\u043E\u0440\u0443\u0439\u0442\u0435 \u0446\u0435 \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F."
  },
  "email-verification": {
    subject: "\u041F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0438 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0443 \u0430\u0434\u0440\u0435\u0441\u0443",
    message: "\u0425\u0442\u043E\u0441\u044C \u0441\u0442\u0432\u043E\u0440\u0438\u0432 \u043E\u0431\u043B\u0456\u043A\u043E\u0432\u0438\u0439 \u0437\u0430\u043F\u0438\u0441 {{firstName}} \u0456\u0437 \u0446\u0456\u0454\u044E \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u044E \u0430\u0434\u0440\u0435\u0441\u043E\u044E. \u042F\u043A\u0449\u043E \u0446\u0435 \u0431\u0443\u043B\u0438 \u0432\u0438, \u043D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F \u043D\u0438\u0436\u0447\u0435, \u0449\u043E\u0431 \u043F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0438 \u0441\u0432\u043E\u044E \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0443 \u0430\u0434\u0440\u0435\u0441\u0443.",
    verifyButton: "\u041F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0438 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0443 \u0430\u0434\u0440\u0435\u0441\u0443",
    linkExpiration: "\u0422\u0435\u0440\u043C\u0456\u043D \u0434\u0456\u0457 \u0446\u044C\u043E\u0433\u043E \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F \u0437\u0430\u043A\u0456\u043D\u0447\u0438\u0442\u044C\u0441\u044F \u043F\u0440\u043E\u0442\u044F\u0433\u043E\u043C {{expiration}}.",
    ignoreMessage: "\u042F\u043A\u0449\u043E \u0432\u0438 \u043D\u0435 \u0441\u0442\u0432\u043E\u0440\u044E\u0432\u0430\u043B\u0438 \u0446\u0435\u0439 \u043E\u0431\u043B\u0456\u043A\u043E\u0432\u0438\u0439 \u0437\u0430\u043F\u0438\u0441, \u043F\u0440\u043E\u0441\u0442\u043E \u043F\u0440\u043E\u0456\u0433\u043D\u043E\u0440\u0443\u0439\u0442\u0435 \u0446\u0435 \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F."
  },
  "event-login_error": {
    subject: "\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u0432\u0445\u043E\u0434\u0443",
    message: "{{date}} \u0431\u0443\u043B\u043E \u0432\u0438\u044F\u0432\u043B\u0435\u043D\u043E \u043D\u0435\u0432\u0434\u0430\u043B\u0443 \u0441\u043F\u0440\u043E\u0431\u0443 \u0432\u0445\u043E\u0434\u0443 \u0434\u043E \u0432\u0430\u0448\u043E\u0433\u043E \u043E\u0431\u043B\u0456\u043A\u043E\u0432\u043E\u0433\u043E \u0437\u0430\u043F\u0438\u0441\u0443 \u0437 {{ipAddress}}.",
    contactAdmin: "\u042F\u043A\u0449\u043E \u0446\u0435 \u0431\u0443\u043B\u0438 \u043D\u0435 \u0432\u0438, \u0437\u0432\u0435\u0440\u043D\u0456\u0442\u044C\u0441\u044F \u0434\u043E \u0430\u0434\u043C\u0456\u043D\u0456\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430."
  },
  "event-remove_credential": {
    subject: "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u043E\u0431\u043B\u0456\u043A\u043E\u0432\u0456 \u0434\u0430\u043D\u0456",
    message: "\u041E\u0431\u043B\u0456\u043A\u043E\u0432\u0456 \u0434\u0430\u043D\u0456 {{credentialType}} \u0431\u0443\u043B\u043E \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043E \u0437 \u0432\u0430\u0448\u043E\u0433\u043E \u043E\u0431\u043B\u0456\u043A\u043E\u0432\u043E\u0433\u043E \u0437\u0430\u043F\u0438\u0441\u0443 {{date}} \u0432\u0456\u0434 {{ipAddress}}.",
    contactAdmin: "\u042F\u043A\u0449\u043E \u0446\u0435 \u0431\u0443\u043B\u0438 \u043D\u0435 \u0432\u0438, \u0437\u0432\u0435\u0440\u043D\u0456\u0442\u044C\u0441\u044F \u0434\u043E \u0430\u0434\u043C\u0456\u043D\u0456\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430."
  },
  "event-remove_totp": {
    subject: "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 OTP",
    message: "OTP \u0431\u0443\u043B\u043E \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043E \u0437 \u0432\u0430\u0448\u043E\u0433\u043E \u043E\u0431\u043B\u0456\u043A\u043E\u0432\u043E\u0433\u043E \u0437\u0430\u043F\u0438\u0441\u0443 {{date}} \u0432\u0456\u0434 {{ipAddress}}.",
    contactAdmin: "\u042F\u043A\u0449\u043E \u0446\u0435 \u0431\u0443\u043B\u0438 \u043D\u0435 \u0432\u0438, \u0437\u0432\u0435\u0440\u043D\u0456\u0442\u044C\u0441\u044F \u0434\u043E \u0430\u0434\u043C\u0456\u043D\u0456\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430."
  },
  "event-update_credential": {
    subject: "\u041E\u043D\u043E\u0432\u0456\u0442\u044C \u043E\u0431\u043B\u0456\u043A\u043E\u0432\u0456 \u0434\u0430\u043D\u0456",
    message: "\u0412\u0430\u0448\u0456 \u043E\u0431\u043B\u0456\u043A\u043E\u0432\u0456 \u0434\u0430\u043D\u0456 {{credentialType}} \u0431\u0443\u043B\u043E \u0437\u043C\u0456\u043D\u0435\u043D\u043E {{date}} \u0437 {{ipAddress}}.",
    contactAdmin: "\u042F\u043A\u0449\u043E \u0446\u0435 \u0431\u0443\u043B\u0438 \u043D\u0435 \u0432\u0438, \u0437\u0432\u0435\u0440\u043D\u0456\u0442\u044C\u0441\u044F \u0434\u043E \u0430\u0434\u043C\u0456\u043D\u0456\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430."
  },
  "event-update_password": {
    subject: "\u041E\u043D\u043E\u0432\u0438\u0442\u0438 \u043F\u0430\u0440\u043E\u043B\u044C",
    message: "\u0412\u0430\u0448 \u043F\u0430\u0440\u043E\u043B\u044C \u0431\u0443\u043B\u043E \u0437\u043C\u0456\u043D\u0435\u043D\u043E {{date}} \u0437 {{ipAddress}}.",
    contactAdmin: "\u042F\u043A\u0449\u043E \u0446\u0435 \u0431\u0443\u043B\u0438 \u043D\u0435 \u0432\u0438, \u0437\u0432\u0435\u0440\u043D\u0456\u0442\u044C\u0441\u044F \u0434\u043E \u0430\u0434\u043C\u0456\u043D\u0456\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430."
  },
  "event-update_totp": {
    subject: "\u041E\u043D\u043E\u0432\u0438\u0442\u0438 OTP",
    message: "OTP \u0431\u0443\u043B\u043E \u043E\u043D\u043E\u0432\u043B\u0435\u043D\u043E \u0434\u043B\u044F \u0432\u0430\u0448\u043E\u0433\u043E \u043E\u0431\u043B\u0456\u043A\u043E\u0432\u043E\u0433\u043E \u0437\u0430\u043F\u0438\u0441\u0443 {{date}} \u0437 {{ipAddress}}.",
    contactAdmin: "\u042F\u043A\u0449\u043E \u0446\u0435 \u0431\u0443\u043B\u0438 \u043D\u0435 \u0432\u0438, \u0437\u0432\u0435\u0440\u043D\u0456\u0442\u044C\u0441\u044F \u0434\u043E \u0430\u0434\u043C\u0456\u043D\u0456\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430."
  },
  "event-user_disabled_by_permanent_lockout": {
    subject: "\u041A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430 \u0432\u0438\u043C\u043A\u043D\u0435\u043D\u043E \u0447\u0435\u0440\u0435\u0437 \u043F\u043E\u0441\u0442\u0456\u0439\u043D\u0435 \u0431\u043B\u043E\u043A\u0443\u0432\u0430\u043D\u043D\u044F",
    message: "\u0412\u0430\u0448\u043E\u0433\u043E \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430 \u0432\u0438\u043C\u043A\u043D\u0435\u043D\u043E \u043D\u0430\u0437\u0430\u0432\u0436\u0434\u0438 \u0447\u0435\u0440\u0435\u0437 \u0447\u0438\u0441\u043B\u0435\u043D\u043D\u0456 \u043D\u0435\u0432\u0434\u0430\u043B\u0456 \u0441\u043F\u0440\u043E\u0431\u0438 {{date}}.",
    contactAdmin: "\u0411\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u0437\u0432\u0435\u0440\u043D\u0456\u0442\u044C\u0441\u044F \u0434\u043E \u0430\u0434\u043C\u0456\u043D\u0456\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430."
  },
  "event-user_disabled_by_temporary_lockout": {
    subject: "\u041A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430 \u0432\u0438\u043C\u043A\u043D\u0435\u043D\u043E \u0447\u0435\u0440\u0435\u0437 \u0442\u0438\u043C\u0447\u0430\u0441\u043E\u0432\u0435 \u0431\u043B\u043E\u043A\u0443\u0432\u0430\u043D\u043D\u044F",
    message: "\u0412\u0430\u0448\u043E\u0433\u043E \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430 \u0442\u0438\u043C\u0447\u0430\u0441\u043E\u0432\u043E \u0432\u0438\u043C\u043A\u043D\u0435\u043D\u043E \u0447\u0435\u0440\u0435\u0437 \u0447\u0438\u0441\u043B\u0435\u043D\u043D\u0456 \u043D\u0435\u0432\u0434\u0430\u043B\u0456 \u0441\u043F\u0440\u043E\u0431\u0438 {{date}}.",
    contactAdmin: "\u0411\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u0437\u0432\u0435\u0440\u043D\u0456\u0442\u044C\u0441\u044F \u0434\u043E \u0430\u0434\u043C\u0456\u043D\u0456\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430."
  },
  executeActions: {
    subject: "\u041E\u043D\u043E\u0432\u0456\u0442\u044C \u0441\u0432\u0456\u0439 \u0430\u043A\u0430\u0443\u043D\u0442",
    message: "\u0412\u0430\u0448 \u0430\u0434\u043C\u0456\u043D\u0456\u0441\u0442\u0440\u0430\u0442\u043E\u0440 \u0449\u043E\u0439\u043D\u043E \u043F\u043E\u043F\u0440\u043E\u0441\u0438\u0432 \u0432\u0430\u0441 \u043E\u043D\u043E\u0432\u0438\u0442\u0438 \u043E\u0431\u043B\u0456\u043A\u043E\u0432\u0438\u0439 \u0437\u0430\u043F\u0438\u0441 {{realmName}}, \u0432\u0438\u043A\u043E\u043D\u0430\u0432\u0448\u0438 \u0442\u0430\u043A\u0456 \u0434\u0456\u0457:",
    clickLink: "\u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F \u043D\u0438\u0436\u0447\u0435, \u0449\u043E\u0431 \u0440\u043E\u0437\u043F\u043E\u0447\u0430\u0442\u0438 \u0446\u0435\u0439 \u043F\u0440\u043E\u0446\u0435\u0441.",
    linkExpiration: "\u0422\u0435\u0440\u043C\u0456\u043D \u0434\u0456\u0457 \u0446\u044C\u043E\u0433\u043E \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F \u0437\u0430\u043A\u0456\u043D\u0447\u0438\u0442\u044C\u0441\u044F \u043F\u0440\u043E\u0442\u044F\u0433\u043E\u043C {{expiration}}.",
    ignoreMessage: "\u042F\u043A\u0449\u043E \u0432\u0438 \u043D\u0435 \u0437\u043D\u0430\u0454\u0442\u0435, \u0449\u043E \u0432\u0430\u0448 \u0430\u0434\u043C\u0456\u043D\u0456\u0441\u0442\u0440\u0430\u0442\u043E\u0440 \u0437\u0430\u043F\u0438\u0442\u0430\u0432 \u0446\u0435, \u043F\u0440\u043E\u0441\u0442\u043E \u0456\u0433\u043D\u043E\u0440\u0443\u0439\u0442\u0435 \u0446\u0435 \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F, \u0456 \u043D\u0456\u0447\u043E\u0433\u043E \u043D\u0435 \u0437\u043C\u0456\u043D\u0438\u0442\u044C\u0441\u044F.",
    updateAccountButton: "\u041E\u043D\u043E\u0432\u0438\u0442\u0438 \u0430\u043A\u0430\u0443\u043D\u0442"
  },
  "identity-provider-link": {
    subject: "\u041F\u043E\u0432\u2019\u044F\u0436\u0456\u0442\u044C {0} \u0437\u0456 \u0441\u0432\u043E\u0457\u043C \u043E\u0431\u043B\u0456\u043A\u043E\u0432\u0438\u043C \u0437\u0430\u043F\u0438\u0441\u043E\u043C",
    message: "\u0425\u0442\u043E\u0441\u044C \u0445\u043E\u0447\u0435 \u043F\u043E\u0432\u2019\u044F\u0437\u0430\u0442\u0438 \u0432\u0430\u0448 \u043E\u0431\u043B\u0456\u043A\u043E\u0432\u0438\u0439 \u0437\u0430\u043F\u0438\u0441 {{identityProviderDisplayName}} \u0437 \u043E\u0431\u043B\u0456\u043A\u043E\u0432\u0438\u043C \u0437\u0430\u043F\u0438\u0441\u043E\u043C {{realmName}} \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430 {{username}}.",
    clickLink: "\u042F\u043A\u0449\u043E \u0446\u0435 \u0431\u0443\u043B\u0438 \u0432\u0438, \u043D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F \u043D\u0438\u0436\u0447\u0435, \u0449\u043E\u0431 \u0437\u0432\u2019\u044F\u0437\u0430\u0442\u0438 \u043E\u0431\u043B\u0456\u043A\u043E\u0432\u0456 \u0437\u0430\u043F\u0438\u0441\u0438",
    linkExpiration: "\u0422\u0435\u0440\u043C\u0456\u043D \u0434\u0456\u0457 \u0446\u044C\u043E\u0433\u043E \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F \u0437\u0430\u043A\u0456\u043D\u0447\u0438\u0442\u044C\u0441\u044F \u043F\u0440\u043E\u0442\u044F\u0433\u043E\u043C {{expiration}}.",
    ignoreMessage: "\u042F\u043A\u0449\u043E \u0432\u0438 \u043D\u0435 \u0445\u043E\u0447\u0435\u0442\u0435 \u043F\u0440\u043E\u0434\u043E\u0432\u0436\u0443\u0432\u0430\u0442\u0438 \u0446\u044E \u0437\u043C\u0456\u043D\u0443, \u043F\u0440\u043E\u0441\u0442\u043E \u0456\u0433\u043D\u043E\u0440\u0443\u0439\u0442\u0435 \u0446\u0435 \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F.",
    linkAccountsButton: "\u041F\u043E\u0432\u2019\u044F\u0437\u0430\u0442\u0438 \u043E\u0431\u043B\u0456\u043A\u043E\u0432\u0456 \u0437\u0430\u043F\u0438\u0441\u0438",
    loginInfo: "\u042F\u043A\u0449\u043E \u0432\u0438 \u043F\u043E\u0432\u2019\u044F\u0436\u0435\u0442\u0435 \u043E\u0431\u043B\u0456\u043A\u043E\u0432\u0456 \u0437\u0430\u043F\u0438\u0441\u0438, \u0432\u0438 \u0437\u043C\u043E\u0436\u0435\u0442\u0435 \u0432\u0432\u0456\u0439\u0442\u0438 \u0432 {{identityProviderDisplayName}} \u0447\u0435\u0440\u0435\u0437 {{realmName}}."
  },
  "org-invite": {
    subject: "\u0417\u0430\u043F\u0440\u043E\u0448\u0435\u043D\u043D\u044F \u043F\u0440\u0438\u0454\u0434\u043D\u0430\u0442\u0438\u0441\u044F \u0434\u043E \u043E\u0440\u0433\u0430\u043D\u0456\u0437\u0430\u0446\u0456\u0457 {0}",
    greeting: "\u041F\u0440\u0438\u0432\u0456\u0442, {{firstName}} {{lastName}}.",
    message: "\u0412\u0430\u0441 \u0437\u0430\u043F\u0440\u043E\u0441\u0438\u043B\u0438 \u043F\u0440\u0438\u0454\u0434\u043D\u0430\u0442\u0438\u0441\u044F \u0434\u043E \u043E\u0440\u0433\u0430\u043D\u0456\u0437\u0430\u0446\u0456\u0457 {{organizationName}}. \u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F \u043D\u0438\u0436\u0447\u0435, \u0449\u043E\u0431 \u043F\u0440\u0438\u0454\u0434\u043D\u0430\u0442\u0438\u0441\u044F.",
    linkExpiration: "\u0422\u0435\u0440\u043C\u0456\u043D \u0434\u0456\u0457 \u0446\u044C\u043E\u0433\u043E \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F \u0437\u0430\u043A\u0456\u043D\u0447\u0438\u0442\u044C\u0441\u044F \u043F\u0440\u043E\u0442\u044F\u0433\u043E\u043C {{expiration}}.",
    ignoreMessage: "\u042F\u043A\u0449\u043E \u0432\u0438 \u043D\u0435 \u0445\u043E\u0447\u0435\u0442\u0435 \u043F\u0440\u0438\u0454\u0434\u043D\u0443\u0432\u0430\u0442\u0438\u0441\u044F \u0434\u043E \u043E\u0440\u0433\u0430\u043D\u0456\u0437\u0430\u0446\u0456\u0457, \u043F\u0440\u043E\u0441\u0442\u043E \u043F\u0440\u043E\u0456\u0433\u043D\u043E\u0440\u0443\u0439\u0442\u0435 \u0446\u0435 \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F.",
    joinButton: "\u041F\u0440\u0438\u0454\u0434\u043D\u0430\u0439\u0442\u0435\u0441\u044F \u0434\u043E \u043E\u0440\u0433\u0430\u043D\u0456\u0437\u0430\u0446\u0456\u0457"
  },
  "password-reset": {
    subject: "\u0421\u043A\u0438\u043D\u0443\u0442\u0438 \u043F\u0430\u0440\u043E\u043B\u044C",
    message: "\u0425\u0442\u043E\u0441\u044C \u0449\u043E\u0439\u043D\u043E \u043D\u0430\u0434\u0456\u0441\u043B\u0430\u0432 \u0437\u0430\u043F\u0438\u0442 \u043D\u0430 \u0437\u043C\u0456\u043D\u0443 \u043E\u0431\u043B\u0456\u043A\u043E\u0432\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 \u0432\u0430\u0448\u043E\u0433\u043E \u043E\u0431\u043B\u0456\u043A\u043E\u0432\u043E\u0433\u043E \u0437\u0430\u043F\u0438\u0441\u0443 {{realmName}}. \u042F\u043A\u0449\u043E \u0446\u0435 \u0431\u0443\u043B\u0438 \u0432\u0438, \u043D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F \u043D\u0438\u0436\u0447\u0435, \u0449\u043E\u0431 \u0441\u043A\u0438\u043D\u0443\u0442\u0438 \u0457\u0445.",
    linkExpiration: "\u0422\u0435\u0440\u043C\u0456\u043D \u0434\u0456\u0457 \u0446\u044C\u043E\u0433\u043E \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F \u0437\u0430\u043A\u0456\u043D\u0447\u0438\u0442\u044C\u0441\u044F \u043F\u0440\u043E\u0442\u044F\u0433\u043E\u043C {{expiration}}.",
    ignoreMessage: "\u042F\u043A\u0449\u043E \u0432\u0438 \u043D\u0435 \u0445\u043E\u0447\u0435\u0442\u0435 \u0441\u043A\u0438\u0434\u0430\u0442\u0438 \u0441\u0432\u043E\u0457 \u043E\u0431\u043B\u0456\u043A\u043E\u0432\u0456 \u0434\u0430\u043D\u0456, \u043F\u0440\u043E\u0441\u0442\u043E \u0456\u0433\u043D\u043E\u0440\u0443\u0439\u0442\u0435 \u0446\u0435 \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F, \u0456 \u043D\u0456\u0447\u043E\u0433\u043E \u043D\u0435 \u0437\u043C\u0456\u043D\u0438\u0442\u044C\u0441\u044F.",
    resetButton: "\u0421\u043A\u0438\u043D\u0443\u0442\u0438 \u043E\u0431\u043B\u0456\u043A\u043E\u0432\u0456 \u0434\u0430\u043D\u0456"
  },
  requiredAction: {
    configure_totp: "\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u0442\u0438 OTP",
    terms_and_conditions: "\u041F\u0440\u0430\u0432\u0438\u043B\u0430 \u0442\u0430 \u0443\u043C\u043E\u0432\u0438",
    update_password: "\u041E\u043D\u043E\u0432\u0438\u0442\u0438 \u043F\u0430\u0440\u043E\u043B\u044C",
    update_profile: "\u041E\u043D\u043E\u0432\u0438\u0442\u0438 \u043F\u0440\u043E\u0444\u0456\u043B\u044C",
    verify_email: "\u041F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0438 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0443 \u0430\u0434\u0440\u0435\u0441\u0443",
    configure_recovery_authn_codes: "\u0421\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u044F \u043A\u043E\u0434\u0456\u0432 \u0432\u0456\u0434\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F",
    seconds: "{0,choice,0#\u0441\u0435\u043A\u0443\u043D\u0434|1#\u0441\u0435\u043A\u0443\u043D\u0434\u0430|1<\u0441\u0435\u043A\u0443\u043D\u0434}",
    minutes: "{0,choice,0#\u0445\u0432\u0438\u043B\u0438\u043D|1#\u0445\u0432\u0438\u043B\u0438\u043D\u0430|1<\u0445\u0432\u0438\u043B\u0438\u043D}",
    hours: "{0,choice,0#\u0433\u043E\u0434\u0438\u043D\u0438|1#\u0433\u043E\u0434\u0438\u043D\u0430|1<\u0433\u043E\u0434\u0438\u043D\u0438}",
    days: "{0,choice,0#\u0434\u043D\u0456\u0432|1#\u0434\u0435\u043D\u044C|1<\u0434\u043D\u0456\u0432}"
  },
  footer: {
    allRightsReserved: "\xA9 {{currentYear}} {{realmName}}, \u0443\u0441\u0456 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0445\u0438\u0449\u0435\u043D\u043E"
  }
};

// src/email/locales/zh-CN/translation.json
var translation_default29 = {
  "email-test": {
    subject: "\u7535\u5B50\u90AE\u4EF6\u6D4B\u8BD5",
    greeting: "\u670B\u53CB\u4F60\u597D",
    message: "\u8FD9\u662F\u6765\u81EA {{realmName}} \u7684\u6D4B\u8BD5\u7535\u5B50\u90AE\u4EF6\u3002\u5982\u679C\u60A8\u6536\u5230\u8FD9\u5C01\u7535\u5B50\u90AE\u4EF6\uFF0C\u5219\u8868\u660E\u60A8\u7684\u7535\u5B50\u90AE\u4EF6\u8BBE\u7F6E\u914D\u7F6E\u6B63\u786E\u3002"
  },
  "email-update-confirmation": {
    subject: "\u9A8C\u8BC1\u65B0\u7535\u5B50\u90AE\u4EF6",
    linkExpiration: "\u6B64\u94FE\u63A5\u5C06\u5728 {{expiration}} \u5185\u8FC7\u671F\u3002",
    updateEmailAddress: "\u4F7F\u7528\u7535\u5B50\u90AE\u4EF6\u5730\u5740 {{newEmail}} \u66F4\u65B0\u60A8\u7684 {{realmName}} \u5E10\u6237",
    clickLinkBelow: "\u70B9\u51FB\u4E0B\u9762\u7684\u94FE\u63A5",
    updateEmail: "\u66F4\u65B0\u7535\u5B50\u90AE\u4EF6",
    ignoreMessage: "\u5982\u679C\u60A8\u4E0D\u60F3\u7EE7\u7EED\u8FDB\u884C\u6B64\u4FEE\u6539\uFF0C\u8BF7\u5FFD\u7565\u6B64\u6D88\u606F\u3002"
  },
  "email-verification": {
    subject: "\u9A8C\u8BC1\u7535\u5B50\u90AE\u4EF6",
    message: "\u6709\u4EBA\u4F7F\u7528\u6B64\u7535\u5B50\u90AE\u4EF6\u5730\u5740\u521B\u5EFA\u4E86 {{firstName}} \u5E10\u6237\u3002\u5982\u679C\u60A8\u662F\u8FD9\u6837\uFF0C\u8BF7\u70B9\u51FB\u4E0B\u9762\u7684\u94FE\u63A5\u6765\u9A8C\u8BC1\u60A8\u7684\u7535\u5B50\u90AE\u4EF6\u5730\u5740\u3002",
    verifyButton: "\u9A8C\u8BC1\u7535\u5B50\u90AE\u4EF6",
    linkExpiration: "\u6B64\u94FE\u63A5\u5C06\u5728 {{expiration}} \u5185\u8FC7\u671F\u3002",
    ignoreMessage: "\u5982\u679C\u60A8\u6CA1\u6709\u521B\u5EFA\u6B64\u5E10\u6237\uFF0C\u8BF7\u5FFD\u7565\u6B64\u6D88\u606F\u3002"
  },
  "event-login_error": {
    subject: "\u767B\u5F55\u9519\u8BEF",
    message: "\u68C0\u6D4B\u5230\u60A8\u5728 {{date}} \u4E0A\u4ECE {{ipAddress}} \u767B\u5F55\u5E10\u6237\u7684\u5C1D\u8BD5\u5931\u8D25\u3002",
    contactAdmin: "\u5982\u679C\u8FD9\u4E0D\u662F\u60A8\u672C\u4EBA\u6240\u4E3A\uFF0C\u8BF7\u8054\u7CFB\u7BA1\u7406\u5458\u3002"
  },
  "event-remove_credential": {
    subject: "\u5220\u9664\u51ED\u8BC1",
    message: "\u51ED\u636E {{credentialType}} \u5DF2\u4E8E {{date}} \u4ECE {{ipAddress}} \u4ECE\u60A8\u7684\u5E10\u6237\u4E2D\u5220\u9664\u3002",
    contactAdmin: "\u5982\u679C\u8FD9\u4E0D\u662F\u60A8\u672C\u4EBA\u6240\u4E3A\uFF0C\u8BF7\u8054\u7CFB\u7BA1\u7406\u5458\u3002"
  },
  "event-remove_totp": {
    subject: "\u5220\u9664 OTP",
    message: "OTP \u5DF2\u4E8E {{date}} \u4ECE {{ipAddress}} \u4ECE\u60A8\u7684\u5E10\u6237\u4E2D\u5220\u9664\u3002",
    contactAdmin: "\u5982\u679C\u8FD9\u4E0D\u662F\u60A8\u672C\u4EBA\u6240\u4E3A\uFF0C\u8BF7\u8054\u7CFB\u7BA1\u7406\u5458\u3002"
  },
  "event-update_credential": {
    subject: "\u66F4\u65B0\u51ED\u8BC1",
    message: "\u60A8\u7684 {{credentialType}} \u51ED\u636E\u5DF2\u4E8E {{date}} \u4ECE {{ipAddress}} \u66F4\u6539\u3002",
    contactAdmin: "\u5982\u679C\u8FD9\u4E0D\u662F\u60A8\u672C\u4EBA\u6240\u4E3A\uFF0C\u8BF7\u8054\u7CFB\u7BA1\u7406\u5458\u3002"
  },
  "event-update_password": {
    subject: "\u66F4\u65B0\u5BC6\u7801",
    message: "\u60A8\u7684\u5BC6\u7801\u5DF2\u4E8E {{date}} \u4ECE {{ipAddress}} \u66F4\u6539\u3002",
    contactAdmin: "\u5982\u679C\u8FD9\u4E0D\u662F\u60A8\u672C\u4EBA\u6240\u4E3A\uFF0C\u8BF7\u8054\u7CFB\u7BA1\u7406\u5458\u3002"
  },
  "event-update_totp": {
    subject: "\u66F4\u65B0OTP",
    message: "\u60A8\u7684\u5E10\u6237\u7684 OTP \u5DF2\u4E8E {{date}} \u4ECE {{ipAddress}} \u66F4\u65B0\u3002",
    contactAdmin: "\u5982\u679C\u8FD9\u4E0D\u662F\u60A8\u672C\u4EBA\u6240\u4E3A\uFF0C\u8BF7\u8054\u7CFB\u7BA1\u7406\u5458\u3002"
  },
  "event-user_disabled_by_permanent_lockout": {
    subject: "\u7528\u6237\u56E0\u6C38\u4E45\u9501\u5B9A\u800C\u88AB\u7981\u7528",
    message: "\u7531\u4E8E\u5728 {{date}} \u4E0A\u591A\u6B21\u5C1D\u8BD5\u5931\u8D25\uFF0C\u60A8\u7684\u7528\u6237\u5DF2\u88AB\u6C38\u4E45\u7981\u7528\u3002",
    contactAdmin: "\u8BF7\u8054\u7CFB\u7BA1\u7406\u5458\u3002"
  },
  "event-user_disabled_by_temporary_lockout": {
    subject: "\u7528\u6237\u56E0\u4E34\u65F6\u9501\u5B9A\u800C\u88AB\u7981\u7528",
    message: "\u7531\u4E8E\u5728 {{date}} \u4E0A\u591A\u6B21\u5C1D\u8BD5\u5931\u8D25\uFF0C\u60A8\u7684\u7528\u6237\u5DF2\u88AB\u6682\u65F6\u7981\u7528\u3002",
    contactAdmin: "\u8BF7\u8054\u7CFB\u7BA1\u7406\u5458\u3002"
  },
  executeActions: {
    subject: "\u66F4\u65B0\u60A8\u7684\u5E10\u6237",
    message: "\u60A8\u7684\u7BA1\u7406\u5458\u521A\u521A\u8981\u6C42\u60A8\u6267\u884C\u4EE5\u4E0B\u64CD\u4F5C\u6765\u66F4\u65B0\u60A8\u7684 {{realmName}} \u5E10\u6237\uFF1A",
    clickLink: "\u5355\u51FB\u4E0B\u9762\u7684\u94FE\u63A5\u5F00\u59CB\u6B64\u8FC7\u7A0B\u3002",
    linkExpiration: "\u6B64\u94FE\u63A5\u5C06\u5728 {{expiration}} \u5185\u8FC7\u671F\u3002",
    ignoreMessage: "\u5982\u679C\u60A8\u4E0D\u77E5\u9053\u7BA1\u7406\u5458\u5DF2\u8BF7\u6C42\u6B64\u64CD\u4F5C\uFF0C\u8BF7\u5FFD\u7565\u6B64\u6D88\u606F\uFF0C\u5E76\u4E14\u4E0D\u4F1A\u53D1\u751F\u4EFB\u4F55\u66F4\u6539\u3002",
    updateAccountButton: "\u66F4\u65B0\u5E10\u6237"
  },
  "identity-provider-link": {
    subject: "\u5C06 {0} \u4E0E\u60A8\u7684\u5E10\u6237\u5173\u8054",
    message: "\u6709\u4EBA\u60F3\u8981\u5C06\u60A8\u7684 {{identityProviderDisplayName}} \u5E10\u6237\u4E0E\u7528\u6237 {{username}} \u7684 {{realmName}} \u5E10\u6237\u5173\u8054\u3002",
    clickLink: "\u5982\u679C\u662F\u60A8\uFF0C\u8BF7\u70B9\u51FB\u4E0B\u9762\u7684\u94FE\u63A5\u6765\u94FE\u63A5\u5E10\u6237",
    linkExpiration: "\u6B64\u94FE\u63A5\u5C06\u5728 {{expiration}} \u5185\u8FC7\u671F\u3002",
    ignoreMessage: "\u5982\u679C\u60A8\u4E0D\u60F3\u7EE7\u7EED\u8FDB\u884C\u6B64\u4FEE\u6539\uFF0C\u8BF7\u5FFD\u7565\u6B64\u6D88\u606F\u3002",
    linkAccountsButton: "\u5173\u8054\u8D26\u6237",
    loginInfo: "\u5982\u679C\u60A8\u5173\u8054\u5E10\u6237\uFF0C\u60A8\u5C06\u80FD\u591F\u901A\u8FC7 {{realmName}} \u767B\u5F55 {{identityProviderDisplayName}}\u3002"
  },
  "org-invite": {
    subject: "\u9080\u8BF7\u52A0\u5165 {0} \u7EC4\u7EC7",
    greeting: "\u60A8\u597D\uFF0C{{firstName}} {{lastName}}\u3002",
    message: "\u60A8\u88AB\u9080\u8BF7\u52A0\u5165 {{organizationName}} \u7EC4\u7EC7\u3002\u5355\u51FB\u4E0B\u9762\u7684\u94FE\u63A5\u5373\u53EF\u52A0\u5165\u3002",
    linkExpiration: "\u6B64\u94FE\u63A5\u5C06\u5728 {{expiration}} \u5185\u8FC7\u671F\u3002",
    ignoreMessage: "\u5982\u679C\u60A8\u4E0D\u60F3\u52A0\u5165\u8BE5\u7EC4\u7EC7\uFF0C\u8BF7\u5FFD\u7565\u6B64\u6D88\u606F\u3002",
    joinButton: "\u52A0\u5165\u7EC4\u7EC7"
  },
  "password-reset": {
    subject: "\u91CD\u7F6E\u5BC6\u7801",
    message: "\u6709\u4EBA\u521A\u521A\u8BF7\u6C42\u66F4\u6539\u60A8\u7684 {{realmName}} \u5E10\u6237\u7684\u51ED\u636E\u3002\u5982\u679C\u60A8\u662F\u8FD9\u6837\uFF0C\u8BF7\u5355\u51FB\u4E0B\u9762\u7684\u94FE\u63A5\u6765\u91CD\u7F6E\u5B83\u4EEC\u3002",
    linkExpiration: "\u6B64\u94FE\u63A5\u5C06\u5728 {{expiration}} \u5185\u8FC7\u671F\u3002",
    ignoreMessage: "\u5982\u679C\u60A8\u4E0D\u60F3\u91CD\u7F6E\u60A8\u7684\u51ED\u636E\uFF0C\u53EA\u9700\u5FFD\u7565\u6B64\u6D88\u606F\uFF0C\u4EC0\u4E48\u90FD\u4E0D\u4F1A\u6539\u53D8\u3002",
    resetButton: "\u91CD\u7F6E\u51ED\u8BC1"
  },
  requiredAction: {
    configure_totp: "\u914D\u7F6EOTP",
    terms_and_conditions: "\u6761\u6B3E\u548C\u6761\u4EF6",
    update_password: "\u66F4\u65B0\u5BC6\u7801",
    update_profile: "\u66F4\u65B0\u4E2A\u4EBA\u8D44\u6599",
    verify_email: "\u9A8C\u8BC1\u90AE\u7BB1",
    configure_recovery_authn_codes: "\u751F\u6210\u6062\u590D\u4EE3\u7801",
    seconds: "{0,choice,0#\u79D2|1#\u79D2|1<\u79D2}",
    minutes: "{0,choice,0#\u5206\u949F|1#\u5206\u949F|1<\u5206\u949F}",
    hours: "{0,choice,0#\u5C0F\u65F6|1#\u5C0F\u65F6|1<\u5C0F\u65F6}",
    days: "{0,choice,0#\u5929|1#\u5929|1<\u5929}"
  },
  footer: {
    allRightsReserved: "\xA9 {{currentYear}} {{realmName}}\uFF0C\u4FDD\u7559\u6240\u6709\u6743\u5229"
  }
};

// src/email/locales/zh-TW/translation.json
var translation_default30 = {
  "email-test": {
    subject: "\u96FB\u5B50\u90F5\u4EF6\u6E2C\u8A66",
    greeting: "\u670B\u53CB\u4F60\u597D",
    message: "\u9019\u662F\u4F86\u81EA {{realmName}} \u7684\u6E2C\u8A66\u96FB\u5B50\u90F5\u4EF6\u3002\u5982\u679C\u60A8\u6536\u5230\u9019\u5C01\u96FB\u5B50\u90F5\u4EF6\uFF0C\u5247\u8868\u793A\u60A8\u7684\u96FB\u5B50\u90F5\u4EF6\u8A2D\u5B9A\u914D\u7F6E\u6B63\u78BA\u3002"
  },
  "email-update-confirmation": {
    subject: "\u9A57\u8B49\u65B0\u96FB\u5B50\u90F5\u4EF6",
    linkExpiration: "\u6B64\u9023\u7D50\u5C07\u5728 {{expiration}} \u5167\u904E\u671F\u3002",
    updateEmailAddress: "\u4F7F\u7528\u96FB\u5B50\u90F5\u4EF6\u5730\u5740 {{newEmail}} \u66F4\u65B0\u60A8\u7684 {{realmName}} \u5E33\u6236",
    clickLinkBelow: "\u9EDE\u64CA\u4E0B\u9762\u7684\u9023\u7D50",
    updateEmail: "\u66F4\u65B0\u96FB\u5B50\u90F5\u4EF6",
    ignoreMessage: "\u5982\u679C\u60A8\u4E0D\u60F3\u7E7C\u7E8C\u9032\u884C\u6B64\u4FEE\u6539\uFF0C\u8ACB\u5FFD\u7565\u6B64\u8A0A\u606F\u3002"
  },
  "email-verification": {
    subject: "\u9A57\u8B49\u96FB\u5B50\u90F5\u4EF6",
    message: "\u6709\u4EBA\u4F7F\u7528\u6B64\u96FB\u5B50\u90F5\u4EF6\u5730\u5740\u5EFA\u7ACB\u4E86 {{firstName}} \u5E33\u6236\u3002\u5982\u679C\u60A8\u662F\u9019\u6A23\uFF0C\u8ACB\u9EDE\u64CA\u4E0B\u9762\u7684\u9023\u7D50\u4F86\u9A57\u8B49\u60A8\u7684\u96FB\u5B50\u90F5\u4EF6\u5730\u5740\u3002",
    verifyButton: "\u9A57\u8B49\u96FB\u5B50\u90F5\u4EF6",
    linkExpiration: "\u6B64\u9023\u7D50\u5C07\u5728 {{expiration}} \u5167\u904E\u671F\u3002",
    ignoreMessage: "\u5982\u679C\u60A8\u6C92\u6709\u5EFA\u7ACB\u6B64\u5E33\u6236\uFF0C\u8ACB\u5FFD\u7565\u6B64\u8A0A\u606F\u3002"
  },
  "event-login_error": {
    subject: "\u767B\u5165\u932F\u8AA4",
    message: "\u5075\u6E2C\u5230\u60A8\u5728 {{date}} \u4E0A\u5F9E {{ipAddress}} \u767B\u5165\u5E33\u6236\u7684\u5617\u8A66\u5931\u6557\u3002",
    contactAdmin: "\u5982\u679C\u9019\u4E0D\u662F\u60A8\u672C\u4EBA\u6240\u70BA\uFF0C\u8ACB\u806F\u7D61\u7BA1\u7406\u54E1\u3002"
  },
  "event-remove_credential": {
    subject: "\u522A\u9664\u6191\u8B49",
    message: "\u6191\u8B49 {{credentialType}} \u5DF2\u65BC {{date}} \u5F9E {{ipAddress}} \u5F9E\u60A8\u7684\u5E33\u6236\u4E2D\u522A\u9664\u3002",
    contactAdmin: "\u5982\u679C\u9019\u4E0D\u662F\u60A8\u672C\u4EBA\u6240\u70BA\uFF0C\u8ACB\u806F\u7D61\u7BA1\u7406\u54E1\u3002"
  },
  "event-remove_totp": {
    subject: "\u522A\u9664 OTP",
    message: "OTP \u5DF2\u65BC {{date}} \u5F9E {{ipAddress}} \u5F9E\u60A8\u7684\u5E33\u6236\u4E2D\u522A\u9664\u3002",
    contactAdmin: "\u5982\u679C\u9019\u4E0D\u662F\u60A8\u672C\u4EBA\u6240\u70BA\uFF0C\u8ACB\u806F\u7D61\u7BA1\u7406\u54E1\u3002"
  },
  "event-update_credential": {
    subject: "\u66F4\u65B0\u6191\u8B49",
    message: "\u60A8\u7684 {{credentialType}} \u6191\u8B49\u5DF2\u65BC {{date}} \u5F9E {{ipAddress}} \u8B8A\u66F4\u3002",
    contactAdmin: "\u5982\u679C\u9019\u4E0D\u662F\u60A8\u672C\u4EBA\u6240\u70BA\uFF0C\u8ACB\u806F\u7D61\u7BA1\u7406\u54E1\u3002"
  },
  "event-update_password": {
    subject: "\u66F4\u65B0\u5BC6\u78BC",
    message: "\u60A8\u7684\u5BC6\u78BC\u5DF2\u65BC {{date}} \u5F9E {{ipAddress}} \u8B8A\u66F4\u3002",
    contactAdmin: "\u5982\u679C\u9019\u4E0D\u662F\u60A8\u672C\u4EBA\u6240\u70BA\uFF0C\u8ACB\u806F\u7D61\u7BA1\u7406\u54E1\u3002"
  },
  "event-update_totp": {
    subject: "\u66F4\u65B0OTP",
    message: "\u60A8\u7684\u5E33\u6236\u7684 OTP \u5DF2\u65BC {{date}} \u5F9E {{ipAddress}} \u66F4\u65B0\u3002",
    contactAdmin: "\u5982\u679C\u9019\u4E0D\u662F\u60A8\u672C\u4EBA\u6240\u70BA\uFF0C\u8ACB\u806F\u7D61\u7BA1\u7406\u54E1\u3002"
  },
  "event-user_disabled_by_permanent_lockout": {
    subject: "\u4F7F\u7528\u8005\u56E0\u6C38\u4E45\u9396\u5B9A\u800C\u88AB\u505C\u7528",
    message: "\u7531\u65BC\u5728 {{date}} \u4E0A\u591A\u6B21\u5617\u8A66\u5931\u6557\uFF0C\u60A8\u7684\u4F7F\u7528\u8005\u5DF2\u88AB\u6C38\u4E45\u505C\u7528\u3002",
    contactAdmin: "\u8ACB\u806F\u7D61\u7BA1\u7406\u54E1\u3002"
  },
  "event-user_disabled_by_temporary_lockout": {
    subject: "\u4F7F\u7528\u8005\u56E0\u81E8\u6642\u9396\u5B9A\u800C\u88AB\u505C\u7528",
    message: "\u7531\u65BC\u5728 {{date}} \u4E0A\u591A\u6B21\u5617\u8A66\u5931\u6557\uFF0C\u60A8\u7684\u4F7F\u7528\u8005\u5DF2\u88AB\u66AB\u6642\u505C\u7528\u3002",
    contactAdmin: "\u8ACB\u806F\u7D61\u7BA1\u7406\u54E1\u3002"
  },
  executeActions: {
    subject: "\u66F4\u65B0\u60A8\u7684\u5E33\u6236",
    message: "\u60A8\u7684\u7BA1\u7406\u54E1\u525B\u525B\u8981\u6C42\u60A8\u57F7\u884C\u4EE5\u4E0B\u64CD\u4F5C\u4F86\u66F4\u65B0\u60A8\u7684 {{realmName}} \u5E33\u6236\uFF1A",
    clickLink: "\u9EDE\u64CA\u4E0B\u9762\u7684\u9023\u7D50\u958B\u59CB\u6B64\u904E\u7A0B\u3002",
    linkExpiration: "\u6B64\u9023\u7D50\u5C07\u5728 {{expiration}} \u5167\u904E\u671F\u3002",
    ignoreMessage: "\u5982\u679C\u60A8\u4E0D\u77E5\u9053\u7BA1\u7406\u54E1\u5DF2\u8981\u6C42\u6B64\u64CD\u4F5C\uFF0C\u8ACB\u5FFD\u7565\u6B64\u8A0A\u606F\uFF0C\u4E26\u4E14\u4E0D\u6703\u767C\u751F\u4EFB\u4F55\u8B8A\u66F4\u3002",
    updateAccountButton: "\u66F4\u65B0\u5E33\u6236"
  },
  "identity-provider-link": {
    subject: "\u5C07 {0} \u8207\u60A8\u7684\u5E33\u6236\u95DC\u806F",
    message: "\u6709\u4EBA\u60F3\u8981\u5C07\u60A8\u7684 {{identityProviderDisplayName}} \u5E33\u6236\u8207\u4F7F\u7528\u8005 {{username}} \u7684 {{realmName}} \u5E33\u6236\u95DC\u806F\u3002",
    clickLink: "\u5982\u679C\u662F\u60A8\uFF0C\u8ACB\u9EDE\u64CA\u4E0B\u9762\u7684\u9023\u7D50\u4F86\u9023\u7D50\u5E33\u6236",
    linkExpiration: "\u6B64\u9023\u7D50\u5C07\u5728 {{expiration}} \u5167\u904E\u671F\u3002",
    ignoreMessage: "\u5982\u679C\u60A8\u4E0D\u60F3\u7E7C\u7E8C\u9032\u884C\u6B64\u4FEE\u6539\uFF0C\u8ACB\u5FFD\u7565\u6B64\u8A0A\u606F\u3002",
    linkAccountsButton: "\u95DC\u806F\u5E33\u6236",
    loginInfo: "\u5982\u679C\u60A8\u95DC\u806F\u5E33\u6236\uFF0C\u60A8\u5C07\u80FD\u5920\u900F\u904E {{realmName}} \u767B\u5165 {{identityProviderDisplayName}}\u3002"
  },
  "org-invite": {
    subject: "\u9080\u8ACB\u52A0\u5165 {0} \u7D44\u7E54",
    greeting: "\u60A8\u597D\uFF0C{{firstName}} {{lastName}}\u3002",
    message: "\u60A8\u88AB\u9080\u8ACB\u52A0\u5165 {{organizationName}} \u7D44\u7E54\u3002\u9EDE\u64CA\u4E0B\u9762\u7684\u9023\u7D50\u5373\u53EF\u52A0\u5165\u3002",
    linkExpiration: "\u6B64\u9023\u7D50\u5C07\u5728 {{expiration}} \u5167\u904E\u671F\u3002",
    ignoreMessage: "\u5982\u679C\u60A8\u4E0D\u60F3\u52A0\u5165\u8A72\u7D44\u7E54\uFF0C\u8ACB\u5FFD\u7565\u6B64\u8A0A\u606F\u3002",
    joinButton: "\u52A0\u5165\u7D44\u7E54"
  },
  "password-reset": {
    subject: "\u91CD\u8A2D\u5BC6\u78BC",
    message: "\u6709\u4EBA\u525B\u525B\u8ACB\u6C42\u66F4\u6539\u60A8\u7684 {{realmName}} \u5E33\u6236\u7684\u6191\u8B49\u3002\u5982\u679C\u60A8\u662F\u9019\u6A23\uFF0C\u8ACB\u9EDE\u64CA\u4E0B\u9762\u7684\u9023\u7D50\u4F86\u91CD\u7F6E\u5B83\u5011\u3002",
    linkExpiration: "\u6B64\u9023\u7D50\u5C07\u5728 {{expiration}} \u5167\u904E\u671F\u3002",
    ignoreMessage: "\u5982\u679C\u60A8\u4E0D\u60F3\u91CD\u7F6E\u60A8\u7684\u6191\u8B49\uFF0C\u53EA\u9700\u5FFD\u7565\u6B64\u8A0A\u606F\uFF0C\u5C31\u4EC0\u9EBC\u90FD\u4E0D\u6703\u6539\u8B8A\u3002",
    resetButton: "\u91CD\u7F6E\u6191\u8B49"
  },
  requiredAction: {
    configure_totp: "\u914D\u7F6EOTP",
    terms_and_conditions: "\u689D\u6B3E\u8207\u689D\u4EF6",
    update_password: "\u66F4\u65B0\u5BC6\u78BC",
    update_profile: "\u66F4\u65B0\u500B\u4EBA\u8CC7\u6599",
    verify_email: "\u9A57\u8B49\u4FE1\u7BB1",
    configure_recovery_authn_codes: "\u7522\u751F\u6062\u5FA9\u7A0B\u5F0F\u78BC",
    seconds: "{0,choice,0#\u79D2|1#\u79D2|1<\u79D2}",
    minutes: "{0,choice,0#\u5206\u5206\u9418|1#\u5206\u9418|1<\u5206\u5206\u9418}",
    hours: "{0,choice,0#\u5C0F\u6642|1#\u5C0F\u6642|1<\u5C0F\u6642}",
    days: "{0,choice,0#\u5929|1#\u5929|1<\u5929}"
  },
  footer: {
    allRightsReserved: "\xA9 {{currentYear}} {{realmName}}\uFF0C\u4FDD\u7559\u6240\u6709\u6B0A\u5229"
  }
};

// src/email/i18n.ts
var resources = {
  ar: {
    translation: translation_default
  },
  ca: {
    translation: translation_default2
  },
  cs: {
    translation: translation_default3
  },
  da: {
    translation: translation_default4
  },
  de: {
    translation: translation_default5
  },
  el: {
    translation: translation_default6
  },
  en: {
    translation: translation_default7
  },
  es: {
    translation: translation_default8
  },
  fa: {
    translation: translation_default9
  },
  fi: {
    translation: translation_default10
  },
  fr: {
    translation: translation_default11
  },
  hu: {
    translation: translation_default12
  },
  it: {
    translation: translation_default13
  },
  ja: {
    translation: translation_default14
  },
  ka: {
    translation: translation_default15
  },
  lt: {
    translation: translation_default16
  },
  lv: {
    translation: translation_default17
  },
  nl: {
    translation: translation_default18
  },
  no: {
    translation: translation_default19
  },
  pl: {
    translation: translation_default20
  },
  pt: {
    translation: translation_default21
  },
  "pt-BR": {
    translation: translation_default22
  },
  ru: {
    translation: translation_default23
  },
  sk: {
    translation: translation_default24
  },
  sv: {
    translation: translation_default25
  },
  th: {
    translation: translation_default26
  },
  tr: {
    translation: translation_default27
  },
  uk: {
    translation: translation_default28
  },
  "zh-CN": {
    translation: translation_default29
  },
  "zh-TW": {
    translation: translation_default30
  }
};
i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  }
});
var i18n_default = i18n;

// src/email/layout.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var main = {
  backgroundColor: "#f6f9fc",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif'
};
var container = {
  width: "580px",
  margin: "30px auto",
  backgroundColor: "#ffffff"
};
var content = {
  padding: "5px 30px 10px 30px"
};
var logo = {
  display: "flex",
  justifyContent: "center",
  alingItems: "center",
  padding: 30
};
var logoImage = {
  display: "block",
  border: "0",
  outline: "none",
  textDecoration: "none",
  maxWidth: "100%"
};
var sectionsBorders = {
  width: "100%",
  display: "flex"
};
var sectionsBordersBottom = {
  width: "100%",
  display: "flex",
  marginBottom: "20px"
};
var sectionBorder = {
  borderBottom: "1px solid rgb(238,238,238)",
  width: "249px"
};
var sectionCenter = {
  borderBottom: `1px solid ${primaryColor}`,
  width: "102px"
};
var footer = {
  width: "580px",
  margin: "0 auto"
};
var currentYear = (/* @__PURE__ */ new Date()).getFullYear();
var { exp } = createVariablesHelper("email-test.ftl");
var EmailLayout = ({
  locale,
  children,
  preview
}) => {
  const t = i18n_default.getFixedT(locale);
  return /* @__PURE__ */ jsxs(Html, { lang: locale, dir: locale === "ar" ? "rtl" : "ltr", children: [
    /* @__PURE__ */ jsx(Head, {}),
    /* @__PURE__ */ jsx(Preview, { children: preview }),
    /* @__PURE__ */ jsx(Body, { style: main, children: /* @__PURE__ */ jsxs(Container, { style: container, children: [
      /* @__PURE__ */ jsx(Section, { style: logo, children: /* @__PURE__ */ jsx(
        Img,
        {
          src: companyLogo,
          width: 200,
          height: 50,
          alt: "Company Name",
          style: logoImage
        }
      ) }),
      /* @__PURE__ */ jsx(Section, { style: sectionsBorders, children: /* @__PURE__ */ jsxs(Row, { children: [
        /* @__PURE__ */ jsx(Column, { style: sectionBorder }),
        /* @__PURE__ */ jsx(Column, { style: sectionCenter }),
        /* @__PURE__ */ jsx(Column, { style: sectionBorder })
      ] }) }),
      /* @__PURE__ */ jsx(Section, { style: content, children }),
      /* @__PURE__ */ jsx(Section, { style: sectionsBordersBottom, children: /* @__PURE__ */ jsxs(Row, { children: [
        /* @__PURE__ */ jsx(Column, { style: sectionBorder }),
        /* @__PURE__ */ jsx(Column, { style: sectionCenter }),
        /* @__PURE__ */ jsx(Column, { style: sectionBorder })
      ] }) }),
      /* @__PURE__ */ jsx(Section, { style: footer, children: /* @__PURE__ */ jsx(Row, { children: /* @__PURE__ */ jsx(Text, { style: { textAlign: "center", color: "#706a7b" }, children: t("footer.allRightsReserved", {
        currentYear,
        realmName: exp("realmName")
      }) }) }) })
    ] }) })
  ] });
};

// src/email/utils/previewLocale.ts
var previewLocale = "en";

// src/email/utils/RTL.ts
var applyRTL = (baseStyle, isRTL, rtlStyle2) => {
  return isRTL ? { ...baseStyle, ...rtlStyle2 } : baseStyle;
};

// src/email/templates/password-reset.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var paragraph = {
  lineHeight: 1.5,
  fontSize: 14,
  textAlign: "left"
};
var rtlStyle = {
  direction: "rtl",
  textAlign: "right"
};
var previewProps = {
  t: i18n2.getFixedT(previewLocale),
  locale: previewLocale,
  themeName: "vanilla"
};
var templateName = "Password Reset";
var { exp: exp2 } = createVariablesHelper2("password-reset.ftl");
var Template = ({ locale, t }) => {
  const isRTL = locale === "ar";
  return /* @__PURE__ */ jsxs2(EmailLayout, { preview: t("password-reset.subject"), locale, children: [
    /* @__PURE__ */ jsx2(Text2, { style: applyRTL(paragraph, isRTL, rtlStyle), children: t("password-reset.message", { realmName: exp2("realmName") }) }),
    /* @__PURE__ */ jsx2(Text2, { children: /* @__PURE__ */ jsx2(
      Button,
      {
        width: 200,
        align: isRTL ? "right" : "left",
        height: 40,
        backgroundColor: primaryColor,
        textColor: btnTextColor,
        borderRadius: 3,
        fontSize: 15,
        href: exp2("link"),
        children: t("password-reset.resetButton")
      }
    ) }),
    /* @__PURE__ */ jsx2(Text2, { style: applyRTL(paragraph, isRTL, rtlStyle), children: t("password-reset.linkExpiration", {
      expiration: exp2("linkExpirationFormatter(linkExpiration)")
    }) }),
    /* @__PURE__ */ jsx2(Text2, { style: applyRTL(paragraph, isRTL, rtlStyle), children: t("password-reset.ignoreMessage") })
  ] });
};
var getTemplate = async (props) => {
  const t = i18n2.getFixedT(props.locale);
  return await render(/* @__PURE__ */ jsx2(Template, { ...props, t }), { plainText: props.plainText });
};
var getSubject = async (props) => {
  const t = i18n2.getFixedT(props.locale);
  return t("password-reset.subject");
};
export {
  Template,
  getSubject,
  getTemplate,
  previewProps,
  templateName
};
//# sourceMappingURL=password-reset.js.map
