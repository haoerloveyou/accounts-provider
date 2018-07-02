"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractBody = (promise) => promise.then(res => res.body).catch(err => { throw (err.body && (err.body.error || err.body) || err); });
exports.extractSuccess = (promise) => promise.then(res => res.body.success).catch(err => { throw (err.body.error || err.body); });
