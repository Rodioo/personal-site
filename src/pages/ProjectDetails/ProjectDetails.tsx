import React from 'react';
import {useParams} from 'react-router-dom';

const ProjectDetails = (): React.JSX.Element => {
  const {projectId} = useParams()

  return (
    <div>ProjectDetails for: {projectId}</div>
  );
};

export default ProjectDetails;