import React from 'react';
import style from './about.module.css';
import avatar from '../../assets/image/avatar.jpg';

const About = () => {
  return (
    <section className={style.about}>
      <img className={style.myAva} src={avatar} alt={'my photo'}/>
      <h1 className={style.title}>Front-end developer</h1>
      <div className={style.description}>
        <p>
          Приветствую всех заинтересованных, меня зовут Станислав. Я работаю с html, CSS, JavaScript, TypeScript.
          Немного знаком с Webpack и Parcel. Использую в работах библиотеки React, Redux, Redux Thunk, Material UI,
          Axios. Для единообразия кода подключаю Eslint и Prettier. Прошёл курс перепрофилирования в университете
          Иннополис, получил диплом о квалификации младший Front-end
          разработчик. Обучаюсь по видео с You Tube каналов IT - Kamasutra, UlbiTV, Фрилансер по жизни и др.
          Ну и конечно читаю документацию.

        </p>
        <p>
          Работал ранее в разных сферах от продавца-консультанта до государственного служащего.
          Всегда моя работа была завязана на общении с коллегами и клиентами напрямую, что помогает мне
          находить общий язык с разными личностями. По образованию я юрист, за период обучения и работы по специальности
          получил навык находить суть среди большого объема текста и сложных терминов, что сейчас помогает работать с
          документацией какой-либо библиотеки. Нахожусь в поиске места, где смогу заниматься интересным мне делом
          и приносить пользу окружающим.
        </p>
      </div>
    </section>
  );
};

export default About;
