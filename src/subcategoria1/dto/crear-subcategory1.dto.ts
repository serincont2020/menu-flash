import { CategoriaData } from "src/categoria/entity/categoria.entity"
import { RecetaSubData } from "src/receta_sub1/entity/receta_sub1.entity"
import { UsuariosData } from "src/usuarios/entity/usuarios.entity"

export class CreateSubcategoryDto { 
    id_receta: RecetaSubData
    nombre: string
    precioProducto: number
    id_categoria : CategoriaData
}