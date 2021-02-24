export class User {
  constructor(id, username, email, token, bookmark) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.token = token;
    this.bookmark = bookmark;
  }

  updateUserInfoAfterSignUp(email, username, token, id) {
    this.username = username;
    this.email = email;
    this.token = token;
    this.id = id;
    return this;
  }

  updateUserInfoWithToken(email, username, token, id) {
    this.username = username;
    this.email = email;
    this.token = token;
    this.id = id;
    return this;
  }

  getToken() {
    return this.token;
  }

  getUserInfo() {
    return this.username;
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

  updatePetInfo(petId, petName, deathDate, favorites, image) {
    this.petId = petId;
    this.petName = petName;
    this.deathDate = deathDate;
    this.favorites = favorites;
    this.image = image;
    return this;
  }

  getPetId() {
    return this.petId;
  }

  addComment(comment) {
    this.comments = [comment, ...this.comments];
    return this.comments;
  }
}