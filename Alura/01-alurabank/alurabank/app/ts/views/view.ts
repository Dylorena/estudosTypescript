import { logarTempoDeExecucao } from '../helpers/decorators/index';
// O javascript não suporta classes abstratas
// O TSD-type script definitions ele mapeia tipos que o JS deve suportar. Ele pode ser criado pelos autores 
// ou por terceiros.
//namespace Views {}  Com o uso do namespace facilita a visualização das views, as infos de dentro devem ter export
export abstract class View<T> {
  protected _elemento: JQuery;
  private _escapar: boolean;

  constructor(selector: string, escapar: boolean = false) {
    this._elemento = $(selector);
    this._escapar = escapar;
  }

  @logarTempoDeExecucao(false)
  update(model: T): void {
    let template = this.template(model);
    if (this._escapar) {
      template = template.replace(/<script>[\s\S]*?<\/script>/g, '');
    }
    this._elemento.html(template);
  }

  // o tipo abstract vai garantir que se iniciar a classe sem sobresscrever tenha um aviso antes mesmo de compilar
  abstract template(model: T): string;
}
