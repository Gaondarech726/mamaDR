import { Route, Routes } from 'react-router-dom';
import BirthdayPage from './BirthdayPage.jsx';
import Slider from '../components/Slider/Slider.jsx';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<BirthdayPage />} />
    </Routes>
  );
};
