"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const passport_oauth2_1 = require("passport-oauth2");
const API_1 = require("./API");
/**
 * The Dynastic Accounts strategy authenticates requests by
 * using the Dynastic Accounts OAuth 2.0 API.
 */
class Strategy extends passport_oauth2_1.Strategy {
    /**
     * Create a new Dynastic Accounts authentication strategy.
     *
     * @param options Options to create the strategy with.
     * @param verify A callback which accepts an `accessToken`,
     *               `refreshToken` and service-specific `profile`, and then calls the `done`
     *              callback supplying a `user`, which should be set to `false` if the
     *              credentials are not valid.  If an exception occured, `err` should be set.
     */
    constructor(options, verify) {
        // Setup endpoints
        const apiURL = options.apiBaseURL || "https://accounts-api.dynastic.co", frontendURL = options.frontendBaseURL || "https://accounts.dynastic.co";
        options.authorizationURL = options.authorizationURL || `${frontendURL}/authorize${options.firstParty === true ? "?forced_consent=true" : ""}`;
        options.tokenURL = options.tokenURL || `${apiURL}/v0/oauth/token`;
        options.scopeSeparator = " ";
        super(options, verify);
        this.api = new API_1.DynasticAccountsAPI(apiURL);
        this.name = options.name || "dynastic";
    }
    /**
     * Gets the current profile from the Dynastic Accounts API.
     * @param accessToken The access token to use for this request.
     * @param done The callback invoked upon completion.
     */
    userProfile(accessToken, done) {
        this.api.getAuthedAPI(accessToken)
            .basicUser()
            .then((user) => done(null, user))
            .catch((err) => done(err));
    }
}
exports.Strategy = Strategy;
