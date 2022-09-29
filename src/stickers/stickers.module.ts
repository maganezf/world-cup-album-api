import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlbumEntity } from './entities/album.entity';
import { PhotoEntity } from './entities/photo.entity';
import { StickerEntity } from './entities/sticker.entity';
import { UserEntity } from './entities/user.entity';
import { StickersController } from './stickers.controller';
import { StickersService } from './stickers.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      StickerEntity,
      UserEntity,
      PhotoEntity,
      AlbumEntity,
    ]),
  ],
  controllers: [StickersController],
  providers: [StickersService],
})
export class StickersModule {}
