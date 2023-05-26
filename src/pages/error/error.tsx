import { useTranslation } from 'react-i18next';

import './error.scss';

export default function ErrorPage() {
  const { t } = useTranslation();

  return (
    <div className="error-page">
      <div className="wrapper">
        <h1 className="title-page h-mb20">{t('page.error.title')}</h1>
        <p>Sorry, page is not found.</p>
      </div>
    </div>
  );
}
