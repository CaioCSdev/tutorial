import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CatService } from './cats/cats.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { Cat } from './cats/cats.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '0.0.0.0',
      port: 3306,
      database: 'test',
      username: 'root',
      password: '',
      entities: [Cat],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Cat]),
  ],
  controllers: [AppController, CatsController],
  providers: [AppService, CatService],
})

export class AppModule {
  constructor(private readonly connection: Connection) {}
}
