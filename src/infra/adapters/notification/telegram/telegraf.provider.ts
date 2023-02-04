import { ConfigService } from '@nestjs/config';
import { Telegraf } from 'telegraf';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TelegrafProvider {
  public bot: Telegraf;

  constructor(private readonly configService: ConfigService) {
    if (!this.bot) {
      this.bot = new Telegraf(
        this.configService.get('TELEGRAM_NOTIFICATION_BOT'),
      );
    }
  }
}
