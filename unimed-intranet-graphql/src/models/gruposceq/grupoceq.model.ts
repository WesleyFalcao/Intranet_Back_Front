import { Field, ObjectType } from "@nestjs/graphql";
import { RespostaQueryArray } from "../resposta.entity";

@ObjectType()
export class Gruposceq {

    @Field({ nullable: true })
    cd_grupo: number

    @Field({ nullable: true })
    nm_grupo: string
  
}

