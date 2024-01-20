import React from 'react';
import NotificationType from '../../common/types/notification/notification.type.ts';
import {Transition} from '@headlessui/react';

type Props = {
  showError: boolean;
  showMessage: boolean;
  message: string;
  onMouseOver: () => void;
  onMouseOut: () => void;
}

const ErrorMessage = ({
  showError,
  showMessage,
  message,
  onMouseOver,
  onMouseOut
}: Props): React.JSX.Element => {
  return (
    <Transition
      className="min-h-32 absolute right-0 flex"
      show={showError}
      enter="transition-all ease-in-out duration-700"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-all ease-in-out duration-1000"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}>
      <Transition
        className={`z-10 rounded-sm ${NotificationType.Error.background} ${NotificationType.Error.border} px-3 py-2`}
        show={showMessage}
        enter="transition-all ease-in-out duration-700"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-all ease-in-out duration-1000"
        leaveFrom="opacity-100"
        leaveTo="opacity-0">
        <div className="text-center text-sm">
          {message}
        </div>
      </Transition>
      <Transition
        className={`absolute right-0 z-10 flex h-3 w-3`}
        show={!showMessage}
        enter="transition-all ease-in-out duration-700"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-all ease-in-out duration-1000"
        leaveFrom="opacity-100"
        leaveTo="opacity-0">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
        <span className="relative inline-flex h-3 w-3 rounded-full bg-red-400" />
      </Transition>
    </Transition>
  );
};

export default ErrorMessage;
