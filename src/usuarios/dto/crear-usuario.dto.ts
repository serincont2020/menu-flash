import { RolesData } from "src/roles/entity/roles.entity"

export class CreateUserDto {
    id_rol?: RolesData    
    nombre?: string   
    usuario?: string
    contraseña?: string
}

export class LoginUserDto {
    usuario?: string
    contraseña?: string
}