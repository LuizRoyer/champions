import { ApiProperty } from "@nestjs/swagger";

export class Production {
    @ApiProperty()
    year: number;

    @ApiProperty()
    title: string;

    @ApiProperty()
    studios: string;

    @ApiProperty()
    producers: string;
    
    @ApiProperty()
    winner: boolean
}