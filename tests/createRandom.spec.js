const loginPage = require('../pages/login.page');
const buttonsArePage = require('../pages/buttonsArea.page');
const monsterListPage = require('../pages/monsterList.page');

describe('Crate Random Monster Test Suite', () => {
  const username = 'bob@bob.com';
  const password = 'Test123';

  beforeEach(() => {
    browser.url('');
    loginPage.login(username, password);
  });

  it('should create a new random monster', () => {
    let monsterCount = 'Number of monsters: ';
    let monsters = monsterListPage.monsterList;

    buttonsArePage.randomMonsterButton.click();

    assert.equal(
      monsterListPage.monsterCount.getText(),
      `${monsterCount}${monsters.length + 1}`,
      'Monster count is not correct'
    );
    assert.equal(
      monsterListPage.monsterItem(monsters.length + 1).isDisplayed(),
      true,
      'Random Monster is not displayed'
    );
  });
});
