import React, {ReactNode} from 'react';

type Props = {
  title: string;
  children: ReactNode;
}

const HeaderParagraph = ({title, children}: Props): React.JSX.Element => {
  return (
    <div className="flex flex-col gap-2 text-white">
      <p className="w-fit border-b-4 p-1 text-xl tracking-widest">{title}</p>
      {children}
    </div>
  );
};

export default HeaderParagraph;