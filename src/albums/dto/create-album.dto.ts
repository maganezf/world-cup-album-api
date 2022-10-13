import { Type } from 'class-transformer';
import {
  IsArray,
  IsNotEmpty,
  IsString,
  IsUUID,
  ValidateNested,
} from 'class-validator';
import { StickerEntity } from '../../stickers/entities/sticker.entity';
import { ERROR_MESSAGES } from '../../utils/constants';
import { AlbumDto } from './album.dto';

export class CreateAlbumDto implements Omit<AlbumDto, 'albumID'> {
  @IsString()
  @IsNotEmpty({ message: ERROR_MESSAGES.INVALID_REQUIRED_FIELD })
  name: string;

  @IsUUID()
  @IsNotEmpty({ message: ERROR_MESSAGES.INVALID_REQUIRED_FIELD })
  userID: string;

  @IsArray()
  @IsNotEmpty({ message: ERROR_MESSAGES.INVALID_REQUIRED_FIELD })
  @ValidateNested({ each: true })
  @Type(() => StickerEntity)
  stickers: StickerEntity[];
}
