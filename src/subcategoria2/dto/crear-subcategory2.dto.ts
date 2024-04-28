import { CategoriaData } from "src/categoria/entity/categoria.entity"
import { RecetaSub2Data } from "src/receta_sub2/entity/receta_sub2.entity"

export class CreateSubcategory2Dto { 
    id_receta: RecetaSub2Data
    nombre: string
    precioProducto: number
    id_categoria : CategoriaData
}