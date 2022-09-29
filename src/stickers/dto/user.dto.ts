import { AlbumEntity } from '../entities/album.entity';

export class UserDto {
  userID: string;
  name: string;
  email: string;
  photoID: string;
  albums: AlbumEntity[];
}
