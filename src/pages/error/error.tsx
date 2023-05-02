import './error.scss';
import lang from './error.lang.json';

export default function ErrorPage() {
  const text = lang.en;

  return (
    <article className="error-page">
      <div className="wrapper">
        <h1 className="title-page">{text.title}</h1>
      </div>
    </article>
  );
}
