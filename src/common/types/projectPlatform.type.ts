import React from 'react';
import { FaChrome, FaAndroid, FaAppStoreIos, FaFirefoxBrowser, FaSafari } from "react-icons/fa";

const ProjectPlatform = {
  Web: [
    React.createElement(FaChrome, {key: 1, className: 'w-5 h-5'}),
    React.createElement(FaFirefoxBrowser, {key: 2, className: 'w-5 h-5'}),
    React.createElement(FaSafari, {key: 3, className: 'w-5 h-5'}),
  ],
  Android: [
    React.createElement(FaAndroid, {key: 1, className: 'w-5 h-5'})
  ],
  iOS: [
    React.createElement(FaAppStoreIos, {key: 1, className: 'w-5 h-5'})
  ],
  Mobile: [
    React.createElement(FaAndroid, {key: 1, className: 'w-5 h-5'}),
    React.createElement(FaAppStoreIos, {key: 2, className: 'w-5 h-5'})
  ],
} as const;

type ProjectPlatform = (typeof ProjectPlatform)[keyof typeof ProjectPlatform];

export default ProjectPlatform;
