import { MeuObjeto } from "./meuObjeto";
// O barrel é muito bom para exportar para outras pastas, alguns engineer podem bugar caso a ordem no index
// Não esteja por necessidade (Ex. Se no barrel o imprimível não estiver antes dos models que inporta imprimível.)
export class Negociacao implements MeuObjeto<Negociacao> {

  constructor(readonly data: Date,
    readonly quantidade: number,
    readonly valor: number) {
    // O underline indica que as prorpriedades não podem ser alteradas fora dos métodos da própria classe.
    // Essa regra do underline é uma convenção
  }

  get volume() {
    return this.quantidade * this.valor;
  }

  paraTexto(): void {
    console.log('-- paraTexto --');
    console.log(
      `Data: ${this.data}
        Quantidade: ${this.quantidade}, 
        Valor: ${this.valor}, 
        Volume: ${this.volume}`
    );
  }

  ehIgual(negociacao: Negociacao): boolean {
    return this.data.getDate() === negociacao.data.getDate()
      && this.data.getMonth() == negociacao.data.getMonth()
      && this.data.getFullYear() === negociacao.data.getFullYear();
  }
}