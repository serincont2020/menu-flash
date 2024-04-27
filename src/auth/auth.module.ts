import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsuariosData } from 'src/usuarios/entity/usuarios.entity';
import { UsuariosModule } from 'src/usuarios/usuarios.module';
import { UsuariosService } from 'src/usuarios/usuarios.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constants/jwt.const';

@Module({
  imports:[UsuariosModule,
    TypeOrmModule.forFeature([
      UsuariosData
    ])
  ],
  controllers: [AuthController],
  providers: [AuthService, UsuariosService, JwtService]
})
export class AuthModule {}
