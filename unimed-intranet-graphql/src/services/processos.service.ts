import { Injectable } from "@nestjs/common";
import { IntranetFacade } from "../facades/intranet.facade";
import { Resposta } from "src/models/resposta.entity";


@Injectable()
export class ProcessoService {
    constructor(
        private processoFacade: IntranetFacade,
    ) { }

    async Get_Processos() {
        let resposta = new Resposta<any>()

        const response = await this.processoFacade.Get_Processos();

        if (response.status)
            resposta.data = response.data
        else
            resposta = response

        return resposta;
    }
}
