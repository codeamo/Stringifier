
// Returns a stringified version of input,
// behaving in exactly the same way as JSON.stringify()
function stringifier (input) {
  if (input === undefined) {
    return undefined;
  } else if (input === null) {
    return 'null';
  } else if (typeof input === 'string') {
    return '"' + input.replace(/"/g, '\\"') + '"';
  } else if (typeof input === 'number') {
    return input.toString();
  } else if (typeof input === 'boolean') {
    return input ? 'true' : 'false';
  } else if (typeof input === 'function') {
    return undefined;
  } else if (Array.isArray(input)) {
    let result = [];
    for (let i = 0; i < input.length; i++) {
      if (input[i] === undefined || typeof input[i] === 'function') {
        result.push('null');
      } else {
        result.push(stringifier(input[i]));
      }
    }
    result = '[' + result.join(',') + ']';
    return result;
  } else if (typeof input === 'object') {
    let result = [];
    for (let property in input) {
      if (input.hasOwnProperty(property) && input[property] !== undefined && typeof input[property] !== 'function') {
        result.push(stringifier(property) + ':' + stringifier(input[property]));
      }
    }
    result = '{' + result.join(',') + '}';
    return result;
  }
}

// Allow tests to run on the server (leave at the bottom)
if (typeof window === 'undefined') {
  module.exports = stringifier;
}

