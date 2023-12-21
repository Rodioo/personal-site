import React from 'react';
import {FaGithub, FaLinkedin, FaDownload} from 'react-icons/fa';
import {SiLeetcode} from 'react-icons/si';
import Social from '../../components/Social/Social.tsx';
import HeaderParagraph from '../../components/HeaderParagraph/HeaderParagraph.tsx';
import Button from '../../components/Button/Button.tsx';
import ButtonType from '../../common/types/button.type.ts';
import ProjectCard from '../../components/ProjectCard/ProjectCard.tsx';
import pic from '../../assets/pic.jpeg';
import {FaRegFolderOpen} from 'react-icons/fa6';
import {useNavigate} from 'react-router-dom';
import resume from "../../assets/Resume.pdf"

//TODO: responsiveness
const About = (): React.JSX.Element => {
  const navigate = useNavigate();

  return (
    <div
      data-testid="ABOUT"
      className="mt-8 flex flex-col gap-8 font-lato w-11/12 sm:w-1/2 ml-auto mr-auto">
      <div>
        <HeaderParagraph title={'About me'}>
          <p className="text-justify text-lg font-light tracking-wide">
            &emsp; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </HeaderParagraph>
          <Button
            className="ml-auto mr-auto mt-4"
            type={ButtonType.Primary}
            onClick={() => {}}
          >
            <a href={resume} download="Resume_Antonio_Falcescu" target='_blank' className='flex flex-row gap-1.5'>
              <FaDownload className="m-auto h-4 w-4 lg:h-4 lg:w-4" />
              <span className='mt-auto mb-auto'>Resume</span>
            </a>
          </Button>
      </div>
      <div>
        <HeaderParagraph title={'Projects'}>
          <ProjectCard
            className="mt-2"
            backgroundSrc={pic}
            title={'Lorem Ipsum'}
            description={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
            }
          />
          <ProjectCard
            className="mt-6"
            backgroundSrc={pic}
            title={'Lorem Ipsum'}
            description={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
            }
          />
        </HeaderParagraph>
        <Button
          className="ml-auto mr-auto mt-6"
          type={ButtonType.Primary}
          onClick={() => {
            navigate('/projects');
          }}
        >
          <FaRegFolderOpen className="m-auto h-4 w-4 lg:h-4 lg:w-4" />
          <span className='mt-auto mb-auto'>All Projects</span>
        </Button>
      </div>
      <HeaderParagraph title={'Passionate about'}>
        <p className="text-justify text-lg font-light tracking-wide">
          &emsp; History, Learning Portuguese, Books, Storytelling & Strategy games, 3D modeling
        </p>
      </HeaderParagraph>
      <HeaderParagraph title={'Socials'}>
        <Social
          icon={<FaGithub className="h-6 w-6" />}
          link="https://github.com/Rodioo"
          text="Rodioo"
        />
        <Social
          icon={<FaLinkedin className="h-6 w-6" />}
          link="https://www.linkedin.com/in/antonio-falcescu/"
          text="Antonio Fălcescu"
        />
        <Social
          icon={<SiLeetcode className="h-6 w-6" />}
          link="https://leetcode.com/Rodioo/"
          text="Rodioo"
        />
      </HeaderParagraph>
    </div>
  );
};

export default About;
