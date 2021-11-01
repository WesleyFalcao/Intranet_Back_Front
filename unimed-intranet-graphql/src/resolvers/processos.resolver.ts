
import { UseGuards } from "@nestjs/common";
import { Query, Resolver } from "@nestjs/graphql";
import { JwtAuthGuard } from "src/guards/jwt-auth.guard";
import { Fila, RespostaFilas } from "src/models/filas/fila.model";
import { Processo } from "src/models/processos/processo.model";
import { Ramal } from "src/models/ramais/ramal.model";
import { ProcessoService } from "src/services/processos.service";
import { parse } from "url";


//@UseGuards(JwtAuthGuard)
@Resolver(of => Processo)
export class ProcessoResolver {

    constructor(private processoService: ProcessoService) { }

    @Query(returns => [Processo])
    async Processo(
    ) {
        return this.processoService.Get_Processos();
    }

    
}