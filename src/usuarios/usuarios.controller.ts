import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUserDto } from './dto/crear-usuario.dto';
import { AuthGuard } from 'src/auth/guards/guards.guard';

@Controller('usuarios')
//@UseGuards(AuthGuard)
export class UsuariosController {
    constructor(
        private readonly usuariosService: UsuariosService
    ){}

    @Post()
    async create(@Body() createUserDto: CreateUserDto){
        return await this.usuariosService.create(createUserDto)
    }

    @Get()
    async findAll(){
        return await this.usuariosService.findAll()
    }
}
