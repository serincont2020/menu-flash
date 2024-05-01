import { MesasData } from "src/mesas/entity/mesas.entity"
import { PedidosData } from "src/pedidos/entity/pedidos.entity"
import { UsuariosData } from "src/usuarios/entity/usuarios.entity"
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class RegistroData {
    @PrimaryGeneratedColumn()
    id_registro: number

    @ManyToOne(()=> MesasData, (mesas)=> mesas.registro)
    @JoinColumn({name: 'id_mesa'})
    id_mesa: MesasData[]

    @ManyToOne(()=> UsuariosData, (usuarios)=> usuarios.registro)
    @JoinColumn({name: 'usuario'})
    usuario: UsuariosData   

    @Column({ type: 'date' })
    fecha: Date

    @OneToMany(()=> PedidosData, (pedidos)=> pedidos.id_registro)
    pedidos : PedidosData[]

}