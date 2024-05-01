import { CategoriaData } from "src/categoria/entity/categoria.entity"
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"


@Entity()
export class AdicionalesData {
    @PrimaryGeneratedColumn()
    id_adicionales: number

    @Column()
    nombre_adicionales: string

    @Column()
    cantidad: number

    @OneToMany(()=> CategoriaData, (categoria)=> categoria.id_adicionales)
    id_categoria : CategoriaData[]

}