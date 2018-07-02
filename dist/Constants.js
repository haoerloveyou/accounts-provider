"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("./util");
/// The API routes. For example, {LOGIN: "/auth/login"}
exports.API_V0_ROUTES = util_1.prefix({
    AUTH: util_1.prefix({
        SIGN_UP: "/register",
        LOGIN: "/login",
        LOGOUT: "/logout",
        SOCIAL: "/social",
        INFO: "/info",
        FORGOT_PASSWORD: "/forgot",
        RESET_PASSWORD: "/reset"
    }, "/auth"),
    OAUTH: util_1.prefix({
        AUTHORIZE: "/authorize",
        TOKEN: "/token",
        CLIENT: util_1.prefix({
            BASE: "/",
            ID: "/:id",
            CREATE: "/new"
        }, "/client")
    }, "/oauth"),
    USER: util_1.prefix({
        BASE: "/",
        TRANSACTIONS: util_1.prefix({
            BASE: "/",
            ID: util_1.prefix({
                PAY: "/pay"
            }, "/:id"),
            CALLBACK: "/callback"
        }, "/transactions"),
        PASSWORD: "/password",
        DEACTIVATE: "/deactivate",
        DOWNLOAD: "/download",
        DEVICE: util_1.prefix({
            BASE: "/",
            ID: "/:id",
            AUTO: util_1.prefix({
                BASE: "/",
                RETRIEVE: "/retrieve"
            }, "/auto")
        }, "/device"),
        SECURITY: util_1.prefix({
            BASE: "/",
            LOG: "/log"
        }, "/security"),
        SERVICE: util_1.prefix({
            BASE: "/",
            ID: "/:id"
        }, "/service"),
        TOTP: util_1.prefix({
            BASE: "/",
            SETUP: "/setup"
        }, "/2fa"),
        EMAIL_VERIFY: util_1.prefix({
            BASE: "/",
            RESEND: "/resend"
        }, "/verify")
    }, "/user"),
    INTERNAL: util_1.prefix({
        TRANSACTIONS: util_1.prefix({
            BASE: "/",
            ID: util_1.prefix({
                BASE: "/",
                RECHECK: "/check"
            }, "/:id"),
            PAYPAL_HOOK: "/paypal-webhook"
        }, "/transactions"),
        USER: util_1.prefix({
            STATE_UPDATES: "/state-updates"
        }, "/user")
    }, "/internal"),
    LEGAL: util_1.prefix({
        BASE: "/",
        TOS: "/tos",
        PRIVACY: "/privacy"
    }, "/legal")
}, "/v0");
// Error codes. For example, {BAD_USERNAME: 1001}
// TODO: find a better system for allocating error codes
exports.ERROR_CODES = {
    BAD_REQUEST: 400,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    RATE_LIMITED: 429,
    INTERNAL_ERROR: 1000,
    MISSING_FIELDS: 1001,
    INVALID_CREDENTIALS: 1002,
    UNAUTHENTICATED: 1003,
    UNAUTHORIZED: 1004,
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
};
// Email verification states
exports.EMAIL_STATE = {
    VERIFIED: 0,
    CHANGING: 1,
    NONE: 2 // initial email, waiting for verification
};
