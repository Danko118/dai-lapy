import React from 'react';
import Style from '../styles/about.module.scss'
import SectionStyle from '../styles/section.module.scss'
import { IoSearchOutline } from "react-icons/io5";
import util from '../../util';

const UiAbout = ({
  styles
}) => {

  return (
    <section className={[SectionStyle.section, styles.map(style => util[style]).join(" ")].join(" ")} id='about'>
      <div className={SectionStyle.wrapper}>
        <h1 className={SectionStyle.title}>Обо мне</h1>
        <div className={Style.content}>
            <div className={Style.photo}></div>
            <div className={Style.info}>
                <div>
                    <div className={Style.head}>Привет! 👋</div>
                    <div className={Style.body}>
                        <div>
                            Меня зовут Алина Джадд,
                            и я – ветеринарный врач 
                            и зоопсихолог. Я также являюсь 
                            счастливой владелицей зоогостиницы 
                            и ветеринарной клиники "Дай лапу"!
                        </div>
                        <div>
                            Я  большая любительница животных 
                            и просто не представляю свою 
                            жизнь без них! Именно поэтому 
                            я решила создать "Дай лапу" – место, 
                            где вашим питомцам будет комфортно и уютно, 
                            где они получат заботу и внимание, как дома.
                        </div>
                    </div>
                </div>
                <button className={Style.button}>Узнать больше <IoSearchOutline /></button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default UiAbout; 
