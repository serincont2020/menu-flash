import { Injectable } from '@nestjs/common';
import { UsuariosData } from './entity/usuarios.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/crear-usuario.dto';
import * as bcryptjs from "bcryptjs";

@Injectable()
export class UsuariosService {
    constructor(
        @InjectRepository(UsuariosData) private readonly userRepository: Repository<UsuariosData>
    ){}

    async create(data:CreateUserDto){
        data.contraseña= await bcryptjs.hash(data.contraseña, 10)
        
        return await this.userRepository.save(data)
    }

    async findOneByUser(id:any){
        return await this.userRepository.findOne(id)
    }

    async findAll(){
        return await this.userRepository.find()
    }

    async update(id:any,data:any){
        const user = await this.userRepository.findOne(id)
        return await this.userRepository.update(data, user)
    }
}
