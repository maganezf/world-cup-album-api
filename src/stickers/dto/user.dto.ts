import { AlbumEntity } from '../../albums/entities/album.entity';

export class UserDto {
  userID: string;
  name: string;
  email: string;
  photoID: string;
  albums: AlbumEntity[];
}
