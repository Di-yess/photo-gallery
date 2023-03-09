import { Route } from 'react-router-dom';
import Account from 'src/components/Account/Account';
import Main from '../components/Main/Main';

export const layoutRoutes = [
  <Route key='main' index element={<Main />} />,
  <Route key='account' path='account' element={<Account />} />,
];
