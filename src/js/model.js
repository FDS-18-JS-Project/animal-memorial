export class User {
  constructor(username, email, password, token, bookmark) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.token = token;
    this.bookmark = bookmark;
  }
}

export class Pet {
  constructor(petName, deathDate, favourites, image) {
    this.petName = petName;
    this.deathDate = deathDate;
    this.favourites = favourites;
    this.image = image;
  }
}
