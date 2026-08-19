import { useNavigate } from 'react-router-dom';
import { districts } from '../data/districts';

export default function DistrictSelectionPage() {
  const navigate = useNavigate();

  return (
    <div className="p-6 pb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 break-keep">
        이용할 구청을 선택해 주세요
      </h2>

      <div className="grid grid-cols-2 gap-4">
        {districts.map(district => (
          <button
            key={district.id}
            onClick={() => {
              if (district.enabled) navigate(`/district/${district.id}`);
            }}
            disabled={!district.enabled}
            className={`relative flex flex-col items-center justify-center p-6 rounded-2xl border-2 transition-colors ${
              district.enabled
                ? 'bg-blue-50 border-blue-500 text-blue-900 hover:bg-blue-100 active:bg-blue-200 shadow-sm'
                : 'bg-gray-50 border-gray-200 text-gray-500 opacity-80 cursor-not-allowed'
            }`}
            aria-label={`${district.name} ${district.statusLabel}`}
          >
            <span className="text-2xl font-bold mb-3">{district.name}</span>
            <span className={`px-3 py-1 text-sm font-bold rounded-full ${
              district.enabled 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-300 text-gray-700'
            }`}>
              {district.statusLabel}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
