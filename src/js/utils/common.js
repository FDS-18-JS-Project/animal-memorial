import * as request from '../request';
import * as Cookies from './cookies';

import { User, Pet, Pets } from '../model';

import displayLandingPage from '../components/landing';

export const logout = () => {
  request.signout();
  // check whether
  localStorage.removeItem('userId');
  localStorage.removeItem('petId');
  localStorage.removeItem('username');
  Cookies.deleteCookie('token');
  displayLandingPage();
};

export const moveLabelInForm = formName => {
  document.querySelector(`.${formName}`).addEventListener('click', e => {
    if (!e.target.matches('input')) return;

    e.target.previousElementSibling.classList.add('active');
  });

  document.querySelector(`.${formName}`).addEventListener('keyup', e => {
    if (!e.key === 'Tab') return;
    if (!e.target.matches('div > input')) return;

    e.target.previousElementSibling.classList.add('active');
  });
};

export const getPetsInfo = async () => {
  const petsInfo = await request.getPetsInfo(Cookies.getCookie('token'));
  const pets = new Pets();

  if (petsInfo) {
    const petsData = [...petsInfo.data.pets].map(petInfo => {
      const pet = new Pet();

      pet.updatePetInfo(
        petInfo._id,
        petInfo.name,
        petInfo.deathDate,
        petInfo.favorites,
        petInfo.image,
        petInfo.comments
      );
      return pet;
    });
    pets.updatePetsInfo(petsData);
    return pets.getPetsInfo();
  }
};

export const saveUserInfo = async () => {
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
  localStorage.setItem('userId', userInfo.data.payload._id);
};
