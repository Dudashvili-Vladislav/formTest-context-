import React from 'react';
import { useTranslation } from 'react-i18next';
import { LoginForm } from 'shared/ui/Form/LoginForm/Form';
import cls from './MainPage.module.scss';
import { SearchForm } from 'shared/ui/Form/SearchForm/SearchForm';

const MainPage = () => {
    const { t } = useTranslation('');

    return (
			<div>
				<div className={cls.wrapper_top}>
					{t('Главная')}
				</div>
				<div className={cls.wrapper_data}>
				<LoginForm />
				<SearchForm />
				</div>
			</div>
    );
};

export default MainPage;
