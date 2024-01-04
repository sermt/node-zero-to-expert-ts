"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const heroes_1 = require("../data/heroes");
const findHeroById = function (id) {
    return heroes_1.heroes.find((hero) => hero.id === id);
};
class HeroesService {
    constructor(findHeroByIdFn) {
        this.findHeroByIdFn = findHeroByIdFn;
    }
    findHeroById(id) {
        return this.findHeroByIdFn(id);
    }
}
const myHeroesService = new HeroesService(findHeroById);
exports.default = myHeroesService;
