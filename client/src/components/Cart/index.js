import React from 'react';
import { useSelector } from 'react-redux';

import cartIcon from "../../assets/pokecart.png"

import "./styles.scss"

function Cart() {

  const pokemonQuantity = useSelector(store => store.pokemonSquad.pokemonQuantity)
  
  return (
    <div className="cart">
    <img src={cartIcon} className="img" alt="Pokedex Logo" />
    <p className="text">Equipe ({pokemonQuantity})</p>
    </div>
  );
}

export default Cart;