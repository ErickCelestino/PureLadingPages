import { HomeContainer } from '@pure-lading-pages/feature';
import { Navigate, Route, Routes } from 'react-router-dom';

export const AppRouters = () => {
  return (
    <Routes>
      <Route path="/inicio1" element={<HomeContainer />} />

      <Route path="*" element={<Navigate to="/inicio1" />} />
    </Routes>
  );
};
