export class User {
  constructor(username, email, password, token, bookmark) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.token = token;
    this.bookmark = bookmark;
  }

  updateUserInfoAfterSignUp(email, password, username) {
    this.username = username;
    this.email = email;
    this.password = password;
    return this;
  }

  updateUserInfoWithToken(token) {
    this.token = token;
    return this;
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

  getName() {
    return this.petName;
  }
}

export class comments {
  constructor(comments, pet, owner) {
    this.comments = comments;
    this.pet = pet;
    this.owner = owner;
  }
}
