import { Test, TestingModule } from '@nestjs/testing';
import { CatsController } from './cats.controller';

describe('Cats Controller', () => {
  let controller: CatsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CatsController],
    }).compile();

    controller = module.get<CatsController>(CatsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('#show all', () => {
    it('shows a message displaing all cats', () => {
      expect(controller.showAll()).toEqual('there are lots of cats');
    })
  });
});
