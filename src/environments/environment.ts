// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  urlApiCidades: 'https://servicodados.ibge.gov.br/api/v1/localidades/estados',
  urlApiCidadesPorId: 'https://servicodados.ibge.gov.br/api/v1/localidades/municipios',
  urlApiEmpresas: 'https://brasilapi.com.br/api/cnpj/v1',
  urlApiPagamentos: 'https://api.portaldatransparencia.gov.br/api-de-dados/despesas/documentos-por-favorecido?ano=2022&codigoPessoa=',
  urlApiRick: 'https://rickandmortyapi.com/api',

  googleSheetsApiKey: 'AIzaSyDEUo8mMVsR5AuuOrnteKPeaULIfHwI7J8',
  characters: {
    spreadsheetId: '13KrkK3iPxXMFycBqQFGNUc_W9HtbknpTKfWi90Mh0VQ',
    worksheetName: 'Characters',
  },

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
