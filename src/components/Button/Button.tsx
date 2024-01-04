import React, {ReactNode} from 'react';
import ButtonType from '../../common/types/button.type.ts';

type Props = {
  className?: string;
  type: ButtonType;
  children: ReactNode;
  onClick?: () => void
};

const Button = ({
  className = '',
  onClick = () => {},
  type,
  children
}: Props): React.JSX.Element => {
  return (
    <button
      onClick={onClick}
      className={`
        flex gap-1.5 text-white transition delay-150
        duration-300 ease-in-out hover:-translate-y-0.5 hover:scale-105 lg:text-lg xl:text-xl
        ${
          type === ButtonType.Primary &&
          'hover:bg-ncs-blue rounded-lg bg-picton-blue px-4 py-3 hover:shadow-xl'
        } 
        ${
          type === ButtonType.Link &&
          'hover:text-baby-blue mx-4 my-3 hover:underline'
        } 
        ${className}
      `}>
      {children}
    </button>
  );
};

export default Button;
