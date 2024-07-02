import React from 'react';
import Style from '../styles/map.module.scss'
import SectionStyle from '../styles/section.module.scss'
import Point from '../images/point.svg'

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
                <div className={Style.name}>Наша точка:</div>
                <adress className={Style.adress}>Адресс</adress>
                <div className={Style.tel}>+7 (999) 99-99-99</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UiMap; 
