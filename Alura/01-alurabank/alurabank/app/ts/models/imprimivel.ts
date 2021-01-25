// A classe como abstrata vai obrigar as filhas a sobrescrever o método
/* Em typescript uma classe só pode herdar de outra superclasse, ou seja após o extends só pode haver 1 classe pai.
* Então pelo minimalismo desse código de obrigatoriedade do para texto é mais vantajoso colocar o Imprimível
* como uma interface. No local onde eu quero externalizar essa interface eu coloco "implements Imprimivel", como por 
* exemplo ocorre em model/negociacao
*/
export interface Imprimivel {
  paraTexto(): void;
}