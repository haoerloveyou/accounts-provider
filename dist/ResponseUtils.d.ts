import { HTTPResponse } from "./HTTPUtils";
export declare const extractBody: (promise: Promise<HTTPResponse>) => Promise<any>;
export declare const extractSuccess: (promise: Promise<HTTPResponse>) => Promise<boolean>;
