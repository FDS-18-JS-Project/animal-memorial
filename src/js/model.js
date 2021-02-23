export class User {
  constructor(username, email, token, bookmark) {
    this.username = username;
    this.email = email;
    this.token = token;
    this.bookmark = bookmark;
  }

  updateUserInfoAfterSignUp(email, username, token) {
    this.username = username;
    this.email = email;
    this.token = token;
    return this;
  }

  updateUserInfoWithToken(email, username, token) {
    this.username = username;
    this.email = email;
    this.token = token;
    return this;
  }

  getToken() {
    return this.token;
  }
}

export class Pet {
  constructor(petName, deathDate, favorites, image) {
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
