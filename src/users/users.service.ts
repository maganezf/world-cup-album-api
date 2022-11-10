import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import type { ResponseDto } from '../@types';
import { UserEntity } from '../users/entities/user.entity';
import type { CreateUserDto } from './dto/create-user.dto';
import type { UserDto } from './dto/user.dto';
import { PhotoEntity } from './entities/photo.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly usersRepository: Repository<UserEntity>,

    @InjectRepository(PhotoEntity)
    private readonly photoRepository: Repository<PhotoEntity>,
  ) {}

  async create(user: CreateUserDto): Promise<ResponseDto<UserEntity>> {
    const photo = this.photoRepository.create({
      url: 'https://www.borapescar.com/wp-content/uploads/2017/11/baiacu-pintado-1.jpg',
    });
    const newUser = this.usersRepository.create({
      albums: user.albums || [],
      ...user,
      photo,
    });
    await this.usersRepository.save(newUser);

    return {
      message: `The user '${newUser.name}' was created successfully`,
      data: newUser,
    };
  }

  async findAll(): Promise<ResponseDto<UserDto[]>> {
    const data = await this.usersRepository.find();

    return {
      message: 'Got all users successfully',
      data,
    };
  }

  async findOne(id: string): Promise<ResponseDto<UserDto>> {
    const user = await this.usersRepository.findOneBy({ userID: id });

    if (!user?.userID) {
      throw new HttpException(
        "This user doesn't exists in the database",
        HttpStatus.NOT_FOUND,
      );
    }

    return {
      message: `The user with the id: '${id}' was got successfully`,
      data: user,
    };
  }

  async findOneByEmail(email: string): Promise<UserDto> {
    const user = await this.usersRepository.findOneBy({ email });

    if (!user?.email) {
      throw new HttpException(
        "This user doesn't exists in the database",
        HttpStatus.NOT_FOUND,
      );
    }

    return user;
  }

  async update(
    id: string,
    updatedUser: Partial<UserDto>,
  ): Promise<ResponseDto<Partial<UserDto>>> {
    const oldUser = await this.usersRepository.findOneBy({
      userID: id,
    });

    if (!oldUser?.userID) {
      throw new HttpException(
        "This user doesn't exists in the database",
        HttpStatus.NOT_FOUND,
      );
    }

    const user = { ...oldUser, ...updatedUser };
    delete user.password;

    await this.photoRepository.remove(oldUser.photo);
    await this.photoRepository.save(user.photo);
    await this.usersRepository.save(user);

    return {
      message: `The user was updated successfully`,
      data: user,
    };
  }

  async remove(id: string): Promise<ResponseDto<UserDto[]>> {
    const user = await this.usersRepository.findOneBy({ userID: id });

    if (!user) {
      throw new HttpException(
        "This user doesn't exists in the database",
        HttpStatus.NOT_FOUND,
      );
    }

    await this.photoRepository.remove(user.photo);
    await this.usersRepository.remove(user);

    const data = await this.usersRepository.find();

    return {
      message: `The user with the id: '${id}' was removed successfully`,
      data,
    };
  }
}
