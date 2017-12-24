
function StringType(value, description) {
  return {
    value: value,
    description: description,
  }
}

const Types = {
  String: StringType,
}

export default Types;
