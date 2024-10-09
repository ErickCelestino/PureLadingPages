import { HomeContainer } from '@pure-lading-pages/feature';
import { Navigate, Route, Routes } from 'react-router-dom';

export const AppRouters = () => {
  return (
    <Routes>
      <Route path="/home12" element={<HomeContainer />} />

      <Route path="*" element={<Navigate to="/home12" />} />
    </Routes>
  );
  //
};
