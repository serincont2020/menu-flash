import { PersonasData } from "src/personas/entity/personas.entity"
import { RegistroData } from "src/registro/entity/registro.entity"
import { RolesData } from "src/roles/entity/roles.entity"
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class UsuariosData {
    @PrimaryGeneratedColumn()
    id_usuario: number

    @ManyToOne(()=> RolesData, (roles)=> roles.usuario)
    @JoinColumn({name: 'id_rol'})
    id_rol: RolesData    

    @Column()
    nombre: string   

    @Column()
    usuario: string

    @Column()
    contraseña: string

    @ManyToOne(()=> PersonasData, (personas)=> personas.usuario)
    @JoinColumn({name: 'id_persona'})
    id_persona: PersonasData[]

}