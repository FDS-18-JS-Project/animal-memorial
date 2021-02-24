export class User {
  constructor(id, username, email, token, bookmark) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.token = token;
    this.bookmark = bookmark;
  }

  updateUserInfo(email, username, id, token) {
    this.username = username;
    this.email = email;
    this.token = token;
    this.id = id;
    return this;
  }

  getUserData() {
    return this;
  }

  getToken() {
    return this.token;
  }

  getUserId() {
    return this.id;
  }
}

export class Pet {
  constructor(petName, deathDate, favorites, image, petId) {
    this.petId = petId;
    this.petName = petName;
    this.deathDate = deathDate;
    this.favorites = favorites;
    this.image = image;
    this.comments = [];
  }
}

export class comments {
  constructor(comments, pet, owner) {
    this.comments = comments;
    this.pet = pet;
    this.owner = owner;
  }
}
