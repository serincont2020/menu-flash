import { CreateDrinkDto } from "./crear-bebidas.dto";
import { PartialType } from '@nestjs/mapped-types'


export class UpdateDrinkDto extends PartialType(CreateDrinkDto) {}

