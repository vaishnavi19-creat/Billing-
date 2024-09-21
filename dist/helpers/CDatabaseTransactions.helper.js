"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CDatabaseTransactions {
    start() {
        console.log('Transaction has been started');
    }
    ;
    stop() {
        console.log('Transaction has been stopped');
    }
    ;
    rollback() {
        console.log('Transaction has been rolled back');
    }
    ;
    commit() {
        console.log('Transaction has been commited');
    }
    ;
}
exports.default = new CDatabaseTransactions();
