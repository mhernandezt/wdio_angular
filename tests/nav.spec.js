const loginPage = require('../pages/login.page');
const navPage = require('../pages/nav.page');

describe('Nav Bar Test Suite', () => {
  const username = 'bob@bob.com';
  const password = 'Test123';

  beforeEach(() => {
    browser.url('');
  });

  it('should open support page', () => {
    let url = 'https://glitchitsystem.com/';
    loginPage.login(username, password);

    navPage.dropdownMenu.click();
    navPage.supportButton.click();

    browser.switchWindow(url);
    assert.equal(browser.getUrl(), url, 'New window url is not the same');
  });

  it('should log out', () => {
    loginPage.login(username, password);

    navPage.dropdownMenu.click();
    navPage.logoutButton.click();

    assert.equal(navPage.dropdownMenu.isDisplayed(), false, 'Dropdownmenu is still displayed');
    assert.equal(browser.getUrl(), browser.options.baseUrl, 'Url is not correct');
  });
});
