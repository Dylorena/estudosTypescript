// Decorator de método: Pode executar algo antes e algo depois de onde é chamado. Ele deve retornar uma função
// (SIM a funcão vai retornar uma função)
export function logarTempoDeExecucao(emSegundos: boolean = false) {
  // Aqui receberá a instância no qual o decorator foi colocado
  // o property key nesse caso recebera o nome do método como string no qual o decorator está sendo colocado
  // O descriptor saberá tudo sobre o método que está sendo chamado
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const metodoOriginal = descriptor.value; //descriptor.value retornará a função original em que o decorator se alocará

    descriptor.value = function (...args: any[]) {

      let unidade = 'ms';
      let divisor = 1;
      if (emSegundos) {
        unidade = 's';
        divisor = 1000;
      }

      const t1 = performance.now();
      const retorno = metodoOriginal.apply(this, args);
      const t2 = performance.now();
      // console.log(`O método ${propertyKey} demorou ${(t2 - t1) / divisor} ${unidade}`);

      return retorno;
    }

    return descriptor;
  }
}