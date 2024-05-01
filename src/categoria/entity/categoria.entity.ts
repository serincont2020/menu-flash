import { AdicionalesData } from "src/adicionales/entity/adicionales.entity"
import { BebidasData } from "src/bebidas/entity/bebidas.entity"
import { DetallePedidosData } from "src/detalle_pedidos/entity/detalle_pedidos.entity"
import { SubcategoriaData } from "src/subcategoria1/entity/subcategoria1.entity"
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class CategoriaData {
    @PrimaryGeneratedColumn()
    id_categoria: number

    @ManyToOne(()=> SubcategoriaData, (subcategoria)=> subcategoria.id_categoria)
    @JoinColumn({name: 'id_subcategoria'})
    id_subcategoria: SubcategoriaData[]

    @ManyToOne(()=> BebidasData, (bebida)=> bebida.id_categoria)
    @JoinColumn({name: 'id_bebida'})
    id_bebida: BebidasData[]

    @OneToMany(()=> DetallePedidosData, (detallePedidos)=> detallePedidos.id_categoria)
    detalle_pedidos : DetallePedidosData[]

    @ManyToOne(()=> AdicionalesData, (adicionales)=> adicionales.id_categoria)
    @JoinColumn({name: 'id_adicionales'})
    id_adicionales: AdicionalesData[]
}