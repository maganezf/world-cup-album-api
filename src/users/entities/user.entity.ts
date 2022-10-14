import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AlbumEntity } from '../../albums/entities/album.entity';
import { PhotoEntity } from './photo.entity';

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  userID: string;

  @Column({ type: 'text', nullable: false })
  name: string;

  @Column({ type: 'text', nullable: false })
  email: string;

  @OneToOne(() => PhotoEntity, (photo) => photo, {
    eager: true,
    cascade: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  photo: PhotoEntity;

  @OneToMany(() => AlbumEntity, (album) => album, { onDelete: 'SET NULL' })
  @JoinColumn()
  albums: AlbumEntity[];
}
