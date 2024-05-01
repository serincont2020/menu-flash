import { IngredientesData } from "src/ingredientes/entity/ingredientes.entity"
import { SubcategoriaData } from "src/subcategoria1/entity/subcategoria1.entity"
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"


@Entity()
export class RecetaSubData {
    @PrimaryGeneratedColumn()
    id_receta: number

    @Column()
    desc_receta: string 

    @OneToMany(()=> SubcategoriaData, (subcategoria)=> subcategoria.id_receta)
    id_subcategoria : SubcategoriaData[]

    @ManyToOne(() => IngredientesData, ingredientes => ingredientes.recetaSub)
    @JoinColumn({name: 'ingredientes'})
    ingredientes: IngredientesData[]
}