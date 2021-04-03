import { createSlice } from "@reduxjs/toolkit";

export const pokemonSquadSlice = createSlice({
    name:"pokemonSquad",
    initialState: [],

    reducers: {
        addPokemon: (state, {payload}) => {
            state.push(payload)
        },
        // decrement: state => {
        //     state.value -=1
        // }
    }
})

export const { addPokemon } = pokemonSquadSlice.actions

export default pokemonSquadSlice.reducer