import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Doctor, Appointment, AppContextType } from '../types';
import { mockDoctors } from '../data/mockData';

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [doctors] = useState<Doctor[]>(mockDoctors);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [currentView, setCurrentView] = useState<'landing' | 'profile' | 'booking' | 'confirmation'>('landing');
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const addAppointment = (appointment: Omit<Appointment, 'id'>) => {
    const newAppointment = {
      ...appointment,
      id: Date.now(),
      status: 'scheduled'
    };
    setAppointments(prev => [...prev, newAppointment]);
  };

  return (
    <AppContext.Provider value={{
      doctors,
      appointments,
      currentView,
      selectedDoctor,
      searchTerm,
      setCurrentView,
      setSelectedDoctor,
      setSearchTerm,
      addAppointment
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};