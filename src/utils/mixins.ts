/**
 * Applies mixins to a derived class by copying properties and methods from one or more base classes.
 * @function
 * @name applyMixins
 * @param {any} derivedCtor - The derived class to apply mixins to.
 * @param {any[]} constructors - An array of base classes to copy properties and methods from.
 * @returns {void}
 */
export function applyMixins(derivedCtor: any, constructors: any[]) {
    constructors.forEach((baseCtor) => {
      Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
        Object.defineProperty(
          derivedCtor.prototype,
          name,
          Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
            Object.create(null)
        );
      });
    });
  }