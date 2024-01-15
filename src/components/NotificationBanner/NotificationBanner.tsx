import React from 'react';
import NotificationType from '../../common/types/notification.type.ts';
import {FaCheck, FaExclamation, FaInfo} from 'react-icons/fa6';
import {MdOutlineClose} from 'react-icons/md';

type Props = {
  type: NotificationType;
  title?: string;
  message?: string;
};

const NotificationBanner = ({
  type,
  title = '',
  message = '',
}: Props): React.JSX.Element => {
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
    <div
      className={`min-w-fit max-w-xs rounded-2xl p-6 ${getBackgroundFromType()} ${getBorderFromType()}`}>
      <div className="flex justify-between gap-4">
        {getIconFromType()}
        <div className="flex flex-col">
          <p className="text-xl font-medium">{title}</p>
          <p className="whitespace-pre-wrap text-lg font-light">{message}</p>
        </div>
        <MdOutlineClose className="h-7 w-7 cursor-pointer opacity-60 hover:opacity-100" />
      </div>
    </div>
  );
};

export default NotificationBanner;
