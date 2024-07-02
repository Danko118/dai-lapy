import React from 'react';
import Style from '../styles/rules.module.scss'
import SectionStyle from '../styles/section.module.scss'
import { PiDog } from "react-icons/pi";
import { PiCat } from "react-icons/pi";


const UiRules = ({
  second
}) => {
  return (
    <section className={[SectionStyle.section,(second)? SectionStyle.secondary : SectionStyle.primary].join(" ")}>
      <div className={SectionStyle.wrapper}>
        <h1 className={SectionStyle.title}>Условия содержания</h1>
        <div className={Style.item}>
            <div className={Style.image}>
              <PiDog />
            </div>
            <div className={Style.text}>
                <div className={Style.head}>Для собак</div>
                <div className={Style.body}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eros diam,  ultricies ut lacus et, suscipit ultrices ligula. In vulputate mattis  placerat. Ut eget commodo eros. Quisque ullamcorper orci justo, non  malesuada purus facilisis quis. Curabitur varius velit non varius  venenatis. Etiam ut tortor at ante pulvinar iaculis a id justo.</div>
            </div>
        </div>
        <div className={[Style.item, Style.second].join(" ")}>
            <div className={Style.image}>
              <PiCat />
            </div>
            <div className={Style.text}>
                <div className={Style.head}>Для кошек</div>
                <div className={Style.body}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eros diam,  ultricies ut lacus et, suscipit ultrices ligula. In vulputate mattis  placerat. Ut eget commodo eros. Quisque ullamcorper orci justo, non  malesuada purus facilisis quis. Curabitur varius velit non varius  venenatis. Etiam ut tortor at ante pulvinar iaculis a id justo.</div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default UiRules; 
