import { HTTPResponse } from "./HTTPUtils";

export const extractBody = (promise: Promise<HTTPResponse>) => promise.then(res => res.body).catch(err => { throw (err.body && (err.body.error || err.body) || err) });
export const extractSuccess = (promise: Promise<HTTPResponse>): Promise<boolean> => promise.then(res => res.body.success).catch(err => { throw (err.body.error || err.body) });