import getUrlWithParamConfig from "./getUrlWithParamConfig"

describe(
    'getUrlWithParamConfig',()=>{
        test('get url',()=>{
            const url = getUrlWithParamConfig('getPokemons',{name:'Pikachu'});
            expect(url).toEqual({
                protocol:'http',
                host:'zar.hosthot.ru',
                pathname:'/api/v1/pokemons',
                query:{name:'Pikachu'}

            })

        })
    }
)