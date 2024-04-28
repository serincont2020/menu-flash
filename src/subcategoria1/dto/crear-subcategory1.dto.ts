import { CategoriaData } from "src/categoria/entity/categoria.entity"
import { RecetaSub1Data } from "src/receta_sub1/entity/receta_sub1.entity"
import { UsuariosData } from "src/usuarios/entity/usuarios.entity"

export class CreateSubcategory1Dto { 
    id_receta: RecetaSub1Data
    nombre: string
    precioProducto: number
    id_categoria : CategoriaData
}