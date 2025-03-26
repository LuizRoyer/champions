import { Module } from '@nestjs/common';
import { ProducerController } from './producers/controller/producer.controller';
import { ProducerService } from './producers/service/producer.service';
import {  ReadCSV } from './producers/service/read.csv.service';

@Module({
  imports: [],
  controllers: [ProducerController],
  providers: [ProducerService, ReadCSV],
})
export class AppModule {}
