import { PedidosData } from "src/pedidos/entity/pedidos.entity"
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class ServicioData {
    @PrimaryGeneratedColumn()
    id_servicio: number

    @Column()
    servicio: number 

    @Column()
    disponible: boolean
    
    @OneToMany(()=> PedidosData, (pedidos)=> pedidos.servicio)
    pedidos : PedidosData[]
}