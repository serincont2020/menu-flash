import { DetallePedidosData } from "src/detalle_pedidos/entity/detalle_pedidos.entity"
import { RegistroData } from "src/registro/entity/registro.entity"
import { TipoFacturaData } from "src/tipo_factura/entity/tipo_factura.entity"
import { TipoPedidoData } from "src/tipo_pedido/entity/tipo_pedido.entity"

export class CreateOrderDto { 
    id_tipo_factura: TipoFacturaData
    id_restaurante: number 
    id_registro: RegistroData
    id_tipo_pedido: TipoPedidoData
    fecha: Date
    detalle_pedido : DetallePedidosData
}