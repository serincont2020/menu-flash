import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto, LoginUserDto } from 'src/usuarios/dto/crear-usuario.dto';
import { UsuariosData } from 'src/usuarios/entity/usuarios.entity';
import { UsuariosService } from 'src/usuarios/usuarios.service';
import { Repository } from 'typeorm';
import * as bcryptjs from "bcryptjs";
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constants/jwt.const';

@Injectable()
export class AuthService {

    constructor(
        private readonly usuariosService: UsuariosService,
        @InjectRepository(UsuariosData) private readonly userRepository: Repository<UsuariosData>,
        private readonly jwtService: JwtService
    ){}

    async registerUsers(data:CreateUserDto){
        try {
            const user= await this.userRepository.findOne({where:{usuario:data.usuario} })
            if (user) {
                throw new NotFoundException(`USER_ALREADY_EXIST`)
            }
            // data.contraseña= await bcryptjs.hash(data.contraseña, 10)
            const create = await this.usuariosService.create(data)
            if (!create) {
                throw new NotFoundException(`USER_NOT_CREATED`)
            }
            
            return create
        } catch (error) {
            throw new NotFoundException(error)
        }
        
    }

    async loginUsers(data:LoginUserDto){
        try {
            const user= await this.userRepository.findOne({where:{usuario:data.usuario}, relations:['id_rol'] })
            if (!user) {
                throw new NotFoundException(`USER_NOT_FOUND`)
            }

            const validatePass = await bcryptjs.compare(data.contraseña, user.contraseña)
            if (!validatePass) {
                throw new NotFoundException(`WRONG_PASSWORD`)
            }

            const payload = {
                username: user.usuario, rol: user.id_rol.rol
            }
            const token = this.jwtService.sign(payload, {privateKey:jwtConstants.secret, expiresIn: '1h'})
            
            const username= user.usuario
            return {token, username}
        } catch (error) {
            throw new NotFoundException(error)
        }
        
    }
}
