import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StickerEntity } from './entities/sticker.entity';
import { StickersService } from './stickers.service';

describe('StickersService', () => {
  let stickersService: StickersService;
  let stickersRepository: Repository<StickerEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        StickersService,
        {
          provide: getRepositoryToken(StickerEntity),
          useValue: {},
        },
      ],
    }).compile();

    stickersService = module.get<StickersService>(StickersService);
    stickersRepository = module.get<Repository<StickerEntity>>(
      getRepositoryToken(StickerEntity),
    );
  });

  it('should be defined', () => {
    expect(stickersService).toBeDefined();
    expect(stickersRepository).toBeDefined();
  });
});
