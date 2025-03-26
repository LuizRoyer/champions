import {  Controller, Get, HttpStatus } from '@nestjs/common';
import {  ApiBadRequestResponse, ApiInternalServerErrorResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ProducerService } from '../service/producer.service';
import { Classification } from 'src/views/classification';
import { Production } from 'src/views/productions';

@Controller('producer')
@ApiTags('Producers')
export class ProducerController {

    constructor(private readonly producerService: ProducerService) {}

    @Get('champions')
    @ApiResponse({ type: Classification ,status: HttpStatus.OK, description: 'Obter o produtor com maior intervalo entre dois prêmios consecutivos, e o que obteve dois prêmios mais rápido' })
    @ApiBadRequestResponse({ description: 'Bad Gateway' })
    @ApiInternalServerErrorResponse({ description: 'Internal Server Error' })
    async champions(): Promise<Classification> {
       
        return  this.producerService.getClassification()
    }

    @Get('')    
    @ApiResponse({ type: Production ,status: HttpStatus.OK, description: 'ler dados do arquivo csv' })
    @ApiBadRequestResponse({ description: 'Bad Gateway' })
    @ApiInternalServerErrorResponse({ description: 'Internal Server Error' })
    async classification(): Promise<Production[]> {
       
        return  this.producerService.getProductions()
    }
}
