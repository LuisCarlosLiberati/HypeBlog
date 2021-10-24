/// <reference types="cypress" />

import homeBlog from '../support/pages/homeBlog'


context('Navegação Dos Menus', () => {
    it('Acessar menu Sobre', () => {
        //clica no menu "Sobre"
        homeBlog.acessarMenu('Sobre');

        //verifica o redirecionamento para a página da Hype
        homeBlog.validarURL('https://hypeflame.com.br/');

    });

    it('Acessar menu Contato', () => {
        homeBlog.acessarMenu('Contato')

        //verifica o redirecionamento para a página da Hype
        homeBlog.validarURL('https://jobs.kenoby.com/hypeflame')
    });


    it('Acessar LinkedIn', () =>{
       homeBlog.acessarLinkedIn();

       homeBlog.validarURL('https://www.linkedin.com/company/hypeflame')
    })

    it('Acessar Instagram', () =>{
        homeBlog.acessarInstagram();
 
        homeBlog.validarURL('https://www.instagram.com/_hypeflame/')
     })

});
