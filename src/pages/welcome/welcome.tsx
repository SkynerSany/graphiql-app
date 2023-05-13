import lang from './welcome.lang.json';
import MyButton from '../../components/myButton/myButton';

import './welcome.scss';
import { useDispatch } from 'react-redux';
import { offRedirect } from '../../store/reducers';

export default function Welcome() {
  const text = lang.en;

  const dispatch = useDispatch();
  dispatch(offRedirect());

  return (
    <div className="welcome-page">
      <div className="wrapper">
        <h1 className="title-page">{text.title}</h1>

        <div className="wrapper_center">
          <div className="d-f gap20">
            <MyButton content={'Sign In'} />
            <MyButton content={'Sign Up'} />
          </div>
        </div>
      </div>
    </div>
  );
}
