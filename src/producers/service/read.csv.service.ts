import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as csv from 'csv-parser';

@Injectable()
export class ReadCSVService {
  async readCSV(filePath: string): Promise<TableMovies[]> {
    const movies: TableMovies[] = [];
    return new Promise((resolve) => {
      fs.createReadStream(filePath)
        .pipe(csv({ separator: ';' }))
        .on('data', (data) => {
          const movie: TableMovies = {
            year: parseInt(data.year),
            title: data.title,
            studios: data.studios,
            producers: data.producers,
            winner: data.winner == 'yes' ? true : false,
          };
          movies.push(movie);
        })
        .on('end', async () => {
          resolve(movies);
        });

      return movies;
    });
  }
}
