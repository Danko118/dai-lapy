import React from 'react';
import Style from '../styles/map.module.scss'
import SectionStyle from '../styles/section.module.scss'
import Point from '../images/point.svg'
import { FaPhoneAlt } from "react-icons/fa";

const UiMap = ({
  second
}) => {
  return (
    <section className={[SectionStyle.section,(second)? SectionStyle.secondary : SectionStyle.primary].join(" ")}>
      <div className={SectionStyle.wrapper}>
        <h1 className={SectionStyle.title}>Мы на картах</h1>
        <div className={Style.content}>
          <div className={Style.map}>тут будут яндекс карты</div>
          <div className={Style.points}>
            <div className={Style.point}>
              <div className={Style.icon}><img src={Point} alt="Метка на карте" /></div>
              <div className={Style.info}>
                <address className={Style.adress}>Адрес</address>
                <a href='tel://+79999999999' className={Style.tel}><FaPhoneAlt /> +7 (999) 99-99-99</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UiMap; 
