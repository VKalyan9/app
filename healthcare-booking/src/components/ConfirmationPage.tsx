import React from 'react';
import { Check } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const ConfirmationPage = () => {
  const { selectedDoctor, appointments, setCurrentView, setSelectedDoctor } = useAppContext();
  
  if (!selectedDoctor) return null;
  
  const latestAppointment = appointments[appointments.length - 1];

  const handleBackToHome = () => {
    setCurrentView('landing');
    setSelectedDoctor(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
            <Check className="text-green-600" size={32} />
          </div>
          
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Appointment Confirmed!</h1>
          <p className="text-gray-600 mb-8">Your appointment has been successfully booked.</p>

          <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left">
            <h3 className="font-semibold text-gray-900 mb-4">Appointment Details</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Doctor:</span>
                <span className="font-medium">{selectedDoctor.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Specialization:</span>
                <span className="font-medium">{selectedDoctor.specialization}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Patient:</span>
                <span className="font-medium">{latestAppointment?.patientName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Date:</span>
                <span className="font-medium">{latestAppointment?.date}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Time:</span>
                <span className="font-medium">{latestAppointment?.time}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Location:</span>
                <span className="font-medium">{selectedDoctor.location}</span>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-4 mb-6">
            <p className="text-blue-800 text-sm">
              <strong>Important:</strong> Please arrive 15 minutes before your scheduled appointment time. 
              A confirmation email has been sent to {latestAppointment?.patientEmail}.
            </p>
          </div>

          <button
            onClick={handleBackToHome}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Book Another Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;