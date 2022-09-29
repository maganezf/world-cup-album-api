import { StickerDto } from './sticker.dto';

export class AlbumDto {
  albumID: string;
  name: string;
  userID: string;
  stickers: StickerDto[];
}
