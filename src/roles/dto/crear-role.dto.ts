import { UsuariosData } from "src/usuarios/entity/usuarios.entity"

export class CreateRoleDto { 
    rol: string
    usuario: UsuariosData
}