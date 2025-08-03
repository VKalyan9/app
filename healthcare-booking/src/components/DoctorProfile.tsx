import React from 'react';
import { Star, MapPin, Phone, Mail } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const DoctorProfile = () => {
  const { selectedDoctor, setCurrentView } = useAppContext();

  if (!selectedDoctor) return null;

  const handleBookAppointment = () => {
    setCurrentView('booking');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center mb-6">
              <img
                src={selectedDoctor.image}
                alt={selectedDoctor.name}
                className="w-32 h-32 rounded-full object-cover mb-4 md:mb-0 md:mr-8"
              />
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{selectedDoctor.name}</h1>
                <p className="text-xl text-blue-600 font-semibold mb-2">{selectedDoctor.specialization}</p>
                <div className="flex items-center mb-4">
                  <Star className="text-yellow-400 fill-current" size={20} />
                  <span className="ml-2 text-lg text-gray-700">{selectedDoctor.rating}</span>
                  <span className="ml-4 text-gray-600">{selectedDoctor.experience} years experience</span>
                </div>
                <div className={`inline-flex items-center px-3 py-2 rounded-full text-sm font-medium ${
                  selectedDoctor.available 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  <div className={`w-3 h-3 rounded-full mr-2 ${
                    selectedDoctor.available ? 'bg-green-400' : 'bg-red-400'
                  }`}></div>
                  {selectedDoctor.available ? 'Available Today' : 'Not Available'}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <MapPin className="text-gray-400 mr-3" size={18} />
                    <span className="text-gray-700">{selectedDoctor.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="text-gray-400 mr-3" size={18} />
                    <span className="text-gray-700">{selectedDoctor.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="text-gray-400 mr-3" size={18} />
                    <span className="text-gray-700">{selectedDoctor.email}</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Available Time Slots</h3>
                {selectedDoctor.available ? (
                  <div className="grid grid-cols-2 gap-2">
                    {selectedDoctor.availableSlots.map((slot, index) => (
                      <div key={index} className="bg-blue-50 text-blue-700 px-3 py-2 rounded-lg text-center text-sm font-medium">
                        {slot}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500">No available slots today</p>
                )}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">About</h3>
              <p className="text-gray-700 leading-relaxed">{selectedDoctor.bio}</p>
            </div>

            <div className="flex justify-center">
              <button
                onClick={handleBookAppointment}
                disabled={!selectedDoctor.available}
                className={`px-8 py-3 rounded-lg font-semibold text-lg ${
                  selectedDoctor.available
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                } transition-colors`}
              >
                {selectedDoctor.available ? 'Book Appointment' : 'Currently Unavailable'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;