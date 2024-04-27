import { Module } from '@nestjs/common';
import { UsuariosController } from './usuarios.controller';
import { UsuariosService } from './usuarios.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosData } from './entity/usuarios.entity';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports:[TypeOrmModule.forFeature([
    UsuariosData
  ])],
  controllers: [UsuariosController],
  providers: [UsuariosService, JwtService]
})
export class UsuariosModule {}
