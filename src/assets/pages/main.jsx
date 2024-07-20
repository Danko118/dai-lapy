import React from 'react';
import { useEffect,useState } from 'react';
import Style from '../styles/main.module.scss'
import SectionStyle from '../styles/section.module.scss'

const MainPage = ({
  second
}) => { 
  let places = ["отдыхаете","путешествуете","развлекаетесь","наслаждаетесь природой","занимаетесь спортом","занимаетесь шопингом","кушаете в ресторане","посещаете музей","ходите на концерт","находитесь на экскурсии"]
  let seconds = 1;
  const [count, setCount] = useState(0);
  const [secondsRemaining, setSecondsRemaining] = useState(seconds);
  const [place,setPlace] = useState(places[count])
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (secondsRemaining > 0) {
        setSecondsRemaining(secondsRemaining - 1);
      } else {
        setSecondsRemaining(seconds)
        setCount(((places.length - 1) === count)? 0 : count + 1)
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [secondsRemaining]);

  useEffect(() => {
    setPlace(places[count])
  },[count])
    
  return (
    <section className={[SectionStyle.section,Style.bg].join(" ")}>
      <div className={SectionStyle.wrapper}>
        <div className={Style.welcome}>
          <div className={Style.text}>
          Оставьте питомца с нами, <br />
          пока вы  <br />
          <span className={Style.place}>{place}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainPage; 
