import { Injectable } from '@nestjs/common';
import { NotificationRepository } from '@app/repositories/notification-repository';
import { Notification } from '@app/entities/notification';

type FindNotificationByChapterAndTitleDto = {
  title: string;
  chapter: string | number;
};

type FindNotificationByChapterAndTitleResponse = {
  notification: Notification | null;
};

@Injectable()
export class FindNotificationByChapterAndTitle {
  constructor(
    private readonly notificationRepository: NotificationRepository,
  ) {}

  async execute({
    title,
    chapter,
  }: FindNotificationByChapterAndTitleDto): Promise<FindNotificationByChapterAndTitleResponse> {
    const notification =
      await this.notificationRepository.findNotificationByNameAndCaption({
        chapter,
        title,
      });

    return {
      notification: notification || null,
    };
  }
}
