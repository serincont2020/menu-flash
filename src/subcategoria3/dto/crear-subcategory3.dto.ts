import { CategoriaData } from "src/categoria/entity/categoria.entity"
import { RecetaSub3Data } from "src/receta_sub3/entity/receta_sub3.entity"

export class CreateSubcategory3Dto { 
    id_receta: RecetaSub3Data
    nombre: string
    precioProducto: number
    id_categoria : CategoriaData
}