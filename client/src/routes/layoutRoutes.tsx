import { Route } from 'react-router-dom';
import Main from '../components/Main/Main';
import Map from '../components/Map/Map';

export const layoutRoutes = [
  <Route key="main" index element={<Main />} />,
  <Route key="account" path="account" element={<div>Account</div>} />,
  <Route key="map" path="map" element={<Map />} />,
];
