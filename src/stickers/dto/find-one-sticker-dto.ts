import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ERROR_MESSAGES } from '../../utils/constants';

export class FindOneStickerDto {
  @IsUUID()
  @IsString()
  @IsNotEmpty({ message: ERROR_MESSAGES.INVALID_REQUIRED_FIELD })
  id: string;
}
