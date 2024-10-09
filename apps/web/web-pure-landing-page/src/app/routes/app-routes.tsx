import { HomeContainer } from '@pure-lading-pages/feature';
import { Navigate, Route, Routes } from 'react-router-dom';

export const AppRouters = () => {
  return (
    <Routes>
      <Route path="/home11" element={<HomeContainer />} />

      <Route path="*" element={<Navigate to="/home11" />} />
    </Routes>
  );
  //
};
