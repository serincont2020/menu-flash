import { CreateDetailOrderDto } from "./crear-detalle-pedidos.dto";
import { PartialType } from '@nestjs/mapped-types'


export class UpdateDetailOrderDto extends PartialType(CreateDetailOrderDto) {}

