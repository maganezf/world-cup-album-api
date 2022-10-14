import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { StickerEntity } from '../../stickers/entities/sticker.entity';
import { UserEntity } from '../../users/entities/user.entity';

@Entity({ name: 'album' })
export class AlbumEntity {
  @PrimaryGeneratedColumn('uuid')
  albumID: string;

  @Column({ type: 'text', nullable: false })
  name: string;

  @ManyToOne(() => UserEntity, (user) => user.userID, { onDelete: 'CASCADE' })
  userID: string;

  @ManyToMany(() => StickerEntity, (sticker) => sticker)
  @JoinTable()
  stickers: StickerEntity[];
}
