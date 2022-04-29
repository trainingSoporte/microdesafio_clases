

// https://pokeapi.co/api/v2/pokemon/13

let pokeApiData = [];


const getPokemonAPI = async (id) => {


    return await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);


}


const getPokeApiData = async (cantPoke) => {

   let res;
   let data;


    for (let index = 1; index <= cantPoke; index++) {

        res = await getPokemonAPI(index)
        data = await res.json();

        pokeApiData.push(data);

    }

    return pokeApiData;

}