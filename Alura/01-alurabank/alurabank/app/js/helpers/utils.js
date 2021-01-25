System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function imprime() {
        var objetos = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            objetos[_i] = arguments[_i];
        }
        objetos.forEach(function (objeto) {
            objeto.paraTexto();
        });
    }
    exports_1("imprime", imprime);
    return {
        setters: [],
        execute: function () {
        }
    };
});
