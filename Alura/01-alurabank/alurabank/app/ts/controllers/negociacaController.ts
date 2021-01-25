import { Negociacoes, Negociacao, NegociacaoParcial } from '../models/index';
import { NegociacoesView, MensagemView } from '../views/index';
import { logarTempoDeExecucao, domInject, throttle } from '../helpers/decorators/index';
import { NegociacaoService } from '../service/index';;
import { imprime } from '../helpers/utils';

export class NegociacaoController {

  @domInject('#data')
  private _inputData: JQuery;

  @domInject('#quantidade')
  private _inputQuantidade: JQuery;

  @domInject('#valor')
  private _inputValor: JQuery;

  private _negociacoes = new Negociacoes();
  private _negociacoesView = new NegociacoesView('#negociacoesView');
  private _mensagemView = new MensagemView('#mensagemView');
  private _NegociacaoService = new NegociacaoService();

  constructor() {
    // Comentado porque com a função domInject estou usando a ideia de Lazy loading
    // this._inputData = $('#data');
    // this._inputQuantidade = $('#quantidade');
    // this._inputValor = $('#valor');
    this._negociacoesView.update(this._negociacoes);
  }

  @logarTempoDeExecucao()
  adiciona(event: Event) {
    event.preventDefault();

    let date = new Date(this._inputData.val().replace(/-/g, ','));
    if (!this.ehDiaUtil(date)) {
      this._mensagemView.update('Somente negociações em dias úteis!');
      return;
    }

    const negociacao = new Negociacao(
      date,
      Number(this._inputQuantidade.val()),
      Number(this._inputValor.val())
    );

    this._negociacoes.adiciona(negociacao);
    imprime(negociacao, this._negociacoes);
    this._negociacoesView.update(this._negociacoes);
    this._mensagemView.update('Negociação adicionada com sucesso!');

  }

  private ehDiaUtil(date: Date) {
    return date.getDay() != DiaDaSemana.Sábado && date.getDay() != DiaDaSemana.Domingo
  }

  @throttle()
  async importaDados() {

    try {
      const negociacoesParaImportar = await this._NegociacaoService
        .obterNegociacoes(res => {

          if (res.ok) {
            return res;
          } else {
            throw new Error(res.statusText);
          }
        });

      const negociacoesJaImportadas = this._negociacoes.paraArray();

      negociacoesParaImportar
        .filter(negociacao =>
          !negociacoesJaImportadas.some(jaImportada =>
            negociacao.ehIgual(jaImportada)))
        .forEach(negociacao =>
          this._negociacoes.adiciona(negociacao));

      this._negociacoesView.update(this._negociacoes);
    } catch (err) {
      this._mensagemView.update(err.message)
    }

  }
}

enum DiaDaSemana {
  Domingo, Segunda, Terça, Quarta, Quinta, Sexta, Sábado
}