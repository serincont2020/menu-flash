import { CategoriaData } from "src/categoria/entity/categoria.entity"
import { RecetaSubData } from "src/receta_sub1/entity/receta_sub1.entity"
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"


@Entity()
export class SubcategoriaData {
    @PrimaryGeneratedColumn()
    id_subcategoria: number

    @ManyToOne(()=> RecetaSubData, (receta)=> receta.id_subcategoria)
    @JoinColumn({name: 'id_receta'})
    id_receta: RecetaSubData[]

    @Column()
    nombre: string

    @Column()
    precioProducto: number

    @OneToMany(()=> CategoriaData, (categoria)=> categoria.id_subcategoria)
    id_categoria : CategoriaData[]
}