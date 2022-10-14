import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ResponseDto } from '../@types';
import { AlbumEntity } from '../albums/entities/album.entity';
import { CreateStickerDto } from './dto/create-sticker-dto';
import { StickerDto } from './dto/sticker.dto';
import { StickerEntity } from './entities/sticker.entity';

@Injectable()
export class StickersService {
  constructor(
    @InjectRepository(StickerEntity)
    private readonly stickersRepository: Repository<StickerEntity>,

    @InjectRepository(AlbumEntity)
    private readonly albumsRepository: Repository<AlbumEntity>,
  ) {}

  async create(sticker: CreateStickerDto): Promise<ResponseDto<StickerEntity>> {
    const newSticker = this.stickersRepository.create(sticker);
    await this.stickersRepository.save(newSticker);

    return {
      message: `The sticker '${newSticker.playerName}' was added successfully`,
      data: newSticker,
    };
  }

  async findAll(): Promise<ResponseDto<StickerDto[]>> {
    const data = await this.stickersRepository.find();

    return {
      message: 'Got all stickers successfully',
      data,
    };
  }

  async findOne(id: string): Promise<ResponseDto<StickerDto>> {
    const sticker = await this.stickersRepository.findOneBy({ stickerID: id });

    if (!sticker?.stickerID) {
      throw new HttpException(
        "This sticker don't exists in the database",
        HttpStatus.NOT_FOUND,
      );
    }

    return {
      message: `The sticker with the id: '${id}' was got successfully`,
      data: sticker,
    };
  }

  async update(
    id: string,
    updatedSticker: Partial<StickerDto>,
  ): Promise<ResponseDto<Partial<StickerDto>>> {
    const oldSticker = await this.stickersRepository.findOneBy({
      stickerID: id,
    });

    if (!oldSticker?.stickerID) {
      throw new HttpException(
        "This sticker don't exists in the database",
        HttpStatus.NOT_FOUND,
      );
    }

    await this.stickersRepository.save({
      ...oldSticker,
      ...updatedSticker,
    });

    return {
      message: `The sticker was updated successfully`,
      data: updatedSticker,
    };
  }

  async remove(id: string): Promise<ResponseDto<StickerDto[]>> {
    const sticker = await this.stickersRepository.findOneBy({ stickerID: id });

    if (!sticker.stickerID) {
      throw new HttpException(
        "This sticker don't exists in the database",
        HttpStatus.NOT_FOUND,
      );
    }

    const albums = await this.albumsRepository.find();
    albums.forEach(async (album) => await this.albumsRepository.remove(album));

    await this.stickersRepository.remove(sticker);

    const data = await this.stickersRepository.find();

    return {
      message: `The sticker with the id: '${id}' was removed successfully`,
      data,
    };
  }
}
