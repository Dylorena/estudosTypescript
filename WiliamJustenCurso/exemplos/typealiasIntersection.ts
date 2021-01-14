type AccountInfo = {
  id: number,
  name: string;
  email: string;
}

type charInfo = {
  nickname: string;
  level: number;
}

//conceito de intersection '&'
type PlayerInfo = AccountInfo & charInfo;

const account: AccountInfo = {
  id: 123,
  name: 'Diana',
  email: 'exemplo@gmail.com',
}

const char: charInfo = {
  nickname: 'dylorena',
  level: 100,
}

const teste: PlayerInfo = {
  id: 123,
  name: 'Diana',
  email: 'exemplo@gmail.com',
  nickname: 'dylorena',
  level: 100,
}