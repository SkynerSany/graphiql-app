import lang from './welcome.lang.json';
import MyButton from '../../components/myButton/myButton';

import './welcome.scss';

export default function Welcome() {
  const text = lang.en;

  return (
    <article className="welcome-page">
      <div className="wrapper">
        <h1 className="title-page">{text.title}</h1>

        <div className="wrapper_center">
          <MyButton content={'Sign In'} />
          <MyButton content={'Sign Up'} />
        </div>
      </div>
    </article>
  );
}
