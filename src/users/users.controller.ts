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
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserBodyDto, UpdateUserQueryDto } from './dto/update-user-dto';
import { UsersService } from './users.service';

@Controller('/api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/create')
  create(@Body() newUser: CreateUserDto) {
    return this.usersService.create(newUser);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch('/edit')
  update(
    @Query() { id }: UpdateUserQueryDto,
    @Body() updatedUser: UpdateUserBodyDto,
  ) {
    return this.usersService.update(id, updatedUser);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
