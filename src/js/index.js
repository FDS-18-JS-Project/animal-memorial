import displaySignUpPage from './components/signup';
import displayMainPage from './components/main';
import displayLandingPage from './components/landing';
import { displaySignInPage } from './components/signin';

import { fetchAndSaveUserInfo, getPetsInfo } from './utils/common';
// cookies
import * as Cookies from './utils/cookies';

// check if token exists
if (Cookies.getCookie('token')) {
  const rebootHandler = async () => {
    await fetchAndSaveUserInfo();
    await getPetsInfo();

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
