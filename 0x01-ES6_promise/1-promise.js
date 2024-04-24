export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    const response = success
      ? { status: 200, body: 'Success' }
      : new Error('The fake API is not working currently');

    if (success) {
      resolve(response);
    } else {
      reject(response);
    }
  });
}
