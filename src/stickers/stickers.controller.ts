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
import { CreateStickerDto } from './dto/create-sticker-dto';
import { FindAllFromUserDto } from './dto/find-all-from-user-dto';
import {
  UpdateStickerBodyDto,
  UpdateStickerQueryDto,
} from './dto/update-sticker-dto';
import { StickersService } from './stickers.service';

@Controller('/api/stickers')
export class StickersController {
  constructor(private readonly stickersService: StickersService) {}

  @Post('/create')
  create(@Body() newSticker: CreateStickerDto) {
    return this.stickersService.create(newSticker);
  }

  @Get()
  findAll() {
    return this.stickersService.findAll();
  }

  @Get('/all-from-user')
  findAllFromUser(@Query() { id }: FindAllFromUserDto) {
    return this.stickersService.findAllStickersFromUser(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stickersService.findOne(id);
  }

  @Patch('/edit')
  update(
    @Query() { id }: UpdateStickerQueryDto,
    @Body() updatedSticker: UpdateStickerBodyDto,
  ) {
    return this.stickersService.update(id, updatedSticker);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stickersService.remove(id);
  }
}
