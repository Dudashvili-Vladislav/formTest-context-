import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppContext } from '../../../contexts/app-contexts';
import cls from './SearchForm.module.scss';


export const SearchForm = () => {
  const { t } = useTranslation('');
  const { setUser, users } = useAppContext();
  const [loginSecond, setLoginSecond] = useState('');

  const handleLoginChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginSecond(event.target.value);
  };

  const handleSubmitFormSecond = (e: React.FormEvent<HTMLFormElement>)=> {
    e.preventDefault();
    const user = users.find((el) => el.login === loginSecond);
    if(user) {
      setUser(user);
      setLoginSecond('')
    } 

  }

  return (
      <>
      <form onSubmit={handleSubmitFormSecond} className={cls.form}>
        <p className={cls.form_title}>Form 2</p>
          <div className={cls.input_container}>
            <input 
              type="text" 
              placeholder="login" 
              value={loginSecond} 
              onChange={handleLoginChange} 
              />
            <span>
            </span>
        </div>
          <button  type="submit" className={cls.submit}>
          Search
        </button>
      </form>
      </>
  );
};


