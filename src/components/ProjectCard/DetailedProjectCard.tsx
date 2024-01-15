import React from 'react';
import home from '../../assets/guessify/home.jpg';
import discover from '../../assets/guessify/discover.jpg';
import genre from '../../assets/guessify/genre.jpg';
import ProjectInfo from '../../common/types/project/projectInfo.type.ts';
import {AiOutlineDeploymentUnit} from 'react-icons/ai';
import {FaCode} from 'react-icons/fa6';
import {FaGitAlt, FaRegCalendar, FaRegCalendarPlus} from 'react-icons/fa';
import {MdOutlineRocketLaunch} from 'react-icons/md';
import Social from '../Social/Social.tsx';
import ProjectInfoCard from './ProjectInfoCard.tsx';
import HeaderParagraph from '../HeaderParagraph/HeaderParagraph.tsx';

type Props = {
  className?: string;
  projectInfo: ProjectInfo;
};

const images = [home, discover, genre];
const PROJECT_INFO_CARD_ICON_STYLE = 'ml-0 h-8 w-8 text-baby-blue';

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
      <HeaderParagraph title="About">
        <p>
          &emsp;&emsp;
          {'Guessify is an Android application designed for people with a passion for music. ' +
            'It uses the Spotify API to fetch personalized data about the user based on his/her Spotify profile. '}
        </p>
        <p>
          &emsp;&emsp;
          {
            "Users can interact with the application by choosing to either view their own music preferences through the Profile section, get a recommended song based on their top songs/artists or play a multiplayer 'Guess the Song' game with up to 3 other friends."
          }
        </p>
      </HeaderParagraph>
      <div className="grid grid-cols-2 grid-rows-3 gap-x-6 gap-y-12">
        <ProjectInfoCard
          icon={
            <AiOutlineDeploymentUnit className={PROJECT_INFO_CARD_ICON_STYLE} />
          }
          title="Platform">
          <p>
            This project was built for{' '}
            {projectInfo.platform === 'Web' && 'the '}
            {projectInfo.platform}
          </p>
        </ProjectInfoCard>
        <ProjectInfoCard
          icon={<FaCode className={PROJECT_INFO_CARD_ICON_STYLE} />}
          title="Tech stack">
          <p>{projectInfo.stack.replace(/;;/g, ', ')}</p>
        </ProjectInfoCard>
        <ProjectInfoCard
          icon={<FaRegCalendar className={PROJECT_INFO_CARD_ICON_STYLE} />}
          title="Created on">
          <p>
            {projectInfo.createdAt
              ? projectInfo.createdAt.toLocaleDateString()
              : 'N/A'}
          </p>
        </ProjectInfoCard>
        <ProjectInfoCard
          icon={<FaRegCalendarPlus className={PROJECT_INFO_CARD_ICON_STYLE} />}
          title="Last updated on">
          <p>
            {projectInfo.updatedAt
              ? projectInfo.updatedAt.toLocaleDateString()
              : 'N/A'}
          </p>
        </ProjectInfoCard>
        <ProjectInfoCard
          icon={<FaGitAlt className={PROJECT_INFO_CARD_ICON_STYLE} />}
          title="Source code">
          {projectInfo.gitLink && projectInfo.gitPlatform ? (
            <Social
              className="ml-0"
              icon={projectInfo.gitPlatform.icon}
              link={projectInfo.gitLink}
              text={projectInfo.gitPlatform.label}
            />
          ) : (
            <p className="p-2">N/A</p>
          )}
        </ProjectInfoCard>
        <ProjectInfoCard
          icon={
            <MdOutlineRocketLaunch className={PROJECT_INFO_CARD_ICON_STYLE} />
          }
          title="Published on">
          {projectInfo.appLink && projectInfo.publishedPlatform ? (
            <Social
              className="ml-0"
              icon={projectInfo.publishedPlatform.icon}
              link={projectInfo.appLink}
              text={projectInfo.publishedPlatform.label}
            />
          ) : (
            <p className="p-2">N/A</p>
          )}
        </ProjectInfoCard>
      </div>
    </div>
  );
};

export default DetailedProjectCard;
