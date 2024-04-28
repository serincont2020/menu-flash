import { CreateSubcategory1Dto } from "./crear-subcategory1.dto";
import { PartialType } from '@nestjs/mapped-types'


export class UpdateSubcategory1Dto extends PartialType(CreateSubcategory1Dto) {}

