import './login.scss';
import lang from './login.lang.json';

export default function Login() {
  const text = lang.en;

  return (
    <article className="login-page">
      <div className="wrapper">
        <h1 className="title-page">{text.title}</h1>
      </div>
    </article>
  );
}
