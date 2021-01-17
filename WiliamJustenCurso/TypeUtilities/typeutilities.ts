// Type utilitires: readOnly, Partials, Pick

type Todo = {
  title: string;
  description: string;
  completed: boolean;
}

// readOnly - garante a imutabilidade de dados
const todo: Readonly<Todo> = {
  title: "Assistir dark de novo",
  description: "Relembrar os detalhes",
  completed: false,
}

console.log(todo)

// Partial - torna opcional as propriedades do toDo apenas nesse trecho
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate }
}

const todo2 = updateTodo(todo, { completed: true });
console.log(todo2);

// Pick - vai mostrar apenas  title e description
type todoPreview = Pick<Todo, "title" | "description">;

//Omit - vai omitir title e description
type todoPreview1 = Omit<Todo, "title" | "description">;

