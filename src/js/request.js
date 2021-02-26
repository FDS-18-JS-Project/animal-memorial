import axios from 'axios';
import {
  URL_LOGIN,
  URL_REGISTER,
  URL_LOGOUT,
  URL_PET,
  URL_USER_DATA,
  URL_GET_PETS,
  URL_COMMENT
} from './utils/constants';

const createErrorMessageReceivedFromServer = (message, type) => {
  const $prevValue =
    type === 'login'
      ? document.querySelector('.password').nextElementSibling
      : document.querySelector('.email').nextElementSibling;

  if ($prevValue) $prevValue.textContent = '';

  const $el =
    type === 'login'
      ? document.querySelector('.password')
      : document.querySelector('.email');

  const $errorMessageEl = document.createElement('span');
  $errorMessageEl.classList.add('error-message-server');
  $errorMessageEl.textContent = message;
  $el.after($errorMessageEl);
};

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
    console.log(error.response);
    createErrorMessageReceivedFromServer(error.response.data.error, 'login');
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
    console.log(error.response);
    createErrorMessageReceivedFromServer(error.response.data.error, 'singup');
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
    console.log(error.response);
  }
};

export const getUserData = async (userId, token) => {
  try {
    const res = await axios({
      method: 'get',
      url: URL_USER_DATA + '/' + userId,
      headers: {
        'content-type': 'application/json',
        Authorization: 'Bearer ' + token
      }
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const postPetInfo = async (imgFormData, userId, token) => {
  console.log(
    'petInfo: ',
    imgFormData.get('image'),
    imgFormData.get('favorites1'),
    imgFormData.get('favorites2'),
    imgFormData.get('favorites3'),
    imgFormData.get('deathDate'),
    imgFormData.get('petName'),
    userId,
    token
  );
  try {
    const petInfo = await axios({
      method: 'post',
      url: URL_PET + '/' + userId,
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: 'Bearer ' + token
      },
      data: imgFormData
    });
    console.log(petInfo);
    return petInfo;
  } catch (error) {
    console.log(error.response);
  }
};

export const getPetsInfo = async token => {
  try {
    const petsInfo = await axios({
      method: 'get',
      url: URL_GET_PETS,
      headers: {
        'content-type': 'application/json',
        Authorization: 'Bearer ' + token
      }
    });
    return petsInfo;
  } catch (error) {
    console.log(error);
  }
};

export const getPetInfo = async (petId, token) => {
  try {
    const res = await axios({
      method: 'get',
      url: URL_PET + '/' + petId,
      headers: {
        'content-type': 'application/json',
        Authorization: 'Bearer ' + token
      }
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const postComment = async (comment, userId, petId, token) => {
  try {
    const res = await axios({
      method: 'post',
      url: URL_COMMENT,
      headers: {
        'content-type': 'application/json',
        Authorization: 'Bearer ' + token
      },
      data: {
        comment,
        userId,
        petId
      }
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};
