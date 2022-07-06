import React from 'react';
import style from './app.module.css';
import About from '../About/About';
import Contacts from '../Contacts/Contacts';
import Projects from '../Projects/Projects';
import MyStack from '../MyStack/MyStack';

const App = () => {
  return (
    <>
      <div className={style.wrapper}>
        <About/>
        <Contacts/>
        <MyStack/>
        <Projects/>
      </div>
      <div className={style.footer}>Буду рад сотрудничеству !</div>
    </>
  );
};

export default App;
