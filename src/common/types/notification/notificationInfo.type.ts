import NotificationType from './notification.type.ts';

type NotificationInfo = {
  type: NotificationType;
  title?: string;
  message?: string;
}

export default NotificationInfo;