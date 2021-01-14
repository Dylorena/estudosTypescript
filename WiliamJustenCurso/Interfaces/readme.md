# Interfaces

Quando se trata de interfaces o uso do "I" na frente do nome é uma convenção mas não é obrigatória. Ex.: *IGame*

Assim como em classes nas interfaces há a possibilidade de estender outras interfaces e herdar propriedades. A propriedade *readOnly* pode ser usada tanto em classes quanto em interfaces.

Para uma interface herdar propriedades de outra interface
````js
interface  DLC  extends  IGame {
originalGame: IGame;
newContent: Array<string>;
}
````

Porém quando uma classe usará uma interface é usado a keyword *"implements"*.

````js
class  createGame  implements  IGame {
title: string;
description: string;
genere: string;
constructor(t: string, d: string, g: string) {
this.title = t;
this.description = d;
this.genere = g;
}
}

````
Interfaces servem somente para objetos então sempre observar quando se usará *interface* e *type alias*.

## Diferenças *interface* e *type alias*

TA: Type alias
I: interface
- A *tuple* declarada com TA segue a regra quantidade e tipo, a tuple enquanto interface não segue a regra da quantidade e tipo.

- No TA não é possível criar 2 types com mesmo nome sejam diferentes o escopo ou não, já nas I isso é possível conforme no exemplo abaixo.

````js
//Com type dá erro
type  JQueryT = { a: string };
type  JQueryT = { b: string };
  
//Nas interfaces é aceito e há um merge das propriedades, isso permite que com o mesmo nome de interface possa ser criados mais 
//propriedades sem alteração da interface inicial, ou seja interfaces são mais extensíveis.
interface  JQuery{
a: string;
}

interface  JQuery{
b: string;
}

const $: JQuery = {
a: "bla";
b: "foo";
}
````