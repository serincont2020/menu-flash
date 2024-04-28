import { IngredientesData } from "src/ingredientes/entity/ingredientes.entity"
import { Subcategoria3Data } from "src/subcategoria3/entity/subcategoria3.entity"
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"


@Entity()
export class RecetaSub3Data {
    @PrimaryGeneratedColumn()
    id_receta: number

    @Column()
    desc_receta: string  

    @OneToMany(()=> Subcategoria3Data, (subcategoria)=> subcategoria.id_receta)
    id_subcategoria3 : Subcategoria3Data[]

    @ManyToOne(() => IngredientesData, ingredientes => ingredientes.recetaSub1)
    @JoinColumn({name: 'ingredientes'})
    ingredientes: IngredientesData[]
}