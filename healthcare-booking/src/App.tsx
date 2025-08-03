import React from 'react';
import { AppProvider, useAppContext } from './context/AppContext';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import DoctorProfile from './components/DoctorProfile';
import BookingForm from './components/BookingForm';
import ConfirmationPage from './components/ConfirmationPage';

const AppContent = () => {
  const { currentView } = useAppContext();

  const renderCurrentView = () => {
    switch (currentView) {
      case 'landing':
        return <LandingPage />;
      case 'profile':
        return <DoctorProfile />;
      case 'booking':
        return <BookingForm />;
      case 'confirmation':
        return <ConfirmationPage />;
      default:
        return <LandingPage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {renderCurrentView()}
    </div>
  );
};

const App = () => {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
};

export default App;
