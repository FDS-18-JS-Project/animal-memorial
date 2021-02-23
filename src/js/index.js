// views
import displayLandingPage from './views/landing';
import displaySignUpPage from './views/signup';
import displaySignInPage from './views/signin';
import displayMainPage from './views/main';

// components
import getSignUpInfo from './components/signup';
import getSignInInfo from './components/signin';

// models
import { User } from './model';

// axios requests
import * as request from './request';

const user = new User();

const eventHandler = async e => {
  // if token existed
  //   if (user.getToken()) displayMainPage();

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

  // click register button from signup page
  if (e.target.matches('.register-btn')) {
    e.preventDefault();

    // validation required

    const { email, password, username } = getSignUpInfo();

    const userInfo = await request.signup(email, password, username);
    if (userInfo) {
      user.updateUserInfoAfterSignUp(email, username, userInfo.data.token);
      displayMainPage();
    }
  }

  // click login button from signin page
  if (e.target.matches('.login-btn')) {
    e.preventDefault();

    // validation required

    const { email, password } = getSignInInfo();

    const userInfo = await request.signin(email, password);
    if (userInfo) {
      console.log(userInfo);
      user.updateUserInfoWithToken(
        userInfo.data.payload.email,
        userInfo.data.username,
        userInfo.data.token
      );

      if (userInfo.data.token) displayMainPage();
    }
  }

  // click the login cred auto-saved button
  if (e.target.matches('.login-form-checkbox'));
};

document.querySelector('body').addEventListener('click', eventHandler);
