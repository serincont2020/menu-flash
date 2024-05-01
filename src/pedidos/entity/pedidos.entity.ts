import { DetallePedidosData } from "src/detalle_pedidos/entity/detalle_pedidos.entity"
import { EstadoPedidosData } from "src/estado_pedidos/entity/estado_pedido.entity"
import { ImpuestosData } from "src/impuestos/entity/impuestos.entity"
import { RegistroData } from "src/registro/entity/registro.entity"
import { ServicioData } from "src/servicio/entity/servicio.entity"
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
    id_restaurante: number      // relacion con restaurante ???

    @ManyToOne(()=> RegistroData, (registro)=> registro.pedidos)
    @JoinColumn({name: 'id_registro'})
    id_registro: RegistroData[]

    @ManyToOne(()=> TipoPedidoData, (tipoPedido)=> tipoPedido.pedidos)
    @JoinColumn({name: 'id_tipo_pedido'})
    id_tipo_pedido: TipoPedidoData[]

    @Column({ type: 'date' })
    fecha: Date

    @Column()
    comentarios: string

    @OneToMany(()=> DetallePedidosData, (detallePedidos)=> detallePedidos.id_pedido)
    detalle_pedido : DetallePedidosData[]

    @ManyToOne(()=> EstadoPedidosData, (tipoPedido)=> tipoPedido.pedidos)
    @JoinColumn({name: 'id_estado_pedido'})
    id_estado_pedido: EstadoPedidosData[]

    @ManyToOne(()=> ImpuestosData, (impuestos)=> impuestos.pedidos)
    @JoinColumn({name: 'iva'})
    iva: ImpuestosData[]

    @ManyToOne(()=> ServicioData, (servicio)=> servicio.pedidos)
    @JoinColumn({name: 'servicio'})
    servicio: ServicioData[]
}