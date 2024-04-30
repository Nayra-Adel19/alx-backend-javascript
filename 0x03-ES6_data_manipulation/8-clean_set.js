export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || startString === '' || !(set instanceof Set)) {
    return '';
  }
  const results = [...set]
    .filter((str) => typeof str === 'string' && str.startsWith(startString))
    .map((str) => str.substring(startString.length));
  return results.join('-');
}
