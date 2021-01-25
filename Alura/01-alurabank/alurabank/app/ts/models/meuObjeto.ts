import { Igualavel } from "./igualavel";
import { Imprimivel } from "./imprimivel";

export interface MeuObjeto<T> extends Imprimivel, Igualavel<T> {

}