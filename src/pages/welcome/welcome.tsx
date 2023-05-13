import lang from './welcome.lang.json';
import MyButton from '../../components/myButton/myButton';

import './welcome.scss';

export default function Welcome() {
  const text = lang.en;

  return (
    <div className="welcome-page">
      <div className="wrapper">
        <h1 className="title-page">{text.title}</h1>

        <div className="wrapper_center">
          <div className="welcome-page__content">
            <div className="welcome-page__content_item">
              <h2>General information about the developers</h2>
            </div>
            <div className="welcome-page__content_item">
              <h2>General information about the project</h2>
            </div>
            <div className="welcome-page__content_item">
              <h2>General information about the course</h2>
              <p>
                The RS School is working by the principle of Pay it forward. Members of our
                community share their knowledge and check students tasks for free. And we hope our
                students will continue this work as our mentors in the future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
