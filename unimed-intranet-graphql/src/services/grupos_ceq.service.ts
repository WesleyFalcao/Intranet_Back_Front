import { Injectable } from "@nestjs/common";
import { IntranetFacade } from "src/facades/intranet.facade";
import { Resposta } from "src/models/resposta.entity";


@Injectable()
export class GrupoceqService {
    constructor(
        private grupoceqFacade: IntranetFacade,
    ) { }

    async Get_Grupos_CEQ() {
        let resposta = new Resposta<any>()

        const response = await this.grupoceqFacade.Get_Grupos_CEQ();

        if (response.status)
            resposta.data = response.data
        else
            resposta = response

        return resposta;
    }
}
