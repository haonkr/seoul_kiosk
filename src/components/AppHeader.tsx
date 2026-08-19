import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Settings, ArrowLeft } from 'lucide-react';

export default function AppHeader() {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header className="sticky top-0 z-50 bg-white border-b-2 border-gray-200 p-4 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-2">
        {!isHome && (
          <button 
            onClick={() => navigate(-1)}
            className="p-2 -ml-2 rounded-lg bg-gray-100 hover:bg-gray-200 active:bg-gray-300 text-gray-800"
            aria-label="이전 화면으로 돌아가기"
          >
            <ArrowLeft className="w-8 h-8" />
          </button>
        )}
        <button 
          onClick={() => navigate('/')} 
          className="p-2 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 active:bg-blue-200"
          aria-label="처음 화면으로"
        >
          <Home className="w-7 h-7" />
        </button>
      </div>
      <h1 className="font-bold text-xl tracking-tight truncate px-2">무인발급기 가이드</h1>
      <button 
        onClick={() => navigate('/settings')}
        className="p-2 rounded-lg bg-gray-50 text-gray-700 hover:bg-gray-100 active:bg-gray-200"
        aria-label="설정"
      >
        <Settings className="w-7 h-7" />
      </button>
    </header>
  );
}
