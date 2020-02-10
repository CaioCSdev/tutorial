import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Cat } from "./cats.entity";

@Injectable()
export class CatService {
  constructor(
      @InjectRepository(Cat)
    private readonly catRepository: Repository<Cat>,
  ) {}

  findAll(): Promise<Cat[]> {
    return this.catRepository.find();
  }
}
