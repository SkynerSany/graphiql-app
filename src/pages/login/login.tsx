import './login.scss';
import lang from './login.lang.json';

import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, logInWithEmailAndPassword } from '../../authentication/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import './login.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { ModalAlert } from '../../components/modalAlert/ModalAlert';

function Login() {
  const text = lang.en;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  const isOpenErrorModal = useSelector((state: RootState) => state.store.errorModal);
  const redirectToWelcom = useSelector((state: RootState) => state.store.redirect);

  useEffect(() => {
    if (loading) return;
    if (user) navigate('/editor');
    if (redirectToWelcom) navigate('/');
  }, [user, loading, redirectToWelcom]);

  return (
    <div className="login">
      {isOpenErrorModal && <ModalAlert text={text.checkData} delay={2000} />}
      <div className="login__container">
        <input
          type="email"
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
