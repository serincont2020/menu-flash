import { CreateSubcategory3Dto } from "./crear-subcategory3.dto";
import { PartialType } from '@nestjs/mapped-types'


export class UpdateSubcategory3Dto extends PartialType(CreateSubcategory3Dto) {}

