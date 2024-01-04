import myHeroesService from "./services/heroes.service";

const hero = myHeroesService.findHeroById("wolverine");

console.log(hero);
