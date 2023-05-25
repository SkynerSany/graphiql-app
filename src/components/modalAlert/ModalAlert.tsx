import React, { useEffect, useState } from 'react';
import './ModalAlert.scss';
import { useDispatch } from 'react-redux';
import { closeErrorModal } from '../../store/reducers';

interface IModal {
  text: string;
  delay: number;
  variant?: string;
}

export const ModalAlert = ({ text, delay, variant }: IModal) => {
  const dispatch = useDispatch();
  const [alert, setAlert] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert(false);
      dispatch(closeErrorModal());
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {alert && <div className="modal"></div>}
      {alert && <div className={`modal__text modal__text-${variant}`}>{text}</div>}
    </>
  );
};
