import { CategoriaData } from "src/categoria/entity/categoria.entity"

export class CreateDrinkDto { 
    nombreBebida: string
    precioBebida: number
    id_categoria : CategoriaData
}