export interface ApiRequestError<T = "generic-error"> {
  reason: T;
  message: string;
}

export interface ApiRequestResponse<T extends object> {
  data: T;
  message: string;
}

export interface User {
  sn: number;
  id: string;
  firstName: string;
  lastName: string;
  profileImage: string;
  age: number;
  weight: string;
  height: string;
  dateOfBirth: Date;
  hmoId: string;
  bloodPressure: string;
  cholesterolLevels: string;
  glucoseLevels: string;
}

export interface Consultation {
  date: Date;
  sn: number;
  id: string;
  userId: string;
  startTime: string;
  endTime: string;
  location: string;
  doctorId: string;
  ongoing: boolean;
  createdAt: Date;
  updatedAt: Date;
  doctor: Doctor;
}

export interface Doctor {
  sn: number;
  id: string;
  firstName: string;
  lastName: string;
  fullName: string;
  specialty: string;
  isVerified: boolean;
  profilePic: string;
}
