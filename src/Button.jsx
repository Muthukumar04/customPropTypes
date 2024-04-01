import propTypes from "prop-types";
import { objectOfMixedTypes } from "./proptypes";

export function Button({ type }) {
  return <button>{JSON.stringify(type)}</button>;
}

Button.propTypes = {
  type: objectOfMixedTypes([
    propTypes.bool,
    propTypes.number,
    propTypes.object,
    propTypes.shape({
      type: propTypes.string,
    }),
  ]),
};
