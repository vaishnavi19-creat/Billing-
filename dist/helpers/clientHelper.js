"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isClientActive = void 0;
const isClientActive = (client) => {
    // to check if a client is active
    return client.id % 2 === 0;
};
exports.isClientActive = isClientActive;
