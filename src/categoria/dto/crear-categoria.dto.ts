import { BebidasData } from "src/bebidas/entity/bebidas.entity"
import { DetallePedidosData } from "src/detalle_pedidos/entity/detalle_pedidos.entity"
import { SubcategoriaData } from "src/subcategoria1/entity/subcategoria1.entity"

export class CreateCategoryDto { 
    id_subproducto: SubcategoriaData
    id_bebida: BebidasData
    detalle_pedidos : DetallePedidosData
}