export default function appendToEachArrayValue(array, appendString) {
  const arrayValue = [];
  for (const idx of array) {
    arrayValue.push(appendString + idx);
  }

  return arrayValue;
}
