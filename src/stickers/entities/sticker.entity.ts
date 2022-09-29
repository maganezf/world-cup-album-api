import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AlbumEntity } from './album.entity';

@Entity({ name: 'sticker' })
export class StickerEntity {
  @PrimaryGeneratedColumn('uuid')
  stickerID: string;

  @Column({ type: 'text', nullable: false })
  playerName: string;

  @Column({ type: 'text', nullable: false })
  playerCountry: string;

  @Column({ type: 'text', nullable: false })
  ownerName: string;

  @ManyToMany(() => AlbumEntity, (album) => album.albumID)
  albums: AlbumEntity[];
}
