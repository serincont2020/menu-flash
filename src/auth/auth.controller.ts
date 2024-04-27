import { Body, Controller, Get, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './guards/guards.guard';
import { CreateUserDto, LoginUserDto } from 'src/usuarios/dto/crear-usuario.dto';

@Controller('auth')
// @UseGuards(AuthGuard)
export class AuthController {
    constructor(
        private readonly authService: AuthService,
    ){}

    @Get('register')
    register(@Body() createUserDto: CreateUserDto){
        return this.authService.registerUsers(createUserDto)
    }

    @Get('login')
    login(@Body() loginUserDto: LoginUserDto){
        return this.authService.loginUsers(loginUserDto)
    }
}
