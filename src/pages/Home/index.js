import React from 'react';
import Pokemon from '../../components/Pokemon'
import Search from '../../components/Search'

import logo from '../../assets/pokedex-logo.png'
import './styles.scss'


function Home() {
  return (
    <>
    <header className="top">
        <img src={logo} className="top__img" alt="Pokedex Logo"/>
        <Search />
    </header>
    <Pokemon />
    </>
  );
}

export default Home;