import { prefix } from "./util";

/// The API routes. For example, {LOGIN: "/auth/login"}
export const API_V0_ROUTES = prefix({
    AUTH: prefix({
        SIGN_UP: "/register",
        LOGIN: "/login",
        LOGOUT: "/logout",
        SOCIAL: "/social",
        INFO: "/info",
        FORGOT_PASSWORD: "/forgot",
        RESET_PASSWORD: "/reset"
    }, "/auth"),
    OAUTH: prefix({
        AUTHORIZE: "/authorize",
        TOKEN: "/token",
        CLIENT: prefix({
            BASE: "/",
            ID: "/:id"
        }, "/client")
    }, "/oauth"),
    USER: prefix({
        BASE: "/",
        TRANSACTIONS: prefix({
            BASE: "/",
            ID: prefix({
                PAY: "/pay"
            }, "/:id"),
            CALLBACK: "/callback"
        }, "/transactions"),
        PASSWORD: "/password",
        DEACTIVATE: "/deactivate",
        DOWNLOAD: "/download",
        DEVICE: prefix({
            BASE: "/",
            ID: "/:id",
            AUTO: prefix({
                BASE: "/",
                RETRIEVE: "/retrieve"
            }, "/auto")
        }, "/device"),
        SECURITY: prefix({
            BASE: "/",
            LOG: "/log"
        }, "/security"),
        SERVICE: prefix({
            BASE: "/",
            ID: "/:id"
        }, "/service"),
        TOTP: prefix({
            BASE: "/",
            SETUP: "/setup"
        }, "/2fa"),
        EMAIL_VERIFY: prefix({
            BASE: "/",
            RESEND: "/resend"
        }, "/verify")
    }, "/user"),
    INTERNAL: prefix({
        TRANSACTIONS: prefix({
            BASE: "/",
            ID: prefix({
                BASE: "/",
                RECHECK: "/check"
            }, "/:id"),
            PAYPAL_HOOK: "/paypal-webhook"
        }, "/transactions"),
        USER: prefix({
            STATE_UPDATES: "/state-updates",
            DEVICE_CHECK: "/device"
        }, "/user")
    }, "/internal"),
    LEGAL: prefix({
        BASE: "/",
        TOS: "/tos",
        PRIVACY: "/privacy"
    }, "/legal"),
    ADMIN: prefix({
        BASE: "/",
        USERS: prefix({
            BASE: "/",
            ID: prefix({
                BASE: "/",
                LOG: "/log",
                GENERATE_PASSWORD_RESET_LINK: "/reset-password",
            }, "/:id"),
            IDS: prefix({
                FORCE_VERIFY_EMAIL: "/verify-email",
                BAN: "/ban",
                ULTRABAN: "/ultraban"
            }, "/batch/:ids")
        }, "/users"),
        TRANSACTIONS: prefix({
            BASE: "/",
            ID: prefix({
                BASE: "/",
                REFUND: "/refund"
            }, "/:id")
        }, "/transactions"),
        ACTIONS: "/actions",
        BANS: prefix({
            BASE: "/",
            IP: prefix({
                BASE: "/",
                ID: "/:id"
            }, "/ip"),
            DEVICE: prefix({
                BASE: "/",
                ID: "/:id"
            }, "/device")
        }, "/bans"),
        OAUTH_CLIENT: prefix({
            BASE: "/",
            ID: "/:id",
        }, "/oauth/client")
    }, "/admin")
}, "/v0");

// Error codes. For example, {BAD_USERNAME: 1001}
// TODO: find a better system for allocating error codes
export const ERROR_CODES = {
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    RATE_LIMITED: 429,
    INTERNAL_ERROR: 1000,
    MISSING_FIELDS: 1001,
    INVALID_CREDENTIALS: 1002,
    UNAUTHENTICATED: 1003,
    PASSWORDS_MAY_NOT_MATCH: 1005,
    EMAIL_IN_USE: 1007,
    DEVICE_ALREADY_REGISTERED: 1008,
    HIBP_FLAGGED: 1009,
    HIBP_API_ERROR: 1010,
    ALREADY_HAS_2FA: 1011,
    INVALID_TOTP_TOKEN: 1012,
    NO_2FA: 1013,
    OAUTH_FAIL: 1014,
    MISSING_EMAIL: 1015,
    UNVERIFIED_EMAIL: 1016,
    MISSING_RECAPTCHA: 1017,
    INVALID_RECAPTCHA: 1018,
    LINKED_TO_ANOTHER_ACCOUNT: 1019,
    NO_FALLBACK_LOGIN_METHOD: 1020,
    INVALID_SESSION_TOKEN: 1021,
    BANNED: 1022
}

// Email verification states
export const EMAIL_STATE = {
    VERIFIED: 0,
    CHANGING: 1, // changing email, waiting for verification
    NONE: 2 // initial email, waiting for verification
}

export const API_BASE = "https://accounts-api.dynastic.co";
export const FRONTEND_BASE = "https://accounts.dynastic.co";