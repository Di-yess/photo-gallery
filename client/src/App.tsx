import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import { layoutRoutes } from './routes/layoutRoutes';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {layoutRoutes.map((route) => route)}
      </Route>
      <Route path="*" element={<div>Error</div>} />
    </Routes>
  );
}

export default App;
