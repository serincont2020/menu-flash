import { CategoriaData } from "src/categoria/entity/categoria.entity"
import { RecetaSub2Data } from "src/receta_sub2/entity/receta_sub2.entity"
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"


@Entity()
export class Subcategoria2Data {
    @PrimaryGeneratedColumn()
    id_subproducto2: number

    @ManyToOne(()=> RecetaSub2Data, (receta)=> receta.id_subcategoria2)
    @JoinColumn({name: 'id_receta'})
    id_receta: RecetaSub2Data[]

    @Column()
    nombre: string

    @Column()
    precioProducto: number

    @OneToMany(()=> CategoriaData, (categoria)=> categoria.id_subproducto2)
    id_categoria : CategoriaData[]
}