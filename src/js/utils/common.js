import * as request from '../request';
import * as Cookies from './cookies';

import { User, Pet, Pets } from '../model';

import displayLandingPage from '../components/landing';

let userId = '';
let token = '';
let petId = '';

const user = new User();
const pet = new Pet();
const pets = new Pets();

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

export const obtainPetInfo = async () => {
  petId = localStorage.getItem('petId');
  token = Cookies.getCookie('token');
  const petAndUserInfo = await request.getPetInfo(petId, token);

  return petAndUserInfo;
};

export const getPetsInfo = async () => {
  token = Cookies.getCookie('token');
  const petsInfo = await request.getPetsInfo(token);

  if (petsInfo) {
    const petsData = [...petsInfo.data.pets].map(petInfo => {
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
  }
  return petsInfo;
};

export const fetchAndSaveUserInfo = async () => {
  userId = localStorage.getItem('userId');
  token = Cookies.getCookie('token');
  const userInfo = await request.getUserData(userId, token);

  if (userInfo) {
    user.updateUserInfo(
      userInfo.data.payload.email,
      userInfo.data.payload.username,
      userInfo.data.payload._id
    );
  }
  localStorage.setItem('userId', userInfo.data.payload._id);
};

export const postPetInfo = async imgFormData => {
  userId = localStorage.getItem('userId');
  token = Cookies.getCookie('token');
  const petInfo = await request.postPetInfo(imgFormData, userId, token);

  if (petInfo) {
    pet.updatePetInfo(
      petInfo.data.pet._id,
      petInfo.data.pet.name,
      petInfo.data.pet.deathDate,
      petInfo.data.pet.favorites
    );

    localStorage.setItem('petId', petInfo.data.pet._id);
  }
  return petInfo;
};
