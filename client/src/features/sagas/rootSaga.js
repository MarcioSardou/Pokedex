import { take } from 'redux-saga/effects'
import { addPokemon, RemovePokemon, pokemonSquadSlice } from '../pokemonSquad/pokemonSquadSlice'

export function* watcherSaga() {
  yield take(addPokemon.type)
  // console.log('BATI AQUI',  pokemonSquadSlice.reducer)
}