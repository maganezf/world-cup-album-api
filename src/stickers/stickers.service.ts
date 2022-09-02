import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateStickerDto } from './dto/create-sticker-dto';
import { StickerDto } from './dto/sticker.dto';
import { StickersResponseDto } from './dto/stickers-response.dto';

@Injectable()
export class StickersService {
  localDb: StickerDto[] = [];

  create(sticker: CreateStickerDto): StickersResponseDto<StickerDto> {
    const newSticker = {
      id: uuid(),
      ...sticker,
    };

    this.localDb.push(newSticker);

    return {
      message: `The sticker '${newSticker.playerName}' from the user '${newSticker.ownerName}' was added successfully`,
      data: newSticker,
    };
  }

  findAll(): StickersResponseDto<StickerDto[]> {
    return {
      message: 'Got all stickers successfully',
      data: this.localDb,
    };
  }

  findAllStickersFromUserDto(id: string): StickersResponseDto<StickerDto[]> {
    return {
      message: `Got all stickers from the user with the id: '${id}' successfully`,
      data: this.localDb.filter((sticker) => sticker.ownerName === id),
    };
  }

  findOne(id: string): StickersResponseDto<StickerDto> {
    const sticker = this.localDb.find((sticker) => sticker.id === id);
    if (!sticker) {
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

  update(
    id: string,
    updatedSticker: Partial<StickerDto>,
  ): StickersResponseDto<Partial<StickerDto>> {
    const oldSticker = this.localDb.find((sticker) => sticker.id === id);
    if (!oldSticker) {
      throw new HttpException(
        "This sticker don't exists in the database",
        HttpStatus.NOT_FOUND,
      );
    }

    this.localDb = this.localDb.filter((sticker) => sticker.id !== id);

    this.localDb.push({
      ...oldSticker,
      ...updatedSticker,
    });

    return {
      message: `The sticker was updated successfully`,
      data: updatedSticker,
    };
  }

  remove(id: string): StickersResponseDto<StickerDto[]> {
    const sticker = this.localDb.find((sticker) => sticker.id === id);
    if (!sticker) {
      throw new HttpException(
        "This sticker don't exists in the database",
        HttpStatus.NOT_FOUND,
      );
    }

    this.localDb = this.localDb.filter((sticker) => sticker.id !== id);

    return {
      message: `The sticker with the id: '${id}' was removed successfully`,
      data: this.localDb,
    };
  }
}
