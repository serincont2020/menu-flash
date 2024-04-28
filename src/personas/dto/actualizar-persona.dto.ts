import { CreatePersonDto } from "./crear-persona.dto";
import { PartialType } from '@nestjs/mapped-types'


export class UpdatePersonDto extends PartialType(CreatePersonDto) {}

