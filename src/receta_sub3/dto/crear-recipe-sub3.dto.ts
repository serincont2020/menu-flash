import { IngredientesData } from "src/ingredientes/entity/ingredientes.entity"
import { Subcategoria3Data } from "src/subcategoria3/entity/subcategoria3.entity"

export class CreateRecipeSub3Dto { 
    desc_receta: string
    id_subcategoria3 : Subcategoria3Data
    ingredientes: IngredientesData
}