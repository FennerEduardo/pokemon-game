import { shallowMount } from "@vue/test-utils"
import PokemonOptions from "@/components/PokemonOptions"
import { pokemons } from "../mocks/pokemons.mock"

describe("PokemonOptions Component", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(PokemonOptions, {
            props: {
                pokemons,
            },
        })
    })


    test("should do match with the snapshot", () => {
        // console.log(wrapper.html());
        expect(wrapper.html()).toMatchSnapshot()

        //toMatchInlineSnapshot: shows the html result of test
        // expect(wrapper.html()).toMatchInlineSnapshot(`
        //   <div class="options-container">
        //     <ul>
        //       <li>bulbasaur</li>
        //       <li>ivysaur</li>
        //       <li>venusaur</li>
        //       <li>charmander</li>
        //     </ul>
        //   </div>
        // `);
    })

    test('should show the four options correctly', () => {
        const lis = wrapper.findAll('li')

        const [li1, li2, li3, li4] = lis

        expect(lis.length).toBe(pokemons.length)

        expect(li1.exists()).toBeTruthy()
        expect(li1.text()).toBe(pokemons[0].name)

        expect(li2.exists()).toBeTruthy()
        expect(li2.text()).toBe(pokemons[1].name)

        expect(li3.exists()).toBeTruthy()
        expect(li3.text()).toBe(pokemons[2].name)

        expect(li4.exists()).toBeTruthy()
        expect(li4.text()).toBe(pokemons[3].name)
    })


    test('should emit "selection" with their values when click has been done', () => {

        const [li1, li2, li3, li4] = wrapper.findAll('li')

        li1.trigger('click')
        li2.trigger('click')
        li3.trigger('click')
        li4.trigger('click')

        // console.log(wrapper.emitted('selection'));

        expect(wrapper.emitted('selection').length).toBe(4)

        expect(wrapper.emitted('selection')[0][0]).toBe(pokemons[0].id)
        expect(wrapper.emitted('selection')[0]).toEqual([pokemons[0].id])

        expect(wrapper.emitted('selection')[1][0]).toBe(pokemons[1].id)
        expect(wrapper.emitted('selection')[1]).toEqual([pokemons[1].id])

        expect(wrapper.emitted('selection')[2][0]).toBe(pokemons[2].id)
        expect(wrapper.emitted('selection')[2]).toEqual([pokemons[2].id])

        expect(wrapper.emitted('selection')[3][0]).toBe(pokemons[3].id)
        expect(wrapper.emitted('selection')[3]).toEqual([pokemons[3].id])

    })
})
