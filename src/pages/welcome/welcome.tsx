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
          <div className="welcome-page__content">
            <div className="welcome-page__content_item">
              <h2>General information about the developers</h2>
              <p></p>
            </div>
            <div className="welcome-page__content_item">
              <h2>General information about the project</h2>
              <p>
                GraphiQL is a playground/IDE for graphQL requests. PLEASE, READ TASK DESCRIPTION
                CAREFULLY UP TO THE END BEFORE STARTING THE TASK.
              </p>
            </div>
            <div className="welcome-page__content_item">
              <h2>General information about the course</h2>
              <p>
                The RS School is working by the principle of «Pay it forward.» Members of our
                community share their knowledge and check students&#39; tasks for free. And we hope
                our students will continue this work as our mentors in the future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
