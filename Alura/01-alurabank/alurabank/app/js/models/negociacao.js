System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Negociacao;
    return {
        setters: [],
        execute: function () {
            Negociacao = (function () {
                function Negociacao(data, quantidade, valor) {
                    this.data = data;
                    this.quantidade = quantidade;
                    this.valor = valor;
                }
                Object.defineProperty(Negociacao.prototype, "volume", {
                    get: function () {
                        return this.quantidade * this.valor;
                    },
                    enumerable: true,
                    configurable: true
                });
                Negociacao.prototype.paraTexto = function () {
                    console.log('-- paraTexto --');
                    console.log("Data: " + this.data + "\n        Quantidade: " + this.quantidade + ", \n        Valor: " + this.valor + ", \n        Volume: " + this.volume);
                };
                Negociacao.prototype.ehIgual = function (negociacao) {
                    return this.data.getDate() === negociacao.data.getDate()
                        && this.data.getMonth() == negociacao.data.getMonth()
                        && this.data.getFullYear() === negociacao.data.getFullYear();
                };
                return Negociacao;
            }());
            exports_1("Negociacao", Negociacao);
        }
    };
});
