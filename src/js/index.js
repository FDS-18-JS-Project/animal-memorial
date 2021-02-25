import displaySignUpPage from './components/signup';
import displayMainPage from './components/main';
import displayLandingPage from './components/landing';
import { displaySignInPage } from './components/signin';

import { saveUserInfo, getPetsInfo } from './utils/common';
// cookies
import * as Cookies from './utils/cookies';
import * as request from './request';
import { User } from './model';

// check if token exists
if (Cookies.getCookie('token')) {
  const getUserInfo = async () => {
    const userInfo = await request.getUserData(
      localStorage.getItem('userId'),
      Cookies.getCookie('token')
    );
    const user = new User();

    if (userInfo) {
      user.updateUserInfo(
        userInfo.data.payload.email,
        userInfo.data.payload.username,
        userInfo.data.payload._id
      );
    }
  };
  getUserInfo();
  const rebootHandler = async () => {
    saveUserInfo();
    const pets = await getPetsInfo();
    console.log(pets);

    displayMainPage();
  };
  rebootHandler();
}
const eventHandler = e => {
  // redirect to landing
  if (e.target.matches('.site-title')) {
    displayLandingPage();
  }

  // redirect to signup page
  if (e.target.matches('.signup-btn') || e.target.matches('.register-title')) {
    displaySignUpPage();
  }

  // redirect to signin page
  if (e.target.matches('.signin-btn') || e.target.matches('.login-title')) {
    displaySignInPage();
  }
};

document.body.addEventListener('click', eventHandler);
