System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function logarTempoDeExecucao(emSegundos) {
        if (emSegundos === void 0) { emSegundos = false; }
        return function (target, propertyKey, descriptor) {
            var metodoOriginal = descriptor.value;
            descriptor.value = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var unidade = 'ms';
                var divisor = 1;
                if (emSegundos) {
                    unidade = 's';
                    divisor = 1000;
                }
                var t1 = performance.now();
                var retorno = metodoOriginal.apply(this, args);
                var t2 = performance.now();
                return retorno;
            };
            return descriptor;
        };
    }
    exports_1("logarTempoDeExecucao", logarTempoDeExecucao);
    return {
        setters: [],
        execute: function () {
        }
    };
});
