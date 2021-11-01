import { Field, ObjectType } from "@nestjs/graphql";
import { RespostaQueryArray } from "../resposta.entity";

@ObjectType()
export class Fila {

    @Field({ nullable: true })
    cd_Fila: number

    @Field({ nullable: true })
    nm_Fila: string

    @Field({ nullable: true })
    vl_Fila: string
}

@ObjectType()
export class RespostaFilas extends RespostaQueryArray(Fila) { }