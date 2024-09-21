import { body } from 'express-validator';

export const clientValidator = [
    body('name')
        .trim()
        .notEmpty()
        .withMessage('Name is required')
        .isLength({ min: 3, max: 100 })
        .withMessage('Name should be between 3 and 100 characters'),

    body('mobileNo')
        .trim()
        .notEmpty()
        .withMessage('Mobile number is required')
        .isLength({ min: 10, max: 15 })
        .withMessage('Mobile number should be between 10 and 15 digits')
        .isNumeric()
        .withMessage('Mobile number must be numeric'),

    body('email')
        .trim()
        .notEmpty()
        .withMessage('Email is required')
        .isEmail()
        .withMessage('Invalid email format'),

    
    body('address')
        .trim()
        .notEmpty()
        .withMessage('Address is required')
        .isLength({ min: 10, max: 500 })
        .withMessage('Address should be between 10 and 500 characters'),

    body('gstNo')
        .trim()
        .notEmpty()
        .withMessage('GST number is required')
        .isLength({ min: 15, max: 15 })
        .withMessage('GST number must be 15 characters')
        .matches(/[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[0-9]{1}[A-Z]{2}/)
        .withMessage('GST number must be in the correct format'),

    body('logo')
        .optional()
        .trim()
        .isURL()
        .withMessage('Logo must be a valid URL'),
];