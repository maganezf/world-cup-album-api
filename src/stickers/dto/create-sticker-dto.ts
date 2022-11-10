import { IsNotEmpty, IsString } from 'class-validator';
import { ERROR_MESSAGES } from '../../helpers/constants';
import { StickerDto } from './sticker.dto';

export class CreateStickerDto implements Omit<StickerDto, 'stickerID'> {
  @IsString()
  @IsNotEmpty({ message: ERROR_MESSAGES.INVALID_REQUIRED_FIELD })
  playerName: string;

  @IsString()
  @IsNotEmpty({ message: ERROR_MESSAGES.INVALID_REQUIRED_FIELD })
  playerCountry: string;
}
