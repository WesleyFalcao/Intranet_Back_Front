
import { UseGuards } from "@nestjs/common";
import { Query, Resolver } from "@nestjs/graphql";
import { JwtAuthGuard } from "src/guards/jwt-auth.guard";
import { Documento } from "src/models/documentos/documento.model";
import { Fila, RespostaFilas } from "src/models/filas/fila.model";
import { Ramal } from "src/models/ramais/ramal.model";
import { DocumentoService } from "src/services/documentos.service";


//@UseGuards(JwtAuthGuard)
@Resolver(of => Documento)
export class DocumentoResolver {

    constructor(private documentoService: DocumentoService) { }

    @Query(returns => [Documento])
    async Documento()
    {
        return this.documentoService.Get_Documentos();
    }
}