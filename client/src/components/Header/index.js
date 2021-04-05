import React from 'react';
import logo from '../../assets/pokedex-logo.png'
import Cart from "../Cart/index"

import { Link } from "react-router-dom";

import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

import './styles.scss'

function Header() {
  return (
    <React.Fragment>
      <header>
        <div className="squadButton">
          <Link to={"/squad"}>
            <Cart />
          </Link>
        </div>

          <img src={logo} className="img" alt="Pokedex Logo"/>

          <aside>
            <a href="https://www.instagram.com/marcio_sardou/" target="_blank">
              <FaInstagram size="25"color="#ffff"/>
            </a>

            <a href="https://www.linkedin.com/in/marciosardou" target="_blank">
            <FaLinkedin size="25"color="#ffff"/>
            </a>

            <a href="https://github.com/MarcioSardou" target="_blank">
            <FaGithub size="25" color="#ffff"/>
            </a>

          </aside>
      </header>
    </React.Fragment>
  );
}

export default Header;