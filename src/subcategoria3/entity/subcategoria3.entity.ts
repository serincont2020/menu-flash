import { CategoriaData } from "src/categoria/entity/categoria.entity"
import { RecetaSub3Data } from "src/receta_sub3/entity/receta_sub3.entity"
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"


@Entity()
export class Subcategoria3Data {
    @PrimaryGeneratedColumn()
    id_subproducto3: number

    @ManyToOne(()=> RecetaSub3Data, (receta)=> receta.id_subcategoria3)
    @JoinColumn({name: 'id_receta'})
    id_receta: RecetaSub3Data[]

    @Column()
    nombre: string

    @Column()
    precioProducto: number

    @OneToMany(()=> CategoriaData, (categoria)=> categoria.id_subproducto3)
    id_categoria : CategoriaData[]
}