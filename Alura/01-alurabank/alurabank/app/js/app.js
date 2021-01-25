System.register(["./controllers/negociacaController"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var negociacaController_1, negociacao;
    return {
        setters: [
            function (negociacaController_1_1) {
                negociacaController_1 = negociacaController_1_1;
            }
        ],
        execute: function () {
            negociacao = new negociacaController_1.NegociacaoController();
            $('.form').submit(negociacao.adiciona.bind(negociacao));
            $('#botao-importa').click(negociacao.importaDados.bind(negociacao));
        }
    };
});
