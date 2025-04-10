import { TableMovies } from 'src/entities/table.movies.entity';
import { DataSourceOptions } from 'typeorm';

export const config: DataSourceOptions = {
  type: 'sqlite',
  database: '.db/sql',
  synchronize: true,
  entities: [TableMovies]  
};