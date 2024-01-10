import ProjectPlatform from './projectPlatform.type.ts';

type ProjectInfo = {
  id: number;
  coverImagePath: string;
  title: string;
  platform: keyof typeof ProjectPlatform;
  shortDescription: string;
  longDescription: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export default ProjectInfo;
