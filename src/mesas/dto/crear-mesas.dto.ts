import { RegistroData } from "src/registro/entity/registro.entity"

export class CreateTableDto { 
    num_mesa: number
    registro: RegistroData
    disponible: boolean
}