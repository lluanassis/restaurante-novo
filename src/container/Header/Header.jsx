import React from "react";

import { images } from "../../constants";

import "./Header.css";
import SubHeading from "./../../components/SubHeading/SubHeading";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Persiga um novo sabor" />
      <h1 className="app__header-h1">Encontre o seu melhor jantar</h1>
      <p className="p__opensans" style={{margin: '2rem 0'}}>Possimus, tempora. Exercitationem perferendis cupiditate beatae incidunt, cum voluptatum repellat temporibus tempore quos, impedit velit, iusto illum est atque voluptate error! Assumenda?</p>
      <button type="button" className="custom__button">Explorar Menu</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="bem-vindo"/>
    </div>
  </div>
);

export default Header;
