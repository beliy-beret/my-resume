import React from 'react';
import style from './contacts.module.css';
import MailForm from '../MailForm/MailForm';

const Contacts = () => {
  return (
    <section className={style.contacts}>
      <h2 className={style.listTitle}>Вы можете написать мне здесь</h2>
      <ul className={style.contactList}>
        <li>VK: <a href="https://vk.com/id81696211" target="_blank" rel="noreferrer">Стас Скоробогатов</a></li>
        <li>Email: <a href="mailto:skoriy12990@gmail.com">skoriy12990@gmail.com</a></li>
        <li>Git Hub: <a href="https://github.com/beliy-beret" target="_blank" rel="noreferrer">Skorobogatov
          Stanislav</a></li>
        <li>Telegram: <a href="https://t.me/StanislavSkor" target="_blank" rel="noreferrer">@StanislavSkor</a></li>
        <li>Whatsapp: +7(964) 891-11-97</li>
      </ul>
      <h2 className={style.formTitle}>или заполнив форму</h2>
      <MailForm/>
    </section>
  );
};

export default Contacts;
