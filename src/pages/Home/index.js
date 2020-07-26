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
    </header>

    <div className="search-container">
    <Search />
    </div>
    <Pokemon />
    </>
  );
}

export default Home;