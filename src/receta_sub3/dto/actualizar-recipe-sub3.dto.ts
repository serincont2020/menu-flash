import { CreateRecipeSub3Dto } from "./crear-recipe-sub3.dto";
import { PartialType } from '@nestjs/mapped-types'


export class UpdateRecipeSub3Dto extends PartialType(CreateRecipeSub3Dto) {}

