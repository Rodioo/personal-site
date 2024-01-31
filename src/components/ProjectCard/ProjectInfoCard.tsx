import React, {ReactNode} from 'react';

type Props = {
  icon: ReactNode;
  title: string;
  children: ReactNode;
};

const ProjectInfoCard = ({icon, title, children}: Props): React.JSX.Element => {
  return (
    <div className="flex flex-col gap-2">
      {icon}
      <p className="text-2xl tracking-widest">{title}</p>
      {children}
    </div>
  );
};

export default ProjectInfoCard;
