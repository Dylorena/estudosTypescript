interface IGame {
  title: string;
  description: string;
  genere: string;
  platform?: string[];
  getSimilars?: (title: string) => void;
}

const telou: IGame = {
  title: 'The last of Us',
  description: "The best game in the word",
  genere: 'Action',
  platform: ['PS3', 'PS4'],

  getSimilars(title: string) {
    console.log(`Similar games to ${title}`);
  }
}

// Quando um método é necessário colocar um tratamento para a possibilidade de ser undefined
// então caso a função seja opcional:
if (telou.getSimilars)
  telou.getSimilars(telou.title);

//-----------------------------Exemplo de extends em interfaces
interface DLC extends IGame {
  originalGame: IGame;
  newContent: Array<string>;
}

const leftBehind: DLC = {
  title: 'The last of Us - BEHIND',
  description: "The best game in the word - BEHIND",
  genere: 'Action - BEHIND',
  platform: ['PS3- BEHIND', 'PS4- BEHIND'],
  originalGame: telou,
  newContent: ['Teste 1', ' Teste 2'],
}

console.log(leftBehind)

//-----------------------------Exemplo de classes baseada em interface
// é usado a palavra implements
//Para usar duas interfaces na classe: class createGame implements IGame, IOutraInterface {}
class createGame implements IGame {
  title: string;
  description: string;
  genere: string;

  constructor(t: string, d: string, g: string) {
    this.title = t;
    this.description = d;
    this.genere = g;
  }
}

// type JQueryT = { a: string };
type JQueryT = { b: string };

interface JQuery{
  a: string;
}
interface JQuery{
  b: string;
}
interface JQuery{
  a: string;
  b: string;
}