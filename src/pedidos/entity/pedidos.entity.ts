import { CategoriaData } from "src/categoria/entity/categoria.entity"
import { DetallePedidosData } from "src/detalle_pedidos/entity/detalle_pedidos.entity"
import { RecetaSub1Data } from "src/receta_sub1/entity/receta_sub1.entity"
import { RecetaSub2Data } from "src/receta_sub2/entity/receta_sub2.entity"
import { RecetaSub3Data } from "src/receta_sub3/entity/receta_sub3.entity"
import { RegistroData } from "src/registro/entity/registro.entity"
import { TipoFacturaData } from "src/tipo_factura/entity/tipo_factura.entity"
import { TipoPedidoData } from "src/tipo_pedido/entity/tipo_pedido.entity"
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class PedidosData {
    @PrimaryGeneratedColumn()
    id_pedido: number


    @ManyToOne(()=> TipoFacturaData, (tipoFactura)=> tipoFactura.pedidos)
    @JoinColumn({name: 'id_tipo_factura'})
    id_tipo_factura: TipoFacturaData[]

    @Column()
    id_restaurante: number      //relacion con restaurante

    @ManyToOne(()=> RegistroData, (registro)=> registro.pedidos)
    @JoinColumn({name: 'id_registro'})
    id_registro: RegistroData[]

    @ManyToOne(()=> TipoPedidoData, (tipoPedido)=> tipoPedido.pedidos)
    @JoinColumn({name: 'id_tipo_pedido'})
    id_tipo_pedido: TipoPedidoData[]

    @Column({ type: 'date' })
    fecha: Date

    @OneToMany(()=> DetallePedidosData, (detallePedidos)=> detallePedidos.id_pedido)
    detalle_pedido : DetallePedidosData[]

}