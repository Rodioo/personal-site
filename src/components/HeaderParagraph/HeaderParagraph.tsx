import React, {ReactNode} from 'react';

type Props = {
  className?: string;
  title: string;
  children: ReactNode;
}

const HeaderParagraph = ({className = '', title, children}: Props): React.JSX.Element => {
  return (
    <div className={`flex flex-col gap-2 text-white ${className}`}>
      <p className="w-fit border-b-4 p-1 text-xl tracking-widest">{title}</p>
      {children}
    </div>
  );
};

export default HeaderParagraph;