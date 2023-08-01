export default function cleanSet(set, startString) {
  const valuesArray = [];
  for (const value of set) {
    if (value.startsWith(startString)) {
      valuesArray.push(value.slice(startString.length));
    }
  }
  return valuesArray.join('-');
}
