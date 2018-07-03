import { HTTPResponse } from "./HTTPUtils";

export const extractBody = (promise: Promise<HTTPResponse>) => promise.then(res => res.body).catch(err => { throw (err.body && (err.body.error || err.body) || err) });
export const extractBoolean = (key: string, promise: Promise<HTTPResponse>): Promise<boolean> => promise.then(res => res.body[key]).catch(err => { throw (err.body.error || err.body) });
export const extractSuccess = (promise: Promise<HTTPResponse>): Promise<boolean> => extractBoolean("success", promise);