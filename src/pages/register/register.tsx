import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { registerWithEmailAndPassword } from '../../authentication/firebase';
import { ModalAlert } from '../../components/modalAlert/ModalAlert';
import { RootState } from '../../store/store';
import { useIsAuthorized } from '../../hooks/useIsAuthorized';

import './register.scss';

interface IFormValues {
  name: string;
  email: string;
  password: string;
}

function Register() {
  const { t } = useTranslation();

  const { user, loading, navigate } = useIsAuthorized();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormValues>({ mode: 'onSubmit' });

  const registerUser = ({ name, email, password }: IFormValues) => {
    registerWithEmailAndPassword(name, email, password);
  };

  useEffect(() => {
    if (loading) return;
    if (user) navigate('/');
  }, [user, loading]);

  const isOpenErrorModal = useSelector((state: RootState) => state.store.errorModal);

  return (
    <>
      <div className="register">
        <div className="register__container">
          <form onSubmit={handleSubmit(registerUser)}>
            <input
              type="text"
              className="register__textBox"
              placeholder={t('page.register.name')}
              {...register('name', {
                required: t`page.register.fieldRequired`,
                minLength: { value: 3, message: t`page.register.minLength3` },
                maxLength: { value: 10, message: t`page.register.maxLength10` },
                pattern: {
                  value: /[A-Z]{1}/,
                  message: t`page.register.startCapitalLetter`,
                },
              })}
            />
            <div className="input-error__block">
              {errors?.name && <p className="input-error__text">{String(errors?.name?.message)}</p>}
            </div>

            <input
              type="text"
              className="register__textBox"
              placeholder={t('page.register.mail')}
              {...register('email', {
                required: t`page.register.fieldRequired`,
                minLength: { value: 5, message: t`page.register.minLength5` },
                maxLength: { value: 20, message: t`page.register.maxLength20` },
                pattern: {
                  value: /[a-zA-Z0-9.!#$%&amp;’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+/,
                  message: t`page.register.incorrectEmail`,
                },
              })}
            />
            <div className="input-error__block">
              {errors?.email && (
                <p className="input-error__text">{String(errors?.email?.message)}</p>
              )}
            </div>

            <input
              type="text"
              className="register__textBox"
              placeholder={t('page.register.password')}
              {...register('password', {
                required: t`page.register.fieldRequired`,
                minLength: { value: 8, message: t`page.register.minLength8` },
                maxLength: { value: 20, message: t`page.register.maxLength20` },
                pattern: {
                  value: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[^\w\s]).{1,}/,
                  message: t`page.register.atLeast`,
                },
              })}
            />
            <div className="input-error__block">
              {errors?.password && (
                <p className="input-error__text">{String(errors?.password?.message)}</p>
              )}
            </div>
            <button className="register__btn" type="submit">
              {t('page.register.register')}
            </button>
          </form>

          <div>
            {t('page.register.haveAccount')} <Link to="/login">{t('page.register.login')}</Link>{' '}
            {t('page.register.now')}
          </div>
        </div>
        {isOpenErrorModal && <ModalAlert text={t('page.register.checkData')} delay={2000} />}
      </div>
    </>
  );
}

export default Register;
