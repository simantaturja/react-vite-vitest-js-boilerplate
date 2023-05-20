import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../pages/error-page';
import HomePage from '../pages/home-page';

export default createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
]);
