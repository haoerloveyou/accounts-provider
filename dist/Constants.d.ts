export declare const API_V0_ROUTES: {
    AUTH: {
        SIGN_UP: string;
        LOGIN: string;
        LOGOUT: string;
        SOCIAL: string;
        INFO: string;
        FORGOT_PASSWORD: string;
        RESET_PASSWORD: string;
    };
    OAUTH: {
        AUTHORIZE: string;
        TOKEN: string;
        CLIENT: {
            BASE: string;
            ID: string;
            CREATE: string;
        };
    };
    USER: {
        BASE: string;
        TRANSACTIONS: {
            BASE: string;
            ID: {
                PAY: string;
            };
            CALLBACK: string;
        };
        PASSWORD: string;
        DEACTIVATE: string;
        DOWNLOAD: string;
        DEVICE: {
            BASE: string;
            ID: string;
            AUTO: {
                BASE: string;
                RETRIEVE: string;
            };
        };
        SECURITY: {
            BASE: string;
            LOG: string;
        };
        SERVICE: {
            BASE: string;
            ID: string;
        };
        TOTP: {
            BASE: string;
            SETUP: string;
        };
        EMAIL_VERIFY: {
            BASE: string;
            RESEND: string;
        };
    };
    INTERNAL: {
        TRANSACTIONS: {
            BASE: string;
            ID: {
                BASE: string;
                RECHECK: string;
            };
            PAYPAL_HOOK: string;
        };
        USER: {
            STATE_UPDATES: string;
        };
    };
    LEGAL: {
        BASE: string;
        TOS: string;
        PRIVACY: string;
    };
};
export declare const ERROR_CODES: {
    BAD_REQUEST: number;
    FORBIDDEN: number;
    NOT_FOUND: number;
    RATE_LIMITED: number;
    INTERNAL_ERROR: number;
    MISSING_FIELDS: number;
    INVALID_CREDENTIALS: number;
    UNAUTHENTICATED: number;
    UNAUTHORIZED: number;
    PASSWORDS_MAY_NOT_MATCH: number;
    EMAIL_IN_USE: number;
    DEVICE_ALREADY_REGISTERED: number;
    HIBP_FLAGGED: number;
    HIBP_API_ERROR: number;
    ALREADY_HAS_2FA: number;
    INVALID_TOTP_TOKEN: number;
    NO_2FA: number;
    OAUTH_FAIL: number;
    MISSING_EMAIL: number;
    UNVERIFIED_EMAIL: number;
    MISSING_RECAPTCHA: number;
    INVALID_RECAPTCHA: number;
    LINKED_TO_ANOTHER_ACCOUNT: number;
    NO_FALLBACK_LOGIN_METHOD: number;
    INVALID_SESSION_TOKEN: number;
    BANNED: number;
};
export declare const EMAIL_STATE: {
    VERIFIED: number;
    CHANGING: number;
    NONE: number;
};