import { BebidasData } from "src/bebidas/entity/bebidas.entity"
import { DetallePedidosData } from "src/detalle_pedidos/entity/detalle_pedidos.entity"
import { Subcategoria1Data } from "src/subcategoria1/entity/subcategoria1.entity"
import { Subcategoria2Data } from "src/subcategoria2/entity/subcategoria2.entity"
import { Subcategoria3Data } from "src/subcategoria3/entity/subcategoria3.entity"
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class CategoriaData {
    @PrimaryGeneratedColumn()
    id_categoria: number

    @ManyToOne(()=> Subcategoria1Data, (subcategoria1)=> subcategoria1.id_subproducto1)
    @JoinColumn({name: 'id_subproducto1'})
    id_subproducto1: Subcategoria1Data[]

    @ManyToOne(()=> Subcategoria2Data, (subcategoria2)=> subcategoria2.id_subproducto2)
    @JoinColumn({name: 'id_subproducto2'})
    id_subproducto2: Subcategoria2Data[]

    @ManyToOne(()=> Subcategoria3Data, (subcategoria3)=> subcategoria3.id_subproducto3)
    @JoinColumn({name: 'id_subproducto3'})
    id_subproducto3: Subcategoria3Data[]

    @ManyToOne(()=> BebidasData, (bebida)=> bebida.id_bebida)
    @JoinColumn({name: 'id_bebida'})
    id_bebida: BebidasData[]

    @OneToMany(()=> DetallePedidosData, (detallePedidos)=> detallePedidos.id_categoria)
    detalle_pedidos : DetallePedidosData[]
}