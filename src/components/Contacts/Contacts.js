import style from './contacts.module.css';

const Contacts = () => {
  return(
    <section className={style.contacts}>
      <h2 className={style.title}>Со мной можно связаться так:</h2>
      <ul className={style.contactList}>
        <li>VK: <a href="https://vk.com/id81696211" target="_blank">Стас Скоробогатов</a></li>
        <li>Email: <a href="mailto:skoriy12990@gmail.com">skoriy12990@gmail.com</a></li>
        <li>Git Hub: <a href="https://github.com/beliy-beret" target="_blank">Skorobogatov Stanislav</a></li>
        <li>Telegram: <a href="https://t.me/StanislavSkor" target="_blank">@StanislavSkor</a></li>
        <li>Whatsapp: +7(964) 891-11-97</li>
      </ul>
    </section>
  )
};

export default Contacts;
