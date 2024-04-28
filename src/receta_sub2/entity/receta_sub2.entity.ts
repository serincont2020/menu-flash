import { IngredientesData } from "src/ingredientes/entity/ingredientes.entity"
import { Subcategoria2Data } from "src/subcategoria2/entity/subcategoria2.entity"
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"


@Entity()
export class RecetaSub2Data {
    @PrimaryGeneratedColumn()
    id_receta: number

    @Column()
    desc_receta: string 

    @OneToMany(()=> Subcategoria2Data, (subcategoria)=> subcategoria.id_receta)
    id_subcategoria2 : Subcategoria2Data[]

    @ManyToOne(() => IngredientesData, ingredientes => ingredientes.recetaSub1)
    @JoinColumn({name: 'ingredientes'})
    ingredientes: IngredientesData[]
}