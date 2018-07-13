import { DynasticAccountsAuthedAPI } from "./AuthedAPI";
import { DynasticAccountsInternalUserlessAPI } from "./InternalUserlessAPI";
export declare class DynasticAccountsAPI {
    API_V0: {
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
                DEVICE_CHECK: string;
            };
        };
        LEGAL: {
            BASE: string;
            TOS: string;
            PRIVACY: string;
        };
        ADMIN: {
            BASE: string;
            USERS: {
                BASE: string;
                IDS: {
                    BASE: string;
                    LOG: string;
                    GENERATE_PASSWORD_RESET_LINK: string;
                    FORCE_VERIFY_EMAIL: string;
                    BAN: string;
                    ULTRABAN: string;
                };
            };
            TRANSACTIONS: {
                BASE: string;
                ID: {
                    BASE: string;
                    REFUND: string;
                };
            };
            ACTIONS: string;
            BANS: {
                BASE: string;
                IP: {
                    BASE: string;
                    ID: string;
                };
                DEVICE: {
                    BASE: string;
                    ID: string;
                };
            };
            OAUTH_CLIENT: {
                BASE: string;
                ID: string;
            };
        };
    };
    constructor(apiBaseURL: string);
    getAuthedAPI(token: string): DynasticAccountsAuthedAPI;
    getInternalUserlessAPI(clientID: string, clientSecret: string): DynasticAccountsInternalUserlessAPI;
}
