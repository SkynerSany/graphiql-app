import lang from './login.lang.json';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { auth, logInWithEmailAndPassword } from '../../authentication/firebase';
import { RootState } from '../../store/store';
import { ModalAlert } from '../../components/modalAlert/ModalAlert';

import './login.scss';

interface IFormValues {
  email: string;
  password: string;
}

function Login() {
  const text = lang.ru;
  const { t } = useTranslation();

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
      {isOpenErrorModal && <ModalAlert text={t('page.login.checkData')} delay={2000} />}
      <div className="login__container">
        <form onSubmit={handleSubmit(loginUser)}>
          <input
            type="text"
            className="login__textBox"
            placeholder={t('page.login.mail')}
            {...register('email', {
              required: t`page.login.fieldRequired`,
              minLength: { value: 5, message: t`page.login.minLength5` },
              maxLength: { value: 20, message: t`page.login.maxLength20` },
              pattern: {
                value: /[a-zA-Z0-9.!#$%&amp;’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+/,
                message: t`page.login.incorrectEmail`,
              },
            })}
          />
          <div className="input-error__block">
            {errors?.email && <p className="input-error__text">{String(errors?.email?.message)}</p>}
          </div>

          <input
            type="text"
            className="login__textBox"
            placeholder={t('page.login.password')}
            {...register('password', {
              required: t`page.login.fieldRequired`,
              minLength: { value: 8, message: t`page.login.minLength8` },
              maxLength: { value: 20, message: t`page.login.maxLength20` },
              pattern: {
                value: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[^\w\s]).{1,}/,
                message: t`page.login.atLeast`,
              },
            })}
          />
          <div className="input-error__block">
            {errors?.password && (
              <p className="input-error__text">{String(errors?.password?.message)}</p>
            )}
          </div>

          <button className="login__btn" type="submit">
            {t('page.login.login')}
          </button>
        </form>

        <div>
          {t('page.login.haveAccount')} <Link to="/register">{t('page.login.register')}</Link>{' '}
          {t('page.login.now')}.
        </div>
      </div>
    </div>
  );
}
export default Login;
