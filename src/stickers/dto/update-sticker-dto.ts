import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ERROR_MESSAGES } from 'utils/constants';

export class UpdateStickerDto {
  @IsUUID()
  @IsString()
  @IsNotEmpty({ message: ERROR_MESSAGES.INVALID_REQUIRED_FIELD })
  id: string;

  @IsString()
  @IsNotEmpty({ message: ERROR_MESSAGES.INVALID_REQUIRED_FIELD })
  playerName: string;

  @IsString()
  @IsNotEmpty({ message: ERROR_MESSAGES.INVALID_REQUIRED_FIELD })
  playerCountry: string;

  @IsString()
  @IsNotEmpty({ message: ERROR_MESSAGES.INVALID_REQUIRED_FIELD })
  ownerName: string;
}
