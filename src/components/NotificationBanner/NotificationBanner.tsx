import React, {useEffect} from 'react';
import {MdOutlineClose} from 'react-icons/md';
import {Transition} from '@headlessui/react';
import {useAppDispatch, useAppSelector} from '../../store/hooks.ts';
import {onHide} from '../../store/notification/notificationSlice.ts';

const NotificationBanner = (): React.JSX.Element => {
  const notificationState = useAppSelector((state) => state.notification);
  const dispatch = useAppDispatch();

  const {isVisible, notification} = notificationState;

  useEffect(() => {
    if (!isVisible) {
      return;
    }

    const hideTimeout = setTimeout(() => {
      dispatch(onHide());
    }, 5000);

    return () => {
      clearTimeout(hideTimeout);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible, notification]);

  const handleHideNotification = () => {
    dispatch(onHide());
  };

  return (
    <Transition
      className={'absolute bottom-0 left-0 right-0 ml-auto mr-auto w-[32rem] max-w-full'}
      show={isVisible}
      enter="transition-all ease-in-out duration-1000"
      enterFrom="opacity-0 translate-y-8"
      enterTo="opacity-100 translate-y-0"
      leave="transition-all ease-in-out duration-700"
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 translate-y-16"
      beforeEnter={() => {
        document.body.style.overflowY = 'hidden';
      }}
      afterEnter={() => {
        document.body.style.overflowY = 'auto';
      }}
      beforeLeave={() => {
        document.body.style.overflowY = 'hidden';
      }}
      afterLeave={() => {
        setTimeout(() => {
          document.body.style.overflowY = 'auto';
        }, 0);
      }}>
      {notification && (
        <div
          className={`rounded-2xl border p-6 text-white 
            ${notification.type.background} ${notification.type.border}`}>
          <div className="flex justify-between gap-4">
            {notification.type.icon}
            <div className="flex flex-col w-3/4">
              <p className="text-xl font-medium">{notification.title ?? ''}</p>
              <p className="whitespace-pre-wrap text-lg font-light">
                {notification.message ?? ''}
              </p>
            </div>
            <MdOutlineClose
              className="h-7 w-7 cursor-pointer opacity-60 hover:opacity-100"
              onClick={handleHideNotification}
            />
          </div>
        </div>
      )}
    </Transition>
  );
};

export default NotificationBanner;
