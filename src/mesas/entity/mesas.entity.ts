import { RegistroData } from "src/registro/entity/registro.entity"
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class MesasData {
    @PrimaryGeneratedColumn()
    id_mesa: number

    @Column()
    num_mesa: number

    @OneToMany(()=> RegistroData, (registro)=> registro.id_mesa)
    registro: RegistroData[]

}