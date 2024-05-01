import { CategoriaData } from "src/categoria/entity/categoria.entity"
import { PedidosData } from "src/pedidos/entity/pedidos.entity"
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class DetallePedidosData {
    @PrimaryGeneratedColumn()
    id_detalle_pedido: number

    @ManyToOne(()=> CategoriaData, (categoria)=> categoria.detalle_pedidos)
    @JoinColumn({name: 'id_categoria'})
    id_categoria: CategoriaData[]

    @ManyToOne(()=> PedidosData, (pedido)=> pedido.detalle_pedido)
    @JoinColumn({name: 'id_pedido'})
    id_pedido: PedidosData[]

    @Column()
    sub_total: number

}