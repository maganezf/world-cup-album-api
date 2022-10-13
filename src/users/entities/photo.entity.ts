import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'photo' })
export class PhotoEntity {
  @PrimaryGeneratedColumn('uuid')
  photoID: string;

  @Column({ type: 'text', nullable: false })
  url: string;
}
