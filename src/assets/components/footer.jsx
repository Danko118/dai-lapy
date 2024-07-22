import React from 'react';
import SectionStyle from '../styles/section.module.scss'
import Style from '../styles/footer.module.scss'
import UiLogo from './logo';
import vk from "../images/vk.svg";
import tg from "../images/tg.svg";
import wa from "../images/WhatsApp.svg";


const UiFooter = ({ location }) => {
    
    return (
        <footer id='footer'>
            <div className={SectionStyle.wrapper}>
                <div className={Style.content}>
                    <div className={Style.brand}>
                        <UiLogo 
                            location={location}
                        />  
                        {/* <div className={Style.social}>
                            <li><img src={vk} alt="Vk logo" /></li>
                            <li><img src={tg} alt="Tg logo" /></li>
                            <li><img src={wa} alt="Whatsapp logo" /></li>
                        </div> */}
                    </div>
                    <nav className={Style.nav}>
                        <li>Контакты</li>
                        <li>Правила</li>
                        <li>Зоогостиница</li>
                        <li>Ветклиника</li>
                        <li>Анкета гостя</li>
                        <li>Ответы на вопросы</li>
                        <li>Адрес</li>
                        <li>Обо мне</li>
                    </nav>
                </div>
            </div>
        </footer>
    );
};

export default UiFooter;