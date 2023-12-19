import React from 'react';
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import {SiLeetcode} from 'react-icons/si';
import Social from '../../components/Social/Social.tsx';
import HeaderParagraph from '../../components/HeaderParagraph/HeaderParagraph.tsx';
import Resume from '../../components/Resume/Resume.tsx';

const About = (): React.JSX.Element => {
  return (
    <div
      data-testid="ABOUT"
      className="mx-6 mt-20 flex flex-col gap-16 font-lato">
      <HeaderParagraph title={'About me'}>
        <p className="text-justify text-lg font-light tracking-wide">
          &emsp; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </HeaderParagraph>
      <HeaderParagraph title={'Work'}>
        <p className="text-justify text-lg font-light tracking-wide">
          &emsp; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
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
      {/*<Resume />*/}
    </div>
  );
};

export default About;
