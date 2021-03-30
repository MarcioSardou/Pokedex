import React from 'react';
import {  useSelector } from 'react-redux';

import cartIcon from "../../assets/pokecart.png"

import "./styles.scss"

function Cart() {

  const store = useSelector(store => store.counter.value)

  return (
    <div className="cart">
    <img src={cartIcon} className="img" alt="Pokedex Logo" />
    <p className="text">Equipe ({store})</p>
    </div>
  );
}

export default Cart;