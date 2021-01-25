import { NegociacaoController } from './controllers/negociacaController';

const negociacao = new NegociacaoController();

$('.form').submit(negociacao.adiciona.bind(negociacao));
$('#botao-importa').click(negociacao.importaDados.bind(negociacao));
// O loader serve para carregar os scripts e suas dependencias ou seja os imports de cada script.
// Nesse projeto é usado o System.js - ele vai receber um módulo e apartir deste carrega as dependências
// Para usar o Sysem é preciso subir um servidor local