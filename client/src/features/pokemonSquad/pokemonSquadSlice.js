import { createSlice } from "@reduxjs/toolkit";

export const pokemonSquadSlice = createSlice({
  name: "pokemonSquad",
  initialState: {
    pokemonName: [],
    pokemonQuantity: 0
  },
  

  reducers: {
    addPokemon: (state, { payload }) => {
      state.pokemonQuantity +=1
      state.pokemonName.push(payload);
    },
    RemovePokemon: (state, { payload }) => {
      state.splice(payload, 1);
    },
  },
});

export const { addPokemon, RemovePokemon } = pokemonSquadSlice.actions;

export default pokemonSquadSlice.reducer;
