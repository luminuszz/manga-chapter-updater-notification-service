import { Notification } from '@app/entities/notification';

export type FindNotificationByNameAndCaptionInput = {
  title: string;
  chapter: string | number;
};

export abstract class NotificationRepository {
  abstract create(notification: Notification): Promise<void>;

  abstract findNotificationByNameAndCaption(
    input: FindNotificationByNameAndCaptionInput,
  ): Promise<Notification | null>;
}
