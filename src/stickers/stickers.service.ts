import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStickerDto } from './dto/create-sticker-dto';
import { StickerDto } from './dto/sticker.dto';
import { StickersResponseDto } from './dto/stickers-response.dto';
import { StickerEntity } from './entities/sticker.entity';

@Injectable()
export class StickersService {
  constructor(
    @InjectRepository(StickerEntity)
    private readonly stickersRepository: Repository<StickerEntity>,
  ) {}

  async create(
    sticker: CreateStickerDto,
  ): Promise<StickersResponseDto<StickerEntity>> {
    const newSticker = this.stickersRepository.create(sticker);
    await this.stickersRepository.save(newSticker);

    return {
      message: `The sticker '${newSticker.playerName}' from the user '${newSticker.ownerName}' was added successfully`,
      data: newSticker,
    };
  }

  async findAll(): Promise<StickersResponseDto<StickerDto[]>> {
    const allData = await this.stickersRepository.find();

    return {
      message: 'Got all stickers successfully',
      allData,
    };
  }

  async findAllStickersFromUser(
    id: string,
  ): Promise<StickersResponseDto<StickerDto[]>> {
    const ownerExists = await this.stickersRepository
      .findOneBy({
        ownerName: id,
      })
      .then((data) => data?.ownerName);

    if (!ownerExists) {
      throw new HttpException(
        "This owner don't exists in the database",
        HttpStatus.NOT_FOUND,
      );
    }

    const allData = await this.stickersRepository.findBy({
      ownerName: id,
    });

    return {
      message: `Got all stickers from the user with the id: '${id}' successfully`,
      allData,
    };
  }

  async findOne(id: string): Promise<StickersResponseDto<StickerDto>> {
    const sticker = await this.stickersRepository.findOneBy({ id });

    if (!sticker?.id) {
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
  ): Promise<StickersResponseDto<Partial<StickerDto>>> {
    const oldSticker = await this.stickersRepository.findOneBy({ id });

    if (!oldSticker?.id) {
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

  async remove(id: string): Promise<StickersResponseDto<StickerDto[]>> {
    const sticker = await this.stickersRepository.findOneBy({ id });

    if (!sticker) {
      throw new HttpException(
        "This sticker don't exists in the database",
        HttpStatus.NOT_FOUND,
      );
    }

    await this.stickersRepository.remove(sticker);

    const allData = await this.stickersRepository.find();

    return {
      message: `The sticker with the id: '${id}' was removed successfully`,
      allData,
    };
  }
}
