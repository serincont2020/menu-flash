import { RecetaSub1Data } from "src/receta_sub1/entity/receta_sub1.entity"
import { RecetaSub2Data } from "src/receta_sub2/entity/receta_sub2.entity"
import { RecetaSub3Data } from "src/receta_sub3/entity/receta_sub3.entity"
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class IngredientesData {
    @PrimaryGeneratedColumn()
    id_ingrediente: number

    @Column()
    nombre_ingrediente: string

    @Column()
    cantidad: number

    @OneToMany(() => RecetaSub1Data, recetaSub1 => recetaSub1.ingredientes)
    recetaSub1: RecetaSub1Data;

    @OneToMany(() => RecetaSub2Data, recetaSub2 => recetaSub2.ingredientes)
    recetaSub2: RecetaSub2Data;

    @OneToMany(() => RecetaSub3Data, recetaSub3 => recetaSub3.ingredientes)
    recetaSub3: RecetaSub3Data

}