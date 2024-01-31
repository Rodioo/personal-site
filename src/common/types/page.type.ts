import React from 'react';
import Home from '../../pages/Home/Home.tsx';
import About from '../../pages/About/About.tsx';
import Projects from '../../pages/Projects/Projects.tsx';
import Articles from '../../pages/Articles/Articles.tsx';
import Contact from '../../pages/Contact/Contact.tsx';
import ProjectDetails from '../../pages/ProjectDetails/ProjectDetails.tsx';

const Page = {
  Home: {
    name: 'HOME',
    path: '/',
    element: React.createElement(Home),
    showInNavbar: true,
  },
  About: {
    name: 'ABOUT',
    path: '/about',
    element: React.createElement(About),
    showInNavbar: true,
  },
  Projects: {
    name: 'PROJECTS',
    path: '/projects',
    element: React.createElement(Projects),
    showInNavbar: true,
  },
  Articles: {
    name: 'ARTICLES',
    path: '/articles',
    element: React.createElement(Articles),
    showInNavbar: true,
  },
  Contact: {
    name: 'CONTACT',
    path: '/contact',
    element: React.createElement(Contact),
    showInNavbar: true,

  },
  ProjectDetails: {
    name: 'PROJECT_DETAILS',
    path: '/projects/:projectId',
    element: React.createElement(ProjectDetails),
    showInNavbar: false,
  },
} as const;

type Page = (typeof Page)[keyof typeof Page];

export default Page;
