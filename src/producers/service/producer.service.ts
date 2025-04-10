import { Injectable } from "@nestjs/common";
import { Champions } from "src/views/champions";
import { Classification } from "src/views/classification";
import { Production } from "src/views/productions";
import { ProducerRepository } from "../reposotiries/producer.repository";

@Injectable()

export class ProducerService {

  constructor(   
    private readonly repository: ProducerRepository
  ) { }

  async getClassification(): Promise<Classification> {
    
    const champions = await this.repository.findAll();
    return this.findProducersWithIntervals(champions);
  }

  async getProductions(): Promise<Production[]> {

    return this.repository.findAll();
  }

  findProducersWithIntervals = async (movies: TableMovies[]) => {
    const producersWithIntervals: Champions[] = [];

    movies.forEach((movie) => {
      const producer = movie.producers;
      const year = movie.year;

      const previousMovie = movies.find((m) => m.producers === producer && m.year < year);
      if (previousMovie) {
        const interval = year - previousMovie.year;
        producersWithIntervals.push({ producer, interval, previousWin: previousMovie.year, followingWin: year });
      }
    });

    const minIntervals = producersWithIntervals.filter((interval) => interval.interval === Math.min(...producersWithIntervals.map((i) => i.interval)));
    const maxIntervals = producersWithIntervals.filter((interval) => interval.interval === Math.max(...producersWithIntervals.map((i) => i.interval)));

    return {
      min: minIntervals,
      max: maxIntervals,
    };
  };
}