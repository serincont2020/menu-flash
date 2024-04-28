import { CreateRecipeSub2Dto } from "./crear-recipe-sub2.dto";
import { PartialType } from '@nestjs/mapped-types'


export class UpdateRecipeSub2Dto extends PartialType(CreateRecipeSub2Dto) {}

