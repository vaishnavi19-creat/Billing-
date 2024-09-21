"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CCustomErrors = void 0;
const errorType_enum_1 = require("../enums/errorType.enum");
class CCustomErrors extends Error {
    status = 500;
    reasons;
    errorStack;
    constructor(error, errorType, reasons) {
        super();
        if (errorType == errorType_enum_1.errorTypeEnum.INPUT_VALIDATION_ERROR) {
            this.message = 'Please provide the valid inputs. ';
            this.reasons = reasons ? { ...reasons } : error['reasons'] ? { ...error['reasons'] } : { ...[] };
        }
        else {
            this.message = error.message || 'Something went wrong. ';
        }
        this.errorStack = { ...error };
        this.status = errorType;
        return this;
    }
}
exports.CCustomErrors = CCustomErrors;
