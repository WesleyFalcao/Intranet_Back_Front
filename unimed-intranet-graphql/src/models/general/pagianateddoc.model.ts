import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { RespostaQueryArray } from "../resposta.entity";


@InputType()
export class PaginatedDocParam {

    @Field({ nullable: true })
    nm_Search: string

    @Field({ nullable: true }) 
    pageLength: number

    @Field({ nullable: true }) 
    page: number
    
}

