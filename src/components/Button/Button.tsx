import React, {ReactNode} from 'react';
import ButtonType from '../../common/types/button.type.ts';

type Props = {
  className?: string;
  variant: ButtonType;
  disabled?: boolean;
  children: ReactNode;
  onClick?: () => void;
};

//TODO: think of another way to refactor disable true/false variants
const Button = ({
  className = '',
  disabled = false,
  onClick = () => {},
  variant,
  children,
}: Props): React.JSX.Element => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
        flex gap-1.5 text-white lg:text-lg xl:text-xl
        ${
          disabled
            ? 'cursor-not-allowed opacity-60'
            : 'transition delay-150 duration-300 ease-in-out hover:-translate-y-0.5 hover:scale-105'
        }
        ${
          variant === ButtonType.Primary &&
          (disabled
            ? 'rounded-lg bg-picton-blue px-4 py-3'
            : 'rounded-lg bg-picton-blue px-4 py-3 hover:bg-ncs-blue hover:shadow-xl')
        } 
        ${
          variant === ButtonType.Link &&
          (disabled
            ? 'mx-4 my-3'
            : 'mx-4 my-3 hover:text-baby-blue hover:underline')
        }
        ${className}
      `}>
      {children}
    </button>
  );
};

export default Button;
