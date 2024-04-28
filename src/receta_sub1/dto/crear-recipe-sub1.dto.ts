import { IngredientesData } from "src/ingredientes/entity/ingredientes.entity"
import { Subcategoria1Data } from "src/subcategoria1/entity/subcategoria1.entity"

export class CreateRecipeSub1Dto { 
    desc_receta: string
    id_subcategoria1 : Subcategoria1Data
    ingredientes: IngredientesData
}