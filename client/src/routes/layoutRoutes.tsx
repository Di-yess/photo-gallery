import { Route } from 'react-router-dom';
import Main from '../components/Main/Main';

export const layoutRoutes = [
  <Route key="main" index element={<Main />} />,
  <Route key="account" path="account" element={<div>Account</div>} />,
  // <Route key="login" path="login" element={<LoginPage />} />,
];
