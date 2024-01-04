import { getPokemonById } from "../../src/js-foundation/06-promises";

describe("06-promises", () => {
  describe("getPokemonById", () => {
    test("should return pokemon name when is searched", async () => {
      const pokemonId = 1;
      const pokemonName = await getPokemonById(pokemonId);
      expect(pokemonName).toBe("bulbasaur");
    });

    test("should throw an error when the Pokemon does not exist", async () => {
      const pokemonId = 99999999;
      await expect(getPokemonById(pokemonId)).rejects.toThrow(
        "Pokemon not found, please try again"
      );
    });
  });
});
