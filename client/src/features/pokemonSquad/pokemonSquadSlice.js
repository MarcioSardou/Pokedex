import { createSlice } from "@reduxjs/toolkit";

export const pokemonSquadSlice = createSlice({
  name: "pokemonSquad",
  initialState: [],

  reducers: {
    addPokemon: (state, { payload }) => {
      state.push(payload);
    },
    RemovePokemon: (state, { payload }) => {
      state.splice(payload, 1);
      
    },
  },
});

export const { addPokemon, RemovePokemon } = pokemonSquadSlice.actions;

export default pokemonSquadSlice.reducer;
