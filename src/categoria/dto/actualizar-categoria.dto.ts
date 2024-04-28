import { CreateCategoryDto } from "./crear-categoria.dto";
import { PartialType } from '@nestjs/mapped-types'


export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {}

