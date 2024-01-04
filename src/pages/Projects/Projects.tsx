import React from 'react';
import HeaderParagraph from '../../components/HeaderParagraph/HeaderParagraph.tsx';
import ProjectCard from '../../components/ProjectCard/ProjectCard.tsx';
import guessify_photo from '../../assets/guessify.png';
import ProjectPlatform from '../../common/types/projectPlatform.type.ts';
import spanzuratoarea_photo from '../../assets/spanzuratoarea.png';
import pic from "../../assets/pic.jpeg"

//TODO: add backend for each projects page
const Projects = (): React.JSX.Element => {

  return (
    <div
      data-testid="PROJECTS"
      className="ml-auto mr-auto mt-8 flex w-10/12 flex-col gap-8 font-lato sm:w-2/3 md:w-3/5 xl:w-2/5">
      <HeaderParagraph title={'Web'}>
        <ProjectCard
          className="mt-2"
          backgroundSrc={pic}
          title={'Personal portfolio'}
          description={`Platform used to showcase my work and publish articles`}
          platform={ProjectPlatform.Web}
        />
      </HeaderParagraph>
      <HeaderParagraph title={'Mobile'}>
        <ProjectCard
          className="mt-2"
          backgroundSrc={guessify_photo}
          title={'Guessify'}
          description={`A Spotify based app that incorporates listening stats, song recommendations and a multiplayer 'Guess the Song' game`}
          platform={ProjectPlatform.Android}
        />
        <ProjectCard
          className="mt-6"
          backgroundSrc={spanzuratoarea_photo}
          title={'Spanzuratoarea'}
          description={`Trivia game meant to improve Romanian kids' general knowledge`}
          platform={ProjectPlatform.Android}
        />
      </HeaderParagraph>
    </div>
  );
};

export default Projects;
