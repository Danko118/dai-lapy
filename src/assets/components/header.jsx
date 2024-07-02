import React, { useState } from 'react';
import Style from "../styles/header.module.scss"
import Logo from "../images/paw.svg"



const UiHeader = () => {
    const [menu,setMenu] = useState(false)

    return (
        <header className={[Style.header, (menu)? Style.active : ""].join(" ")}>
            <div className={Style.wrapper}>
                <div className={Style.logo}>
                    <img src={Logo} />
                    <div className={Style.text}>Дай <br /> Лапу</div>
                </div>
                <div className={Style.menu}>
                    <ul className={Style.targets}>
                        <li>Зоогостиница</li>
                        <li>Вет-клиника</li>
                    </ul>
                    <button className={Style.button}>Забронировать</button>
                </div>
                <div className={Style.mobile} onClick={() => setMenu(!menu)}>
                    <a href="#" className={Style.icon} >
                        <div className={[Style.line, (menu)? Style.active : ""].join(" ")}></div>
                        <div className={[Style.line, (menu)? Style.active : ""].join(" ")}></div>
                        <div className={[Style.line, (menu)? Style.active : ""].join(" ")}></div>
                    </a>
                </div>
            </div>
        </header>
    );
};

export default UiHeader;