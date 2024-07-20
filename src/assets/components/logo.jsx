import React, { useEffect, useState } from 'react';
import Style from '../styles/logo.module.scss'
import Logo from "../images/paw.svg"
import { Link } from 'react-router-dom';
import pages from '../../pages';

const UiLogo = ({
  location
}) => {
  const [name,setName] = useState("")

  useEffect(() => {
    (location)?
    setName(pages[location["pathname"].replace("/","")]["name"]) :
    setName("")
  },[location])
  return (
    <Link className={Style.logo} to={"/dai-lapy"}>
      <img src={Logo} />
      <span className={Style.cross}></span>
      <div className={Style.text}>
        <div className={Style.name}>дай лапу</div>
        <div className={Style.page}>{name}</div>
      </div>
    </Link>
  );
};

export default UiLogo; 
