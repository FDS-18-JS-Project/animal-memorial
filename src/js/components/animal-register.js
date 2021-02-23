const tmp = () => {
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
};

const displayAnimalRegisterPage = () => {
  const markup = `<header class="header">
  <h1 class="offscreen">동물 추모공원</h1>
  <p class="slogan">Memorial for my Pet</p>
  <div class="logo"><img src="./img/logo.png" alt="logo"></div>
  <nav>
    <ul class="menu">
      <li class="bookmark"><a href="#">북마크</a></li>
      <li class="animal-register"><a href="/public/html/animal-register.html">내 반려견 등록</a></li>
      <li class="logout"><a href="/public/index.html">로그아웃</a></li>
    </ul>
  </nav>
</header>
<!-- animal register section -->
<main class="animal-register-container">
  <h1 class="title">내 반려견 추모 공간 등록</h1>
  <form action="#" method="#" class="animal-register-form">
    <!-- pet image -->
    <div class="img-container">
      <label class="img-label" for="animal-img">당신의 반려견 이미지를 등록해주세요.</label>
      <input class="img-input" type="file" id="animal-img" name="animal-img" accept="image/*" required
        autocomplete="off">
      <i class="img-icon fad fa-upload fa-9x"></i>
    </div>
    <!-- pet name -->
    <div class="name-container">
      <label class="name-label text-label" for="animal-name">반려견 이름</label>
      <input class="name-input" type="text" id="animal-name" name="animal-name" required autocomplete="off">
    </div>
    <!-- pet date of death -->
    <div class="death-container">
      <label class="death-year-label text-label" for="year">기일</label>
      <select class="death-year-select" id="year" name="year" required>
        <option value="">년도</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
        <option value="2018">2018</option>
        <option value="2017">2017</option>
        <option value="2016">2016</option>
      </select>
      <label class="death-month-label offscreen" for="month">기일 선택 항목</label>
      <select class="death-month-select" id="month" name="month" required>
        <option value="">월</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
      </select>
      <label class="death-date-label offscreen" for="date">기일 선택 항목</label>
      <select class="death-date-select" id="date" name="date" required>
        <option value="">일</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
        <option value="16">16</option>
        <option value="17">17</option>
        <option value="18">18</option>
        <option value="19">19</option>
        <option value="20">20</option>
        <option value="21">21</option>
        <option value="22">22</option>
        <option value="23">23</option>
        <option value="24">24</option>
        <option value="25">25</option>
        <option value="26">26</option>
        <option value="27">27</option>
        <option value="28">28</option>
        <option value="29">29</option>
        <option value="30">30</option>
        <option value="31">31</option>
      </select>
    </div>
    <!-- pet favorites -->
    <div class="favorite-1st-container">
      <label class="favorit-1st-label text-label" for="animal-favorit-1st">좋아했던 것 1</label>
      <input class="favorit-1st-input" type="text" id="animal-favorite-1st" name="animal-favorite-1st" required
        autocomplete="off">
    </div>
    <div class="favorite-2nd-container">
      <label class="favorit-2nd-label text-label" for="animal-favorite-2nd">좋아했던 것 2</label>
      <input class="favorit-2nd-input" type="text" id="animal-favorite-2nd" name="animal-favorite-2nd"
        autocomplete="off">
    </div>
    <div class="favorite-3rd-container">
      <label class="favorit-3rd-label text-label" for="animal-favorite-3rd">좋아했던 것 3</label>
      <input class="favorit-3rd-input" type="text" id="animal-favorite-3rd" name="animal-favorite-3rd"
        autocomplete="off">
    </div>
    <!-- animal register form submit button -->
    <input type="submit" class="animal-register-button" value="등록">
  </form>
  <div style="font-size: 20px;">
    <i class="foot-1st fas fa-paw fa-6x"></i>
    <i class="foot-2nd fas fa-paw fa-8x"></i>
    <i class="foot-3rd fas fa-paw fa-10x"></i>
  </div>
</main>
<footer class="footer">
  <h2 class="offscreen">하단영역</h2>
  <p class="footer-title">Memorial for my Pet</p>
  <address class="footer-address">
    <i class="fas fa-home"></i>
    <span>서울특별시 성동구 성수이로 113 제강빌딩 7층</span>
  </address>
  <div class="git-links">
    <i class="fab fa-github"></i>
    <a href="https://github.com/dannylee9212">Jaehoon Lee @dannylee9212</a>
    <a href="https://github.com/jjhstoday">Jihye Jang @jjhstoday</a>
    <a href="https://github.com/Bernese-Corgi">Jinyoung Choi @Bernese-Corgi</a>
  </div>
  <p>&copy; 2021 Memorial for my Pet. All Rights Reseved</p>
</footer>`;

document.querySelector('body').innerHTML = markup;

document.querySelector('.animal-register-button').addEventListener('click', );
}

export default displayAnimalRegisterPage;