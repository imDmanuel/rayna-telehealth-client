import DemoProfilePic from "@/images/demo-profile-pic.jpg";

export const patientVitals = {
  bloodPressure: {
    title: "Blood pressure",
    value: "118/75",
    unit: "mm/hg",
    icon: "thermometer",
    change: "+5%",
    status: "Healthy",
  },
  cholesterolLevel: {
    title: "Cholesterol levels",
    value: "164",
    unit: "mg/dl",
    icon: "heart",
    change: "+5%",
    status: "Healthy",
  },
  glucoseLevel: {
    title: "Glucose levels",
    value: "5.5",
    unit: "mmol/L",
    icon: "sun",
    change: "+5%",
    status: "Healthy",
  },
};

export const userProfile = {
  name: "David Fayemi",
  hmoId: "RET/15118/A",
  age: "26",
  dateOfBirth: "15-05-1994",
  height: "6'7\"",
  weight: "80",
  hmoPlan: "Red Beryl",
  expirationDate: "24-07-2024",
  status: "active",
  profileImage: DemoProfilePic.src,
};

export const upcomingConsultation = {
  date: "Friday, 6 July",
  time: {
    start: "11:30",
    end: "12:00",
    duration: "30 min",
  },
  location: {
    name: "Cottage Medicare Hospital",
    address: "18 Iwaya Rd, Yaba 101245, Lagos",
  },
  doctor: {
    name: "Dr. Alison Ogaga",
    specialty: "General Practitioner",
    verified: true,
  },
};

export const recentConsultations = [
  {
    id: 1,
    doctor: {
      name: "Dr. Alison Ogaga",
      specialty: "General Practitioner",
      online: true,
      profileImage: DemoProfilePic.src,
    },
    action: "Send a message",
  },
  {
    id: 2,
    doctor: {
      name: "Dr. Jennifer Johnson",
      specialty: "Primary Care Physician",
      online: true,
      profileImage: DemoProfilePic.src,
    },
    action: "Send a message",
  },
  {
    id: 3,
    doctor: {
      name: "Dr. Anish Patel",
      specialty: "General Practitioner",
      online: true,
      profileImage: DemoProfilePic.src,
    },
    action: "Send a message",
  },
  {
    id: 4,
    doctor: {
      name: "Dr. Samuel Smith",
      specialty: "Mental Health Professional",
      online: false,
      profileImage: DemoProfilePic.src,
    },
    action: "Send a message",
  },
  {
    id: 5,
    doctor: {
      name: "Dr. Lily Chen",
      specialty: "Dermatologist",
      online: true,
      profileImage: DemoProfilePic.src,
    },
    action: "Send a message",
  },
];

export const consultations = [
  {
    id: 1,
    doctor: {
      name: "Dr. Alison Ogaga",
      specialty: "General Practitioner",
      profileImage: DemoProfilePic,
    },
    conversation: {
      topic: "I'm feeling uneasy",
      response:
        "Good morning. I'm sorry to hear that you're not feeling well. Can you tell me more a…",
    },
    dateTime: {
      date: "1 Jul, 2023",
      time: "1:00 PM",
    },
  },
  {
    id: 2,
    doctor: {
      name: "Dr. Jennifer Johnson",
      specialty: "Primary Care Physician",
      profileImage: DemoProfilePic,
    },
    conversation: {
      topic: "I have a rash",
      response:
        "Let's run some tests to understand better what might be causing these symptoms.",
    },
    dateTime: {
      date: "1 Jul, 2023",
      time: "10:00 AM",
    },
  },
  {
    id: 3,
    doctor: {
      name: "Dr. Samuel Smith",
      specialty: "Mental Health Professional",
      profileImage: DemoProfilePic,
    },
    conversation: {
      topic: "I'm suffering from anxiety",
      response:
        "Good afternoon. It's important that we address this. Anxiety can significantly impac…",
    },
    dateTime: {
      date: "1 Jul, 2023",
      time: "4:00 PM",
    },
  },
  {
    id: 4,
    doctor: {
      name: "Dr. Lily Chen",
      specialty: "Dermatologist",
      profileImage: DemoProfilePic,
    },
    conversation: {
      topic: "I have a rash",
      response:
        "Hello, let's take a look at that rash. I'll also ask you some questions about your sym…",
    },
    dateTime: {
      date: "30 Jun, 2023",
      time: "8:00 AM",
    },
  },
];

