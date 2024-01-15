const NotificationType = {
  Success: 'SUCCESS',
  Error: 'ERROR',
  Warning: 'WARNING',
  Information: 'INFORMATION'
} as const;

type NotificationType = (typeof NotificationType)[keyof typeof NotificationType];

export default NotificationType;
