import React from 'react';
import { Star, MapPin } from 'lucide-react';
import { Doctor } from '../types';
import { useAppContext } from '../context/AppContext';

interface DoctorCardProps {
  doctor: Doctor;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor }) => {
  const { setCurrentView, setSelectedDoctor } = useAppContext();

  const handleViewProfile = () => {
    setSelectedDoctor(doctor);
    setCurrentView('profile');
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center mb-4">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-16 h-16 rounded-full object-cover mr-4"
        />
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900">{doctor.name}</h3>
          <p className="text-blue-600 font-medium">{doctor.specialization}</p>
          <div className="flex items-center mt-1">
            <Star className="text-yellow-400 fill-current" size={16} />
            <span className="ml-1 text-sm text-gray-600">{doctor.rating}</span>
            <span className="ml-2 text-sm text-gray-500">({doctor.experience} years exp.)</span>
          </div>
        </div>
      </div>
      
      <div className="mb-4">
        <div className="flex items-center text-sm text-gray-600 mb-1">
          <MapPin size={14} className="mr-1" />
          {doctor.location}
        </div>
        <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
          doctor.available 
            ? 'bg-green-100 text-green-800' 
            : 'bg-red-100 text-red-800'
        }`}>
          <div className={`w-2 h-2 rounded-full mr-2 ${
            doctor.available ? 'bg-green-400' : 'bg-red-400'
          }`}></div>
          {doctor.available ? 'Available Today' : 'Not Available'}
        </div>
      </div>

      <button
        onClick={handleViewProfile}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
      >
        View Profile & Book
      </button>
    </div>
  );
};

export default DoctorCard;