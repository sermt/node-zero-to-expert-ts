"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const heroes_service_1 = __importDefault(require("./services/heroes.service"));
const hero = heroes_service_1.default.findHeroById("iron");
console.log(hero ? hero.name : "Not found");
