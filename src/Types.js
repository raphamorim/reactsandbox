import parseReactElement from './parseReactElement'

function StringType(value, description) {
  if (!value) value = ''
  if (!description) description = ''

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
  if (typeof(value) !== 'boolean') value = false
  if (!description) description = ''

  return {
    value: value,
    description: description,
    type: 'boolean',
  }
}

function NumberType(value = 0, description) {
  if (!(Number.isInteger(value))) value = parseInt(value, 10)
  if (!value || value.toString() === 'NaN') value = 0
  if (!description) description = ''

  return {
    value: value,
    description: description,
    type: 'number',
  }
}

const Types = {
  String: StringType,
  Number: NumberType,
  Boolean: BooleanType,
  ReactElement: ReactElementType,
}

export default Types;
