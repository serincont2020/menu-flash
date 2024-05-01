import { MesasData } from "src/mesas/entity/mesas.entity"
import { PedidosData } from "src/pedidos/entity/pedidos.entity"
import { UsuariosData } from "src/usuarios/entity/usuarios.entity"

export class CreateRegistryDto { 
    id_mesa: MesasData
    id_usuario: UsuariosData
    pedidos : PedidosData
}