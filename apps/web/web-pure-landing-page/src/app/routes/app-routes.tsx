import { HomeContainer } from '@pure-lading-pages/feature';
import { Navigate, Route, Routes } from 'react-router-dom';

export const AppRouters = () => {
  return (
    <Routes>
      <Route path="/home0" element={<HomeContainer />} />

      <Route path="*" element={<Navigate to="/home0" />} />
    </Routes>
  );
  //
};
