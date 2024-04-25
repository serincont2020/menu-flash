import { RegistroData } from "src/registro/entity/registro.entity"
import { UsuariosData } from "src/usuarios/entity/usuarios.entity"
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class PersonasData {
    @PrimaryGeneratedColumn()
    id_persona: number

    @Column()
    identificacion: string    

    @Column()
    nombre: string   

    @Column()
    apellido: string

    @OneToMany(()=> RegistroData, (registro)=> registro.id_mesa)
    registro: RegistroData[]

    @OneToMany(()=> UsuariosData, (usuario)=> usuario.id_persona)
    usuario: UsuariosData[]

}