import { CategoriaData } from "src/categoria/entity/categoria.entity"
import { PedidosData } from "src/pedidos/entity/pedidos.entity"

export class CreateDetailOrderDto { 
    id_detalle_pedido: number
    id_categoria: CategoriaData
    id_pedido: PedidosData
    sub_total: number
}