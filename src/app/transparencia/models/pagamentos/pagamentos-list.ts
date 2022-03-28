import { Pagamentos } from "./pagamentos";

export class PagamentosList {
    body?: {}[];

    constructor(object: Partial<PagamentosList>) {
        Object.assign(this, object);
    }
}
