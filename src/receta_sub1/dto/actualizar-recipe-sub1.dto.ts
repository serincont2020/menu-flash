import { CreateRecipeSub1Dto } from "./crear-recipe-sub1.dto";
import { PartialType } from '@nestjs/mapped-types'


export class UpdateRecipeSub1Dto extends PartialType(CreateRecipeSub1Dto) {}

