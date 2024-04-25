import { IngredientesData } from "src/ingredientes/entity/ingredientes.entity"
import { Subcategoria1Data } from "src/subcategoria1/entity/subcategoria1.entity"
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"


@Entity()
export class RecetaSub1Data {
    @PrimaryGeneratedColumn()
    id_receta: number

    @Column()
    desc_receta: string 

    @OneToMany(()=> Subcategoria1Data, (subcategoria)=> subcategoria.id_receta)
    id_subcategoria1 : Subcategoria1Data[]

    @OneToOne(() => IngredientesData, ingredientes => ingredientes.recetaSub1)
    @JoinColumn()
    ingredientes: IngredientesData
}