
const el = require('./elements').ELEMENTS


class HomeBlog {
    validarMenusCarregados() {
        cy.get(el.menusID).should('be.visible');
    }
    acessarPrimeiraPostagem() {
        cy.get('article').first().click()
    }
    pesquisarPostagem(texto) {
        cy.get(el.btnPesquisar).click();
        cy.get(el.filtro).type(texto);
        cy.get(el.btnSubmit).click();
    }

    acessarPostagemPorID(idPostagem) {
        cy.get('#' + idPostagem).click();
    }

    acessarMenu(menu){
        cy.contains(menu).click({force:true})
    }

    validarURL(urlEsperada){
        cy.url().should('eq', urlEsperada)
    }

    acessarLinkedIn(){
        cy.get(el.btnLinkedin).first().click({force:true});
    }

    acessarInstagram(){
        cy.get(el.btnInstagram).first().click({force:true});
    }
}
export default new HomeBlog();