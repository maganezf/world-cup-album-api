import { Module } from '@nestjs/common';
import { StickersModule } from './stickers/stickers.module';

@Module({
  imports: [StickersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
