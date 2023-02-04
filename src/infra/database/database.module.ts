import { Module } from '@nestjs/common';
import { PrismaService } from '@infra/database/prisma/prisma.service';
import { NotificationRepository } from '@app/repositories/notification-repository';
import { PrismaNotificationRepository } from '@infra/database/prisma/prisma-notification.repository';

@Module({
  imports: [],
  providers: [
    PrismaService,
    { provide: NotificationRepository, useClass: PrismaNotificationRepository },
  ],
  exports: [NotificationRepository],
})
export class DatabaseModule {}
