import ProjectPlatform from './projectPlatform.type.ts';
import GitPlatform from './projectGitPlatform.type.ts';
import PublishedPlatform from './projectPublishedPlatform.type.ts';

type ProjectInfo = {
  id: number;
  coverImagePath: string;
  title: string;
  platform: keyof typeof ProjectPlatform;
  shortDescription: string;
  longDescription: string;
  createdAt?: Date;
  updatedAt?: Date;
  gitLink?: string;
  gitPlatform?: GitPlatform;
  appLink?: string;
  publishedPlatform?: PublishedPlatform;
  images?: string[];
  stack: string;
};

export default ProjectInfo;
