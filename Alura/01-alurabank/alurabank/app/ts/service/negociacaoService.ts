import { Negociacao, NegociacaoParcial } from '../models/index';

export class NegociacaoService {
  obterNegociacoes(handler: handlerFunction): Promise<Negociacao[]> {
    return <Promise<Negociacao[]>>fetch('http://localhost:8080/dados')
      .then(res => handler(res))
      .then(res => res.json())
      .then((dados: NegociacaoParcial[]) => dados.map(dado => new Negociacao(new Date(), dado.vezes, dado.montante))
      )
      .catch(err => {
        console.log(err.message)
        throw new Error("Não foi possível importar as negociações!");
        
      });
  }
}

// Interface de método pra dizer que é uma função de qualquer nome que recebe como parâmetro uma response e retorna uma response
export interface handlerFunction {
  (res: Response): Response;
}