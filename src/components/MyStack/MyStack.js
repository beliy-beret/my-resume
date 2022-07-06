import React from 'react';
import style from './stack.module.css';

const MyStack = () => {
  return(
    <section className={style.stack}>
      <h2 className={style.title}>Я использую:</h2>
      <div className={style.stackList}>
        <img src={'https://play-lh.googleusercontent.com/85WnuKkqDY4gf6tndeL4_Ng5vgRk7PTfmpI4vHMIosyq6XQ7ZGDXNtYG2s0b09kJMw'} alt={'HTML'}/>
        <img src={'https://play-lh.googleusercontent.com/RTAZb9E639F4JBcuBRTPEk9_92I-kaKgBMw4LFxTGhdCQeqWukXh74rTngbQpBVGxqo'} alt={'CSS / SCSS'}/>
        <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png'} alt={'JavaScript'}/>
        <img src={'https://miro.medium.com/0*iib7UI_uS5HOu6Fz.png'} alt={'TypeScript'}/>
        <img src={'https://ensocore.com/media/61/reactjs-logo-sticker%20%281%29.jpg'} alt={'React'}/>
        <img src={'https://daqxzxzy8xq3u.cloudfront.net/wp-content/uploads/2019/04/21032431/redux-cover-imgage-1024x768.jpg'} alt={'Redux'}/>
      </div>
    </section>
  );
};

export default MyStack;
