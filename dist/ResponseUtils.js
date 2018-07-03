"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractBody = (promise) => promise.then(res => res.body).catch(err => { throw (err.body && (err.body.error || err.body) || err); });
exports.extractBoolean = (key, promise) => promise.then(res => res.body[key]).catch(err => { throw (err.body.error || err.body); });
exports.extractSuccess = (promise) => exports.extractBoolean("success", promise);
