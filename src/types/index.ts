export interface Doctor {
  id: string;
  firstName: string;
  lastName: string;
  title: string;
  speciality: string;
  experience: number;
  education: string[];
  certifications: string[];
  languages: string[];
  bio: string;
  photo: string;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    postalCode: string;
    country: string;
  };
  consultationHours: {
    day: string;
    hours: string;
  }[];
}

export interface Service {
  id: string;
  name: string;
  description: string;
  duration: number; // en minutes
  price: number;
  icon: string;
}

export interface Testimonial {
  id: string;
  patientName: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
}

export interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}