export const appointments = [
  {
    id: 1,
    doctor: {
      name: "Dr. Alison Ogaga",
      specialty: "General Practitioner",
      profileImage: DemoProfilePic,
    },
    hospital: {
      name: "Cottage Medicare Hospital",
      address: "18 Iwaya Rd, Yaba 101245, Lagos",
    },
    dateTime: {
      date: "6 Jul, 2023",
      time: "1:00 PM",
    },
  },
  {
    id: 2,
    doctor: {
      name: "Dr. Jennifer Johnson",
      specialty: "Primary Care Physician",
      profileImage: DemoProfilePic,
    },
    hospital: {
      name: "Blue Cross Hospital",
      address: "48, Ijaiye road, Ogba",
    },
    dateTime: {
      date: "7 Jul, 2023",
      time: "10:00 AM",
    },
  },
  {
    id: 3,
    doctor: {
      name: "Dr. Samuel Smith",
      specialty: "Mental Health Professional",
      profileImage: DemoProfilePic,
    },
    hospital: {
      name: "First City Hospital",
      address: "1B, Williams Street, Off Diya Street",
    },
    dateTime: {
      date: "7 Jul, 2023",
      time: "4:00 PM",
    },
  },
  {
    id: 4,
    doctor: {
      name: "Dr. Lily Chen",
      specialty: "Dermatologist",
      profileImage: DemoProfilePic,
    },
    hospital: {
      name: "First Dominican Hospital",
      address: "27, Aljahi Masha Road, By Masha Roundabout",
    },
    dateTime: {
      date: "11 Jul, 2023",
      time: "8:00 AM",
    },
  },
  {
    id: 5,
    doctor: {
      name: "Dr. Samuel Smith",
      specialty: "General Practitioner",
      profileImage: DemoProfilePic,
    },
    hospital: {
      name: "First City Hospital",
      address: "1B, Williams Street, Off Diya Street",
    },
    dateTime: {
      date: "11 Jul, 2023",
      time: "12:00 PM",
    },
  },
  {
    id: 6,
    doctor: {
      name: "Dr. Alison Ogaga",
      specialty: "General Practitioner",
      profileImage: DemoProfilePic,
    },
    hospital: {
      name: "Cottage Medicare Hospital",
      address: "18 Iwaya Rd, Yaba 101245, Lagos",
    },
    dateTime: {
      date: "20 Jul, 2023",
      time: "11:00 AM",
    },
  },
  {
    id: 7,
    doctor: {
      name: "Dr. Jennifer Johnson",
      specialty: "Primary Care Physician",
      profileImage: DemoProfilePic,
    },
    hospital: {
      name: "Blue Cross Hospital",
      address: "18 Iwaya Rd, Yaba 101245, Lagos",
    },
    dateTime: {
      date: "25 Jul, 2023",
      time: "11:00 AM",
    },
  },
  {
    id: 8,
    doctor: {
      name: "Dr. Alison Ogaga",
      specialty: "General Practitioner",
      profileImage: DemoProfilePic,
    },
    hospital: {
      name: "Cottage Medicare Hospital",
      address: "18 Iwaya Rd, Yaba 101245, Lagos",
    },
    dateTime: {
      date: "26 Jul, 2023",
      time: "12:00 PM",
    },
  },
  {
    id: 9,
    doctor: {
      name: "Dr. Lily Chen",
      specialty: "Dermatologist",
      profileImage: DemoProfilePic,
    },
    hospital: {
      name: "First Dominican Hospital",
      address: "27, Aljahi Masha Road, By Masha Roundabout",
    },
    dateTime: {
      date: "27 Jul, 2023",
      time: "8:00 AM",
    },
  },
];

