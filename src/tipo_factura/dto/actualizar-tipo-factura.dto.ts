import { CreateTypeBillDto } from "./crear-tipo-factura.dto";
import { PartialType } from '@nestjs/mapped-types'


export class UpdateTypeBillDto extends PartialType(CreateTypeBillDto) {}

