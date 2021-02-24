import axios from 'axios';
import {
  URL_LOGIN,
  URL_REGISTER,
  URL_LOGOUT,
  URL_GET_PETS,
  URL_COMMENT
} from './utils/constants';

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

export const getPetInfo = async petId => {
  try {
    const res = await axios({
      method: 'get',
      url: URL_GET_PETS,
      params: {
        petId
      }
    });
    return res;
  } catch (error) {
    console.error(error);
  }
};

export const postComment = async (comment, userId, petId) => {
  try {
    const res = await axios({
      method: 'post',
      url: URL_COMMENT,
      data: {
        comment,
        userId,
        petId
      }
    });
    return res;
  } catch (error) {
    console.error(error);
  }
};