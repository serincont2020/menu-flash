import { CreateIngredientsDto } from "./crear-ingredientes.dto";
import { PartialType } from '@nestjs/mapped-types'


export class UpdateIngredientsDto extends PartialType(CreateIngredientsDto) {}

