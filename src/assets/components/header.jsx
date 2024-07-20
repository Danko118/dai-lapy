import React, { useEffect, useState } from 'react';
import Style from "../styles/header.module.scss"
import UiLogo from './logo';
import pages from '../../pages';
import { Link } from 'react-router-dom';

const UiHeader = ({
    location
}) => {
    const [menu,setMenu] = useState(false)
    const [targets,setTargets] = useState([])

    useEffect(() => {
        // setMenu(false)
        setTargets(pages[location["pathname"].replace("/","")]["pages"])
    },[location])

    return (
        <header className={[Style.header, (menu)? Style.active : ""].join(" ")}>
            <div className={Style.wrapper}>
                < UiLogo 
                    location={location}
                />
                <nav className={Style.targets}>
                    {targets.map((item,id )=> 
                        <Link key={id} to={item["link"]} >{item["title"]}</Link>
                    )}
                </nav>
                <button className={Style.button}>Забронировать</button>
                <div className={Style.mobile} onClick={() => setMenu(!menu)}>
                    <a href="#" className={Style.icon} >
                        <div className={[Style.line, (menu)? Style.active : ""].join(" ")}></div>
                        <div className={[Style.line, (menu)? Style.active : ""].join(" ")}></div>
                        <div className={[Style.line, (menu)? Style.active : ""].join(" ")}></div>
                    </a>
                </div>
            </div>
            <nav className={[Style.mobilemenu,Style.mobile,(menu)? Style.actived : ""].join(" ")}>
                    {targets.map((item,id )=> 
                        <Link key={id} to={item["link"]} >{item["title"]}</Link>
                    )}
                </nav>
        </header>
    );
};

export default UiHeader;