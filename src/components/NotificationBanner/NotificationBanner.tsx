import React, {useEffect, useState} from 'react';
import NotificationType from '../../common/types/notification.type.ts';
import {FaCheck, FaExclamation, FaInfo} from 'react-icons/fa6';
import {MdOutlineClose} from 'react-icons/md';
import {Transition} from '@headlessui/react';

type Props = {
  type: NotificationType;
  title?: string;
  message?: string;
};

//TODO: add show and hide functions/value to control the display of the notification from the parent (in the future add redux)
const NotificationBanner = ({
  type,
  title = '',
  message = '',
}: Props): React.JSX.Element => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  const getIconFromType = (): React.JSX.Element => {
    const ICON_STYLE = 'w-7 h-7 bg-onyx bg-opacity-40 p-1.5 rounded-md';

    switch (type) {
      case NotificationType.Success:
        return <FaCheck className={ICON_STYLE} />;
      case NotificationType.Error:
        return <FaExclamation className={ICON_STYLE} />;
      case NotificationType.Warning:
        return <FaExclamation className={ICON_STYLE} />;
      case NotificationType.Information:
        return <FaInfo className={ICON_STYLE} />;
    }
  };

  const getBackgroundFromType = (): string => {
    switch (type) {
      case NotificationType.Success:
        return 'bg-gradient-to-br from-[#32BB71] to-[#2A9D8F]';
      case NotificationType.Error:
        return 'bg-gradient-to-br from-[#F6743E] to-[#D42525]';
      case NotificationType.Warning:
        return 'bg-gradient-to-br from-[#F8B806] to-[#FF8C04]';
      case NotificationType.Information:
        return 'bg-gradient-to-br from-[#2D82B2] to-[#329ABB]';
    }
  };

  const getBorderFromType = (): string => {
    switch (type) {
      case NotificationType.Success:
        return 'border border-[#43D590]';
      case NotificationType.Error:
        return 'border border-[#F0863A]';
      case NotificationType.Warning:
        return 'border border-[#FFDF8D]';
      case NotificationType.Information:
        return 'border border-[#7BCFED]';
    }
  };

  return (
    <Transition
      className={`absolute -bottom-[30px] right-0 w-[32rem] max-w-full rounded-2xl border p-6 text-white ${getBackgroundFromType()} ${getBorderFromType()}`}
      show={show}
      enter="transition-all ease-in-out duration-1000"
      enterFrom="opacity-0 translate-y-8"
      enterTo="opacity-100 translate-y-0"
      leave="transition-all ease-in-out duration-1000"
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 translate-y-16"
      beforeEnter={() => {document.body.style.overflowY='hidden'}}
      afterEnter={() => {document.body.style.overflowY='auto'}}
      beforeLeave={() => {document.body.style.overflowY='hidden'}}
      afterLeave={() => {document.body.style.overflowY='auto'}}>
      <div className="flex justify-between gap-4">
        {getIconFromType()}
        <div className="flex flex-col">
          <p className="text-xl font-medium">{title}</p>
          <p className="whitespace-pre-wrap text-lg font-light">{message}</p>
        </div>
        <MdOutlineClose
          className="h-7 w-7 cursor-pointer opacity-60 hover:opacity-100"
          onClick={() => setShow(false)}
        />
      </div>
    </Transition>
  );
};

export default NotificationBanner;
