import App from './pages/app/app';
import { RouterProvider } from 'react-router-dom';
import { router } from './utils/router';

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}

const Main = () => {
    return (
      <div>
        <RouterProvider router={router} fallbackElement={<App />} />
      </div>
    );
};

export default Main;