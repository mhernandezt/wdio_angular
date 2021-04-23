const loginPage = require('../pages/login.page');
const buttonsArePage = require('../pages/buttonsArea.page');
const monsterListPage = require('../pages/monsterList.page');

describe('Crate Monster Test Suite', () => {
  const username = 'bob@bob.com';
  const password = 'Test123';

  beforeEach(() => {
    browser.url('');
    loginPage.login(username, password);
  });

  it('should remove all monsters', () => {
    buttonsArePage.removeAllMonstersButton.click();
    assert.equal(browser.getAlertText(), 'Are you sure you want to remove all monsters?', 'Alert text is not the same');
    browser.acceptAlert();
    assert.equal(monsterListPage.monsterCount.getText(), 'Number of monsters: 0', 'Number of monsters incorrect');
    assert.equal(monsterListPage.monsterList.length, 0, 'Monster list is not empty');
  });

  it('should not remove all monsters', () => {
    buttonsArePage.removeAllMonstersButton.click();
    assert.equal(browser.getAlertText(), 'Are you sure you want to remove all monsters?', 'Alert text is not the same');
    browser.dismissAlert();
    assert.equal(monsterListPage.monsterList.length, 2, 'Monster list is not empty');
  });
});
