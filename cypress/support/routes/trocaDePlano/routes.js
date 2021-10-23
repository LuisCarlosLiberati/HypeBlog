class Routes {
    as = {
        getBeneficiarioTrocaDePlano: 'getBeneficiarioTrocaDePlano'
    }
    
    getBeneficiarioTrocaDePlano() {
        cy.intercept(
            {
                method: 'GET',
                url: 'https://api-hml.gndi.com.br/portal/v1/troca/plano?numContrato=*&chaveBusca=*'
            },
            {
                statusCode: 200,
                
                fixture: 'json/trocaDePlano/get-beneficiario-trocaPlano.json'

            }).as('getBeneficiarioTrocaDePlano');
    }

    getBeneficiarioCarteiraFamilia() {
        cy.intercept(
            {
                method: 'GET',
                url: 'https://api-hml.gndi.com.br/portal/v1/beneficiarios/carteiras/*/familia?numContrato=*'
            },
            {
                statusCode: 200,
                
                fixture: 'json/trocaDePlano/get-beneficiario-carteira-familia.json'

            }).as('getBeneficiarioCarteiraFamilia');
    }


    getMovimentacaoReferencia() {
        cy.intercept(
            {
                method: 'GET',
                url: 'https://api-hml.gndi.com.br/portal/v1/contratos/*/movimentacoes/referencia'
            },
            {
                statusCode: 200,
                
                fixture: 'json/contrato/get-movimentacao-referencia.json'

            }).as('getMovimentacaoReferencia');
    }
    

    postSucessoTrocaPlano() {
        cy.intercept(
            {
                method: 'POST',
                url: 'https://api-hml.gndi.com.br/portal/v1/titular/trocarPlano'
            },
            {
                statusCode: 200,
                
                fixture: 'json/trocaDePlano/post-troca-plano-sucesso.json'

            }).as('postSucessoTrocaPlano');
    }

    
}
export default new Routes();