// Essa função é para garantir que não haverá dados duplicados na importação

export interface Igualavel<T> {
  ehIgual(objeto: T): boolean;
}