import { Injectable } from "@nestjs/common";
import { IntranetFacade } from "../facades/intranet.facade";
import { Resposta } from "src/models/resposta.entity";
import { PaginatedSearchParam } from "src/models/general/pagianated.model";

@Injectable()
export class RamalService {
    constructor(
        private ramalFacade: IntranetFacade,
    ) { }

    async Get_Ramais(params: PaginatedSearchParam) {
        let resposta = new Resposta<any>()

        const response = await this.ramalFacade.Get_Ramais(params);

        if (response.status)
            resposta.data = response.data
        else
            resposta = response

        return resposta.data;
    }
}
