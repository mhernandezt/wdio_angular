const loginPage = require('../pages/login.page');

describe('Login Test Suite', () => {
  beforeEach(() => {
    browser.url('');
  });

  it('should display error messages when fields are blank', () => {
    loginPage.passwordField.click();
    loginPage.usernameField.click();
    loginPage.passwordField.click();

    assert.equal(loginPage.notValidText(1).isDisplayed(), true, 'Username required error is not displayed');
    assert.equal(loginPage.notValidText(1).getText(), 'Username is required', 'Username required error is not correct');

    assert.equal(loginPage.notValidText(2).isDisplayed(), true, 'Password required error is not displayed');
    assert.equal(loginPage.notValidText(2).getText(), 'Password is required', 'Password required error is not correct');
  });

  it('should display error message when not valid email', () => {
    let usernames = ['Bob', 'bob@', 'bob@bob.'];

    for (let username of usernames) {
      loginPage.usernameField = username;
      loginPage.passwordField.click();

      assert.equal(loginPage.notValidText(1).isDisplayed(), true, 'Username valid error is not displayed');
      assert.equal(
        loginPage.notValidText(1).getText(),
        'Username needs to be a valid email',
        'Username valid error is not correct'
      );
      browser.url('');
    }
  });

  it('should display error when username or password are invalid', () => {
    let users = [
      {
        email: 'correo@example.com',
        password: 'pass',
      },
      {
        email: 'sam@sam.com',
        password: 'Test123',
      },
    ];

    for (let i in users) {
      loginPage.usernameField = users[i].email;
      loginPage.passwordField = users[i].password;
      loginPage.loginButton.click();

      assert.equal(loginPage.notValidText(3).isDisplayed(), true, 'Login valid error is not displayed');
      assert.equal(
        loginPage.notValidText(3).getText(),
        'Invalid username or password',
        'Login valid error is not correct'
      );
      browser.url('');
    }
  });

  it('should login succesfully', () => {
    let user = 'bob@bob.com';
    let password = 'Test123';

    loginPage.usernameField = user;
    loginPage.passwordField = password;
    loginPage.loginButton.click();

    assert.equal(browser.getUrl(), `${browser.options.baseUrl}mine`, 'Browser url is not correct');
  });

  it('should not route to mine when logged in', () => {
    browser.url('/mine');

    assert.equal(browser.getUrl(), `${browser.options.baseUrl}`, 'App routed to mine');
  });
});
