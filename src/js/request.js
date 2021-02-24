import axios from 'axios';
import { URL_LOGIN, URL_REGISTER, URL_LOGOUT, URL_POST_PETS, URL_USER_DATA } from './utils/constants';

export const signin = async (email, password) => {
  try {
    const userInfo = await axios({
      method: 'post',
      url: URL_LOGIN,
      data: {
        email,
        password
      }
    });
    return userInfo;
  } catch (error) {
    console.error(error);
  }
};

export const signup = async (email, password, username) => {
  try {
    const res = await axios({
      method: 'post',
      url: URL_REGISTER,
      data: {
        email,
        password,
        username
      }
    });
    return res;
  } catch (error) {
    console.error(error);
  }
};

export const signout = async () => {
  try {
    const res = await axios({
      method: 'get',
      url: URL_LOGOUT
    });
    return res;
  } catch (error) {
    console.error(error);
  }
};

export const getUserData = async (userId, token) => {
  try {
    const res = await axios({
      method: 'get',
      url: URL_USER_DATA + '/' + userId,
      headers: {
        'content-type': 'application/json',
        'Authorization': token
      }
    });
    return res;
  } catch (error) {
    console.error(error);
  }
};

// export const postPetInfo = async (petName, deathDate, favorites, image, userId) => {
//   //TODO:
//   console.log('petInfo: ', petName, deathDate, favorites, image, userId);
//   try {
//     const petInfo = await axios({
//       method: 'post',
//       url: URL_POST_PETS,
//       data: {
//         petName,
//         deathDate,
//         favorites,
//         image,
//         userId
//       }
//     });
//     return petInfo;
//   } catch (error) {
//     console.error(error);
//   }
// };
