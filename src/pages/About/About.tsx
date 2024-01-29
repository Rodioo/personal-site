import React, {useEffect, useMemo, useState} from 'react';
import {FaGithub, FaLinkedin, FaDownload} from 'react-icons/fa';
import {SiLeetcode} from 'react-icons/si';
import Social from '../../components/Social/Social.tsx';
import HeaderParagraph from '../../components/HeaderParagraph/HeaderParagraph.tsx';
import Button from '../../components/Button/Button.tsx';
import ButtonType from '../../common/types/button.type.ts';
import ProjectCard from '../../components/ProjectCard/ProjectCard.tsx';
import {FaRegFolderOpen} from 'react-icons/fa6';
import {useNavigate} from 'react-router-dom';
import resume from '../../assets/Resume.pdf';
import ProjectPlatform from '../../common/types/project/projectPlatform.type.ts';
import AnimatedLayout from '../../layouts/AnimatedLayout/AnimatedLayout.tsx';
import axios from '../../../axios.config.ts';
import ProjectInfo from '../../common/types/project/projectInfo.type.ts';
import Loading from '../../components/Loading/Loading.tsx';

//TODO: refactor from useEffect to some cache maybe useMemo
const About = (): React.JSX.Element => {
  const navigate = useNavigate();
  const currentDay = useMemo(() => {
    const date = new Date();
    return date.toLocaleDateString(undefined, {weekday: 'long'});
  }, []);

  const [projects, setProjects] = useState<ProjectInfo[]>();

  useEffect(() => {
    const URL = `/projects`;
    axios
      .get<ProjectInfo[]>(URL)
      .then((response) => {
        if (response.status === 200) {
          const projectsAux: ProjectInfo[] = [];
          for (const project of response.data) {
            if (project.id === 2 || project.id === 3) {
              project.coverImagePath =
                import.meta.env.VITE_APP_SERVER_STATIC_BASE_URL +
                '/' +
                project.coverImagePath;
              projectsAux.push(project);
            }
          }
          setProjects(projectsAux);
        }
      })
      .catch((exception) => {
        if (exception.response?.status === 404) {
          console.log(exception.response.data);
        } else {
          console.log(exception);
        }
      });
  }, []);

  return projects ? (
    <AnimatedLayout key={About.name}>
      <div
        data-testid={About.name}
        className="ml-auto mr-auto mt-8 flex w-10/12 flex-col gap-8 font-lato sm:w-2/3 md:w-3/5 xl:w-2/5">
        <div>
          <HeaderParagraph title={'About me'}>
            <p className="whitespace-pre-wrap text-justify font-light">
              &emsp;Hey, I'm Antonio, a Software Developer based in Bucharest,
              Romania.&#10;&emsp;In my professional role, I primarily do
              full-stack web development and occasionally work on Android
              applications. So far, I have accumulated over two years of
              hands-on experience in this field. In addition to this, I want to
              mention that I've also graduated with a Bachelor's Degree in
              Computer Science from the University of Bucharest. &#10;&emsp;In
              my free time, I enjoy building and publishing indie applications
              with a real use that fit my or others' needs. Additionally, I like
              practicing LeetCode questions and participating in coding
              challenges organized by the community to both test my
              problem-solving abilities and learn from others. &#10;&emsp;When
              not doing something related to programming, I like to watch
              videos/documentaries and read articles/books about random aspects
              of history as this is my second biggest passion. However, if I
              want to simply relax I usually spend my time playing games,
              reading a fictional book, 3D modeling or practicing my Portuguese.
              &#10;&emsp;Please feel free to take a look at my resume and enjoy
              the rest of your {currentDay} 😄
            </p>
          </HeaderParagraph>
          <Button
            className="ml-auto mr-auto mt-4"
            variant={ButtonType.Primary}>
            <a
              href={resume}
              download="Resume_Antonio_Falcescu"
              target="_blank"
              className="flex flex-row gap-1.5">
              <FaDownload className="m-auto h-4 w-4 lg:h-4 lg:w-4" />
              <span className="mb-auto mt-auto">Resume</span>
            </a>
          </Button>
        </div>
        <div>
          <HeaderParagraph title={'Projects'}>
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                backgroundSrc={project.coverImagePath}
                title={project.title}
                description={project.shortDescription}
                platform={ProjectPlatform[project.platform]}
                onClick={() => {
                  navigate(`/projects/${project.id}`);
                }}
              />
            ))}
          </HeaderParagraph>
          <Button
            className="ml-auto mr-auto mt-6"
            variant={ButtonType.Primary}
            onClick={() => {
              navigate('/projects');
            }}>
            <FaRegFolderOpen className="m-auto h-4 w-4 lg:h-4 lg:w-4" />
            <span className="mb-auto mt-auto">All Projects</span>
          </Button>
        </div>
        <HeaderParagraph title={'Passionate about'}>
          <p className="text-justify text-lg font-light tracking-wide">
            &emsp; History, Learning Portuguese, Books, Storytelling & Strategy
            games, 3D modeling
          </p>
        </HeaderParagraph>
        <HeaderParagraph title={'Socials'}>
          <Social
            className="ml-4"
            icon={<FaGithub className="h-6 w-6" />}
            link="https://github.com/Rodioo"
            text="Rodioo"
          />
          <Social
            className="ml-4"
            icon={<FaLinkedin className="h-6 w-6" />}
            link="https://www.linkedin.com/in/antonio-falcescu/"
            text="Antonio Falcescu"
          />
          <Social
            className="ml-4"
            icon={<SiLeetcode className="h-6 w-6" />}
            link="https://leetcode.com/Rodioo/"
            text="Rodioo"
          />
        </HeaderParagraph>
      </div>
    </AnimatedLayout>
  ) : (
    <Loading />
  );
};

export default About;
