"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorTypeEnum = void 0;
var errorTypeEnum;
(function (errorTypeEnum) {
    errorTypeEnum[errorTypeEnum["INPUT_VALIDATION_ERROR"] = 400] = "INPUT_VALIDATION_ERROR";
    errorTypeEnum[errorTypeEnum["DB_OPERATION_ERROR"] = 500] = "DB_OPERATION_ERROR";
    errorTypeEnum[errorTypeEnum["UNATHORIZED_ERROR"] = 401] = "UNATHORIZED_ERROR";
    errorTypeEnum[errorTypeEnum["UNKNOWN_ERROR"] = 500] = "UNKNOWN_ERROR";
    errorTypeEnum[errorTypeEnum["DUPLICATE_ENTRY_ERROR"] = 406] = "DUPLICATE_ENTRY_ERROR";
})(errorTypeEnum || (exports.errorTypeEnum = errorTypeEnum = {}));
