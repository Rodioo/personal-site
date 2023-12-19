import React, {ReactNode} from 'react';

type Props = {
  className?: string;
  text: string;
  link: string;
  icon: ReactNode;
};

const Social = ({
  className = '',
  text,
  link,
  icon,
}: Props): React.JSX.Element => {
  return (
    <a
      href={link}
      target="_blank"
      className={
      `ml-6 flex w-fit flex-row gap-3 p-2 text-baby-blue rounded-md
      hover:bg-baby-blue hover:bg-opacity-10
      ${className}`
    }
    >
      {icon}
      <span className="tracking-wider">{text}</span>
    </a>
  );
};

export default Social;
