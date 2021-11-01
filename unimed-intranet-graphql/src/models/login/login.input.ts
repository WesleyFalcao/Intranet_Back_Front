import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class LoginInput {
    @Field({ nullable: true })
    ds_Login: String

    @Field({ nullable: true })
    ds_Senha: String
}