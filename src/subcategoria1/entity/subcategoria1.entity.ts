import { CategoriaData } from "src/categoria/entity/categoria.entity"
import { RecetaSub1Data } from "src/receta_sub1/entity/receta_sub1.entity"
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"


@Entity()
export class Subcategoria1Data {
    @PrimaryGeneratedColumn()
    id_subproducto1: number

    @ManyToOne(()=> RecetaSub1Data, (receta)=> receta.id_subcategoria1)
    @JoinColumn({name: 'id_receta'})
    id_receta: RecetaSub1Data[]

    @Column()
    nombre: string

    @Column()
    precioProducto: number

    @OneToMany(()=> CategoriaData, (categoria)=> categoria.id_subproducto1)
    id_categoria : CategoriaData[]
}