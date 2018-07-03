import * as Spec0 from "./spec0";
import { HTTPHeaders } from "./HTTPUtils";
import { DynasticAccountsAPI } from "./API";
export declare class DynasticAccountsAuthedAPI {
    extraHeaders: HTTPHeaders;
    api: DynasticAccountsAPI;
    constructor(token: string, api: DynasticAccountsAPI);
    getHeaders(headers?: HTTPHeaders): HTTPHeaders;
    fullUser(): Promise<Spec0.UserResponse>;
    basicUser(): Promise<Spec0.BasicUserResponse>;
    createTransaction(request: Spec0.TransactionRequest): Promise<Spec0.Transaction>;
    getTransaction(id: string): Promise<Spec0.Transaction>;
    recheckTransaction(id: string): Promise<boolean>;
    checkDevice(udid: string): Promise<boolean>;
}
