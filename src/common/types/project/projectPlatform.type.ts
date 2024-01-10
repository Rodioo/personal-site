import React from 'react';
import { FaChrome, FaAndroid, FaAppStoreIos, FaFirefoxBrowser, FaSafari } from "react-icons/fa";
import PlatformCategory from './projectCategory.type.ts';

const ProjectPlatform = {
  Web: {
    icons: [
      React.createElement(FaChrome, {key: 1, className: 'w-5 h-5'}),
      React.createElement(FaFirefoxBrowser, {key: 2, className: 'w-5 h-5'}),
      React.createElement(FaSafari, {key: 3, className: 'w-5 h-5'}),
    ],
    category: PlatformCategory.Web
  },
  Android: {
    icons: [
      React.createElement(FaAndroid, {key: 1, className: 'w-5 h-5'})
    ],
    category: PlatformCategory.Mobile
  },
  iOS: {
    icons: [
      React.createElement(FaAppStoreIos, {key: 1, className: 'w-5 h-5'})
    ],
    category: PlatformCategory.Mobile
  },
  Mobile: {
    icons: [
      React.createElement(FaAndroid, {key: 1, className: 'w-5 h-5'}),
      React.createElement(FaAppStoreIos, {key: 2, className: 'w-5 h-5'})
    ],
    category: PlatformCategory.Mobile
  },
} as const;

type ProjectPlatform = (typeof ProjectPlatform)[keyof typeof ProjectPlatform];
export default ProjectPlatform;


