import { Field, ObjectType } from "@nestjs/graphql"
import { RespostaQuery } from "src/models/resposta.entity"

@ObjectType()
export class LoginResponse {
    @Field({ nullable: true })
    ds_Access_Token: string
    @Field({ nullable: true })
    cd_Usuario: number
    @Field({ nullable: true })
    nm_Usuario: string
}

@ObjectType()
export class RespostaLogin extends RespostaQuery(LoginResponse) { }