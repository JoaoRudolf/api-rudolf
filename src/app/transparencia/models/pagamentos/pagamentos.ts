export class Pagamentos {
    data?: string;
    documento?: string;
    documentoResumido?: string;
    observacao?: string;
    funcao?: string;
    subfuncao?: string;
    programa?: string;
    acao?: string;
    subTitulo?: string;
    localizadorGasto?: string;
    fase?: string;
    especie?: string;
    favorecido?: string;
    codigoFavorecido?: string;
    nomeFavorecido?: string;
    ufFavorecido?: string;
    valor?: string;
    codigoUg?: string;
    ug?: string;
    codigoUo?: string;
    uo?: string;
    codigoOrgao?: string;
    orgao?: string;
    codigoOrgaoSuperior?: string;
    orgaoSuperior?: string;
    categoria?: string;
    grupo?: string;
    elemento?: string;
    modalidade?: string;
    numeroProcesso?: string;
    planoOrcamentario?: string;
    autor?: string;
    favorecidoIntermediario?: false;
    favorecidoListaFaturas?: false
  
    constructor(obj: Partial<Pagamentos>){
      Object.assign(this, obj);
    }
}
