import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// Components
import { Navigation } from './components';
// Pages
import { ImageUploadPage } from './pages';
import ErrorPage from './pages/ErrorPage';

export default function App() {
  // Read initial color scheme from localStorage or use 'light' as fallback
  const initialColorScheme = localStorage.getItem('imageerColorScheme') || 'light';
  const [colorScheme, setColorScheme] = useState('light');

  // Update localStorage whenever colorScheme changes
  useEffect(() => {
    localStorage.setItem('imageerColorScheme', colorScheme);
  }, [colorScheme]);

  return (
    <main className="relative" >
      <Navigation colorScheme={colorScheme} setColorScheme={setColorScheme} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ImageUploadPage />} />
          <Route path="/oops" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}
