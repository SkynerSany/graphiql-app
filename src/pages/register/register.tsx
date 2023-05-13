import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { registerWithEmailAndPassword } from '../../authentication/firebase';
import './register.scss';
import lang from './register.lang.json';
import { useForm } from 'react-hook-form';
import { ModalAlert } from '../../components/modalAlert/ModalAlert';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useIsAuthorized } from '../../hooks/useIsAuthorized';

interface IFormValues {
  name: string;
  email: string;
  password: string;
}

function Register() {
  const text = lang.en;

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
      {isOpenErrorModal && <ModalAlert text={text.checkData} delay={2000} />}
      <div className="register">
        <div className="register__container">
          <form onSubmit={handleSubmit(registerUser)}>
            <input
              type="text"
              className="register__textBox"
              placeholder={text.name}
              {...register('name', {
                required: 'The field is required',
                minLength: { value: 3, message: 'Minimum input length 3 characters' },
                maxLength: { value: 10, message: 'Maximum input length 10 characters' },
                pattern: {
                  value: /[A-Z]{1}/,
                  message: 'Please start with a capital letter',
                },
              })}
            />
            <div className="input-error__block">
              {errors?.name && <p className="input-error__text">{String(errors?.name?.message)}</p>}
            </div>

            <input
              type="text"
              className="register__textBox"
              placeholder={text.mail}
              {...register('email', {
                required: 'The field is required',
                minLength: { value: 5, message: 'Minimum input length 5 characters' },
                maxLength: { value: 20, message: 'Maximum input length 20 characters' },
                pattern: {
                  value: /[a-zA-Z0-9.!#$%&amp;’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+/,
                  message: 'Incorrect email',
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
              placeholder={text.password}
              {...register('password', {
                required: 'The field is required',
                minLength: { value: 8, message: 'Minimum input length 8 characters' },
                maxLength: { value: 20, message: 'Maximum input length 20 characters' },
                pattern: {
                  value: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[^\w\s]).{1,}/,
                  message: 'At least 1 letter, 1 number, 1 special symbol',
                },
              })}
            />
            <div className="input-error__block">
              {errors?.password && (
                <p className="input-error__text">{String(errors?.password?.message)}</p>
              )}
            </div>
            <button className="register__btn" type="submit">
              {text.register}
            </button>
          </form>

          <div>
            {text.haveAccount} <Link to="/login">{text.login}</Link> {text.now}
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
