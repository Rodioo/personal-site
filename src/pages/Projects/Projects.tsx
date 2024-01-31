import React, {useEffect, useState} from 'react';
import HeaderParagraph from '../../components/HeaderParagraph/HeaderParagraph.tsx';
import ProjectCard from '../../components/ProjectCard/ProjectCard.tsx';
import ProjectPlatform from '../../common/types/project/projectPlatform.type.ts';
import ProjectInfo from '../../common/types/project/projectInfo.type.ts';
import PlatformCategory from '../../common/types/project/projectCategory.type.ts';
import axios from '../../../axios.config.ts';
import {useNavigate} from 'react-router-dom';
import AnimatedLayout from '../../layouts/AnimatedLayout/AnimatedLayout.tsx';
import Loading from '../../components/Loading/Loading.tsx';

type GroupedProjects = {
  [key in PlatformCategory]?: ProjectInfo[];
};

//TODO: needs optimization or loading screen
const Projects = (): React.JSX.Element => {
  const [groupedProjects, setGroupedProjects] = useState<GroupedProjects>();
  const navigate = useNavigate();

  useEffect(() => {
    const URL = `/projects`;
    axios
      .get<ProjectInfo[]>(URL)
      .then((response) => {
        if (response.status === 200) {
          const groupedProjectsAux: GroupedProjects = {};
          for (const project of response.data) {
            project.coverImagePath =
              import.meta.env.VITE_APP_SERVER_STATIC_BASE_URL +
              '/' +
              project.coverImagePath;

            const category = ProjectPlatform[project.platform].category;
            if (category in groupedProjectsAux) {
              groupedProjectsAux[category]!.push(project);
            } else {
              groupedProjectsAux[category] = [project];
            }
          }
          setGroupedProjects(groupedProjectsAux);
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

  return groupedProjects ? (
    <AnimatedLayout key={Projects.name}>
      <div
        data-testid={Projects.name}
        className="ml-auto mr-auto mt-8 flex w-10/12 flex-col gap-8 font-lato sm:w-2/3 md:w-3/5 xl:w-2/5">
        {Object.keys(groupedProjects).map((category) => (
          <HeaderParagraph
            title={category}
            key={category}>
            {groupedProjects[category as PlatformCategory]?.map(
              (projectInfo) => (
                <ProjectCard
                  key={projectInfo.id}
                  className="mt-2"
                  backgroundSrc={projectInfo.coverImagePath}
                  title={projectInfo.title}
                  description={projectInfo.shortDescription}
                  platform={ProjectPlatform[projectInfo.platform]}
                  onClick={() => {
                    navigate(`/projects/${projectInfo.id}`);
                  }}
                />
              )
            )}
          </HeaderParagraph>
        ))}
      </div>
    </AnimatedLayout>
  ) : (
    <Loading />
  );
};

export default Projects;
