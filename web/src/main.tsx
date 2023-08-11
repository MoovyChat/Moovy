import App from './pages/app/app';
import { RouterProvider } from 'react-router-dom';
import { router } from './utils/router';
import { Suspense } from 'react';
import LogoLoading from './pages/logo-loading/logoLoading';

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}

const Main = () => {
  return (
    <Suspense fallback={<LogoLoading />}>
      <RouterProvider router={router} fallbackElement={<App />} />
    </Suspense>
  );
};

export default Main;
