System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Negociacoes;
    return {
        setters: [],
        execute: function () {
            Negociacoes = (function () {
                function Negociacoes() {
                    this._negociacoes = [];
                }
                Negociacoes.prototype.adiciona = function (negociacao) {
                    return this._negociacoes.push(negociacao);
                };
                Negociacoes.prototype.paraArray = function () {
                    return [].concat(this._negociacoes);
                };
                Negociacoes.prototype.paraTexto = function () {
                    console.log('-- paraTexto --');
                    console.log(JSON.stringify(this._negociacoes));
                };
                Negociacoes.prototype.ehIgual = function (negociacoes) {
                    return JSON.stringify(this._negociacoes) === JSON.stringify(negociacoes.paraArray());
                };
                return Negociacoes;
            }());
            exports_1("Negociacoes", Negociacoes);
        }
    };
});
