import {
  FindNotificationByNameAndCaptionInput,
  NotificationRepository,
} from '@app/repositories/notification-repository';
import { Notification } from '@app/entities/notification';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '@infra/database/prisma/prisma.service';

@Injectable()
export class PrismaNotificationRepository implements NotificationRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(notification: Notification): Promise<void> {
    await this.prisma.notification.create({
      data: {
        id: notification.id,
        read_at: notification.read_at,
        content: notification.content,
        recipient_id: notification.recipient_id,
        type: 'Manga',
        created_at: new Date(),
      },
    });
  }

  async findNotificationByNameAndCaption({
    chapter,
    title,
  }: FindNotificationByNameAndCaptionInput): Promise<Notification | null> {
    const response = await this.prisma.notification.findMany({
      where: {
        AND: [
          {
            content: {
              contains: `"title": ${title}`,
            },
          },
          {
            content: {
              contains: `"chapter": ${chapter}`,
            },
          },
        ],
      },
    });

    const domainNotification = new Notification(
      {
        read_at: response[0].read_at,
        content: response[0].content,
        recipient_id: response[0].recipient_id,
      },
      response[0].id,
    );

    return response[0] ? domainNotification : null;
  }
}
