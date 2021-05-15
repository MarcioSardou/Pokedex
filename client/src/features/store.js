import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice"
import pokemonSquadReducer from "./pokemonSquad/pokemonSquadSlice"

const store = configureStore({
    reducer: {
        counter: counterReducer,
        pokemonSquad: pokemonSquadReducer
    }
})

  export default store;