Código de acompanhamento do mini curso de Typescript do [William Justen Cursos](https://www.youtube.com/watch?v=mRixno_uE2o&list=PLlAbYrWSYTiPanrzauGa7vMuve7_vnXG_)

  ### Anotações gerais
Com o uso do arquivo tsconfig.json eu garanto que serão compilados todos os arquivos typescript deste projeto.

No Typescript existe o tipo de dados chamado *tuple* que é usado quando eu ja sei o que terá dentro do array, ou seja, ja sei quantos são e quais tipos são. *enum* que é um objeto chave:valor. *any* que é qualquer coisa, então assume vários tipos. É possivel definir no tsconfig para que seja proibido declarar o tipo any na propriedade *noImplicitiAny*.
Exemplo de tuple 
````js
let title: [number, string]
title = [1, "Uma string qualquer"]
````  
Exemplo de enum
````js
enum Colors {
white = '#fff',
black = '#000',
}
````

Existe a possibilidade de criar um tipo (conceito de *type alias*) e a possibilidade de dizer que uma variável pode assumir dois tipos de dados, segue o exemplo:
````js
type bla = string | undefined
````

O type alias também pode funcionar da seguinte forma:
 ````js
 type platform = 'windows' | 'Mac Os' | 'Linux'
 //Então caso eu tenha uma função, ela só aceitará receber s sistemas declarados 
 function renderPlatform(platform: platform){
 }
 ````

**& é chamado *intersection*
| é chamado *union*** 

### Comands
- npx tsc index.ts -watch : Rodar o arquivo
- npx tsc init : cria o arquivo tsconfig.file