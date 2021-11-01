import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { RespostaLogin } from 'src/models/login/login-response.model';
import { LoginInput } from "../models/login/login.input";
import { AuthService } from "../services/auth.service";

@Resolver(of => RespostaLogin)
export class AuthResolver {

    constructor(private authService: AuthService) { }

    /**
     * Chama o serviço que faz o HTTP para gerar o JWT
     * @param params dados necessários para login
     */
    @Mutation(returns => RespostaLogin)
    async login(
        @Args("params") params: LoginInput)
         {
            return this.authService.Login(params);
    }
}