import { HttpService, Injectable } from "@nestjs/common";
import { Options } from "src/models/general/options.model";
import { ApiGenericService } from "src/services/generic.service";

@Injectable()
export class DepartamentosRepository {

    options: Options

    constructor(private readonly httpService: HttpService,
        private readonly apiService: ApiGenericService,
    ) { }

    async Get_Departamentos() {
        try {
            const response = await this.httpService.get(process.env.BASE_API_INTRANET + `v1/Departamentos`, this.options).toPromise()

            return response.data
        } catch (error) {
            return this.apiService.Tratar_Erro(error?.response);
        }
    }
}