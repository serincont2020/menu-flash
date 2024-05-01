import { PedidosData } from "src/pedidos/entity/pedidos.entity"
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class ImpuestosData {
    @PrimaryGeneratedColumn()
    id_impuesto: number

    @Column()
    iva: number 

    @OneToMany(()=> PedidosData, (pedidos)=> pedidos.iva)
    pedidos : PedidosData[]
}