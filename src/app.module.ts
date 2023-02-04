import { Module } from '@nestjs/common';
import { SendNotification } from '@app/useCases/send-notification';
import { DatabaseModule } from '@infra/database/database.module';
import { NotificationProviderModule } from '@infra/adapters/notification/notification-provider.module';
import { NotificationController } from '@infra/tcp/notification.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    NotificationProviderModule,
  ],
  controllers: [NotificationController],
  providers: [SendNotification],
})
export class AppModule {}
