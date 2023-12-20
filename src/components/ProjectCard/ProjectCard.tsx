import React from 'react';

type Props = {
  className?: string;
  backgroundSrc: string;
  title: string;
  description: string;
};

const ProjectCard = ({
  className = '',
  backgroundSrc,
  title,
  description,
}: Props): React.JSX.Element => {
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      <img
        src={backgroundSrc}
        alt={'Project cover'}
        className="cursor-pointer h-24 grayscale
        duration-700 ease-in-out hover:-translate-y-0.5 hover:scale-105 hover:grayscale-0"
      />
      <div>
        <p className="text-lg tracking-widest">{title}</p>
        <p className="text-justify text-lg font-light tracking-wide">
          &emsp;{description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
