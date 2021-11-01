import { Injectable } from "@nestjs/common";
import { IntranetFacade } from "../facades/intranet.facade";
import { Resposta } from "src/models/resposta.entity";


@Injectable()
export class DepartamentoService {
    constructor( private departamentoFacade: IntranetFacade,) { }

    async Get_Departamentos() {
        
        let resposta = new Resposta<any>()

        const response = await this.departamentoFacade.Get_Departamentos();

        if (response.status)
            resposta.data = response.data
        else
            resposta = response

        return resposta;
    }
}
