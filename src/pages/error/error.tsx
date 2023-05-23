import { useTranslation } from 'react-i18next';

import './error.scss';

export default function ErrorPage() {
  const { t } = useTranslation();

  return (
    <article className="error-page">
      <div className="wrapper">
        <h1 className="title-page">{t('page.error.title')}</h1>
      </div>
    </article>
  );
}
