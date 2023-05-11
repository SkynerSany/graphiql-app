import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { auth, registerWithEmailAndPassword } from '../../authentication/firebase';
import './register.scss';
import lang from './register.lang.json';

function Register() {
  const text = lang.en;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const register = () => {
    if (!name) alert('Please enter name');
    registerWithEmailAndPassword(name, email, password);
  };

  useEffect(() => {
    if (loading) return;
    if (user) navigate('/welcome');
  }, [user, loading]);

  return (
    <div className="register">
      <div className="register__container">
        <input
          type="text"
          className="register__textBox"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={text.fullName}
        />
        <input
          type="text"
          className="register__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={text.mail}
        />
        <input
          type="password"
          className="register__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder={text.password}
        />
        <button className="register__btn" onClick={register}>
          {text.register}
        </button>

        <div>
          {text.haveAccount} <Link to="/login">{text.login}</Link> {text.now}
        </div>
      </div>
    </div>
  );
}

export default Register;
