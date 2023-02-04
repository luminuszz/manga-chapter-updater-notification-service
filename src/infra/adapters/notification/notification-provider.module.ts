import { Module } from '@nestjs/common';
import { NotificationProvider } from '@app/ports/notification-provider';
import { TelegramService } from '@infra/adapters/notification/telegram/telegram.service';
import { TelegramModule } from '@infra/adapters/notification/telegram/telegram.module';
import { MessagingModule } from '@infra/messaging/messaging.module';

@Module({
  imports: [TelegramModule, MessagingModule],
  providers: [
    {
      provide: NotificationProvider,
      useClass: TelegramService,
    },
  ],

  exports: [NotificationProvider],
})
export class NotificationProviderModule {}
