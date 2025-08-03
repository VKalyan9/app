import { Doctor } from '../types';

export const mockDoctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialization: "Cardiologist",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
    rating: 4.8,
    experience: 12,
    location: "New York Medical Center",
    phone: "+1 (555) 123-4567",
    email: "sarah.johnson@healthcenter.com",
    available: true,
    availableSlots: ["09:00", "10:30", "14:00", "15:30", "16:00"],
    bio: "Dr. Sarah Johnson is a board-certified cardiologist with over 12 years of experience in treating heart conditions and cardiovascular diseases."
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialization: "Dermatologist",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
    rating: 4.9,
    experience: 8,
    location: "Skin Health Clinic",
    phone: "+1 (555) 234-5678",
    email: "michael.chen@skinclinic.com",
    available: true,
    availableSlots: ["08:30", "11:00", "13:30", "15:00"],
    bio: "Dr. Michael Chen specializes in medical and cosmetic dermatology, helping patients achieve healthy skin with the latest treatments."
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialization: "Pediatrician",
    image: "https://images.unsplash.com/photo-1594824863531-8ae75fbc0e30?w=400&h=400&fit=crop&crop=face",
    rating: 4.7,
    experience: 15,
    location: "Children's Health Center",
    phone: "+1 (555) 345-6789",
    email: "emily.rodriguez@childhealth.com",
    available: false,
    availableSlots: [],
    bio: "Dr. Emily Rodriguez is a compassionate pediatrician dedicated to providing comprehensive healthcare for children from infancy through adolescence."
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    specialization: "Orthopedic Surgeon",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face",
    rating: 4.6,
    experience: 20,
    location: "Bone & Joint Institute",
    phone: "+1 (555) 456-7890",
    email: "james.wilson@boneinstitute.com",
    available: true,
    availableSlots: ["09:30", "11:30", "14:30", "16:30"],
    bio: "Dr. James Wilson is an experienced orthopedic surgeon specializing in joint replacement and sports medicine with over 20 years of practice."
  }
];