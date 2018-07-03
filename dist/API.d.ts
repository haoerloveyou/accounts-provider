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
                DEVICE_CHECK: string;
            };
        };
        LEGAL: {
            BASE: string;
            TOS: string;
            PRIVACY: string;
        };
    };
    constructor(apiBaseURL: string);
    getAuthedAPI(token: string): DynasticAccountsAuthedAPI;
    getInternalUserlessAPI(clientID: string, clientSecret: string): DynasticAccountsInternalUserlessAPI;
}
