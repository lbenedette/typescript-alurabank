export function throttle(time = 500) {

  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    let timer = 0;

    descriptor.value = function (...args: any[]) {
      clearInterval(timer);
      timer = setTimeout(() => originalMethod.apply(this, args), time);
    }

    return descriptor;
  }
}