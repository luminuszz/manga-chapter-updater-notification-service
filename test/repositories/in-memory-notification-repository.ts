import {
  FindNotificationByNameAndCaptionInput,
  NotificationRepository,
} from '@app/repositories/notification-repository';
import { Notification } from '@app/entities/notification';

export class InMemoryNotificationRepository implements NotificationRepository {
  private readonly notifications: Notification[] = [];

  async create(notification: Notification): Promise<void> {
    this.notifications.push(notification);
  }

  async findNotificationByNameAndCaption({
    title,
    chapter,
  }: FindNotificationByNameAndCaptionInput): Promise<Notification | null> {
    const response = this.notifications.filter(
      (item) =>
        item.content.includes(title) &&
        item.content.includes(chapter.toString()),
    );

    return response[0] ? response[0] : null;
  }
}
