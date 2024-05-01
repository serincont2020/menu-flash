import { RecetaSubData } from "src/receta_sub1/entity/receta_sub1.entity"

export class CreateIngredientsDto { 
    nombre_ingrediente: string
    cantidad: number
    recetaSub: RecetaSubData
}