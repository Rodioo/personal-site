import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from '../../../axios.config.ts';
import HeaderParagraph from '../../components/HeaderParagraph/HeaderParagraph.tsx';
import ProjectInfo from '../../common/types/project/projectInfo.type.ts';
import DetailedProjectCard from '../../components/ProjectCard/DetailedProjectCard.tsx';
import {getGitPlatformFromLink, getPublishedPlatformFromLink} from '../../common/utils/utils.ts';

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
      .get<ProjectInfo>(URL)
      .then((response) => {
        if (response.status === 200) {
          response.data.coverImagePath =
            import.meta.env.VITE_APP_SERVER_STATIC_BASE_URL +
            '/' +
            response.data.coverImagePath;
          if (response.data.createdAt) {
            response.data.createdAt = new Date(response.data.createdAt)
          }
          if (response.data.updatedAt) {
            response.data.updatedAt = new Date(response.data.updatedAt)
          }
          if (response.data.gitLink) {
            response.data.gitPlatform = getGitPlatformFromLink(response.data.gitLink)
          }
          if (response.data.appLink) {
            response.data.publishedPlatform = getPublishedPlatformFromLink(response.data.appLink)
          }
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
  }, []);

  return (
    <div
      data-testid="PROJECTS"
      className="ml-auto mr-auto mt-8 flex w-10/12 flex-col gap-8 font-lato sm:w-2/3 md:w-3/5 xl:w-2/5">
      {projectInfo && (
        <HeaderParagraph title={projectInfo.title}>
          <DetailedProjectCard projectInfo={projectInfo} />
        </HeaderParagraph>
      )}
    </div>
  );
};

export default ProjectDetails;
