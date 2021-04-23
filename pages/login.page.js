class LoginPage {
  get usernameLabel() {
    return $('.form-group label[for="username"]');
  }

  get passwordLabel() {
    return $('.form-group label[for="password"]');
  }

  get usernameField() {
    return $('#username');
  }

  get passwordField() {
    return $('#password');
  }

  get loginButton() {
    return $('form button');
  }

  set usernameField(value) {
    this.usernameField.setValue(value);
  }

  set passwordField(value) {
    this.passwordField.setValue(value);
  }

  /**
   * Get message error by option
   * @param {Number} option
   * @returns child message
   */
  notValidText(option) {
    return $(`form .row:nth-child(${option}) .notValid`);
  }

  /**
   * @param {string} username
   * @param {string} password
   */
  login(username, password) {
    this.usernameField = username;
    this.passwordField = password;
    this.loginButton.click();
  }
}
module.exports = new LoginPage();
