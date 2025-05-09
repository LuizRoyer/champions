import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TableMovies {
  @PrimaryGeneratedColumn()
  id?: number;
  @Column()
  year: number;
  @Column()
  title: string;
  @Column()
  studios: string;
  @Column()
  producers: string;
  @Column()
  winner: boolean;
}
