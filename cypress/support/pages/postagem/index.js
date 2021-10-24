
class Postagem {
    validarTitulo(titulo) {
        cy.contains(titulo).should('contain.text', titulo);
    }
}
export default new Postagem();