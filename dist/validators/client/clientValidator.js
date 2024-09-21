"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientValidator = void 0;
const express_validator_1 = require("express-validator");
exports.clientValidator = [
    (0, express_validator_1.body)('name')
        .trim()
        .notEmpty()
        .withMessage('Name is required')
        .isLength({ min: 3, max: 100 })
        .withMessage('Name should be between 3 and 100 characters'),
    (0, express_validator_1.body)('mobileNo')
        .trim()
        .notEmpty()
        .withMessage('Mobile number is required')
        .isLength({ min: 10, max: 15 })
        .withMessage('Mobile number should be between 10 and 15 digits')
        .isNumeric()
        .withMessage('Mobile number must be numeric'),
    (0, express_validator_1.body)('email')
        .trim()
        .notEmpty()
        .withMessage('Email is required')
        .isEmail()
        .withMessage('Invalid email format'),
    (0, express_validator_1.body)('address')
        .trim()
        .notEmpty()
        .withMessage('Address is required')
        .isLength({ min: 10, max: 500 })
        .withMessage('Address should be between 10 and 500 characters'),
    (0, express_validator_1.body)('gstNo')
        .trim()
        .notEmpty()
        .withMessage('GST number is required')
        .isLength({ min: 15, max: 15 })
        .withMessage('GST number must be 15 characters')
        .matches(/[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[0-9]{1}[A-Z]{2}/)
        .withMessage('GST number must be in the correct format'),
    (0, express_validator_1.body)('logo')
        .optional()
        .trim()
        .isURL()
        .withMessage('Logo must be a valid URL'),
];
