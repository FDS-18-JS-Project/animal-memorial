const createErrorForAddRecipe = (msg, inputEl) => {
  const $input = inputEl;
  const $errorMessageNode = document.createElement('p');
  $errorMessageNode.textContent = msg;
  $errorMessageNode.classList.add('error-message');
  $errorMessageNode.style.color = 'red';
  $input.after($errorMessageNode);
};

export const validateLength = (value, inputEl) => {
  if (value.length < 5) {
    createErrorForAddRecipe(
      'Please input a value which is longer than 5 chars',
      inputEl
    );
    return false;
  }
  return true;
};

export const validateUrl = (url, inputEl) => {
  const regExpUrl = /^(https?|ftp|torrent|image|irc):\/\/(-\.)?([^\s\/?\.#-]+\.?)+(\/[^\s]*)?$/i;
  if (!regExpUrl.test(url)) {
    createErrorForAddRecipe('Please input a valid url', inputEl);
    return false;
  }
  return true;
};

export const validateNumber = (number, inputEl) => {
  if (number < 1) {
    createErrorForAddRecipe(
      `${
        inputEl.name === 'cookingTime' ? 'Prep time' : 'Servings'
      } should be positive number!`,
      inputEl
    );
    return false;
  }
  return true;
};

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
