import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import  createSagaMiddleware  from 'redux-saga'
import { watcherSaga } from './sagas/rootSaga'

import counterReducer from "./counter/counterSlice"
import pokemonSquadReducer from "./pokemonSquad/pokemonSquadSlice"



const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: {
        counter: counterReducer,
        pokemonSquad: pokemonSquadReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({thunk : false}).concat(sagaMiddleware)
})

 sagaMiddleware.run(watcherSaga)


  export default store;