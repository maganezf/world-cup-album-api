import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'sticker' })
export class StickerEntity {
  @PrimaryGeneratedColumn('uuid')
  stickerID: string;

  @Column({ type: 'text', nullable: false })
  playerName: string;

  @Column({ type: 'text', nullable: false })
  playerCountry: string;
}
