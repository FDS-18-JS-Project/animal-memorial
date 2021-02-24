import * as request from '../request';
import * as Cookies from "./cookies";

import displayLandingPage from '../components/landing';

export const logout = () => {
  request.signout();
  // check whether
  localStorage.removeItem('userId');
  localStorage.removeItem('petId');
  Cookies.deleteCookie('token');
  displayLandingPage();
};