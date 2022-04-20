import pokemonApi from "@/api/pokemonApi";

describe('pokemonAPI', () => {
    test('axios could have a good setting with pokemon\'s API', () => {
        expect( pokemonApi.defaults.baseURL).toBe('https://pokeapi.co/api/v2/pokemon')
    })
})