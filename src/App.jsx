import { Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPageSection from './pages/Landing-Page';
import AdminPage from './pages/AdminPage';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<LandingPageSection />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </>
  );
}

export default App;
