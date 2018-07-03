import * as Spec0 from "./spec0";
import { extractBody, extractSuccess, extractBoolean } from "./ResponseUtils";
import HTTPUtils, { HTTPHeaders } from "./HTTPUtils";
import { DynasticAccountsAPI } from "./API";

export class DynasticAccountsAuthedAPI {
    extraHeaders: HTTPHeaders;
    api: DynasticAccountsAPI;

    constructor(token: string, api: DynasticAccountsAPI) {
        this.extraHeaders = { Authorization: "Bearer " + token };
        this.api = api;
    }

    getHeaders(headers: HTTPHeaders = {}): HTTPHeaders {
        return Object.assign(this.extraHeaders, headers);
    }

    /* User API */

    fullUser(): Promise<Spec0.UserResponse> {
        return extractBody(HTTPUtils.get({url: this.api.API_V0.USER.BASE, headers: this.getHeaders()}));
    }

    basicUser(): Promise<Spec0.BasicUserResponse> {
        return extractBody(HTTPUtils.get({url: this.api.API_V0.USER.BASE, query: "basic", headers: this.getHeaders()}));
    }

    /* Transaction API */

    createTransaction(request: Spec0.TransactionRequest): Promise<Spec0.Transaction> {
        return extractBody(HTTPUtils.post({url: this.api.API_V0.INTERNAL.TRANSACTIONS.BASE, headers: this.getHeaders()}));
    }

    getTransaction(id: string): Promise<Spec0.Transaction> {
        return extractBody(HTTPUtils.get({url: this.api.API_V0.INTERNAL.TRANSACTIONS.BASE + id, headers: this.getHeaders()}));
    }

    recheckTransaction(id: string): Promise<boolean> {
        return extractSuccess(HTTPUtils.get({url: this.api.API_V0.INTERNAL.TRANSACTIONS + id + "/recheck", headers: this.getHeaders()}));
    }

    /* Device Check API */

    checkDevice(udid: string): Promise<boolean> {
        return extractBoolean("verified", HTTPUtils.get({url: this.api.API_V0.INTERNAL.USER.DEVICE_CHECK, query: { udid }, headers: this.getHeaders()}));
    }
}