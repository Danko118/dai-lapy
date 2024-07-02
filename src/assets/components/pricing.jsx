import React from 'react';
import Style from '../styles/pricing.module.scss'
import SectionStyle from '../styles/section.module.scss'


const UiPricing = ({
  second
}) => {
  return (
    <section className={[SectionStyle.section,(second)? SectionStyle.secondary : SectionStyle.primary].join(" ")}>
      <div className={SectionStyle.wrapper}>
        <h1 className={SectionStyle.title}>Стоимость</h1>
        <div className={Style.content}>
            <div className={Style.image}></div>
            <div className={Style.info}>
                <div className={Style.specs}>
                    <div className={Style.item}><div className={Style.name}>Площадь</div><div className={Style.measure}>9м²</div></div>
                    <div className={Style.item}>Высота<span>0.9м</span></div>
                    <div className={Style.item}>Глубина<span>1м</span></div>
                </div>
                <div className={Style.prices}>
                    <div className={Style.price}>
                        <div className={Style.animal}>
                        Для собак
                        </div>
                        от 1000 ₽/сутки
                    </div>
                    <div className={Style.price}>
                        <div className={Style.animal}>
                        Для котов
                        </div>
                        от 500 ₽/сутки
                    </div>
                </div>
            </div>
        </div>
        <button className={Style.button}>Забронировать</button>
      </div>
    </section>
  );
};

export default UiPricing; 
