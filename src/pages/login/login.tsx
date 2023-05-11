import './login.scss';
import lang from './login.lang.json';

import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, logInWithEmailAndPassword } from '../../authentication/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import './login.scss';

function Login() {
  const text = lang.en;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      <h3>Loading...</h3>;
    }
    if (user) navigate('/editor');
  }, [user, loading]);

  return (
    <div className="login">
      <div className="login__container">
        <input
          type="text"
          className="login__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={text.mail}
        />
        <input
          type="password"
          className="login__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder={text.password}
        />
        <button className="login__btn" onClick={() => logInWithEmailAndPassword(email, password)}>
          {text.login}
        </button>

        <div>
          {text.haveAccount} <Link to="/register">{text.register}</Link> {text.now}.
        </div>
      </div>
    </div>
  );
}
export default Login;
