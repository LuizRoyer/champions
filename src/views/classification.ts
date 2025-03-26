import { ApiProperty } from "@nestjs/swagger";
import { Champions } from "./champions";

export class Classification {

    @ApiProperty( {type: [Champions]})
    min: Champions[];
  
    @ApiProperty( {type: [Champions]})
    max: Champions[];
}