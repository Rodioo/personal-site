import React from 'react';
import {FaAppStoreIos, FaGooglePlay, FaGlobe} from 'react-icons/fa';

const PublishedPlatform = {
  Web: {
    icon: React.createElement(FaGlobe, {className: 'w-5 h-5'}),
    label: "Website",
  },
  GooglePlay: {
    icon: React.createElement(FaGooglePlay, {className: 'w-5 h-5'}),
    label: "Google Play",
  },
  AppStore: {
    icon: React.createElement(FaAppStoreIos, {className: 'w-5 h-5'}),
    label: "App Store",
  }
} as const;

type PublishedPlatform = (typeof PublishedPlatform)[keyof typeof PublishedPlatform];
export default PublishedPlatform;