import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice"
import pokemonSquadReducer from "./pokemonSquad/pokemonSquadSlice"


export default configureStore({
    reducer: {
        counter: counterReducer,
        pokemonSquad: pokemonSquadReducer
    }
})