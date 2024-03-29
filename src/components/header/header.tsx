import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import MyButton from '../myButton/myButton';
import { logout } from '../../authentication/firebase';
import { useIsAuthorized } from '../../hooks/useIsAuthorized';
import Select from '../select/select';

import './header.scss';

export default function Header() {
  const { t, i18n } = useTranslation();
  const { user, navigate } = useIsAuthorized();
  const loginOutAndGoWelcome = () => {
    logout();
    navigate('/');
  };

  const [sticky, setSticky] = useState('');

  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  }, []);

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  const isSticky = () => {
    setSticky(window.scrollY >= 30 ? 'header_sticky' : '');
  };

  const classes = `header ${sticky}`;

  return (
    <header className={classes}>
      <div className="header__wrapper">
        <div className="menu">
          <NavLink to="/" className="menu__link">
            {t('welcome')}
          </NavLink>
        </div>

        <div className="header__buttons">
          {user && (
            <NavLink to="/editor" className="header__btn">
              {t('main')}
            </NavLink>
          )}
          {user && (
            <MyButton
              content={t('logout')}
              className={'header__btn'}
              event={loginOutAndGoWelcome}
            />
          )}
          {!user && (
            <NavLink to="/register" className="header__btn">
              {t('register')}
            </NavLink>
          )}
          {!user && (
            <NavLink to="/login" className="header__btn">
              {t('login')}
            </NavLink>
          )}
          <Select
            valueSelect={'languageSelectValue'}
            setLanguageSelectValue={changeLanguage}
            options={['en', 'ru']}
          />
        </div>
      </div>
    </header>
  );
}
