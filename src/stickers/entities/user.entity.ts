import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AlbumEntity } from './album.entity';
import { PhotoEntity } from './photo.entity';

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  userID: string;

  @Column({ type: 'text', nullable: false })
  name: string;

  @Column({ type: 'text', nullable: false })
  email: string;

  @OneToOne(() => PhotoEntity, (photo) => photo)
  @JoinColumn()
  photo: PhotoEntity;

  @OneToMany(() => AlbumEntity, (album) => album, { onDelete: 'SET NULL' })
  albums: AlbumEntity[];
}
