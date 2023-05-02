import './header.scss';
import lang from './header.lang.json';
import { NavLink } from 'react-router-dom';

export default function Header() {
  const text = lang.en;

  return (
    <header className="header">
      <div className="menu">
        <NavLink to="/" className="menu__link">
          {text.welcome}
        </NavLink>
        <NavLink to="/editor" className="menu__link">
          {text.editor}
        </NavLink>
        <NavLink to="/login" className="menu__link">
          {text.login}
        </NavLink>
        <NavLink to="/error" className="menu__link">
          {text.error}
        </NavLink>
      </div>
    </header>
  );
}
