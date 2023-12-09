import Home from '../../pages/Home/Home.tsx';
import About from '../../pages/About.tsx';
import Projects from '../../pages/Projects.tsx';
import Articles from '../../pages/Articles.tsx';
import Contact from '../../pages/Contact.tsx';
import React from 'react';

const Page = {
  Home: {
    name: 'HOME',
    path: '/',
    element: React.createElement(Home),
  },
  About: {
    name: 'ABOUT',
    path: '/about',
    element: React.createElement(About),
  },
  Projects: {
    name: 'PROJECTS',
    path: '/projects',
    element: React.createElement(Projects),
  },
  Articles: {
    name: 'ARTICLES',
    path: '/articles',
    element: React.createElement(Articles),
  },
  Contact: {
    name: 'CONTACT',
    path: '/contact',
    element: React.createElement(Contact),
  },
} as const;

type Page = (typeof Page)[keyof typeof Page];

export default Page;
