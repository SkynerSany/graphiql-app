import './editor.scss';
import lang from './editor.lang.json';
import { useEffect } from 'react';
import { useIsAuthorized } from '../../hooks/useIsAuthorized';

export default function Editor() {
  const { user, loading, navigate } = useIsAuthorized();
  const text = lang.en;

  useEffect(() => {
    if (loading) return;
    if (!user) navigate('/login');
  }, [user, loading]);

  return (
    <article className="editor-page">
      <div className="wrapper">
        <h1 className="title-page">{text.title}</h1>
      </div>
    </article>
  );
}
