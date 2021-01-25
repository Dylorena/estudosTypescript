System.register(["../models/index", "../views/index", "../helpers/decorators/index", "../service/index", "../helpers/utils"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    var __generator = (this && this.__generator) || function (thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [0, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    };
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, index_3, index_4, utils_1, NegociacaoController, DiaDaSemana;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (index_3_1) {
                index_3 = index_3_1;
            },
            function (index_4_1) {
                index_4 = index_4_1;
            },
            function (utils_1_1) {
                utils_1 = utils_1_1;
            }
        ],
        execute: function () {
            ;
            NegociacaoController = (function () {
                function NegociacaoController() {
                    this._negociacoes = new index_1.Negociacoes();
                    this._negociacoesView = new index_2.NegociacoesView('#negociacoesView');
                    this._mensagemView = new index_2.MensagemView('#mensagemView');
                    this._NegociacaoService = new index_4.NegociacaoService();
                    this._negociacoesView.update(this._negociacoes);
                }
                NegociacaoController.prototype.adiciona = function (event) {
                    event.preventDefault();
                    var date = new Date(this._inputData.val().replace(/-/g, ','));
                    if (!this.ehDiaUtil(date)) {
                        this._mensagemView.update('Somente negociações em dias úteis!');
                        return;
                    }
                    var negociacao = new index_1.Negociacao(date, Number(this._inputQuantidade.val()), Number(this._inputValor.val()));
                    this._negociacoes.adiciona(negociacao);
                    utils_1.imprime(negociacao, this._negociacoes);
                    this._negociacoesView.update(this._negociacoes);
                    this._mensagemView.update('Negociação adicionada com sucesso!');
                };
                NegociacaoController.prototype.ehDiaUtil = function (date) {
                    return date.getDay() != DiaDaSemana.Sábado && date.getDay() != DiaDaSemana.Domingo;
                };
                NegociacaoController.prototype.importaDados = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var _this = this;
                        var negociacoesParaImportar, negociacoesJaImportadas_1, err_1;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 2, , 3]);
                                    return [4, this._NegociacaoService
                                            .obterNegociacoes(function (res) {
                                            if (res.ok) {
                                                return res;
                                            }
                                            else {
                                                throw new Error(res.statusText);
                                            }
                                        })];
                                case 1:
                                    negociacoesParaImportar = _a.sent();
                                    negociacoesJaImportadas_1 = this._negociacoes.paraArray();
                                    negociacoesParaImportar
                                        .filter(function (negociacao) {
                                        return !negociacoesJaImportadas_1.some(function (jaImportada) {
                                            return negociacao.ehIgual(jaImportada);
                                        });
                                    })
                                        .forEach(function (negociacao) {
                                        return _this._negociacoes.adiciona(negociacao);
                                    });
                                    this._negociacoesView.update(this._negociacoes);
                                    return [3, 3];
                                case 2:
                                    err_1 = _a.sent();
                                    this._mensagemView.update(err_1.message);
                                    return [3, 3];
                                case 3: return [2];
                            }
                        });
                    });
                };
                return NegociacaoController;
            }());
            __decorate([
                index_3.domInject('#data')
            ], NegociacaoController.prototype, "_inputData", void 0);
            __decorate([
                index_3.domInject('#quantidade')
            ], NegociacaoController.prototype, "_inputQuantidade", void 0);
            __decorate([
                index_3.domInject('#valor')
            ], NegociacaoController.prototype, "_inputValor", void 0);
            __decorate([
                index_3.logarTempoDeExecucao()
            ], NegociacaoController.prototype, "adiciona", null);
            __decorate([
                index_3.throttle()
            ], NegociacaoController.prototype, "importaDados", null);
            exports_1("NegociacaoController", NegociacaoController);
            (function (DiaDaSemana) {
                DiaDaSemana[DiaDaSemana["Domingo"] = 0] = "Domingo";
                DiaDaSemana[DiaDaSemana["Segunda"] = 1] = "Segunda";
                DiaDaSemana[DiaDaSemana["Ter\u00E7a"] = 2] = "Ter\u00E7a";
                DiaDaSemana[DiaDaSemana["Quarta"] = 3] = "Quarta";
                DiaDaSemana[DiaDaSemana["Quinta"] = 4] = "Quinta";
                DiaDaSemana[DiaDaSemana["Sexta"] = 5] = "Sexta";
                DiaDaSemana[DiaDaSemana["S\u00E1bado"] = 6] = "S\u00E1bado";
            })(DiaDaSemana || (DiaDaSemana = {}));
        }
    };
});
