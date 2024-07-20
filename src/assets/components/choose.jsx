import React from 'react';
import Style from '../styles/choose.module.scss'
import SectionStyle from '../styles/section.module.scss'
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { PiHouseLineFill } from "react-icons/pi";
import { GrFormNextLink } from "react-icons/gr";
import { Link } from 'react-router-dom';

const UiChoose = ({}) => {

  return (
    <section className={[SectionStyle.section, SectionStyle.primary].join(" ")}>
      <div className={SectionStyle.wrapper}>
        <h1 className={SectionStyle.title}>Мне нужно</h1>
        <div className={Style.content}>
            <div className={[Style.card, Style.blue].join(" ")}>
              <div className={Style.circle}><MdOutlineHealthAndSafety /></div>
              <div className={Style.text}>
                <div className={Style.name}>Ветклиника</div>
                <div className={Style.button}>Перейти <GrFormNextLink /></div>
              </div>
            </div>
            <Link className={[Style.card, Style.green].join(" ")} to={"/hostel"} onClick={() => {window.scrollTo(0,0)}}>
              <div className={Style.circle}><PiHouseLineFill /></div>
              <div className={Style.text}>
                <div className={Style.name}>Зоогостиница</div>
                <div className={Style.button}>Перейти <GrFormNextLink /></div>
              </div>
            </Link>
        </div>
      </div>
    </section>
  );
};

export default UiChoose; 
