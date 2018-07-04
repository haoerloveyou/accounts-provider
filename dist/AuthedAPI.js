"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ResponseUtils_1 = require("./ResponseUtils");
const HTTPUtils_1 = __importDefault(require("./HTTPUtils"));
class DynasticAccountsAuthedAPI {
    constructor(token, api) {
        this.extraHeaders = { Authorization: "Bearer " + token };
        this.api = api;
    }
    getHeaders(headers = {}) {
        return Object.assign(this.extraHeaders, headers);
    }
    /* User API */
    fullUser() {
        return ResponseUtils_1.extractBody(HTTPUtils_1.default.get({ url: this.api.API_V0.USER.BASE, headers: this.getHeaders() }));
    }
    basicUser() {
        return ResponseUtils_1.extractBody(HTTPUtils_1.default.get({ url: this.api.API_V0.USER.BASE, query: "basic", headers: this.getHeaders() }));
    }
    /* Transaction API */
    createTransaction(request) {
        return ResponseUtils_1.extractBody(HTTPUtils_1.default.post({ url: this.api.API_V0.INTERNAL.TRANSACTIONS.BASE, headers: this.getHeaders() }));
    }
    getTransaction(id) {
        return ResponseUtils_1.extractBody(HTTPUtils_1.default.get({ url: this.api.API_V0.INTERNAL.TRANSACTIONS.BASE + id, headers: this.getHeaders() }));
    }
    recheckTransaction(id) {
        return ResponseUtils_1.extractSuccess(HTTPUtils_1.default.get({ url: this.api.API_V0.INTERNAL.TRANSACTIONS + id + "/recheck", headers: this.getHeaders() }));
    }
    /* Device Check API */
    async checkDevice(udid) {
        return (await ResponseUtils_1.extractBody(HTTPUtils_1.default.get({ url: this.api.API_V0.INTERNAL.USER.DEVICE_CHECK, query: { udid }, headers: this.getHeaders() }))).id;
    }
}
exports.DynasticAccountsAuthedAPI = DynasticAccountsAuthedAPI;
