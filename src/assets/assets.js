import LogoBlk from './logo/logo_blk.png'
import LogoWht from './logo/logo_wht.png'

import group_profiles from './group_profiles.png'
import header_img from './header_img.png'
import appointment_img from './banner/appointment_img.png'
import about_img from './about_image.png'
import contact_img from './contact_image.png'

import doc1 from './stock/doc1.png'
import doc2 from './stock/doc2.png'
import doc3 from './stock/doc3.png'
import beaut1 from './stock/beaut1.png'
import beaut2 from './stock/beaut2.png'
import construct1 from './stock/construct1.png'
import construct2 from './stock/construct2.png'
import construct3 from './stock/construct3.png'
import tattoo1 from './stock/tattoo1.png'
import tattoo2 from './stock/tattoo2.png'
import tattoo3 from './stock/tattoo3.png'
import pt1 from './stock/pt1.png'
import pt2 from './stock/pt2.png'
import pt3 from './stock/pt3.png'
import vet1 from './stock/vet1.png'
import vet2 from './stock/vet2.png'
import vet3 from './stock/vet3.png'

import doctors from './thumbs/doctors.png'
import hair from './thumbs/hair.png'
import contractors from './thumbs/contractors.png'
import tattoos from './thumbs/tattoos.png'
import gym from './thumbs/gym.png'
import vet from './thumbs/vet.png'

export const assets = {
  LogoBlk,
  LogoWht,
  group_profiles,
  header_img,
  appointment_img,
  about_img,
  contact_img,
}

export const speciality = [
  {
    speciality: 'Doctors',
    image: doctors
  },
  {
    speciality: 'Beauticians',
    image: hair
  },
  {
    speciality: 'Building Contractors',
    image: contractors
  },
  {
    speciality: 'Tattoo Artists',
    image: tattoos
  },
  {
    speciality: 'Personal Trainers',
    image: gym
  },
  {
    speciality: 'Veterinarians',
    image: vet
  },
]

