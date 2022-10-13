import { StickerDto } from '../../stickers/dto/sticker.dto';

export class UserDto {
  userID: string;
  name: string;
  email: string;
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
