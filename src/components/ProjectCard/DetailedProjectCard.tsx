import React from 'react';
import home from '../../assets/guessify/home.jpg';
import discover from '../../assets/guessify/discover.jpg';
import genre from '../../assets/guessify/genre.jpg';
import ProjectInfo from '../../common/types/project/projectInfo.type.ts';
import {AiOutlineDeploymentUnit} from 'react-icons/ai';
import {FaCode} from 'react-icons/fa6';
import {FaGitAlt, FaRegCalendar, FaRegCalendarPlus} from 'react-icons/fa';
import { MdOutlineRocketLaunch } from "react-icons/md";
import Social from '../Social/Social.tsx';

type Props = {
  className?: string;
  projectInfo: ProjectInfo;
};

const images = [home, discover, genre];

const DetailedProjectCard = ({
  className = '',
  projectInfo,
}: Props): React.JSX.Element => {
  return (
    <div className={`flex flex-col gap-8 ${className}`}>
      <div>
        <p className="font-light">&emsp;{projectInfo.shortDescription}</p>
        <div className="scrollbar-hidden relative mt-1 flex gap-4 overflow-x-scroll">
          {images.map((image) => (
            <img
              key={image}
              src={image}
              alt={'Project cover'}
              className="w-2/5 rounded-xl"
            />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 grid-rows-3 gap-x-6 gap-y-12 text-center">
        {/*<p className="text-xl tracking-widest">More details</p>*/}
        <div className="flex flex-col gap-2 text-center">
          <AiOutlineDeploymentUnit className="h-8 w-8 text-baby-blue ml-auto mr-auto" />
          <p className="text-2xl tracking-widest">Platform</p>
          <p>
            This project was built for {projectInfo.platform === 'Web' && 'the '}
            {projectInfo.platform}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <FaCode className="h-8 w-8 text-baby-blue ml-auto mr-auto" />
          <p className="text-2xl tracking-widest">Tech stack</p>
          <p>{projectInfo.stack.replace(/;;/g, ', ')}</p>
        </div>
        <div className="flex flex-col gap-2">
          <FaRegCalendar className="h-8 w-8 text-baby-blue ml-auto mr-auto" />
          <p className="text-2xl tracking-widest">Created on</p>
          <p>
            {projectInfo.createdAt
              ? projectInfo.createdAt.toLocaleDateString()
              : 'N/A'}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <FaRegCalendarPlus className="h-8 w-8 text-baby-blue ml-auto mr-auto" />
          <p className="text-2xl tracking-widest">Last updated on</p>
          <p>
            {projectInfo.updatedAt
              ? projectInfo.updatedAt.toLocaleDateString()
              : 'N/A'}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <FaGitAlt className="h-8 w-8 text-baby-blue ml-auto mr-auto" />
          <p className="text-2xl tracking-widest">Source code</p>
          {projectInfo.gitLink && projectInfo.gitPlatform
            ? (
              <Social
                className='ml-auto mr-auto'
                icon={projectInfo.gitPlatform.icon}
                link={projectInfo.gitLink}
                text={projectInfo.gitPlatform.label}
              />
            )
            : (
              <p className='p-2'>
                N/A
              </p>
            )
          }
        </div>
        <div className="flex flex-col gap-2">
          <MdOutlineRocketLaunch className="h-8 w-8 text-baby-blue ml-auto mr-auto" />
          <p className="text-2xl tracking-widest">Published on</p>
          {projectInfo.appLink && projectInfo.publishedPlatform
            ? (
                <Social
                  className='ml-auto mr-auto'
                  icon={projectInfo.publishedPlatform.icon}
                  link={projectInfo.appLink}
                  text={projectInfo.publishedPlatform.label}
                />
              )
            : (
              <p className='p-2'>
                N/A
              </p>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default DetailedProjectCard;
