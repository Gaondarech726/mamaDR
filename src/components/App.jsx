import { Route, Routes } from 'react-router-dom';
import BirthdayPage from './BirthdayPage.jsx';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<BirthdayPage />} />
    </Routes>
  );
};
