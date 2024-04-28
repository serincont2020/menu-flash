import { RegistroData } from "src/registro/entity/registro.entity"
import { UsuariosData } from "src/usuarios/entity/usuarios.entity"

export class CreatePersonDto { 
    identificacion: string
    nombre: string
    apellido: string
    registro: RegistroData
    usuario: UsuariosData
}