import React from 'react';
import style from './app.module.css';
import About from '../About/About';
import Contacts from '../Contacts/Contacts';
import Projects from '../Projects/Projects';

const App = () => {
  return(
    <div className={style.app}>
      <About />
      <Contacts />
      <Projects />
    </div>
  );
};

export default App;
