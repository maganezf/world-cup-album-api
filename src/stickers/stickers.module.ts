import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StickerEntity } from './entities/sticker.entity';
import { StickersController } from './stickers.controller';
import { StickersService } from './stickers.service';

@Module({
  imports: [TypeOrmModule.forFeature([StickerEntity])],
  controllers: [StickersController],
  providers: [StickersService],
})
export class StickersModule {}
