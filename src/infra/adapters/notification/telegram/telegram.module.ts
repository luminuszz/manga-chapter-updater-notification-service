import { Module } from '@nestjs/common';
import { TelegrafProvider } from '@infra/adapters/notification/telegram/telegraf.provider';
import { TelegramService } from '@infra/adapters/notification/telegram/telegram.service';
import { MessagingModule } from '@infra/messaging/messaging.module';

@Module({
  imports: [MessagingModule],
  providers: [TelegrafProvider, TelegramService],
  exports: [TelegramService, TelegrafProvider],
})
export class TelegramModule {}
