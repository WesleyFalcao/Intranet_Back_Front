
import { UseGuards } from "@nestjs/common";
import { Query, Resolver } from "@nestjs/graphql";
import { JwtAuthGuard } from "src/guards/jwt-auth.guard";
import { Fila, RespostaFilas } from "src/models/filas/fila.model";
import { Gruposceq } from "src/models/gruposceq/grupoceq.model";
import { Ramal } from "src/models/ramais/ramal.model";
import { GrupoceqService } from "src/services/grupos_ceq.service";

//@UseGuards(JwtAuthGuard)
@Resolver(of => Gruposceq)

export class GrupoceqResolver {

    constructor(private gruposceqService: GrupoceqService) { }

    @Query(returns => [Gruposceq])
    async Grupoceq() 
    {
        return this.gruposceqService.Get_Grupos_CEQ();
    }
}