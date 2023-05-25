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
                -{' '}
                <span className="f-green f-bold f-shadow">{t('info.developers.team-leader')}</span>
              </p>
              <p className="h-mb20">{t('info.developers.developer_1')}</p>
              <p className="h-mb20"></p>
              <p>
                <a href="https://github.com/YuliyaBondar" className="github-link">
                  YuliyaBondar
                </a>
              </p>
              <p className="h-mb20">{t('info.developers.developer_2')}</p>
              <p>
                <a href="https://github.com/PavelPoleshchuk" className="github-link">
                  PavelPoleshchuk
                </a>
              </p>
              <p className="h-mb20">{t('info.developers.developer_3')}</p>
              <p>
                <a href="https://github.com/AmidaWolf/AmidaWolf" className="github-link">
                  AmidaWolf
                </a>{' '}
                - <span className="f-green f-bold f-shadow">{t('info.developers.mentor')}</span>
              </p>
              <p>{t('info.developers.developer_4')}</p>
            </div>
            <div className="welcome-page__content_item">
              <h2>{t('info.project.title')}</h2>
              <p>{t('info.project.text')}</p>
            </div>
            <div className="welcome-page__content_item">
              <h2>{t('info.course.title')}</h2>
              <p>{t('info.course.text')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
