import { BebidasData } from "src/bebidas/entity/bebidas.entity"
import { DetallePedidosData } from "src/detalle_pedidos/entity/detalle_pedidos.entity"
import { Subcategoria1Data } from "src/subcategoria1/entity/subcategoria1.entity"
import { Subcategoria2Data } from "src/subcategoria2/entity/subcategoria2.entity"
import { Subcategoria3Data } from "src/subcategoria3/entity/subcategoria3.entity"

export class CreateCategoryDto { 
    id_subproducto1: Subcategoria1Data
    id_subproducto2: Subcategoria2Data
    id_subproducto3: Subcategoria3Data
    id_bebida: BebidasData
    detalle_pedidos : DetallePedidosData
}