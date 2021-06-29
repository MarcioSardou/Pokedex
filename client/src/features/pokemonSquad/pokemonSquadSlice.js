import { createSlice } from "@reduxjs/toolkit";

export const pokemonSquadSlice = createSlice({
  name: "pokemonSquad",
  initialState: {
    pokemonName: [],
    pokemonQuantity: 0
  },
  
//TODO : VERIFICAR AQUI SE JA BATEU O LIMITE DE 5 POKEMONS 
  reducers: {
    addPokemon: (state, { payload, type } ) => {
      state.pokemonQuantity +=1
      state.pokemonName.push(payload);
    },
    RemovePokemon: (state, { payload }) => {
      state.pokemonQuantity -=1
      state.pokemonName.splice(payload, 1);
    },
  },
});

export const { addPokemon, RemovePokemon } = pokemonSquadSlice.actions;

export default pokemonSquadSlice.reducer;
