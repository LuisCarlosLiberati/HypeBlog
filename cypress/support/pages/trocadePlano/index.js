const el = require('./elements').ELEMENTS


class TrocadePlano {
    acessarTrocadePLano() {
        cy.visit('movimentacao_cadastral/selecionar_trocar_plano');
    }

    selecionarNovoPlano(novoplano) {
        this.selectElemento(el.selectNovoPlano, novoplano)
    }

    preencherDataDeTroca(dataDeTroca) {
        this.preencherData(el.inputDataDeTroca, dataDeTroca)
    }

    clicarVoltar() {
        cy.get(el.buttonVoltar).click({ force: true });
    }

    clicarTrocarPlano() {
        cy.get(el.buttonTrocarPlano).click({ force: true });
    }

    selectElemento(elemento, valor) {
        // cy.get(elemento).scrollIntoView().select(valor, {force:true});
        cy.get(elemento).click()
        cy.contains(valor).click({ force: true })
    }

    preencherData(elemento, data) {
        cy.get(elemento)
            .scrollIntoView()
            .click({ force: true })
            .clear()
            .type(data + 'Cypress.io{enter}');
    }

}
export default new TrocadePlano();