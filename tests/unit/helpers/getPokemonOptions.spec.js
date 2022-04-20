import getPokemonOptions, { getPokemons, getPokemonNames } from "@/helpers/getPokemonOptions"

describe('getPokemonOptions Helpers', () => {
    test('Should be a numbers array', () => {
        const pokemons = getPokemons()

        expect(pokemons.length).toBe(650)
        expect(pokemons[0]).toBe(1)
        expect(pokemons[500]).toBe(501)
        expect(pokemons[649]).toBe(650)
    })

    test('Should return a string\'s array with four elements', async () => {

        const pokemons = await getPokemonNames([1, 2, 3, 4])
        expect(pokemons.length).toBe(4)
        expect(pokemons[0].id).toBe(1)
        expect(pokemons[1].id).toBe(2)
        expect(pokemons[2].id).toBe(3)
        expect(pokemons[3].id).toBe(4)
        expect(pokemons).toStrictEqual([
            { name: 'bulbasaur', id: 1 },
            { name: 'ivysaur', id: 2 },
            { name: 'venusaur', id: 3 },
            { name: 'charmander', id: 4 }
        ])
        // console.log(pokemons);
    })

    test('getpokemonsOptions Should return a mixed array with four elements', async () => {
        const pokemons = await getPokemonOptions()

        // console.log(pokemons);
        expect(pokemons.length).toBe(4)
        expect(pokemons).toEqual([
            {
                name: expect.any(String),
                id: expect.any(Number)
            },
            {
                name: expect.any(String),
                id: expect.any(Number)
            },
            {
                name: expect.any(String),
                id: expect.any(Number)
            },
            {
                name: expect.any(String),
                id: expect.any(Number)
            }
        ])
    })
})
