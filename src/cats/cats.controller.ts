import { Controller, Get , Post, Body } from '@nestjs/common';
import { CreateCatDTO } from './dto';
import { CatService } from './cats.service'

@Controller('cats/')
export class CatsController {
  constructor(private readonly catService: CatService) {}

  @Get()
  showAll(): string {
    const message = JSON.stringify(this.catService.findAll());
    return message;
  }

  @Post()
  create(@Body() cat: CreateCatDTO): string {
    const response = {
      cat,
      message: `Olá ${cat.name}, vc só tem ${cat.age} aninhos que ${cat.breed}
      mais bonitinho!!!`
    }

    return JSON.stringify(response);
  }
}
