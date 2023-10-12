import { useEffect } from 'react';
import { useIsAuthorized } from '../../hooks/useIsAuthorized';
import Editor from '../../components/editor/editor';
import Documentation from '../../components/documentation/documentation';
import Response from '../../components/response/response';
import Variables from '../../components/variables/variables';
import Headers from '../../components/headers/headers';

import './editor.scss';

export default function EditorPage() {
  const { user, loading, navigate } = useIsAuthorized();

  useEffect(() => {
    if (loading) return;
    if (!user) navigate('/login');
  }, [user, loading]);

  return (
    <div className="editor-page">
      <div className="wrapper">
        <Documentation />
        <Headers />
        <Variables />
        <Editor />
        <Response />
      </div>
    </div>
  );
}
