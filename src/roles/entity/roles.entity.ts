import { RegistroData } from "src/registro/entity/registro.entity"
import { UsuariosData } from "src/usuarios/entity/usuarios.entity"
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class RolesData {
    @PrimaryGeneratedColumn()
    id_rol: number

    @Column()
    rol: string    

    @OneToMany(()=> UsuariosData, (usuario)=> usuario.id_rol)
    usuario: UsuariosData[]

}