"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CBaseRouter = void 0;
const express_1 = require("express");
class CBaseRouter {
    router;
    constructor() {
        this.router = (0, express_1.Router)();
    }
}
exports.CBaseRouter = CBaseRouter;
