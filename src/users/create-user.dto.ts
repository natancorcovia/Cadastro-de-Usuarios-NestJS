import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  id: number;

  @IsNotEmpty({ message: 'O nome é obrigatório' })
  name: string;

  @IsEmail({}, { message: 'Email inválido' })
  email: string;
}
