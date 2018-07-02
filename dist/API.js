"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Constants_1 = require("./Constants");
const AuthedAPI_1 = require("./AuthedAPI");
const InternalUserlessAPI_1 = require("./InternalUserlessAPI");
const util_1 = require("./util");
class DynasticAccountsAPI {
    constructor(apiBaseURL) {
        this.API_V0 = Constants_1.API_V0_ROUTES;
        // Prefix API routes with base URL
        this.API_V0 = util_1.prefix(this.API_V0, apiBaseURL);
    }
    getAuthedAPI(token) {
        return new AuthedAPI_1.DynasticAccountsAuthedAPI(token, this);
    }
    getInternalUserlessAPI(clientID, clientSecret) {
        return new InternalUserlessAPI_1.DynasticAccountsInternalUserlessAPI(clientID, clientSecret, this);
    }
}
exports.DynasticAccountsAPI = DynasticAccountsAPI;
