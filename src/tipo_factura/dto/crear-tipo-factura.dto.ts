import { PedidosData } from "src/pedidos/entity/pedidos.entity"


export class CreateTypeBillDto { 
    nombre_tipo_factura: string
    pedidos : PedidosData
}