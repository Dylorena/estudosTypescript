import { Negociacao } from './index';
import { MeuObjeto } from './meuObjeto';

export class Negociacoes implements MeuObjeto<Negociacoes> {
  readonly _negociacoes: Array<Negociacao> = [];

  adiciona(negociacao: Negociacao) {
    return this._negociacoes.push(negociacao);
  }

  paraArray(): Negociacao[] {
    // Cria um novo array impedindo que se modifique ele fora
    return ([] as Negociacao[]).concat(this._negociacoes);
  }

  paraTexto(): void {
    console.log('-- paraTexto --');
    console.log(JSON.stringify(this._negociacoes));
  }

  ehIgual(negociacoes: Negociacoes): boolean {
    return JSON.stringify(this._negociacoes) === JSON.stringify(negociacoes.paraArray());
  }
}