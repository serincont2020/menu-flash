import { CategoriaData } from "src/categoria/entity/categoria.entity"
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"


@Entity()
export class BebidasData {
    @PrimaryGeneratedColumn()
    id_bebida: number

    @Column()
    nombreBebida: string

    @Column()
    precioBebida: number

    @OneToMany(()=> CategoriaData, (categoria)=> categoria.id_bebida)
    id_categoria : CategoriaData[]


    // @ManyToOne(()=> EventData, (event)=> event.idAdmin)
    // @JoinColumn({name: 'idEvent'})
    // idEvent: EventData[]
}