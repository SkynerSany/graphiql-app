import './editor.scss';
import lang from './editor.lang.json';
// import { auth } from '../../authentication/firebase';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useIsAuthorized } from '../../hooks/useIsAuthorized';

export default function Editor() {
  const { user, loading, error, navigate } = useIsAuthorized();
  const text = lang.en;
  // const [user, loading, error] = useAuthState(auth);
  // const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      <h3>Loading...</h3>;
    }
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
