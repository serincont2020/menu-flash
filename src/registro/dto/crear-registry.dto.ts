import { MesasData } from "src/mesas/entity/mesas.entity"
import { PedidosData } from "src/pedidos/entity/pedidos.entity"
import { PersonasData } from "src/personas/entity/personas.entity"

export class CreateRegistryDto { 
    id_mesa: MesasData
    id_persona: PersonasData
    pedidos : PedidosData
}