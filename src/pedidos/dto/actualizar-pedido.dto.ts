import { CreateOrderDto } from "./crear-pedido.dto";
import { PartialType } from '@nestjs/mapped-types'


export class UpdateOrderDto extends PartialType(CreateOrderDto) {}

