import './editor.scss';
import lang from './editor.lang.json';
import { useEffect } from 'react';
import { useIsAuthorized } from '../../hooks/useIsAuthorized';
import Editor from '../../components/editor/editor';
import Documentation from '../../components/documentation/documentation';
import Response from '../../components/response/response';
import Variables from '../../components/variables/variables';
import Headers from '../../components/headers/headers';

export default function EditorPage() {
  const { user, loading, navigate } = useIsAuthorized();
  const text = lang.ru;
  // const isOpenErrorModal = useSelector((state: RootState) => state.store.errorModal);

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
      {/* {isOpenErrorModal && <ModalAlert text={text.wrongData} delay={2000} />} */}
    </div>
  );
}
