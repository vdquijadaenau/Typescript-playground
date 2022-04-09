@classDecorator
class Boat {
  color: string = "red";

  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  @logError("Error caught on method:")
  pilot(@parameterDecorator speed: string): void {
    if (speed === "fast") {
      console.log("swish");
    } else {
      console.log("swish");
    }
  }
}

function classDecorator(constructor: Function) {
  console.log("Class decorator of:", constructor);
}

/**
 * Decorator on parameters
 * @param target
 * @param key
 * @param index
 */
function parameterDecorator(target: any, key: string, index: number) {
  console.log(key);
  console.log(index);
}
/**
 * Function Decorator
 * function logError(target: any, key: string, desc: PropertyDescriptor): void {
 * const method = desc.value; ///accessing the method on the Class
 *
 * changing or adding new behavior
 *  desc.value = function () {
 *    try {
 *      method();
 *    } catch (e) {
 *      console.log("error caught on method:", key);
 *    }
 *  };
 *}
 **/

/**
 * Decorator factory
 */
function logError(erroMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value; ///accessing the method on the Class

    // changing or adding new behavior
    desc.value = function () {
      try {
        method();
      } catch (e) {
        console.log(erroMessage, key);
      }
    };
  };
}
