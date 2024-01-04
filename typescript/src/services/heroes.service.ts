import { Hero, heroes } from "../data/heroes";

const findHeroById = function (id: string): Hero | string {
  return heroes.find((hero: Hero) => hero.id === id) ?? "Heroe not found";
};

class HeroesService {
  private findHeroByIdFn: (id: string) => Hero | string;

  constructor(findHeroByIdFn: (id: string) => Hero | string) {
    this.findHeroByIdFn = findHeroByIdFn;
  }

  findHeroById(id: string): Hero | string {
    return this.findHeroByIdFn(id);
  }
}

const myHeroesService = new HeroesService(findHeroById);

export default myHeroesService;
