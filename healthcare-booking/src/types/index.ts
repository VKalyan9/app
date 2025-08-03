export interface Doctor {
  id: number;
  name: string;
  specialization: string;
  image: string;
  rating: number;
  experience: number;
  location: string;
  phone: string;
  email: string;
  available: boolean;
  availableSlots: string[];
  bio: string;
}

export interface Appointment {
  id: number;
  doctorId: number;
  patientName: string;
  patientEmail: string;
  date: string;
  time: string;
  status: string;
}

export interface AppContextType {
  doctors: Doctor[];
  appointments: Appointment[];
  currentView: 'landing' | 'profile' | 'booking' | 'confirmation';
  selectedDoctor: Doctor | null;
  searchTerm: string;
  setCurrentView: (view: 'landing' | 'profile' | 'booking' | 'confirmation') => void;
  setSelectedDoctor: (doctor: Doctor | null) => void;
  setSearchTerm: (term: string) => void;
  addAppointment: (appointment: Omit<Appointment, 'id'>) => void;
}