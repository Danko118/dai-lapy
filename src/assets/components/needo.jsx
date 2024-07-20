import React, { useEffect, useState } from 'react';
import Style from '../styles/needo.module.scss'
import SectionStyle from '../styles/section.module.scss'
import { IoSearchOutline } from "react-icons/io5";
import util from '../../util';

const UiNeedo = ({
  styles
}) => {

  return (
    <section className={[SectionStyle.section, styles.map(style => util[style]).join(" ")].join(" ")}>
      <div className={SectionStyle.wrapper}>
        <h1 className={SectionStyle.title}>Что нужно для заселения?</h1>
        <ul className={Style.list}>
            <li>
                <div className={Style.number}>1</div>
                <div className={Style.text}>
                    <div className={Style.head}>Паспорт животного</div>
                    <div className={Style.body}>Мы принимаем только вакцинированных и обработанных от паразитов животных. Владелец отдает ветеринарный паспорт животного (где есть подпись ветврача и печать клиники) на все время проживания питомца.</div>
                </div>
            </li>
            <li>
                <div className={Style.number}>2</div>
                <div className={Style.text}>
                    <div className={Style.head}>Корм и личные вещи</div>
                    <div className={Style.body}>Чтобы ваш питомец чувствовал себя комфортно и уютно, словно дома, возьмите с собой его любимый корм.  А если у него есть любимые игрушки, которые приносят ему радость, не забудьте их тоже! Мы хотим, чтобы ваш друг чувствовал себя окруженным заботой и любовью, как в родном доме.</div>
                </div>
            </li>
            <li>
                <div className={Style.number}>3</div>
                <div className={Style.text}>
                    <div className={Style.head}>Предоплата</div>
                    <div className={Style.body}>Чтобы заселить вашего питомца к нам, после согласования даты и срока проживания необходимо оплатить предоплату.</div>
                </div>
            </li>
        </ul>
        <button className={Style.button}>Узнать больше <IoSearchOutline /></button>
      </div>
    </section>
  );
};

export default UiNeedo; 
