import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AlbumsService } from './albums.service';
import { CreateAlbumDto } from './dto/create-album.dto';
import {
  UpdateAlbumBodyDto,
  UpdateAlbumQueryDto,
} from './dto/update-album.dto';

@Controller('/api/albums')
@UseGuards(AuthGuard('jwt'))
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
