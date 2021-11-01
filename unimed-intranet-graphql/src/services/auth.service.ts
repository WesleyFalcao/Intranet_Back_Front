import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { JwtPayload } from "src/models/login/jwt-payload.model";
import { LoginResponse } from "src/models/login/login-response.model";
import { LoginInput } from "src/models/login/login.input";
import { AuthRepository } from "src/repositories/auth.repository";
import { Resposta } from "../models/resposta.entity";

@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService,
        private readonly authRepository: AuthRepository
    ) { }

    async Login(obj_Login: LoginInput) {
        let resposta = new Resposta<LoginResponse>();

        const response = await this.authRepository.Login(obj_Login);

        if (response.status) {
            const ds_Access_Token = this.jwtService.sign(response.data)

            resposta.data = {
                ds_Access_Token,
                cd_Usuario: response.data.cd_Usuario,
                nm_Usuario: response.data.nm_Usuario,
            }
        } else {
            resposta = response
        }

        return resposta;
    }

    async validateUser(payload: JwtPayload): Promise<any> {
        return payload;
    }
}
