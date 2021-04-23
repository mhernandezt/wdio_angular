const loginPage = require('../pages/login.page');
const monsterListPage = require('../pages/monsterList.page');
const monsterCardPage = require('../pages/monsterCard.page');

describe('Delete Monster Test Suite', () => {
  const username = 'bob@bob.com';
  const password = 'Test123';

  beforeEach(() => {
    browser.url('');
    loginPage.login(username, password);
  });

  it('should delete monster', () => {
    let monsterCount = monsterListPage.monsterList.length;

    monsterListPage.monsterItem(1).click();
    monsterCardPage.manageMonsterMenu.click();
    monsterCardPage.deleteMonster.click();

    assert.equal(
      monsterCardPage.modalMessage.getText(),
      'Are you sure you want to delete this monster?',
      'Modal message is not the same'
    );
    monsterCardPage.modalAcceptButton.click();
    assert.equal(monsterListPage.monsterList.length, monsterCount - 1, 'Monster item was not deleted');
  });

  it('should not delete monster', () => {
    let monsterCount = monsterListPage.monsterList.length;

    monsterListPage.monsterItem(1).click();
    monsterCardPage.manageMonsterMenu.click();
    monsterCardPage.deleteMonster.click();

    assert.equal(
      monsterCardPage.modalMessage.getText(),
      'Are you sure you want to delete this monster?',
      'Modal message is not the same'
    );
    monsterCardPage.modalCancelButton.click();
    assert.equal(monsterListPage.monsterList.length, monsterCount, 'Monster item was deleted');
  });
});
