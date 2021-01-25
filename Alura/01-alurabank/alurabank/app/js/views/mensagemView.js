System.register(["./view"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __moduleName = context_1 && context_1.id;
    var view_1, MensagemView;
    return {
        setters: [
            function (view_1_1) {
                view_1 = view_1_1;
            }
        ],
        execute: function () {
            MensagemView = (function (_super) {
                __extends(MensagemView, _super);
                function MensagemView() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                MensagemView.prototype.template = function (model) {
                    return "<p class=\"alert alert-info\">" + model + "</p>";
                };
                return MensagemView;
            }(view_1.View));
            exports_1("MensagemView", MensagemView);
        }
    };
});
