import Home from '../../pages/Home.tsx';
import About from '../../pages/About.tsx';
import Projects from '../../pages/Projects.tsx';
import Articles from '../../pages/Articles.tsx';
import Contact from '../../pages/Contact.tsx';

const Page = {
  Home: {
    name: 'HOME',
    path: '/',
    element: Home()
  },
  About: {
    name: 'ABOUT',
    path: '/about',
    element: About()
  },
  Projects: {
    name: 'PROJECTS',
    path: '/projects',
    element: Projects()
  },
  Articles: {
    name: 'ARTICLES',
    path: '/articles',
    element: Articles()
  },
  Contact: {
    name: 'CONTACT',
    path: '/contact',
    element: Contact()
  },
} as const;

type Page = typeof Page[keyof typeof Page]

export default Page;