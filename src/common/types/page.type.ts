import Home from '../../pages/Home/Home.tsx';
import About from '../../pages/About/About.tsx';
import Projects from '../../pages/Projects/Projects.tsx';
import Articles from '../../pages/Articles/Articles.tsx';
import Contact from '../../pages/Contact/Contact.tsx';
import React from 'react';
import ProjectDetails from '../../pages/ProjectDetails/ProjectDetails.tsx';

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
  ProjectDetails: {
    name: 'PROJECT_DETAILS',
    path: '/projects/:projectId',
    element: React.createElement(ProjectDetails),
  },
} as const;

type Page = (typeof Page)[keyof typeof Page];

export default Page;
