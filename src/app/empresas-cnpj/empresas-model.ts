export class EmpresasModel {
    cnpj?: string;
    municipio?: string;
    bairro?: string;
    uf?: string;
    razao_social?: string;
    ddd_telefone_1?: string;
    natureza_juridica?: string;
    cnae_fiscal_descricao?: string;


    constructor(obj: Partial<EmpresasModel>) {
        Object.assign(this, obj);
    }
}
