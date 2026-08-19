import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AccessibilityProvider } from './contexts/AccessibilityContext';
import HomePage from './pages/HomePage';
import DistrictSelectionPage from './pages/DistrictSelectionPage';
import NowonPage from './pages/NowonPage';
import ModeSelectionPage from './pages/ModeSelectionPage';
import PreparationPage from './pages/PreparationPage';
import GuidePage from './pages/GuidePage';
import ImageZoomPage from './pages/ImageZoomPage';
import PracticePage from './pages/PracticePage';
import FingerprintHelpPage from './pages/FingerprintHelpPage';
import CompletionPage from './pages/CompletionPage';
import SettingsPage from './pages/SettingsPage';
import AboutPage from './pages/AboutPage';
import AppHeader from './components/AppHeader';

function AppContent() {
  return (
    <div className="min-h-screen max-w-md mx-auto bg-white shadow-xl relative overflow-x-hidden flex flex-col">
      <AppHeader />
      <main className="flex-1 overflow-y-auto w-full">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/districts" element={<DistrictSelectionPage />} />
          <Route path="/district/nowon" element={<NowonPage />} />
          <Route path="/district/nowon/family-certificate/mode" element={<ModeSelectionPage />} />
          <Route path="/district/nowon/family-certificate/preparation" element={<PreparationPage />} />
          <Route path="/district/nowon/family-certificate/guide/:stepId" element={<GuidePage />} />
          <Route path="/district/nowon/family-certificate/zoom/:stepId" element={<ImageZoomPage />} />
          <Route path="/district/nowon/family-certificate/practice/:stepId" element={<PracticePage />} />
          <Route path="/district/nowon/family-certificate/fingerprint-help" element={<FingerprintHelpPage />} />
          <Route path="/district/nowon/family-certificate/completion" element={<CompletionPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <AccessibilityProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </AccessibilityProvider>
  );
}
