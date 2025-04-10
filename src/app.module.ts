import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ProducerController } from './producers/controller/producer.controller';
import { ProducerService } from './producers/service/producer.service';
import { ReadCSVService } from './producers/service/read.csv.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './configurations/ormconfig';
import { TableMovies } from './entities/table.movies.entity';
import { ProducerRepository } from './producers/reposotiries/producer.repository';
import { SaveMiddleware } from './utils/save.middleware';

@Module({
  imports: [TypeOrmModule.forRoot(config ), TypeOrmModule.forFeature([TableMovies])],
  controllers: [ProducerController],
  providers: [ProducerService, ReadCSVService, ProducerRepository],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(SaveMiddleware)
      .forRoutes('cats');
  }
}