export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }

  const calls = weakMap.get(endpoint) + 1;
  weakMap.set(endpoint, calls);

  if (calls >= 5) {
    throw new Error('Endpoint load is high');
  }
}
