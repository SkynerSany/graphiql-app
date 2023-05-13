import './login.scss';
import lang from './login.lang.json';

import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, logInWithEmailAndPassword } from '../../authentication/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import './login.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { ModalAlert } from '../../components/modalAlert/ModalAlert';
import { useForm } from 'react-hook-form';

interface IFormValues {
  email: string;
  password: string;
}

function Login() {
  const text = lang.ru;

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormValues>({ mode: 'onSubmit' });

  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  const isOpenErrorModal = useSelector((state: RootState) => state.store.errorModal);
  const redirectToWelcom = useSelector((state: RootState) => state.store.redirect);

  const loginUser = ({ email, password }: IFormValues) =>
    logInWithEmailAndPassword(email, password);

  useEffect(() => {
    if (loading) return;
    if (user) navigate('/editor');
    if (redirectToWelcom) navigate('/');
  }, [user, loading, redirectToWelcom]);

  return (
    <div className="login">
      {isOpenErrorModal && <ModalAlert text={text.checkData} delay={2000} />}
      <div className="login__container">
        <form onSubmit={handleSubmit(loginUser)}>
          <input
            type="text"
            className="login__textBox"
            placeholder={text.mail}
            {...register('email', {
              required: text.fieldRequired,
              minLength: { value: 5, message: text.minLength5 },
              maxLength: { value: 20, message: text.maxLength20 },
              pattern: {
                value: /[a-zA-Z0-9.!#$%&amp;’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+/,
                message: text.incorrectEmail,
              },
            })}
          />
          <div className="input-error__block">
            {errors?.email && <p className="input-error__text">{String(errors?.email?.message)}</p>}
          </div>

          <input
            type="text"
            className="login__textBox"
            placeholder={text.password}
            {...register('password', {
              required: text.fieldRequired,
              minLength: { value: 8, message: text.minLength8 },
              maxLength: { value: 20, message: text.maxLength20 },
              pattern: {
                value: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[^\w\s]).{1,}/,
                message: text.atLeast,
              },
            })}
          />
          <div className="input-error__block">
            {errors?.password && (
              <p className="input-error__text">{String(errors?.password?.message)}</p>
            )}
          </div>

          <button className="login__btn" type="submit">
            {text.login}
          </button>
        </form>

        <div>
          {text.haveAccount} <Link to="/register">{text.register}</Link> {text.now}.
        </div>
      </div>
    </div>
  );
}
export default Login;
