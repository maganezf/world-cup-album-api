import { Type } from 'class-transformer';
import {
  IsArray,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { AlbumEntity } from '../../albums/entities/album.entity';

import { UserDto } from '../../users/dto/user.dto';
import { ERROR_MESSAGES } from '../../utils/constants';

export class CreateUserDto implements Omit<UserDto, 'userID' | 'photo'> {
  @IsString()
  @IsNotEmpty({ message: ERROR_MESSAGES.INVALID_REQUIRED_FIELD })
  name: string;

  @IsString()
  @IsEmail()
  @IsNotEmpty({ message: ERROR_MESSAGES.INVALID_REQUIRED_FIELD })
  email: string;

  @IsArray()
  @IsOptional()
  @ValidateNested()
  @Type(() => AlbumEntity)
  albums: AlbumEntity[];
}
