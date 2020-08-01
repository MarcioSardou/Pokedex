import React from 'react';

import logo from '../../assets/pokemon-logo.png';
import btn from '../../assets/start-logo.png';
import  './styles.scss';

function StartPage() {


  return (
    <div className="container">
      <div className="container__img">
      <img src={logo} alt="Pokemon logo"/>
      </div>

      <button className="container__btn">
        <img src={btn} alt="Press Start Button"/>
      </button>

      <div className="container__gif">
      <a href="https://giffiles.alphacoders.com/129/129586.gif"><img src="https://giffiles.alphacoders.com/129/129586.gif" alt="Gif ID: 129586" title="Video Game Pokémon Gif"></img></a>
      </div>
    </div>
  );
}

export default StartPage;