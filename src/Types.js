import parseReactElement from './parseReactElement'

function StringType(value, description) {
  return {
    value: value,
    description: description,
    type: 'string',
  }
}

function ReactElementType(value, description) {
  return {
    value: parseReactElement(value),
    rawValue: value,
    description: description,
    type: 'reactelement',
  }
}

function BooleanType(value, description) {
  return {
    value: value,
    description: description,
    type: 'boolean',
  }
}

const Types = {
  String: StringType,
  Boolean: BooleanType,
  ReactElement: ReactElementType,
}

export default Types;
