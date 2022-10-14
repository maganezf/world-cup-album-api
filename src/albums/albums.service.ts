import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ResponseDto } from '../@types';
import { AlbumDto } from './dto/album.dto';
import { CreateAlbumDto } from './dto/create-album.dto';
import { AlbumEntity } from './entities/album.entity';

@Injectable()
export class AlbumsService {
  constructor(
    @InjectRepository(AlbumEntity)
    private readonly albumsRepository: Repository<AlbumEntity>,
  ) {}

  async create(album: CreateAlbumDto): Promise<ResponseDto<AlbumEntity>> {
    const newAlbum = this.albumsRepository.create(album);
    await this.albumsRepository.save(newAlbum);

    return {
      message: `The album '${newAlbum.name}' was created successfully`,
      data: newAlbum,
    };
  }

  async findAll(): Promise<ResponseDto<AlbumDto[]>> {
    const data = await this.albumsRepository.find();

    return {
      message: 'Got all albums successfully',
      data,
    };
  }

  async findOne(id: string): Promise<ResponseDto<AlbumDto>> {
    const album = await this.albumsRepository.findOneBy({ albumID: id });

    if (!album?.albumID) {
      throw new HttpException(
        "This album doesn't exists in the database",
        HttpStatus.NOT_FOUND,
      );
    }

    return {
      message: `The album with the id: '${id}' was got successfully`,
      data: album,
    };
  }

  async update(
    id: string,
    updatedAlbum: Partial<AlbumDto>,
  ): Promise<ResponseDto<Partial<AlbumDto>>> {
    const oldAlbum = await this.albumsRepository.findOneBy({
      albumID: id,
    });

    if (!oldAlbum?.albumID) {
      throw new HttpException(
        "This album doesn't exists in the database",
        HttpStatus.NOT_FOUND,
      );
    }

    await this.albumsRepository.save({
      ...oldAlbum,
      ...updatedAlbum,
    });

    return {
      message: `The album was updated successfully`,
      data: { ...oldAlbum, ...updatedAlbum },
    };
  }

  async remove(id: string): Promise<ResponseDto<AlbumDto[]>> {
    const album = await this.albumsRepository.findOneBy({ albumID: id });

    if (!album) {
      throw new HttpException(
        "This album doesn't exists in the database",
        HttpStatus.NOT_FOUND,
      );
    }

    await this.albumsRepository.remove(album);

    const data = await this.albumsRepository.find();

    return {
      message: `The album with the id: '${id}' was removed successfully`,
      data,
    };
  }
}
