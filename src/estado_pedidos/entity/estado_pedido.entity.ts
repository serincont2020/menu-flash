import { PedidosData } from "src/pedidos/entity/pedidos.entity"
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class EstadoPedidosData {
    @PrimaryGeneratedColumn()
    id_estado_pedido: number

    @Column()
    nombre_estado_pedido: string

    @OneToMany(()=> PedidosData, (pedidos)=> pedidos.id_estado_pedido)
    pedidos : PedidosData[]
}