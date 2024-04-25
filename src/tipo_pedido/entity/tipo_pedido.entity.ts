import { CategoriaData } from "src/categoria/entity/categoria.entity"
import { DetallePedidosData } from "src/detalle_pedidos/entity/detalle_pedidos.entity"
import { PedidosData } from "src/pedidos/entity/pedidos.entity"
import { RecetaSub1Data } from "src/receta_sub1/entity/receta_sub1.entity"
import { RecetaSub2Data } from "src/receta_sub2/entity/receta_sub2.entity"
import { RecetaSub3Data } from "src/receta_sub3/entity/receta_sub3.entity"
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