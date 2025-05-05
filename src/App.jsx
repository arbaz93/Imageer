import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// Components
import { Navigation, NotificationPanel} from './components';
// Pages
import { HomePage, ImageUploadPage, ImageFormatConvertPage, ErrorPage} from './pages';

export default function App() {
  // Read initial color scheme from localStorage or use 'light' as fallback
  const initialColorScheme = localStorage.getItem('imageerColorScheme') || 'light';
  const [colorScheme, setColorScheme] = useState(initialColorScheme);


  // Update localStorage whenever colorScheme changes
  useEffect(() => {
    localStorage.setItem('imageerColorScheme', colorScheme);

    (colorScheme === 'dark') ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark');
  }, [colorScheme]);


  return (
    <BrowserRouter>
      <main className="relative min-h-svh" >
        <Navigation colorScheme={colorScheme} setColorScheme={setColorScheme} />
        <Routes>
        <Route path="/" element={<ImageFormatConvertPage />} />
        <Route path="/upload-image" element={<ImageUploadPage />} />
        <Route path="/convert-image" element={<ImageFormatConvertPage />} />
          <Route path="/oops" element={<ErrorPage />} />
        </Routes>
        <NotificationPanel colorScheme={colorScheme} />


      </main>
    </BrowserRouter>
  );
}
