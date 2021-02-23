const $animalRegisterForm = document.querySelector('.animal-register-form');
const $imgInput = document.querySelector('.img-input');
const $button = document.querySelector('.button');

const setThumbnail = e => {
  const image = e.target.files[0];
  const thubImage = document.createElement('img');
  thubImage.setAttribute('src', window.URL.createObjectURL(image));
  thubImage.style.width = '780px';
  thubImage.style.backgroundRepeat = 'no-repeat';
  thubImage.style.position = 'absolute';
  thubImage.style.zIndex = '99';
  document.querySelector('.img-container').appendChild(thubImage);

  // const reader = new FileReader();
  
  // reader.onload = e => {
  //   const img = document.createElement('img');
  //   img.setAttribute('src', e.target.result);
  //   img.style.width = '780px';
  //   img.style.backgroundRepeat = 'no-repeat';
  //   img.style.position = 'absolute';
  //   img.style.zIndex = '99';
  //   document.querySelector('.img-container').appendChild(img);
  // };

  // reader.readAsDataURL(e.target.files[0]);
};

function dragOver(e) {
  const effectDrag = e.target.parentNode.style;

  if (e.type === 'dragover') {
    effectDrag.backgroundColor = 'rgba(151, 151, 157, 0.4)';
    effectDrag.transition = 'all 0.3s';
  } else {
    effectDrag.backgroundColor = '#FFFFFF';
  }
}

$imgInput.onchange = e => {
  setThumbnail(e);
};

// TODO: 서버 보내기
$button.onclick = e => {
  e.preventDefault();
  const formDate = [...document.forms][0];

  const image = window.URL.createObjectURL(formDate[0].files[0]);
  const petName = formDate[1].value;
  const deathDate = `${formDate[2].value}.${formDate[3].value}.${formDate[4].value}`;
  const favorites = [`${formDate[5].value}`, `${formDate[6].value}`, `${formDate[7].value}`];

  console.log('image: ', image);
  console.log('petName: ', petName);
  console.log('deathDate: ', deathDate);
  console.log('favorites: ', favorites);
}

$animalRegisterForm.onclick = ({ target }) => {
  if (!target.matches('div > input[type="text"]')) return;

  target.previousElementSibling.classList.add('active');
};

$animalRegisterForm.onkeyup = e => {
  if (!e.key === 'Tab') return;
  if (!e.target.matches('div > input[type="text"]')) return;

  e.target.previousElementSibling.classList.add('active');
};

$imgInput.addEventListener('dragover', e => {
  e.stopPropagation();
  e.preventDefault();
  dragOver(e);
});

$imgInput.addEventListener('dragleave', e => {
  e.stopPropagation();
  e.preventDefault();
  dragOver(e);
});