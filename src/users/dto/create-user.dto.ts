import { Type } from 'class-transformer';
import {
  IsArray,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  ValidateNested,
} from 'class-validator';
import { AlbumEntity } from '../../albums/entities/album.entity';
import { ERROR_MESSAGES, RegularExpressions } from '../../helpers/constants';
import { UserDto } from '../../users/dto/user.dto';

export class CreateUserDto implements Omit<UserDto, 'userID' | 'photo'> {
  @IsString()
  @IsNotEmpty({ message: ERROR_MESSAGES.INVALID_REQUIRED_FIELD })
  name: string;

  @IsString()
  @IsEmail()
  @Matches(RegularExpressions.dcxEmail, {
    message: ERROR_MESSAGES.INVALID_EMAIL,
  })
  @IsNotEmpty({ message: ERROR_MESSAGES.INVALID_REQUIRED_FIELD })
  email: string;

  @IsString()
  @IsNotEmpty({ message: ERROR_MESSAGES.INVALID_PASSWORD })
  password: string;

  @IsArray()
  @IsOptional()
  @ValidateNested()
  @Type(() => AlbumEntity)
  albums: AlbumEntity[];
}
