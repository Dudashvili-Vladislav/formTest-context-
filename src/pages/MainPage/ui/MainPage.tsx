import React from 'react';
import { LoginForm } from 'shared/ui/Form/LoginForm/Form';
import cls from './MainPage.module.scss';
import { SearchForm } from 'shared/ui/Form/SearchForm/SearchForm';

const MainPage = () => {

    return (
			<div>
				<div className={cls.wrapper_top}>
				Главная
				</div>
				<div className={cls.wrapper_data}>
				<LoginForm />
				<SearchForm />
				</div>
			</div>
    );
};

export default MainPage;
