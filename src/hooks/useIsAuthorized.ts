import { auth } from '../authentication/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

export const useIsAuthorized = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  return { user, loading, error, navigate };
};
