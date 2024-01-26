import React, {useState} from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage.tsx';

type Props = {
  type: string;
  placeholder: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isValid: boolean;
  errorMessage: string;
};

const Input = ({
  type,
  placeholder,
  name,
  value,
  onChange,
  isValid,
  errorMessage,
}: Props): React.JSX.Element => {
  const [shouldDisplayError, setShouldDisplayError] = useState(false);
  const [isHoveringOverError, setIsHoveringOverError] = useState(false);

  return (
    <div className="relative flex flex-row justify-between">
      <input
        className={`
          ease w-full border-b-2 bg-transparent p-1 text-lg outline-none transition-colors duration-700 focus:border-b-picton-blue 
          ${
            ((shouldDisplayError && !isValid) || isHoveringOverError) &&
            'border-b-red-500'
          }  
        `}
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setShouldDisplayError(true)}
        onBlur={() =>
          setTimeout(() => {
            setShouldDisplayError(false);
          }, 2000)
        }
      />
      <ErrorMessage
        showMessage={isHoveringOverError}
        showError={(shouldDisplayError && !isValid) || isHoveringOverError}
        message={errorMessage}
        onMouseOver={() => setIsHoveringOverError(true)}
        onMouseOut={() => setIsHoveringOverError(false)}
      />
    </div>
  );
};

export default Input;
