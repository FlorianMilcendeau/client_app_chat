class Authentication {
  constructor() {
    this.authenticate = false;
  }

  logIn(cb) {
    this.authenticate = true;
    cb();
  }

  logOut(cb) {
    this.authenticate = false;
    cb();
  }

  get isAuthenticate() {
    return this.authenticate;
  }
}

export default new Authentication();
