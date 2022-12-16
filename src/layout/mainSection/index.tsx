import React, { useEffect, useState } from 'react';

import style from './mainSection.module.scss';
import { Header } from '../header';

const MainSection: React.FC = () => {
  let [first, setFirst] = useState(0);
  let [second, setSecond] = useState(0);
  let [third, setThird] = useState(0);
  let [fourth, setFourth] = useState(0);

  const countUp = (num: number): void => {
    let interval_1 = setInterval(() => {

      if (first === 1) {
        clearInterval(interval_1);
      } else {
        setFirst(++first);
      }

    }, 100)

    let interval_2 = setInterval(() => {

      if (second === 50) {
        clearInterval(interval_2);
      } else {
        setSecond(++second);
      }

    }, 100)

    let interval_3 = setInterval(() => {

      if (third === 2001) {
        clearInterval(interval_3);
      } else {
        setThird(++third);
      }

    }, 5)

    let interval_4 = setInterval(() => {

      if (fourth === 597) {
        clearInterval(interval_4);
      } else {
        setFourth(++fourth);
      }

    }, 10)
  }

  useEffect(() => {
    countUp(2001);
  }, []);

  return(
    <section className={style.mainSection}>
      <Header />
      <div className="container">
        <div className={style.mainSection__inner}>
          <div className={style.mainSection__innerText}>
            <h1 className={style.mainTitle}>
              <span className={style.mainTitle__largeText}>Путешествие</span>
              <span className={style.mainTitle__smallText}>на красную планету</span>
            </h1>
            <div className={style.mainSection__btnWrap}>
              <button className={style.mainSection__btn}>Начать путешествие</button>
            </div>
          </div>
          <div className={style.mainSection__advantages}>
            <div className={style.mainSection__advantagesItem}>
              <span>мы</span>
              <span>{first}</span>
              <span>на рынке</span>
            </div>
            <div className={style.mainSection__advantagesItem}>
              <span>гарантируем</span>
              <span>{second}%</span>
              <span>безопасность</span>
            </div>
            <div className={style.mainSection__advantagesItem}>
              <span>календарик зв</span>
              <span>{third}<span className={style.smallText}>г.</span></span>
              <span>в подарок</span>
            </div>
            <div className={style.mainSection__advantagesItem}>
              <span>путешествие</span>
              <span>{fourth}</span>
              <span>дней</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { MainSection };