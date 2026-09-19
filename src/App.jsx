import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// Components
import { Footer, Navigation, NotificationPanel} from './components';
// Pages
import { HomePage, ImageUploadPage, ImageFormatConvertPage, ErrorPage, UnderConstructionPage} from './pages';
import { useColorSchemeStore } from './zustand/store';

export default function App() {

  const colorScheme = useColorSchemeStore(state => state.colorScheme);

  // Update localStorage whenever colorScheme changes
  useEffect(() => {
    localStorage.setItem('imageerColorScheme', colorScheme);
    document.documentElement.style.colorScheme = colorScheme;

    if (colorScheme === 'dark') {
      document.documentElement.classList.add('dark');
      return;
    }

    document.documentElement.classList.remove('dark');
  }, [colorScheme]);
  return (
    <BrowserRouter>
      <div id='top'></div>
      <main className="relative flex min-h-screen flex-col" >
        <Navigation />
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/upload-image" element={<ImageUploadPage />} />
        <Route path="/convert-image" element={<ImageFormatConvertPage />} />
        <Route path="/under-construction" element={<UnderConstructionPage />} />
          <Route path="/oops" element={<ErrorPage />} />
        </Routes>
        <NotificationPanel />

        <Footer />
      </main>
    </BrowserRouter>
  );
}
