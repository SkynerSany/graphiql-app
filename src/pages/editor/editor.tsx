import './editor.scss';
// import lang from './editor.lang.json';
import { useEffect } from 'react';
import { useIsAuthorized } from '../../hooks/useIsAuthorized';
import Editor from '../../components/editor/editor';
import Documentation from '../../components/documentation/documentation';
import Response from '../../components/response/response';

export default function EditorPage() {
  const { user, loading, navigate } = useIsAuthorized();
  // const text = lang.en;

  useEffect(() => {
    if (loading) {
      <h3>Loading...</h3>;
    }
    if (!user) navigate('/login');
  }, [user, loading]);

  return (
    <article className="editor-page">
      <div className="wrapper">
        <Documentation />
        <Editor />
        <Response />
      </div>
    </article>
  );
}
