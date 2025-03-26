import { ApiProperty } from "@nestjs/swagger";

export class Champions {

    @ApiProperty()
    producer: string;
    
    @ApiProperty()
    interval: number;

    @ApiProperty()
    previousWin: number;

    @ApiProperty()
    followingWin: number;
}
