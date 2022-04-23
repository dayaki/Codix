import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import axios from 'axios';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import { baseURL, postLogin } from './utils/endpoints';
import Router from './navigations';

axios.interceptors.request.use(
  config => {
    if (config.url !== postLogin) {
      const token = store.getState().user?.userToken;
      if (config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    }
    return config;
  },
  error => {
    Promise.reject(error);
  },
);

// Response interceptor for API calls
axios.interceptors.response.use(
  response => {
    return response;
  },
  function (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const payload = {
        authenticationToken: store.getState().user.userToken,
        refreshToken: store.getState().user.refreshToken,
      };
      console.log(
        'inside 2......userToken',
        JSON.stringify(store.getState().user.userToken),
      );
      console.log(
        'inside 2......refreshToken',
        JSON.stringify(store.getState().user.refreshToken),
      );

      return axios
        .post(`${baseURL}/account/refreshtoken`, payload)
        .then(res => {
          console.log('refresheeed...', res);
          if (res.status === 201) {
            console.log('refresheeed...2', res);

            // 3) return originalRequest object with Axios.
            return axios(originalRequest);
          }
        })
        .catch(err => {
          console.log('inside 3', err);
        });
    }

    // return Error object with Promise
    return Promise.reject(error);
  },
);
// axios.interceptors.response.use(
//   response => {
//     return response;
//   },
//   async function (error) {
//     const originalRequest = error.config;
//     // console.log('error.response.status', error.response.status);
//     if (error.response.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       console.log('inside......');
//       await axios
//         .post(`${baseURL}/account/refreshtoken`, {
//           authenticationToken: store.getState().user.userToken,
//           refreshToken: store.getState().user.refreshToken,
//         })
//         .then(response => {
//           console.log('refreshAPi', response);
//         })
//         .catch(err => {
//           console.log('refreshToken error', err);
//         });
//       // const access_token = await refreshToken();
//       // axios.defaults.headers.common.Authorization = `Bearer ${access_token}`;
//       return axios(originalRequest);
//     }
//     return Promise.reject(error);
//   },
// );

// const refreshToken = async () => {
//   const refreshApi = await axios
//     .post(`${baseURL}/account/refreshtoken`, {
//       authenticationToken: store.getState().user.userToken,
//       refreshToken: store.getState().user.refreshToken,
//     })
//     .then(response => {
//       console.log('refreshAPi', response);
//       return response;
//     })
//     .catch(error => {
//       console.log('refreshToken error', error);
//       return error;
//     });
//   return refreshApi;
// };

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <Router />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
