import { PedidosData } from "src/pedidos/entity/pedidos.entity"
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class TipoPedidoData {
    @PrimaryGeneratedColumn()
    id_tipo_pedido: number

    @Column()
    nombre_tipo_pedido: string

    @OneToMany(()=> PedidosData, (pedidos)=> pedidos.id_tipo_pedido)
    pedidos : PedidosData[]

}