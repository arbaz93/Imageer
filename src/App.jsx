import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// Components
import { Footer, Navigation, NotificationPanel} from './components';
// Pages
import { HomePage, ImageUploadPage, ImageFormatConvertPage, ErrorPage} from './pages';
import { useColorSchemeStore } from './zustand/store';

export default function App() {

  const colorScheme = useColorSchemeStore(state => state.colorScheme);

  // Update localStorage whenever colorScheme changes
  useEffect(() => {
    localStorage.setItem('imageerColorScheme', colorScheme);

    (colorScheme === 'dark') ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark');
  }, [colorScheme]);
  useEffect(() => {
    const localStorageClr = localStorage.getItem('imageerColorScheme')
    if(localStorageClr === '' || !localStorageClr) {
      localStorage.setItem('imageerColorScheme', colorScheme);
    } 
  }, []);


  return (
    <BrowserRouter>
      <div id='top'></div>
      <main className="relative" >
        <Navigation />
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/upload-image" element={<ImageUploadPage />} />
        <Route path="/convert-image" element={<ImageFormatConvertPage />} />
          <Route path="/oops" element={<ErrorPage />} />
        </Routes>
        <NotificationPanel />

        <Footer />
      </main>
    </BrowserRouter>
  );
}
