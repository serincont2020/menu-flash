import { RecetaSubData } from "src/receta_sub1/entity/receta_sub1.entity"
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class IngredientesData {
    @PrimaryGeneratedColumn()
    id_ingrediente: number

    @Column()
    nombre_ingrediente: string

    @Column()
    cantidad: number

    @OneToMany(() => RecetaSubData, recetaSub => recetaSub.ingredientes)
    recetaSub: RecetaSubData

}