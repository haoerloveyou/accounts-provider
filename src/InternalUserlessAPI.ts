import * as Spec0 from "./spec0";
import { extractBody, extractSuccess } from "./ResponseUtils";
import HTTPUtils, { HTTPHeaders } from "./HTTPUtils";
import { DynasticAccountsAPI } from "./API";

export class DynasticAccountsInternalUserlessAPI {
    presetBody: { [key: string]: any };
    api: DynasticAccountsAPI;

    constructor(clientID: string, clientSecret: string, api: DynasticAccountsAPI) {
        this.presetBody = { clientID, clientSecret };
        this.api = api;
    }

    getBody(body: { [key: string]: any } = {}): HTTPHeaders {
        return Object.assign(this.presetBody, body);
    }

    /* User API */

    getUserStateUpdates(after: Date): Promise<Spec0.UserStateUpdatesResponse> {
        const timestamp = Math.floor(after.getTime() / 1000);
        return extractBody(HTTPUtils.get({url: this.api.API_V0.INTERNAL.USER.STATE_UPDATES, headers: this.getBody({ after: timestamp })}));
    }
}