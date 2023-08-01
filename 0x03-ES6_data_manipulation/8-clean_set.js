export default function cleanSet(set, startString) {
  const string = Array.from(set).filter((value) => value.startsWith(startString));
  return string.join('-');
}
