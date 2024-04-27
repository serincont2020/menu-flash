import { CreateUserDto } from "./crear-usuario.dto";
import { PartialType } from '@nestjs/mapped-types'


export class UpdateUserDto extends PartialType(CreateUserDto) {}

