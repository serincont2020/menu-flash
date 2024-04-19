import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {

    loginUsers(){
        return 'Usuario ha iniciado sesion'
    }
}
