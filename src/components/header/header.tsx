import { useEffect, useState } from 'react';
import lang from './header.lang.json';
import { NavLink } from 'react-router-dom';
import MyButton from '../myButton/myButton';
import { logout } from '../../authentication/firebase';
import { useIsAuthorized } from '../../hooks/useIsAuthorized';
import Select from '../select/select';

import './header.scss';

export default function Header() {
  const text = lang.en;
  const { user, navigate } = useIsAuthorized();
  const loginOutAndGoWelcome = () => {
    logout();
    navigate('/');
  };

  const [sticky, setSticky] = useState('');

  const [languageSelectValue, setLanguageSelectValue] = useState('English');

  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    localStorage.setItem('languageSelectValue', JSON.stringify(languageSelectValue));
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  }, [languageSelectValue]);

  const isSticky = () => {
    setSticky(window.scrollY >= 30 ? 'header_sticky' : '');
  };

  const classes = `header ${sticky}`;

  return (
    <header className={classes}>
      <div className="header__wrapper">
        <div className="menu">
          <NavLink to="/" className="menu__link">
            {text.welcome}
          </NavLink>
          {!user && (
            <NavLink to="/login" className="menu__link">
              {text.login}
            </NavLink>
          )}
          {!user && (
            <NavLink to="/register" className="menu__link">
              {text.register}
            </NavLink>
          )}
          {user && (
            <NavLink to="/editor" className="menu__link">
              {text.main}
            </NavLink>
          )}
        </div>

        <div className="header__buttons">
          {user && (
            <NavLink to="/editor" className="header__btn">
              {text.main}
            </NavLink>
          )}
          {user && (
            <MyButton
              content={text.logout}
              className={'header__btn'}
              event={loginOutAndGoWelcome}
            />
          )}
          {!user && (
            <NavLink to="/register" className="header__btn">
              {text.register}
            </NavLink>
          )}
          {!user && (
            <NavLink to="/login" className="header__btn">
              {text.login}
            </NavLink>
          )}
          <Select
            valueSelect={'languageSelectValue'}
            setLanguageSelectValue={setLanguageSelectValue}
            options={['English', 'Русский']}
          />
        </div>
      </div>
    </header>
  );
}
