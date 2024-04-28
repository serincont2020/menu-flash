import { CategoriaData } from "src/categoria/entity/categoria.entity"
import { RecetaSub1Data } from "src/receta_sub1/entity/receta_sub1.entity"
import { RecetaSub2Data } from "src/receta_sub2/entity/receta_sub2.entity"
import { RecetaSub3Data } from "src/receta_sub3/entity/receta_sub3.entity"

export class CreateIngredientsDto { 
    nombre_ingrediente: string
    cantidad: number
    recetaSub1: RecetaSub1Data
    recetaSub2: RecetaSub2Data
    recetaSub3: RecetaSub3Data
}