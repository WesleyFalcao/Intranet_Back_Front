
import { UseGuards } from "@nestjs/common";
import { Query, Resolver } from "@nestjs/graphql";
import { JwtAuthGuard } from "src/guards/jwt-auth.guard";
import { Departamento } from "src/models/departamentos/departamento.model";
import { Fila, RespostaFilas } from "src/models/filas/fila.model";
import { Ramal } from "src/models/ramais/ramal.model";
import { DepartamentoService } from "src/services/departamentos.service";


//@UseGuards(JwtAuthGuard)
@Resolver(of => Departamento)
export class DepartamentoResolver {

    constructor(private departamentoService: DepartamentoService) { }

    @Query(returns => [Departamento])
    async Departamento() 
    {
        return this.departamentoService.Get_Departamentos();
    }
}