import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppContext } from '../../../contexts/app-contexts';
import cls from './Form.module.scss';
import { toastSuccess } from 'shared/ui/Toast/toast';



export const LoginForm = () => {
  const { t } = useTranslation('');
  const { setUsers, setUser, users, user } = useAppContext();

  const [interests, setInterests] = useState('Football');
  const [loginFirst, setLoginFirst] = useState('');
  const [password, setPassword] = useState('');


  useEffect(() => {
    if(user) {
      setLoginFirst(user.login);
      setPassword(user.password);
      setInterests(user.interests);
    }
  },[user?.login]);
  
  const onChangeInterestsHandler = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    if (e?.target?.name) {
      setInterests(e?.target?.value);
    }
  };

  const onChangeLoginFirst = (e: React.ChangeEvent<HTMLInputElement>): void => {
      const inputValue = e?.target?.value || '';
      if (inputValue.length <= 20) {
        setLoginFirst(inputValue);
      }
    
  };

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>)=> {
    e.preventDefault();
    const data =  {
      login: loginFirst,
      password,
      interests
    };
    const change = users.filter((el) => el.login !== data.login)
    setUsers([...change, data]);
    setLoginFirst('');
    setInterests('Football');
    setPassword('');
    toastSuccess()
  }


  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>): void => {
      const inputValue = e?.target?.value;
      setPassword(inputValue);
  };

    return (
        <>
        <form onSubmit={handleSubmitForm} className={cls.form}>
          <p className={cls.form_title}>Form 1</p>
            <div className={cls.input_container}>
              <input 
                type="text" 
                placeholder="Enter login" 
                value={loginFirst} 
                onChange={onChangeLoginFirst}
                />
              <span>
              </span>
          </div>
          <div className={cls.input_container}>
              <input 
                type="password" 
                placeholder="Enter password" 
                value={password} 
                onChange={onChangePassword} 
                />
            </div>
          <div className={cls.input_container}>
          <select
              value={interests}
              onChange={onChangeInterestsHandler}
              name="interests"
              className={cls.select}
            >
              <option value="Football">Football</option>
              <option value="Basketball">Basketball</option>
              <option value="Rugby">Rugby</option>
          </select>
            </div>
            <button type="submit" className={cls.submit}>
            Сonfirm
          </button>
        </form>
        </>
    );
};


