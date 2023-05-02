import './editor.scss';
import lang from './editor.lang.json';

export default function Editor() {
  const text = lang.en;

  return (
    <article className="editor-page">
      <div className="wrapper">
        <h1 className="title-page">{text.title}</h1>
      </div>
    </article>
  );
}
