import React from 'react';
import ProjectPlatform from '../../common/types/projectPlatform.type.ts';


type Props = {
  className?: string;
  backgroundSrc: string;
  title: string;
  description: string;
  platform?: ProjectPlatform;
};

const ProjectCard = ({
  className = '',
  backgroundSrc,
  title,
  description,
  platform,
}: Props): React.JSX.Element => {
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      <img
        src={backgroundSrc}
        alt={'Project cover'}
        className="h-24 cursor-pointer grayscale
        duration-700 ease-in-out hover:-translate-y-0.5 hover:scale-105 hover:grayscale-0"
      />
      <div>
        <div className="flex flex-row justify-between">
          <p className="text-xl tracking-widest">{title}</p>
          <div className='flex flex-row gap-2'>
            {platform?.map((icon) => {
              return icon
            })}
          </div>
        </div>
        <p className="font-light">
          &emsp;{description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
