import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from '../../../axios.config.ts';
import HeaderParagraph from '../../components/HeaderParagraph/HeaderParagraph.tsx';
import ProjectInfo from '../../common/types/project/projectInfo.type.ts';
import DetailedProjectCard from '../../components/ProjectCard/DetailedProjectCard.tsx';
import {
  getGitPlatformFromLink,
  getPublishedPlatformFromLink,
} from '../../common/utils/utils.ts';
import AnimatedLayout from '../../layouts/AnimatedLayout/AnimatedLayout.tsx';
import Loading from '../../components/Loading/Loading.tsx';

//TODO In the future add github commits incorporated to the project details
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
          const images: string[] = [];
          if (response.data.images) {
            for (let image of response.data.images.split(';')) {
              image =
                import.meta.env.VITE_APP_SERVER_STATIC_BASE_URL + '/' + image;
              images.push(image);
            }
            response.data.images = images.join(';');
          }
          if (response.data.createdAt) {
            response.data.createdAt = new Date(response.data.createdAt);
          }
          if (response.data.updatedAt) {
            response.data.updatedAt = new Date(response.data.updatedAt);
          }
          if (response.data.gitLink) {
            response.data.gitPlatform = getGitPlatformFromLink(
              response.data.gitLink
            );
          }
          if (response.data.appLink) {
            response.data.publishedPlatform = getPublishedPlatformFromLink(
              response.data.appLink
            );
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

  return projectInfo ? (
    <AnimatedLayout>
      <div
        data-testid={ProjectDetails.name}
        className="ml-auto mr-auto flex w-10/12 flex-col gap-8 font-lato sm:w-2/3 md:w-3/5 xl:w-2/5">
        {projectInfo && (
          <HeaderParagraph title={projectInfo.title}>
            <DetailedProjectCard projectInfo={projectInfo} />
          </HeaderParagraph>
        )}
      </div>
    </AnimatedLayout>
  ) : (
    <Loading />
  );
};

export default ProjectDetails;
