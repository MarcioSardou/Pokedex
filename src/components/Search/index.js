import React from 'react';
import './styles.scss'


function Search() {
  return (
    <>
      <div className="container">
        <form>
          <input type="search" className="container__inp" placeholder="Ex: Pikachu"/>
        </form>
      </div>
    </>
  )
}

export default Search;