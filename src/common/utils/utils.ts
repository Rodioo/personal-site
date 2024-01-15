import GitPlatform from '../types/project/projectGitPlatform.type.ts';
import PublishedPlatform from '../types/project/projectPublishedPlatform.type.ts';

export const getGitPlatformFromLink = (link: string): GitPlatform => {
  if (link.includes("github")) {
    return GitPlatform.GitHub
  } else if (link.includes("gitlab")) {
    return GitPlatform.GitLab
  } else {
    return GitPlatform.Git
  }
}

export const getPublishedPlatformFromLink = (link: string): PublishedPlatform => {
  if (link.includes("play.google")) {
    return PublishedPlatform.GooglePlay
  } else if (link.includes("apps.apple")) {
    return PublishedPlatform.AppStore
  } else {
    return PublishedPlatform.Web
  }
}

