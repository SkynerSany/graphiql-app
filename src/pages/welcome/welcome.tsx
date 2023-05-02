import './welcome.scss';
import lang from './welcome.lang.json';

export default function Welcome() {
  const text = lang.en;

  return (
    <article className="welcome-page">
      <div className="wrapper">
        <h1 className="title-page">{text.title}</h1>
      </div>
    </article>
  );
}
