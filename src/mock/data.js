import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Kittitat Poonsombutpinyo', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Kittitat Poonsombutpinyo',
  subtitle: 'Mobile Developer',
  cta: 'Go to Projects',
};

// ABOUT DATA
export const aboutData = {
  //img: 'profile.jpg',
  paragraphOne: "My name is Kittitat Poonsombutpinyo, I'm passionate about coding and gaming.",
  paragraphTwo: 'I focus on creating a code that are easy to read and well organized, I always looking to improve myself with new skills.',
  paragraphThree: 'Currently working as a Mobile Developer at iBusiness Corporation',
  resume: 'https://drive.google.com/drive/folders/1ArOTl5U5_MDINogdPnHLkDCgo9Lx2PXJ', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'tlpartner.png',
    title: 'Thonglor Partner',
    info: 'Thonglor is an on demand stylist delivery service, Partnered with many talent stylists. This app is for the stylist side of service, Partner stylists can look at job description, location of job, update job status, QR Payment, and a Push Notification when new job appear.',
    info2: 'This is my first React Native application and my first Freelance project, self-taught with some advice from a senior dev, finished in 1 month.',
    url: '',
    //repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'paypoint.png',
    title: 'PayPoint',
    info: 'PayPoint is a shop recommendation and point collecting application. The user can register their shop as an online shop with the app, and recommend other shop to use this app to receive reward (Points) and other benefits from the app.',
    info2: "Using Corona SDK as the framework and developed while i'm an intern at Avengosoft, I added the Point redeem system and mock the store tab for future development",
    url: '',
    //repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'cameraapp.png',
    title: 'Camera App',
    info: 'A simple camera app that can add frame filter to camera in real-time, user can also select photo from storage and add frame and filter to the photo, User can then share the photo directly to facebook.',
    info2: "My first ever Mobile Application, Developed using Corona SDK while i'm an intern at Avengosoft. but sadly the project run into framework and plugin limitation on real-time camera feed, and can not render the frame on top of camera feed, the project have to be scrapped",
    url: '',
    //repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      title: 'Github',
      name: 'github',
      url: 'https://github.com/kittitat-ice',
    },
    {
      id: nanoid(),
      title: 'Email',
      name: 'envelope',
      url: 'https://aemail.com/zpAO', // hide email
    },
    {
      id: nanoid(),
      title: 'Resume',
      name: 'download',
      url: 'https://drive.google.com/drive/folders/1ArOTl5U5_MDINogdPnHLkDCgo9Lx2PXJ',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
