"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CBaseEntities = void 0;
const typeorm_1 = require("typeorm");
class CBaseEntities {
    createdOn;
    createdBy;
    updatedOn;
    updatedBy;
}
exports.CBaseEntities = CBaseEntities;
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        default: () => 'CURRENT_TIMESTAMP',
        type: 'timestamp',
        name: 'created_on',
    }),
    __metadata("design:type", Date)
], CBaseEntities.prototype, "createdOn", void 0);
__decorate([
    (0, typeorm_1.Column)({ 'name': 'created_by', 'type': 'integer', 'nullable': false }),
    __metadata("design:type", Number)
], CBaseEntities.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        default: () => 'CURRENT_TIMESTAMP',
        type: 'timestamp',
        name: 'updated_on',
    }),
    __metadata("design:type", Date)
], CBaseEntities.prototype, "updatedOn", void 0);
__decorate([
    (0, typeorm_1.Column)({ 'name': 'updated_by', 'type': 'integer', 'nullable': false }),
    __metadata("design:type", Number)
], CBaseEntities.prototype, "updatedBy", void 0);
