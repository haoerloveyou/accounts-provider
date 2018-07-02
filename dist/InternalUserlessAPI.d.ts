import * as Spec0 from "./spec0";
import { HTTPHeaders } from "./HTTPUtils";
import { DynasticAccountsAPI } from "./API";
export declare class DynasticAccountsInternalUserlessAPI {
    presetBody: {
        [key: string]: any;
    };
    api: DynasticAccountsAPI;
    constructor(clientID: string, clientSecret: string, api: DynasticAccountsAPI);
    getBody(body?: {
        [key: string]: any;
    }): HTTPHeaders;
    getUserStateUpdates(after: Date): Promise<Spec0.UserStateUpdatesResponse>;
}
