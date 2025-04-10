import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TableMovies } from 'src/entities/table.movies.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class ProducerRepository {
  constructor(
    @InjectRepository(TableMovies)
    private producerRepository: Repository<TableMovies>,
    private dataSource: DataSource,
  ) {}
  async createMany(tableMovies: TableMovies[]) {
    return new Promise((resolve) => {
      for (let i = 0; i < tableMovies.length; i++) {
        this.producerRepository.create({ id: i, ...tableMovies[i] });
      }
      resolve('success');
    });
  }

  findAll(): Promise<TableMovies[]> {
    return this.producerRepository.find();
  }
}
