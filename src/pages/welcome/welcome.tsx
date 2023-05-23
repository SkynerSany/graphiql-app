import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { offRedirect } from '../../store/reducers';

import './welcome.scss';

export default function Welcome() {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  dispatch(offRedirect());

  return (
    <div className="welcome-page">
      <div className="wrapper">
        <h1 className="title-page">{t('page.welcome.title')}</h1>

        <div className="wrapper_center">
          <div className="welcome-page__content">
            <div className="welcome-page__content_item">
              <h2>{t('info.developers.title')}</h2>
              <p>
                <a href="https://github.com/SkynerSany" className="github-link">
                  SkynerSany
                </a>{' '}
                - <span className="f-green f-bold">teamlide</span>
                <p className="h-mb20">
                  I can work with pure JavaScript and with React. I am currently learning TypeScript
                  and Redux. More than 10 pet-projects have already accumulated, among them there
                  are one-page and multi-page sites with functionality (film collection, weather
                  forecast, todo list, Gem Puzzle) and simple layout. Almost all designs are
                  responsive or responsive. I am considering any offers for an internship or
                  employment as a Frontend developer.
                </p>
              </p>
              <p className="h-mb20"></p>
              <p>
                <a href="https://github.com/YuliyaBondar" className="github-link">
                  YuliyaBondar
                </a>
              </p>
              <p className="h-mb20">
                I have successfully completed The RS School JavaScript/Front-end 2021Q3 course and
                2022Q3. I have high score. I have team project development experience and portfolio
                of my own projects. I enjoy working in team and learning new technologies.
              </p>
              <p>
                <a href="https://github.com/PavelPoleshchuk" className="github-link">
                  PavelPoleshchuk
                </a>
              </p>
              <p className="h-mb20">
                I have been in business for a long time. And I have knowledge in accounting,
                taxation, distribution. Since March 2022, I quit my job and started my studies at
                RSS school. I have successfully completed the JS/FE Pre-School 2022Q2 course. My
                rating is 350 of 11247. I am currently a student of Java Script Front End stage1. I
                want to get knowledge and skills that will be enough for employment in a IT company.
              </p>
              <p>
                <a href="https://github.com/AmidaWolf/AmidaWolf" className="github-link">
                  AmidaWolf
                </a>{' '}
                - <span className="f-green f-bold">mentor</span>
              </p>
              <p>
                Start programming in 2019 after studying at RSSchool (JS+React). Worked as a
                freelance web developer within a team of backend developer, designer and team
                leader. In 2022, I upgraded my skills at RS School (JavaScript/TypeScript, React
                v18+). Total experience 3 years. In high priority, looking for a full-time remote
                work. English level: A2+.
              </p>
            </div>
            <div className="welcome-page__content_item">
              <h2>{t('info.project.title')}</h2>
              <p>
                GraphiQL is a playground/IDE for graphQL requests. PLEASE, READ TASK DESCRIPTION
                CAREFULLY UP TO THE END BEFORE STARTING THE TASK.
              </p>
            </div>
            <div className="welcome-page__content_item">
              <h2>{t('info.course.title')}</h2>
              <p>
                The RS School is working by the principle of «Pay it forward.» Members of our
                community share their knowledge and check students&#39; tasks for free. And we hope
                our students will continue this work as our mentors in the future.
              </p>
              <p>
                Everyone can study at RS School, regardless of age, professional employment, or
                place of residence. However, you should have sufficient base knowledge before the
                program begins.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
