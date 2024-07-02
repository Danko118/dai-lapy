import React from 'react';
import Style from '../styles/main.module.scss'
import SectionStyle from '../styles/section.module.scss'

const MainPage = ({
  second
}) => {
  return (
    <section className={[SectionStyle.section,Style.bg].join(" ")}>
      <div className={SectionStyle.wrapper}>
        <div className={Style.welcome}>
          <div className={Style.text}>
            Добро пожаловать <br />
            в Дай Лапу🐾!
          </div>
          <div className={Style.buttons}>
          <button className={Style.button}>Вет клиника</button>
          <button className={Style.button}>Зоогостиница</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainPage; 
