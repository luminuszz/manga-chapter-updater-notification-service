export type SendNotificationDto = {
  recipient_id: string;
  content: string;
};

export abstract class NotificationProvider {
  abstract sendNotification(data: SendNotificationDto): Promise<void>;
}
