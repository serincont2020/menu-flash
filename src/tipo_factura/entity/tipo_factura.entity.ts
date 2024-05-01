import { CategoriaData } from "src/categoria/entity/categoria.entity"
import { DetallePedidosData } from "src/detalle_pedidos/entity/detalle_pedidos.entity"
import { PedidosData } from "src/pedidos/entity/pedidos.entity"
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class TipoFacturaData {
    @PrimaryGeneratedColumn()
    id_tipo_factura: number

    @Column()
    nombre_tipo_factura: string

    @OneToMany(()=> PedidosData, (pedidos)=> pedidos.id_tipo_factura)
    pedidos : PedidosData[]

}