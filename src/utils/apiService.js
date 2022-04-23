import Axios, { AxiosInstance } from 'axios';
// import Config from 'react-native-config';
// import { getUniqueId, getReadableVersion } from 'react-native-device-info';
// import { Base64 } from 'js-base64';

// const {
//   BASE_URL,
//   CLIENT_ID_DEV,
//   CLIENT_SECRET_DEV,
//   API_KEY_DEV,
//   PROD_URL,
//   CLIENT_ID_PROD,
//   CLIENT_SECRET_PROD,
//   API_KEY_PROD,
// } = Config;

const apiService = (url, type, data, headers) => {
  if (!url || typeof url !== 'string') {
    throw new Error('Please pass a string url to this function: /path/to/api');
  }
  if (!type || typeof type !== 'string') {
    throw new Error(
      'Please add string api request type: GET, POST, PUT, PATCH, DELETE',
    );
  }

  const headerContent = () => {
    if (headers) {
      if (headers['Content-Type']) {
        return headers['Content-Type'];
      }
      return 'application/json';
    }
    return 'application/json';
  };

  //   const devHeader = {
  //     Accept: 'application/json',
  //     'X-Install-ID': getUniqueId(),
  //     'X-Version-ID': getReadableVersion(),
  //     Authorization: `Basic ${Base64.encode(
  //       `${CLIENT_ID_DEV}:${CLIENT_SECRET_DEV}`,
  //     )}`,
  //     'X-Api-Key': API_KEY_DEV,
  //   };

  //   const prodHeader = {

  //     'X-Install-ID': getUniqueId(),
  //     'X-Version-ID': getReadableVersion(),
  //     Authorization: `Basic ${Base64.encode(
  //       `${CLIENT_ID_PROD}:${CLIENT_SECRET_PROD}`,
  //     )}`,
  //     'X-Api-Key': API_KEY_PROD,
  //   };

  const header = {
    'Content-Type': headerContent(),
    Accept: 'application/json',
  };

  return new Promise((resolve, reject) => {
    console.log('url', url);
    Axios({
      method: type,
      url: url,
      data,
      headers: header,
    })
      .then(res => {
        resolve(res.data || res);
      })
      .catch(error => {
        console.log('apiService error 1', error);
        console.log('apiService error 2', error.message);
        if (error && !error.response) {
          console.log(
            'Could not connect to the server, please check your internet connection',
          );
          reject(new Error());
        }
        reject(error.response.data);
      });
  });
};

export default apiService;
