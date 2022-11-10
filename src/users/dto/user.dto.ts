import { StickerDto } from '../../stickers/dto/sticker.dto';
import { UserEntity } from '../entities/user.entity';

export class UserDto implements Omit<UserEntity, 'hashPassword'> {
  userID: string;
  name: string;
  email: string;
  password: string;
  photo: {
    photoID: string;
    url: string;
  };
  albums: {
    albumID: string;
    name: string;
    userID: string;
    stickers: StickerDto[];
  }[];
}
