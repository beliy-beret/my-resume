import React from 'react';
import style from './app.module.css';
import About from '../About/About';
import Contacts from '../Contacts/Contacts';
import Projects from '../Projects/Projects';
import MyStack from '../MyStack/MyStack';

const App = () => {
  return (
    <div className={style.app}>
      <div className={style.wrapper}>
        <About/>
        <MyStack/>
        <Projects/>
        <Contacts/>
      </div>
      <div className={style.footer}>Буду рад сотрудничеству !</div>
    </div>
  );
};

export default App;
