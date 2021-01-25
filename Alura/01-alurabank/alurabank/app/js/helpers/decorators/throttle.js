System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function throttle(milissegundos) {
        if (milissegundos === void 0) { milissegundos = 500; }
        return function (target, propertyKey, descriptor) {
            var metodoOriginal = descriptor.value;
            var timer = 0;
            descriptor.value = function () {
                var _this = this;
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                clearInterval(timer);
                timer = setTimeout(function () {
                    metodoOriginal.apply(_this, args);
                }, milissegundos);
            };
            return descriptor;
        };
    }
    exports_1("throttle", throttle);
    return {
        setters: [],
        execute: function () {
        }
    };
});
