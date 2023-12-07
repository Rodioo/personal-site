import React, {ReactNode} from 'react';
import ButtonType from '../../common/types/button.type.ts';

type Props = {
  className?: string;
  type: ButtonType;
  text: string;
  icon: ReactNode;
};

const Button = ({
  className = '',
  type,
  text,
  icon,
}: Props): React.JSX.Element => {
  return (
    <button
      className={`
        flex gap-1 text-white transition delay-150
        duration-300 ease-in-out hover:-translate-y-0.5 hover:scale-105 lg:text-lg xl:text-xl
        ${
          type === ButtonType.Primary &&
          'hover:bg-ncs-blue rounded-xl bg-picton-blue px-5 py-3.5 hover:shadow-xl'
        } 
        ${
          type === ButtonType.Link &&
          'hover:text-baby-blue mx-5 my-3.5 hover:underline'
        } 
        ${className}
      `}>
      {icon}
      <span>{text}</span>
    </button>
  );
};

export default Button;
