export function logPerformance() {

  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      console.log('---------------------------');
      const t1 = performance.now();

      const callback = originalMethod.apply(this, args);

      const t2 = performance.now();
      console.log(`Time for ${propertyKey} is: ${t2 - t1} ms`)

      return callback;
    }

    return descriptor;
  }
}