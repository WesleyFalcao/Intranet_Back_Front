import { Field, ObjectType } from "@nestjs/graphql";
import { RespostaQueryArray } from "../resposta.entity";

@ObjectType()
export class Departamento {

    @Field({ nullable: true })
    cd_Departamento: number

    @Field({ nullable: true })
    nm_Departamento: string

}

