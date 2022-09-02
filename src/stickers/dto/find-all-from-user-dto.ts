import { IsNotEmpty, IsString } from 'class-validator';
import { ERROR_MESSAGES } from 'utils/constants';

export class FindAllFromUserDto {
  @IsString()
  @IsNotEmpty({ message: ERROR_MESSAGES.INVALID_REQUIRED_QUERY })
  id: string;
}
