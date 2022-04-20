import { shallowMount, mount } from '@vue/test-utils'
import PokemonPage from '@/pages/PokemonPage'
import { pokemons } from "../mocks/pokemons.mock"

describe('PokemonPage Component', () => {

    let wrapper
    // let mixPokemonArraySpy 

    beforeEach(() => {
        // mixPokemonArraySpy = jest.spyOn(PokemonPage.methods, 'mixPokemonArr')
        wrapper = shallowMount(PokemonPage)
    })

    test('should do match with snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('should call the mixPokemonArray to mount', () => {
        const mixPokemonArraySpy = jest.spyOn(PokemonPage.methods, 'mixPokemonArr')
        const wrapper = shallowMount(PokemonPage)
        expect(mixPokemonArraySpy).toHaveBeenCalled()
    })

    test('should do match with snapshot when the pokemons have been loaded', () => {

        const wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                    pokemonArr: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: "",
                }
            },
        })

        expect(wrapper.html()).toMatchSnapshot()
    })

    test('should show the components PokemonPicture and PokemonOptions', () => {

        //PokemonPicture debe existir
        //PokemonOptions debe existir

        //PokemonPicture attribute pokemonid === pokemons[0].id
        //PokemonOptions attribute pokemons to be true

        const wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                    pokemonArr: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: "",
                }
            },
        })

        // my tests
        const PokemonPicture = wrapper.findComponent('pokemon-picture-stub')
        const PokemonOptions = wrapper.findComponent('pokemon-options-stub')

        expect(PokemonPicture.exists()).toBe(true)
        expect(PokemonPicture.attributes('pokemonid')).toBe(`${pokemons[0].id}`)

        expect(PokemonOptions.exists()).toBe(true)
        expect(PokemonOptions.props('pokemons')).toEqual(pokemons)
        expect(PokemonOptions.attributes('pokemons')).toBeTruthy()

        // the answer from Fernando
        expect(wrapper.find('pokemon-picture-stub').exists()).toBeTruthy()
        expect(wrapper.find('pokemon-options-stub').exists()).toBeTruthy()

        expect(wrapper.find('pokemon-picture-stub').attributes('pokemonid')).toBe(`${pokemons[0].id}`)
        expect(wrapper.find('pokemon-options-stub').attributes('pokemons')).toBeTruthy()

    })

    test('test with checkAswer', async () => {
        const wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                    pokemonArr: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: "",
                }
            },
        })

        await wrapper.vm.checkAnswer(pokemons[0].id)

        expect(wrapper.find('h2').exists()).toBeTruthy();
        expect(wrapper.find('h2').text()).toBe(`Correcto ${wrapper.vm.pokemon.name}`);
        expect(wrapper.vm.showPokemon).toBeTruthy()
        expect(wrapper.vm.pokemon).toEqual(pokemons[0])

        await wrapper.vm.checkAnswer(pokemons[2].id)

        expect(wrapper.find('h2').text()).toBe(`Oops, era ${wrapper.vm.pokemon.name}`);
        expect(wrapper.vm.message).toBe(`Oops, era ${wrapper.vm.pokemon.name}`);

    })
})