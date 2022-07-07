import React from 'react';
import {useForm} from 'react-hook-form';

const MailForm = () => {
  const {register, handleSubmit} = useForm();
  const onSubmit = data => console.log(data);

  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Ваше имя:</label>
          <input {...register('name', {required: true})} />
        </div>
        <div>
          <label>Способ связи:</label>
          <input {...register('contact', {required: true})}/>
        </div>
        <div>
          <label>Ваше сообщение:</label>
          <textarea {...register('message')}/>
        </div>
        <button type={'submit'}>Отправить</button>
      </form>
    </section>
  );
};

export default MailForm;
