// Exemplo de decorator de propriedade, esse decorator vai injetar elementos do dom na classe

// Lazy loading é um padrão de projeto de software, comumente utilizado em linguagens de programação, 
// para adiar a inicialização de um objeto até o ponto em que ele é necessário

export function domInject(seletor: string) {
  return function (target: any, key: string) {
    let elemento: JQuery;
    const getter = function () {
      if (!elemento) {
        console.log(`Buscando o ${seletor} para injetar em ${key}`);
        elemento = $(seletor);
      }

      return elemento;
    }

    Object.defineProperty(target, key, { get: getter });
  }
}