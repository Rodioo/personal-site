import React from 'react';
import {FaGitAlt, FaGithub, FaGitlab} from 'react-icons/fa';

const GitPlatform = {
  GitHub: {
    icon: React.createElement(FaGithub, {className: 'w-5 h-5'}),
    label: "GitHub",
  },
  GitLab: {
    icon: React.createElement(FaGitlab, {className: 'w-5 h-5'}),
    label: "GitLab",
  },
  Git: {
    icon: React.createElement(FaGitAlt, {className: 'w-5 h-5'}),
    label: "Git",
  }
} as const;

type GitPlatform = (typeof GitPlatform)[keyof typeof GitPlatform];
export default GitPlatform;