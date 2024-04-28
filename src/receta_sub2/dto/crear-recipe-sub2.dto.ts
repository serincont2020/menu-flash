import { IngredientesData } from "src/ingredientes/entity/ingredientes.entity"
import { Subcategoria1Data } from "src/subcategoria1/entity/subcategoria1.entity"

export class CreateRecipeSub2Dto { 
    desc_receta: string
    id_subcategoria2: Subcategoria1Data
    ingredientes: IngredientesData
}