import React, {useEffect, useRef, useState} from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage.tsx';

type Props = {
  placeholder: string;
  value: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  isValid: boolean;
  errorMessage: string;
  maxHeight?: number;
};

const TextAreaInput = ({
  placeholder,
  value,
  name,
  onChange,
  isValid,
  errorMessage,
  maxHeight = 40,
}: Props): React.JSX.Element => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [shouldDisplayError, setShouldDisplayError] = useState(false);
  const [isHoveringOverError, setIsHoveringOverError] = useState(false);

  const handleAutoExpand = () => {
    const MAX_HEIGHT = maxHeight;

    const textArea = textAreaRef.current;
    if (textArea) {
      textArea.style.height = 'auto';
      textArea.style.overflowY = 'hidden';

      textArea.style.height = `${Math.min(
        textArea.scrollHeight,
        MAX_HEIGHT
      )}px`;

      if (textArea.scrollHeight >= MAX_HEIGHT) {
        textArea.style.overflowY = 'scroll';
      }
    }
  };

  useEffect(() => {
    if (value === '') {
      handleAutoExpand();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <div className="relative flex flex-row justify-between">
      <textarea
        ref={textAreaRef}
        className={`
                  ease w-full resize-none border-b-2 bg-transparent pl-1 text-lg outline-none transition-colors duration-700 focus:border-b-picton-blue
                  ${
                    ((shouldDisplayError && !isValid) || isHoveringOverError) &&
                    'border-b-red-500'
                  }  
              `}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        onInput={handleAutoExpand}
        onFocus={() => setShouldDisplayError(true)}
        onBlur={() =>
          setTimeout(() => {
            setShouldDisplayError(false);
          }, 2000)
        }
        rows={1}
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

export default TextAreaInput;
