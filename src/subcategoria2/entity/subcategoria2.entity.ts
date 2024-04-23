import { CategoriaData } from "src/categoria/entity/categoria.entity"
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"


@Entity()
export class Subcategoria2Data {
    @PrimaryGeneratedColumn()
    id_subproducto2: number

    @Column()
    id_receta: number  // relacion manytoone con recetaSub1

    @Column()
    nombre: string

    @Column()
    precioProducto: number

    @OneToMany(()=> CategoriaData, (categoria)=> categoria.id_subproducto2)
    id_categoria : CategoriaData[]
}