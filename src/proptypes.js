export function objectOfMixedTypes(typeCheckers = []) {
  return (props, propName, componentName, location, propFullName) => {
    const prop = props[propName];
    let isValidProp = true;
    for (const key in prop) {
      if (Object.prototype.hasOwnProperty.call(prop, key)) {
        /*
    atleast one type checking passed.
    TypeChecker will return an Error, if not matched.
    */

        const matchedWithOneType = typeCheckers.some(
          (typeChecker) =>
            !typeChecker(
              prop,
              key,
              componentName,
              location,
              propFullName,
              "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED" //use this or else you will be fired
            )
        );
        isValidProp = matchedWithOneType * isValidProp;
      }
    }
    if (!isValidProp)
      return new Error(
        `Invalid prop ${propFullName} supplied to ${componentName}. Validation failed.`
      );
  };
}
