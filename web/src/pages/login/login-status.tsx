import { getAuth, getRedirectResult } from 'firebase/auth';

import { app } from '../../firebase';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginStatus = () => {
  const auth = getAuth(app);
  const navigate = useNavigate();
  useEffect(() => {
    // Check if the user was redirected from a login page
    const res = getRedirectResult(auth);
    res
      .then((result) => {
        if (result && result.user) {
        }
      })
      .catch((error) => {
        // Handle any errors
        navigate('/login-error');
        console.log(error);
      });
  }, []);
  return <div>LOGIN SUCCESS</div>;
};

export default LoginStatus;
