import { Type } from 'class-transformer';
import {
  IsArray,
  IsDefined,
  IsEmail,
  IsNotEmpty,
  IsNotEmptyObject,
  IsObject,
  IsString,
  IsUUID,
  Matches,
  ValidateNested,
} from 'class-validator';
import { AlbumEntity } from '../../albums/entities/album.entity';

import { ERROR_MESSAGES, RegularExpressions } from '../../helpers/constants';
import { PhotoEntity } from '../entities/photo.entity';
import { UserDto } from './user.dto';

export class UpdateUserQueryDto {
  @IsUUID()
  @IsString()
  @IsNotEmpty({ message: ERROR_MESSAGES.INVALID_REQUIRED_QUERY })
  id: string;
}

export class UpdateUserBodyDto implements Omit<UserDto, 'password'> {
  @IsUUID()
  @IsString()
  @IsNotEmpty({ message: ERROR_MESSAGES.INVALID_REQUIRED_FIELD })
  userID: string;

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

  @IsDefined()
  @IsObject()
  @IsNotEmptyObject(
    { nullable: false },
    { message: ERROR_MESSAGES.INVALID_REQUIRED_FIELD },
  )
  @Type(() => PhotoEntity)
  photo: PhotoEntity;

  @IsArray()
  @IsNotEmpty({ message: ERROR_MESSAGES.INVALID_REQUIRED_FIELD })
  @ValidateNested({ each: true })
  @Type(() => AlbumEntity)
  albums: AlbumEntity[];
}
