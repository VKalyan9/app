import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const Header = () => {
  const { currentView, setCurrentView, setSelectedDoctor } = useAppContext();
  
  const handleBackToHome = () => {
    setCurrentView('landing');
    setSelectedDoctor(null);
  };

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            {currentView !== 'landing' && (
              <button
                onClick={handleBackToHome}
                className="mr-4 p-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <ArrowLeft size={20} />
              </button>
            )}
            <h1 className="text-xl font-bold text-blue-600">HealthCare</h1>
          </div>
          <div className="text-sm text-gray-600">
            Book Your Appointment Today
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;