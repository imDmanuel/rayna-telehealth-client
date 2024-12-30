export interface ApiRequestError<T = "generic-error"> {
  reason: T;
  message: string;
}

export interface ApiRequestResponse<T extends object, M = {}> {
  data: T;
  message: string;
  meta: M;
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
  dateOfBirth: string;
  hmoId: string;
  hmoPlan: string;
  bloodPressure?: string;
  cholesterolLevels?: string;
  glucoseLevels?: string;
  isActive: true;
  expiresOn: string;
}

export interface Consultation {
  date: string;
  sn: number;
  id: string;
  userId: string;
  startTime: string;
  endTime: string;
  location: string;
  topic: string;
  doctorId: string;
  ongoing: boolean;
  createdAt: string;
  updatedAt: string;
  doctor?: Doctor;
  conversations?: Conversation[];
}

type SentBy = "PATIENT" | "DOCTOR";
export interface Conversation {
  date: string;
  sn: number;
  id: string;
  sentBy: SentBy;
  message: string;
  createdAt: string;
  updatedAt: string;
  consultationId: string;
}

export interface Appointment {
  date: string;
  sn: number;
  id: string;
  userId: string;
  startTime: string;
  endTime: string;
  location: string;
  doctorId?: string;
  doctor?: Doctor;
  hospitalId?: string;
  hospital?: Hospital;
  createdAt: string;
  updatedAt: string;
  cancelled: boolean;
}

export interface Doctor {
  sn: number;
  id: string;
  firstName: string;
  lastName: string;
  specialty: string;
  isVerified: boolean;
  profilePic: string;
}

export interface Hospital {
  sn: number;
  id: string;
  name: string;
  address: string;
  phone: string;
  ratings: number;
  createdAt: string;
  updatedAt: string;
}
