import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { ProducerRepository } from 'src/producers/reposotiries/producer.repository';
import { ReadCSVService } from 'src/producers/service/read.csv.service';

@Injectable()
export class SaveMiddleware implements NestMiddleware {
  constructor(
    private readonly csv: ReadCSVService,
    private readonly repository: ProducerRepository,
  ) {}
  async use(req: Request, res: Response, next: NextFunction) {
    await this.repository.createMany(
      await this.csv.readCSV('src/public/movielist.csv'),
    );
    next();
  }
}