export const professionals = [
  {
    _id: 'pro1',
    firstName: 'Richard',
    lastName: 'James',
    profilePic: doc1,
    speciality: 'Doctors',
    businessName: 'Dr James General Practitioners',
    phone: '021 000 0000',
    about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
    fees: 850,
    address1: '17th Cross, Richmond',
    address2: 'Circle, Ring Road, Rivonia',
    available: true
  },
  {
    _id: 'pro2',
    firstName: 'Emily',
    lastName: 'Larson',
    profilePic: doc2,
    speciality: 'Doctors',
    businessName: 'EL Gynecology',
    phone: '011 000 0000',
    about: 'Dr. Larson has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
    fees: 700,
    address1: '17th Cross, Richmond',
    address2: 'Circle, Ring Road, Cape Town',
    available: true
  },
  {
    _id: 'pro3',
    firstName: 'Sarah',
    lastName: 'Ericson',
    profilePic: doc3,
    speciality: 'Doctors',
    businessName: 'Ericson Dental',
    phone: '031 000 0000',
    about: 'Dr. Ericson has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
    fees: 800,
    address1: '17th Cross, Richmond',
    address2: 'Circle, Ring Road, Durban North',
    available: true
  },
  {
    _id: 'pro4',
    firstName: 'Jane',
    lastName: 'Marshall',
    profilePic: beaut1,
    speciality: 'Beauticians',
    businessName: 'Marshall Self Care',
    phone: '031 000 0000',
    about: 'Jane Marshall has a strong commitment to delivering comprehensive beauty therapy, focusing on preventive care, early diagnosis, and effective treatment strategies.',
    fees: 800,
    address1: '17th Cross, Richmond',
    address2: 'Circle, Ring Road, Durban North',
    available: true
  },
  {
    _id: 'pro5',
    firstName: 'Jennifer',
    lastName: 'Garcia',
    profilePic: beaut2,
    speciality: 'Beauticians',
    businessName: 'Marshall Self Care',
    phone: '031 000 0000',
    about: 'Jane Marshall has a strong commitment to delivering comprehensive beauty therapy, focusing on preventive care, early diagnosis, and effective treatment strategies.',
    fees: 800,
    address1: '17th Cross, Richmond',
    address2: 'Circle, Ring Road, Durban North',
    available: true
  },
  {
    _id: 'pro6',
    firstName: 'Michael',
    lastName: 'Augustine',
    profilePic: construct1,
    speciality: 'Building Contractors',
    businessName: 'Marshall Self Care',
    phone: '031 000 0000',
    about: 'Jane Marshall has a strong commitment to delivering comprehensive beauty therapy, focusing on preventive care, early diagnosis, and effective treatment strategies.',
    fees: 800,
    address1: '17th Cross, Richmond',
    address2: 'Circle, Ring Road, Durban North',
    available: true
  },
  {
    _id: 'pro7',
    firstName: 'Christopher',
    lastName: 'Lee',
    profilePic: construct2,
    speciality: 'Building Contractors',
    businessName: 'Lee Construction',
    phone: '031 000 0000',
    about: 'Jane Marshall has a strong commitment to delivering comprehensive beauty therapy, focusing on preventive care, early diagnosis, and effective treatment strategies.',
    fees: 800,
    address1: '17th Cross, Richmond',
    address2: 'Circle, Ring Road, Durban North',
    available: true
  },
  {
    _id: 'pro8',
    firstName: 'Andrew',
    lastName: 'Williams',
    profilePic: construct3,
    speciality: 'Building Contractors',
    businessName: 'Marshall Self Care',
    phone: '031 000 0000',
    about: 'Jane Marshall has a strong commitment to delivering comprehensive beauty therapy, focusing on preventive care, early diagnosis, and effective treatment strategies.',
    fees: 800,
    address1: '17th Cross, Richmond',
    address2: 'Circle, Ring Road, Durban North',
    available: true
  },
  {
    _id: 'pro9',
    firstName: 'Christopher',
    lastName: 'Davis',
    profilePic: tattoo1,
    speciality: 'Tattoo Artists',
    businessName: 'Marshall Self Care',
    phone: '031 000 0000',
    about: 'Jane Marshall has a strong commitment to delivering comprehensive beauty therapy, focusing on preventive care, early diagnosis, and effective treatment strategies.',
    fees: 800,
    address1: '17th Cross, Richmond',
    address2: 'Circle, Ring Road, Durban North',
    available: true
  },
  {
    _id: 'pro10',
    firstName: 'Timothy',
    lastName: 'White',
    profilePic: tattoo2,
    speciality: 'Tattoo Artists',
    businessName: 'Marshall Self Care',
    phone: '031 000 0000',
    about: 'Jane Marshall has a strong commitment to delivering comprehensive beauty therapy, focusing on preventive care, early diagnosis, and effective treatment strategies.',
    fees: 800,
    address1: '17th Cross, Richmond',
    address2: 'Circle, Ring Road, Durban North',
    available: true
  },
  {
    _id: 'pro11',
    firstName: 'Jeffrey',
    lastName: 'King',
    profilePic: tattoo3,
    speciality: 'Tattoo Artists',
    businessName: 'King Studios',
    phone: '031 000 0000',
    about: 'Jeffrey King has a strong commitment to delivering comprehensive beauty therapy, focusing on preventive care, early diagnosis, and effective treatment strategies.',
    fees: 800,
    address1: '17th Cross, Richmond',
    address2: 'Circle, Ring Road, Durban North',
    available: true
  },
  {
    _id: 'pro12',
    firstName: 'Patrick',
    lastName: 'Harris',
    profilePic: pt1,
    speciality: 'Personal Trainers',
    businessName: 'Center Fit',
    phone: '031 000 0000',
    about: 'Jane Marshall has a strong commitment to delivering comprehensive beauty therapy, focusing on preventive care, early diagnosis, and effective treatment strategies.',
    fees: 800,
    address1: '17th Cross, Richmond',
    address2: 'Circle, Ring Road, Durban North',
    available: true
  },
  {
    _id: 'pro13',
    firstName: 'Ava',
    lastName: 'Mitchell',
    profilePic: pt2,
    speciality: 'Personal Trainers',
    businessName: 'Mitchells',
    phone: '031 000 0000',
    about: 'Ava Mitchell has a strong commitment to delivering comprehensive beauty therapy, focusing on preventive care, early diagnosis, and effective treatment strategies.',
    fees: 800,
    address1: '17th Cross, Richmond',
    address2: 'Circle, Ring Road, Durban North',
    available: true
  },
  {
    _id: 'pro14',
    firstName: 'Zoe',
    lastName: 'Kelly',
    profilePic: pt3,
    speciality: 'Personal Trainers',
    businessName: 'Kelly Fitness',
    phone: '031 000 0000',
    about: 'Zoe Kelly has a strong commitment to delivering comprehensive beauty therapy, focusing on preventive care, early diagnosis, and effective treatment strategies.',
    fees: 800,
    address1: '17th Cross, Richmond',
    address2: 'Circle, Ring Road, Durban North',
    available: true
  },
  {
    _id: 'pro15',
    firstName: 'Tom',
    lastName: 'Greene',
    profilePic: vet1,
    speciality: 'Veterinarians',
    businessName: 'Marshall Self Care',
    phone: '031 000 0000',
    about: 'Tom Greene has a strong commitment to delivering comprehensive beauty therapy, focusing on preventive care, early diagnosis, and effective treatment strategies.',
    fees: 800,
    address1: '17th Cross, Richmond',
    address2: 'Circle, Ring Road, Durban North',
    available: true
  },
  {
    _id: 'pro16',
    firstName: 'Chloe',
    lastName: 'Evans',
    profilePic: vet2,
    speciality: 'Veterinarians',
    businessName: 'Happy Pets',
    phone: '031 000 0000',
    about: 'Chloe Evans has a strong commitment to delivering comprehensive beauty therapy, focusing on preventive care, early diagnosis, and effective treatment strategies.',
    fees: 800,
    address1: '17th Cross, Richmond',
    address2: 'Circle, Ring Road, Durban North',
    available: true
  },
  {
    _id: 'pro16',
    firstName: 'Margaret',
    lastName: 'Smith',
    profilePic: vet3,
    speciality: 'Veterinarians',
    businessName: 'Smith Veterinary Services',
    phone: '031 000 0000',
    about: 'Margaret Smith has a strong commitment to delivering comprehensive beauty therapy, focusing on preventive care, early diagnosis, and effective treatment strategies.',
    fees: 800,
    address1: '17th Cross, Richmond',
    address2: 'Circle, Ring Road, Durban North',
    available: true
  },
]