import {
  typea,
  typeb,
  typec,
  security,
  lamp,
  cctv,
  check1,
  check2,
  check3,
  facebook,
  twitter,
  whatsapp,
  instagram,
} from '../assets';

export const navLinks = [
  {
    id: '',
    title: 'Home',
  },
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'access-control',
    title: 'Access Control',
  },
  {
    id: 'digital',
    title: 'Digital',
  },
];

const services = [
  {
    title: 'type a',
    icon: typea,
    sub: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'type b',
    icon: typeb,
    sub: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'type c',
    icon: typec,
    sub: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

const technologies = [
  {
    name: 'check1',
    icon: check1,
  },
  {
    name: 'check2',
    icon: check2,
  },
  {
    name: 'check3',
    icon: check3,
  },
];

const contact = [
  {
    icon: facebook,
  },
  {
    icon: twitter,
  },
  {
    icon: whatsapp,
  },
  {
    icon: instagram,
  },
];

const tech = [
  {
    infomation:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
    name: 'SECURITY SYSTEM',

    image: security,
  },
  {
    infomation:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
    name: 'SMART LAMP',

    image: lamp,
  },
  {
    infomation:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
    name: 'CCTV CONTROL',

    image: cctv,
  },
];

const about = [
  {
    title: 'HOME',
    info: ['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum'],
  },
  {
    title: 'CONTACT',
    info: ['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum'],
  },
  {
    title: 'SERVICE',
    info: ['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum'],
  },
];

export { services, technologies, contact, tech, about };
