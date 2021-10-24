/// <reference types="cypress" />

import homeBlog from '../support/pages/homeBlog'
import postagem from '../support/pages/postagem'
import mockpost from '../fixtures/mocks/posts.json'

context('Navegação entre as postagens do Blog', () => {
    it('Acessar o blog com sucesso', () => {
        //verifica a url.
        homeBlog.validarURL('https://hypeflame.blog/');

        //verifica que o menu está visivel e logo a página foi carregada.
        homeBlog.validarMenusCarregados()
    });

    it('Acessar uma postagem com sucesso', () => {
        //clica sobre a primeira postagem
        homeBlog.acessarPrimeiraPostagem();
        //valida o titulo da postagem
        postagem.validarTitulo(mockpost.tituloPrimeiraPostagem);
    });

    it('Pesquisar postagem inexistente', () => {
        //faz a pesquisa por uma postagem inexistente
        homeBlog.pesquisarPostagem(mockpost.pesquisaInexistente);
        //valida a mensagem "nenhum resultado" sendo exibida. 
        postagem.validarTitulo(mockpost.tituloPostagemNaoEncontrada);
    });

    it('Pesquisar uma postagem existente e abrir a página da mesma', () => {
        homeBlog.pesquisarPostagem(mockpost.postagemValida)
        //faz o click pelo id da postagem.
        homeBlog.acessarPostagemPorID(mockpost.idPostagemValida)
        postagem.validarTitulo(mockpost.TituloPostagemValida)
    });


});
