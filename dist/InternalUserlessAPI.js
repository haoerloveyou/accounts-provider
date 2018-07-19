"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const ResponseUtils_1 = require("./ResponseUtils");
const HTTPUtils_1 = __importDefault(require("./HTTPUtils"));
class DynasticAccountsInternalUserlessAPI {
    constructor(clientID, clientSecret, api) {
        this.presetBody = { clientID, clientSecret };
        this.api = api;
    }
    getBody(body = {}) {
        return Object.assign(this.presetBody, body);
    }
    /* User API */
    getUserStateUpdates(after) {
        const timestamp = Math.floor(after.getTime() / 1000);
        return ResponseUtils_1.extractBody(HTTPUtils_1.default.get({ url: this.api.API_V0.INTERNAL.USER.STATE_UPDATES, headers: this.getBody({ after: timestamp }) }));
    }
}
exports.DynasticAccountsInternalUserlessAPI = DynasticAccountsInternalUserlessAPI;
