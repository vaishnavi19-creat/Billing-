"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CServer = void 0;
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const bodyParser = __importStar(require("body-parser"));
const dataSource_1 = __importDefault(require("./db/dataSource")); // Ensure this path is correct
const CSignUp_router_1 = __importDefault(require("./routers/CSignUp.router"));
const CShop_router_1 = __importDefault(require("./routers/CShop.router"));
const clientRouter_1 = __importDefault(require("./routers/clientRouter"));
const CCustomErrors_helper_1 = require("./helpers/CCustomErrors.helper");
class CServer {
    app;
    constructor() {
        console.log('Initializing the application....');
        this.app = (0, express_1.default)(); // Initialize the express app
        this.setConfigurations();
        this.setRoutes();
        this.handle404Error();
        this.handleAllErrors();
    }
    async setDatabaseConnection() {
        console.log('Trying to connect with database...');
        try {
            await dataSource_1.default.initialize();
            console.log('DB connection has been initialized.....');
        }
        catch (error) {
            console.log('Error while connecting with database', error);
        }
    }
    setBodyParser() {
        console.log('Trying to parse the request body....');
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(bodyParser.json());
    }
    registerEvents() {
        console.log('Registering the events....');
        // Event registration code can be added here
    }
    setConfigurations() {
        console.log('Setting the configuration....');
        this.setDatabaseConnection();
        this.setBodyParser();
        this.registerEvents();
    }
    setRoutes() {
        console.log('Setting routes....');
        this.app.use('/api/v1.0/sign-up', CSignUp_router_1.default);
        this.app.use('/api/v1.0/shop', CShop_router_1.default);
        this.app.use('/api/v1.0/clients', clientRouter_1.default); // Add client router here
    }
    handle404Error() {
        console.log('Caught in 404 error....');
        this.app.use((request, response) => {
            response.status(404).send({
                message: 'The requested URL could not be found.'
            });
        });
    }
    handleAllErrors() {
        console.log('Caught in unexpected error....');
        this.app.use((error, request, response, next) => {
            let status = 500;
            let message = error.message || 'Something went wrong. Please try again later.';
            let reasons = {};
            if (error instanceof CCustomErrors_helper_1.CCustomErrors) {
                status = error.status;
                reasons = error.reasons || {};
            }
            response.status(status).send({
                message: message,
                reasons: reasons
            });
        });
    }
}
exports.CServer = CServer;
// import express from "express";
// import 'reflect-metadata';
// import * as bodyParser from "body-parser";
// import AppDataSource from "./db/dataSource";
// import CSignUpRouter from "./routers/CSignUp.router";
// import { CCustomErrors } from "./helpers/CCustomErrors.helper";
// import CShopRouter from "./routers/CShop.router";
// export class CServer {
//     public app : express.Application = express();
//     constructor() {
//         console.log('Initializing the application....');
//         this.setConfigurations();
//         this.setRoutes();
//         this.handle404Error();
//         this.handleAllErrors();
//     }
//     async setDatabaseConnection() {
//         console.log('Trying to connect with database...');
//         await AppDataSource.initialize().then(() => console.log('DB connection has been initialized.....')).catch((error) => {
//             console.log('Error while connecting with database', error);
//         });
//     }
//     setBodyParser() {
//         console.log('Trying to parse the request body....');
//         this.app.use( bodyParser.urlencoded( { extended: false } ) );
//         this.app.use( bodyParser.json() );
//     }
//     registerEvents() {
//         console.log('Regestering the events....');
//         // customeEvents.on(schoolEventsEnum.REGISTERD_NEW_SCHOOL, (args: any) => {
//         //     console.log('A new school has been added successfully and now need to produce a kafka event for other microservices.');
//         //     console.log(`Shared details are : `, args);
//         // });
//         // customeEvents.on(schoolPackageEventsEnum.UPGRADED_SCHOOL_PACKAGE, (args: any) => {
//         //     console.log('The school has been upgraded successfully.');
//         //     console.log(`Shared details are : `, args);
//         // });
//     }
//     setConfigurations() {
//         console.log('Setting the configuration....');
//         this.setDatabaseConnection();
//         this.setBodyParser();
//         this.registerEvents();
//     }
//     setRoutes() {
//         console.log('Setting routes....');
//         // this.app.use( '/api/v1.0/auth', CSchoolRouter );
//         this.app.use( '/api/v1.0/sign-up', CSignUpRouter );
//         this.app.use( '/api/v1.0/shop', CShopRouter );
//     }
//     handle404Error() {
//         console.log('Caught in 404 error....');
//         this.app.use( ( request:express.Request, response:express.Response ) => {
//             response.status( 404 ).send({
//                 message : 'The requested URL could not be found.'
//             });
//         });
//     }
//     handleAllErrors() {
//         console.log('Cought in unexpected error....');
//         this.app.use( ( error:Error, request:express.Request, response:express.Response, next:express.NextFunction ) => {
//             let status : number = 500;
//             let message : string = error.message || 'Something went wrong. Please try again later.';
//             let reasons : {} =  {};
//             if ( error instanceof CCustomErrors ) {
//                 status  = error.status;
//                 reasons = error.reasons || {};
//             }  
//             response.status( status ).send({
//                 message : message,
//                 reasons : reasons
//             });
//         });
//     }
// }
