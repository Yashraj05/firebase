import { IsNotEmpty, IsString } from 'class-validator';

export class BookDto {
  @IsNotEmpty()
  @IsString()
  readonly title: string;

  @IsNotEmpty()
  @IsString()
  readonly author: string;
}
