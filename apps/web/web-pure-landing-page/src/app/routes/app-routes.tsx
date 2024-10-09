import { HomeContainer } from '@pure-lading-pages/feature';
import { Navigate, Route, Routes } from 'react-router-dom';

export const AppRouters = () => {
  return (
    <Routes>
      <Route path="/home2" element={<HomeContainer />} />

      <Route path="*" element={<Navigate to="/home2" />} />
    </Routes>
  );
};
