import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function useGoBack() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [currentPath, setCurrentPath] = useState(pathname);

  const goBack = () => {
    window.history.back();
  };

  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

  useEffect(() => {
    const handlePopstate = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopstate);

    return () => {
      window.removeEventListener('popstate', handlePopstate);
    };
  }, []);

  useEffect(() => {
    if (currentPath === pathname) {
      goBack();
    }
  }, [currentPath, pathname]);

  return goBack;
}

export default useGoBack;
