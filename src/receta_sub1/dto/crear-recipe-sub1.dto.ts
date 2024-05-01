import { IngredientesData } from "src/ingredientes/entity/ingredientes.entity"
import { SubcategoriaData } from "src/subcategoria1/entity/subcategoria1.entity"

export class CreateRecipeSub1Dto { 
    desc_receta: string
    id_subcategoria1 : SubcategoriaData
    ingredientes: IngredientesData
}