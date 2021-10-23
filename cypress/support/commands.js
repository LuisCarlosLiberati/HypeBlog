
//pesquisa
Cypress.Commands.add("PesquisarBeneficiario", (beneficiario) => {
    pesquisa.pesquisarBeneficiario(beneficiario)
    pesquisa.clicarSobreOBeneficiario()
})