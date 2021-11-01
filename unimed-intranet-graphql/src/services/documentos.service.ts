import { Injectable } from "@nestjs/common";
import { IntranetFacade } from "../facades/intranet.facade";
import { Resposta } from "src/models/resposta.entity";


@Injectable()
export class DocumentoService {
    constructor(
        private documentoFacade: IntranetFacade,
    ) { }

    async Get_Documentos() {
        let resposta = new Resposta<any>()

        const response = await this.documentoFacade.Get_Documentos();

        if (response.status)
            resposta.data = response.data
        else
            resposta = response

        return resposta;
    }
}
