import { CreateSubcategory2Dto } from "./crear-subcategory2.dto";
import { PartialType } from '@nestjs/mapped-types'


export class UpdateSubcategory2Dto extends PartialType(CreateSubcategory2Dto) {}

