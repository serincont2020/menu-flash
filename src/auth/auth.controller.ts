import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './guards/guards.guard';

@Controller('auth')
@UseGuards(AuthGuard)
export class AuthController {
    constructor(
        private authService: AuthService
    ){}

    @Get('login')
    login(){
        return this.authService.loginUsers()
    }
}
