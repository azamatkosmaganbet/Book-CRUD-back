module.exports = class UserDto {
  email;
  name;
  surname;
  id;
  isActivated;

  constructor(model) {
    this.email = model.email;
    this.id = model._id;
    this.isActivated = model.isActivated;
    this.name = model.name;
    this.surname = model.surname;
  }
};
