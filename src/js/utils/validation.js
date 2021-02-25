export const errorMessage = {
  default: '',
  signupIdError: '5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.',
  signupPwError: '4~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.',
  signupEmailError: '유효하지 않은 이메일 형식입니다.',
  loginError: '가입하지 않은 아이디이거나, 잘못된 비밀번호입니다.',
  emptyIdError: '이메일을 입력해주세요.',
  emptyEmailError: "이메일 주소에 '@'를 포함해 주세요.",
  emptyPwError: '비밀번호를 입력해주세요.'
}

// export const createDefault = inputEl => {
//   const $input = inputEl;
//   $input.parentElement.lastChildElemtne.remove();
//   console.log($input);
// };

export const createErrorForEmptyId = inputEl => {
  const $input = inputEl;
  const $errorMessageNode = document.createElement('span');
  $errorMessageNode.textContent = errorMessage.emptyIdError;
  $errorMessageNode.classList.add('error-message-email');
  $input.parentElement.after($errorMessageNode);
};

export const createErrorForEmptyEmail = inputEl => {
  const $input = inputEl;
  const $errorMessageNode = document.createElement('span');
  $errorMessageNode.textContent = errorMessage.emptyEmailError;
  $errorMessageNode.classList.add('error-message-email');
  $input.parentElement.after($errorMessageNode);
};

export const createErrorForEmptyPw = inputEl => {
  const $input = inputEl;
  const $errorMessageNode = document.createElement('span');
  $errorMessageNode.textContent = errorMessage.emptyPwError;
  $errorMessageNode.classList.add('error-message-pw');
  $input.parentElement.after($errorMessageNode);
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