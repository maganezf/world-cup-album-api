import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { StickerEntity } from './sticker.entity';
import { UserEntity } from './user.entity';

@Entity({ name: 'album' })
export class AlbumEntity {
  @PrimaryGeneratedColumn('uuid')
  albumID: string;

  @Column({ type: 'text', nullable: false })
  name: string;

  @ManyToOne(() => UserEntity, (user) => user.userID)
  userID: string;

  @ManyToMany(() => StickerEntity, (sticker) => sticker.stickerID)
  @JoinTable()
  stickers: StickerEntity[];
}
