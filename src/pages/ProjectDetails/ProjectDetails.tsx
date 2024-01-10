import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import ProjectPlatform from '../../common/types/projectPlatform.type.ts';
import axios from '../../../axios.config.ts';
import ProjectCard from '../../components/ProjectCard/ProjectCard.tsx';
import HeaderParagraph from '../../components/HeaderParagraph/HeaderParagraph.tsx';
import ProjectInfo from '../../common/types/projectInfo.type.ts';

//TODO: redesign projectCard to also be able to display full info about a project on the projectDetails page
// Should take in account the full description and multiple colored images (slideshow or static top-down images)
// Add links to either the hosted variant or to the github repo or both
// In the future add github commits incorporated to the project details
const ProjectDetails = (): React.JSX.Element => {
  const {projectId} = useParams();
  const [projectInfo, setProjectInfo] = useState<ProjectInfo>();

  useEffect(() => {
    if (!projectId) {
      return;
    }

    const URL = `/projects/${projectId}`;
    axios
      .get(URL)
      .then((response) => {
        if (response.status === 200) {
          response.data.coverImagePath =
            import.meta.env.VITE_APP_SERVER_STATIC_BASE_URL +
            '/' +
            response.data.coverImagePath;
          setProjectInfo(response.data);
        }
      })
      .catch((exception) => {
        if (exception.response?.status === 404) {
          console.log(exception.response.data);
        } else {
          console.log(exception);
        }
      });
  }, [projectId]);

  return (
    <div
      data-testid="PROJECTS"
      className="ml-auto mr-auto mt-8 flex w-10/12 flex-col gap-8 font-lato sm:w-2/3 md:w-3/5 xl:w-2/5">
      {projectInfo && (
        <HeaderParagraph title={projectInfo.title}>
          <ProjectCard
            className="mt-2"
            backgroundSrc={projectInfo.coverImagePath}
            title={projectInfo.title}
            description={projectInfo.shortDescription}
            platform={ProjectPlatform[projectInfo.platform]}
          />
        </HeaderParagraph>
      )}
    </div>
  );
};

export default ProjectDetails;