export const hospitals = [
  {
    id: 1,
    name: "Afrimed Specialist Hospital",
    address: "17, Bamidele Street, Osapa London, Lekki, Ib...",
    phone: "0814 609 2019",
    rating: 5,
  },
  {
    id: 2,
    name: "Aniyun Hospital Ltd",
    address: "3, Femi Aderibigbe Close, Ifako, Gbagada, La...",
    phone: "0814 609 2019",
    rating: 5,
  },
  {
    id: 3,
    name: "Araba Medical Centre",
    address: "122, Ekoro-Agbelekale Road, Big Joy B/stop,...",
    phone: "0814 609 2019",
    rating: 5,
  },
  {
    id: 4,
    name: "Blue Cross Hospital",
    address: "48, Ijaiye road, Ogba, (Beside UBA, Ikeja)",
    phone: "0814 609 2019",
    rating: 5,
  },
  {
    id: 5,
    name: "Crystal Specialist Hospital",
    address: "148/150, Akowonjo Road, Dopemu, Egbeda",
    phone: "0814 609 2019",
    rating: 5,
  },
  {
    id: 6,
    name: "Faith Care Hospital",
    address: "32 Road House 29, Festac Town, Lagos.",
    phone: "0814 609 2019",
    rating: 5,
  },
  {
    id: 7,
    name: "Faith City Hospital- Ajao estate",
    address: "16, Asa-Afariogun St., Off Osolo Way, Ajao Es...",
    phone: "0814 609 2019",
    rating: 5,
  },
  {
    id: 8,
    name: "Faleti Medical Centre",
    address: "98, Bale Street, New Road, b/stop, Olodi Apa...",
    phone: "0814 609 2019",
    rating: 5,
  },
  {
    id: 9,
    name: "First City Hospital",
    address: "1B, Williams Street, Off Diya street, Behind G...",
    phone: "0814 609 2019",
    rating: 5,
  },
  {
    id: 10,
    name: "First Dominican Hospital",
    address: "27, Aljahi Masha Road, By Masha B/stop, Suru...",
    phone: "0814 609 2019",
    rating: 5,
  },
];

export const hospitalsNearMe = [
  {
    id: 1,
    name: "Cottage Medicare Hospital",
    rating: 5.0,
    reviews: 70,
    address: "18 Iwaya Rd, Yaba 101245, Lagos",
    hours: "Open 24 hours",
    contact: "0814 609 2019",
  },
  {
    id: 2,
    name: "Crystals Specialist Hospital Alimosho",
    rating: 4.7,
    reviews: 70,
    address: "148/150, Akowonjo Rd, 300001, Lagos",
    hours: "Open 24 hours",
    contact: "0814 609 2019",
  },
  {
    id: 3,
    name: "Mercy Stripes Specialist Hospital",
    rating: 4.7,
    reviews: 70,
    address: "30 Philip Taiwo Street, Coker Estate Orisunmbare, Lagos",
    hours: "Open 24 hours",
    contact: "0814 609 2019",
  },
  {
    id: 4,
    name: "Faith Hills Specialist Hospital",
    rating: 4.3,
    reviews: 70,
    address: "87 Alimosho Rd, Alimosho 102213, Lagos",
    hours: "Open 24 hours",
    contact: "0809 809 9034",
  },
  {
    id: 5,
    name: "Light Hospital and Maternity Home",
    rating: 3.5,
    reviews: 70,
    address: "15, Olumide, Onanubi St, Alimosho, Lagos",
    hours: "Open 24 hours",
    contact: "0905 378 1246",
  },
];
