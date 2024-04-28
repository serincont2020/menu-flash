import { PedidosData } from "src/pedidos/entity/pedidos.entity"


export class CreateTypeOrderDto { 
    nombre_tipo_pedido: string
    pedidos : PedidosData
}