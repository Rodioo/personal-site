import React from 'react';
import {FaCheck, FaExclamation, FaInfo} from 'react-icons/fa6';

const ICON_STYLE = 'w-7 h-7 bg-onyx bg-opacity-40 p-1.5 rounded-md';

const NotificationType = {
  Success: {
    icon: React.createElement(FaCheck, {className: ICON_STYLE}),
    background: 'bg-gradient-to-br from-[#32BB71] to-[#2A9D8F]',
    border: 'border border-[#43D590]'
  },
  Error: {
    icon: React.createElement(FaExclamation, {className: ICON_STYLE}),
    background: 'bg-gradient-to-br from-[#F6743E] to-[#D42525]',
    border: 'border border-[#F0863A]'
  },
  Warning: {
    icon: React.createElement(FaExclamation, {className: ICON_STYLE}),
    background: 'bg-gradient-to-br from-[#F8B806] to-[#FF8C04]',
    border: 'border border-[#FFDF8D]'
  },
  Information: {
    icon: React.createElement(FaInfo, {className: ICON_STYLE}),
    background: 'bg-gradient-to-br from-[#2D82B2] to-[#329ABB]',
    border: 'border border-[#7BCFED]'
  },
} as const;

type NotificationType = (typeof NotificationType)[keyof typeof NotificationType];

export default NotificationType;
