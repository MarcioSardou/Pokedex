import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware  from 'redux-saga'
import counterReducer from "./counter/counterSlice"
import pokemonSquadReducer from "./pokemonSquad/pokemonSquadSlice"

const store = configureStore({
    reducer: {
        counter: counterReducer,
        pokemonSquad: pokemonSquadReducer
    }
})

  export default store;


//   let sagaMiddleware = createSagaMiddleware();
// const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

// const store = configureStore({
//     reducer: {
//         counter: counterReducer,
//         pokemonSquad: pokemonSquadReducer
//     },
//     middleware
// })

//   sagaMiddleware.run(saga);
