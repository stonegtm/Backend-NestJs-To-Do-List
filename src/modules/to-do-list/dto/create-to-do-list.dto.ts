import { IsString, IsOptional, IsBoolean, Length, IsNotEmpty } from 'class-validator';

export class CreateToDoListDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 255)
  title: string;

  @IsString()
  @IsOptional()
  description?: string;
}
