
# Generics
Por ser fortemente tipado o typescript conta com o conceito de generics para casos em que se necessita uma maior generalização da aplicação em que estamos trabalhando. Ou seja, o generics flexibiliza mas não tanto como uma linguagem dinâmica.
Ao usar um *generic* é possível deixar o tipo em aberto ou definir os tipos aceitos, a letra que se escolhe por convenção é a **S**
mas nada impede de que seja usado outras letras:

Então:
````js
function  useState2<S>() {
let  state: S;
function  getState() {
return  state;
}
}
````

Pode ser a mesma a seguir e o efeito será o mesmo.
````js
function  useState2<D>() {
let  state: S;
function  getState() {
return  state;
}
}
````

Ainda com o exemplo anterior para definir os tipos aceitos usa-se a palavra *extends* e/ou o tipo(s)
````js
function  useState3 <S  extends  number | string>() {}
````

E para definir qual o tipo padrão usamos **= [um tipo aqui]**

````js
function  useState3 <S  extends  number | string = string>() {}
````