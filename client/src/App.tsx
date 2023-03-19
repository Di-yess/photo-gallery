import { useEffect, useRef } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import LoginPage from './pages/LoginPage';
import { layoutRoutes } from './routes/layoutRoutes';
import { imageThunk } from './store/asyncThunk/imageThunk';
import { selfUserThunk } from './store/asyncThunk/selfUserThunk';
import { useAppDispatch, useAppSelector } from './types/Apphooks';

function App() {
  const refCounter = useRef(0);
  const dispatch = useAppDispatch();
  const userId = useAppSelector((state) => state.user.id);

  useEffect(() => {
    dispatch(imageThunk(refCounter));
    dispatch(selfUserThunk());
  }, [dispatch]);

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        {userId ? (
          layoutRoutes.map((route) => route)
        ) : (
          <Route index element={<LoginPage />} />
        )}
      </Route>
      <Route path='/login' element={<LoginPage />} />
      <Route path='*' element={<div>Error</div>} />
    </Routes>
  );
}

export default App;
