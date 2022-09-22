import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { StickerEntity } from './entities/sticker.entity';
import { StickersController } from './stickers.controller';
import { StickersService } from './stickers.service';

describe('StickersController', () => {
  let stickersController: StickersController;
  let stickersService: StickersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StickersController],
      providers: [
        StickersService,
        {
          provide: getRepositoryToken(StickerEntity),
          useValue: {},
        },
      ],
    }).compile();

    stickersController = module.get<StickersController>(StickersController);
    stickersService = module.get<StickersService>(StickersService);
  });

  it('should be defined', () => {
    expect(stickersController).toBeDefined();
    expect(stickersService).toBeDefined();
  });
});
