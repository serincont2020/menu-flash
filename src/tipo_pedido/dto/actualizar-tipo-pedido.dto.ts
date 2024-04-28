import { CreateTypeOrderDto } from "./crear-tipo-pedido.dto";
import { PartialType } from '@nestjs/mapped-types'


export class UpdateTypeOrderDto extends PartialType(CreateTypeOrderDto) {}

