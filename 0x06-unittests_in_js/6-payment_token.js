function getPaymentTokenFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ data: 'Successful response from the API' });
    } else {
      reject('API request failed');
    }
  });
}

module.exports = getPaymentTokenFromAPI;
