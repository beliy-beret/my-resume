import React from 'react';
import {useForm} from 'react-hook-form';
import emailjs from '@emailjs/browser';
import style from './mailForm.module.css';

const MailForm = () => {
  const {register, handleSubmit} = useForm();
  const onSubmit = (data) => {
    emailjs.send('contact_service', 'contact_form', data, 'bxjVLUG1TrJZY2Kj9')
      .then((result) => {
        console.log(result);
      }, (error) => {
        console.log(error);
      });
  };

  return (
    <form className={style.mailForm} onSubmit={handleSubmit(onSubmit)}>
      <div className={style.field}>
        <label>Ваше имя:</label>
        <input {...register('name', {required: true})} />
      </div>
      <div className={style.field}>
        <label>Способ связи:</label>
        <input {...register('contact', {required: true})}/>
      </div>
      <div className={style.field}>
        <label>Ваше сообщение:</label>
        <textarea {...register('message')} rows={5}/>
      </div>
      <button type={'submit'}>Отправить</button>
    </form>
  );
};

export default MailForm;
