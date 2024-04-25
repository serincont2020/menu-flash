import { CategoriaData } from "src/categoria/entity/categoria.entity"
import { DetallePedidosData } from "src/detalle_pedidos/entity/detalle_pedidos.entity"
import { MesasData } from "src/mesas/entity/mesas.entity"
import { PedidosData } from "src/pedidos/entity/pedidos.entity"
import { PersonasData } from "src/personas/entity/personas.entity"
import { RecetaSub1Data } from "src/receta_sub1/entity/receta_sub1.entity"
import { RecetaSub2Data } from "src/receta_sub2/entity/receta_sub2.entity"
import { RecetaSub3Data } from "src/receta_sub3/entity/receta_sub3.entity"
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class RegistroData {
    @PrimaryGeneratedColumn()
    id_registro: number

    @ManyToOne(()=> MesasData, (mesas)=> mesas.registro)
    @JoinColumn({name: 'id_mesa'})
    id_mesa: MesasData[]

    @ManyToOne(()=> PersonasData, (personas)=> personas.registro)
    @JoinColumn({name: 'id_persona'})
    id_persona: PersonasData   

    @Column({ type: 'date' })
    fecha: Date

    @OneToMany(()=> PedidosData, (pedidos)=> pedidos.id_registro)
    pedidos : PedidosData[]

}