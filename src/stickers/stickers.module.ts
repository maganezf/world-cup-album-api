import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlbumEntity } from '../albums/entities/album.entity';
import { StickerEntity } from './entities/sticker.entity';
import { StickersController } from './stickers.controller';
import { StickersService } from './stickers.service';

@Module({
  imports: [TypeOrmModule.forFeature([StickerEntity, AlbumEntity])],
  controllers: [StickersController],
  providers: [StickersService],
})
export class StickersModule {}
