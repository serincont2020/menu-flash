import { CategoriaData } from "src/categoria/entity/categoria.entity"
import { PedidosData } from "src/pedidos/entity/pedidos.entity"
import { RecetaSub1Data } from "src/receta_sub1/entity/receta_sub1.entity"
import { RecetaSub2Data } from "src/receta_sub2/entity/receta_sub2.entity"
import { RecetaSub3Data } from "src/receta_sub3/entity/receta_sub3.entity"
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