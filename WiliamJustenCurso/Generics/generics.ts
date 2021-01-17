// ------------------EXEMPLO SEM GENERICS
function useState() {
  let state: number;

  function getState() {
    return state;
  }

  function setState(newState: number) {
    state = newState;
  }

  return { getState, setState }
}

// const newState = useState();

// newState.setState(123);
// console.log(newState.getState());

// ------------------EXEMPLO COM UNION
function useState1() {
  let state: number | string;

  function getState() {
    return state;
  }

  function setState(newState: number | string) {
    state = newState;
  }

  return { getState, setState }
}

// const newState1 = useState1();

// newState1.setState(123);
// console.log(newState1.getState());

// newState1.setState("foo");
// console.log(newState1.getState());

// ------------------EXEMPLO COM GENERICS
function useState2<S>() {
  let state: S;

  function getState() {
    return state;
  }

  function setState(newState: S) {
    state = newState;
  }

  return { getState, setState }
}

// O tipo é definido no momento em que eu chamo a função, então uso a 
// mesma função com tipos diferentes mas é tomado conheciemnto do tipo
// pra não virar bagunça.
const newState2 = useState2<number>();
newState2.setState(123);
console.log(newState2.getState());

const newState3 = useState2<string>();
newState3.setState("foo");
console.log(newState3.getState());

const newState4 = useState2<boolean>();
newState4.setState(false);
console.log(newState4.getState());

// ------------------EXEMPLO COM GENERICS DEFININDO OS TIPOS POSSÍVEIS
function useState3<S extends number | string>() {
  let state: S;

  function getState() {
    return state;
  }

  function setState(newState: S) {
    state = newState;
  }

  return { getState, setState }
}

const newState5 = useState3<number>();
newState5.setState(123);
console.log(newState5.getState());

const newState6 = useState3<string>();
newState6.setState("foo");
console.log(newState6.getState());

// Nesse exemplo com definição de tipo o boolean dará erro
// const newState7 = useState3<boolean>();
// newState7.setState(false);
// console.log(newState7.getState());

// ------------------EXEMPLO COM GENERICS DEFININDO OS TIPOS POSSÍVEIS E DEFININDO UM VALOR DEFAULT

// type numOrString = number | string;
// function useState4<S extends numOrString  = string>() {
function useState4<S extends number | string = string>() {
  let state: S;

  function getState() {
    return state;
  }

  function setState(newState: S) {
    state = newState;
  }

  return { getState, setState }
}

const newState7 = useState4<number>();
newState7.setState(123);
console.log(newState7.getState());

//Como foi pré-definido string basta chamar a função que ela já assume o tipo
const newState8 = useState4();
newState8.setState("foo");
console.log(newState8.getState());

// Nesse exemplo com definição de tipo o boolean dará erro
// const newState7 = useState4<boolean>();
// newState7.setState(false);
// console.log(newState7.getState());