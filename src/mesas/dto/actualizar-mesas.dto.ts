import { CreateTableDto } from "./crear-mesas.dto";
import { PartialType } from '@nestjs/mapped-types'


export class UpdateTableDto extends PartialType(CreateTableDto) {}

