export const errorMessage = {
  default: '',
  signupNameError: '2자 이상의 문자를 입력해주세요.',
  signupPwError: '4~15자 영문 대 소문자, 숫자를 사용하세요.',
  loginError: '가입하지 않은 아이디이거나, 잘못된 비밀번호입니다.',
  emptyIdError: '이메일을 입력해주세요.',
  emptyEmailError: '유효하지 않은 이메일 형식입니다.',
  emptyPwError: '비밀번호를 입력해주세요.'
};

export const reset = spanEl => {
  const $span = spanEl;
  $span.textContent = '';
};

export const createErrorForEmptyId = spanEl => {
  const $span = spanEl;
  $span.textContent = errorMessage.emptyIdError;
};

export const createErrorForEmptyEmail = spanEl => {
  const $span = spanEl;
  $span.textContent = errorMessage.emptyEmailError;
};

export const createErrorForEmptyPw = spanEl => {
  const $span = spanEl;
  $span.textContent = errorMessage.emptyPwError;
};

export const createErrorForSignupNameError = spanEl => {
  const $span = spanEl;
  $span.textContent = errorMessage.signupNameError;
};

export const createErrorForSignupPwError = spanEl => {
  const $span = spanEl;
  $span.textContent = errorMessage.signupPwError;
};

export const createErrorForSignupEmailError = spanEl => {
  const $span = spanEl;
  $span.textContent = errorMessage.emptyEmailError;
};

// export const validateLength = (value, inputEl) => {
//   if (value.length < 5) {
//     createErrorForAddRecipe(
//       'Please input a value which is longer than 5 chars',
//       inputEl
//     );
//     return false;
//   }
//   return true;
// };

// export const validateUrl = (url, inputEl) => {
//   const regExpUrl = /^(https?|ftp|torrent|image|irc):\/\/(-\.)?([^\s\/?\.#-]+\.?)+(\/[^\s]*)?$/i;
//   if (!regExpUrl.test(url)) {
//     createErrorForAddRecipe('Please input a valid url', inputEl);
//     return false;
//   }
//   return true;
// };

// export const validateNumber = (number, inputEl) => {
//   if (number < 1) {
//     createErrorForAddRecipe(
//       `${
//         inputEl.name === 'cookingTime' ? 'Prep time' : 'Servings'
//       } should be positive number!`,
//       inputEl
//     );
//     return false;
//   }
//   return true;
// };

// export const validateIngredients = ingredients => {
//   if (ingredients.length === 0) {
//     const inputEl = document.querySelector('input[name="ingredient-1"]');
//     generateError('Please input any ingredient at least once', inputEl);
//     return false;
//   }

//   for (let i = 0; i < ingredients.length; i++) {
//     if (!/^\d+$/.test(ingredients[i].quantity)) {
//       const inputEl = document.querySelector(
//         `input[name="ingredient-${i + 1}"]`
//       );
//       generateError('Quantity of ingredient should be number!', inputEl);
//       return false;
//     }
//     if (!/^\D+$/.test(ingredients[i].unit)) {
//       const inputEl = document.querySelector(
//         `input[name="ingredient-${i + 1}"]`
//       );
//       generateError(
//         'Unit of ingredient should not include any number!',
//         inputEl
//       );
//       return false;
//     }
//     if (!/^\w+$/.test(ingredients[i].description)) {
//       const inputEl = document.querySelector(
//         `input[name="ingredient-${i + 1}"]`
//       );
//       generateError(
//         'Description of ingredient should be a number(s) and alphabet letters',
//         inputEl
//       );
//       return false;
//     }
//   }
//   return true;
// };