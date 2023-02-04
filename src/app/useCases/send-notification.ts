import { Notification } from '../entities/notification';
import { NotificationRepository } from '@app/repositories/notification-repository';
import { Injectable } from '@nestjs/common';
import { NotificationProvider } from '@app/ports/notification-provider';

type SendNotificationDto = {
  recipient_id: string;
  content: string;
};
type SendNotificationResponse = {
  notification: Notification;
};

@Injectable()
export class SendNotification {
  constructor(
    private readonly notificationRepository: NotificationRepository,
    private readonly notificationProvider: NotificationProvider,
  ) {}
  async execute({
    content,
    recipient_id,
  }: SendNotificationDto): Promise<SendNotificationResponse> {
    const notification = new Notification({
      read_at: undefined,
      content,
      recipient_id,
    });

    const notificationExists =
      await this.notificationRepository.findNotificationByNameAndCaption({
        chapter: content,
        title: content,
      });

    if (!notificationExists) {
      await this.notificationProvider.sendNotification({
        content,
        recipient_id,
      });

      await this.notificationRepository.create(notification);

      return {
        notification,
      };
    } else {
      return {
        notification: notificationExists,
      };
    }
  }
}
