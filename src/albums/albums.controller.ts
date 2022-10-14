import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { AlbumsService } from './albums.service';
import { CreateAlbumDto } from './dto/create-album.dto';
import {
  UpdateAlbumBodyDto,
  UpdateAlbumQueryDto,
} from './dto/update-album.dto';

@Controller('/api/albums')
export class AlbumsController {
  constructor(private readonly albumsService: AlbumsService) {}

  @Post('/create')
  create(@Body() newAlbum: CreateAlbumDto) {
    return this.albumsService.create(newAlbum);
  }

  @Get()
  findAll() {
    return this.albumsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.albumsService.findOne(id);
  }

  @Patch('/edit')
  update(
    @Query() { id }: UpdateAlbumQueryDto,
    @Body() updatedAlbum: UpdateAlbumBodyDto,
  ) {
    return this.albumsService.update(id, updatedAlbum);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.albumsService.remove(id);
  }
}
