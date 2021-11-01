import { Field, ObjectType } from "@nestjs/graphql";
import { RespostaQueryArray } from "../resposta.entity";

@ObjectType()
export class Processo {

    @Field({ nullable: true })
    cd_Processo: number

    @Field({ nullable: true }) 
    nm_Processo: string
    
}
