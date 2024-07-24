import { IsString, IsOptional, IsBoolean, Length } from 'class-validator';

export class CreateToDoListDto {
  @IsString()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;
}
