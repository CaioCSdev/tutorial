import { Controller, Get , Post, Body } from '@nestjs/common';
import { CreateCatDTO } from './dto';

@Controller('cats/')
export class CatsController {
  @Get()
  showAll(): string {
    return 'there are lots of cats'
  }

  @Post()
  create(@Body() cat: CreateCatDTO): string {
    return `Olá ${cat.name}`
  }
}
