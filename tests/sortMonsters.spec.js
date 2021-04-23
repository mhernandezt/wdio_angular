const loginPage = require('../pages/login.page');
const buttonsArePage = require('../pages/buttonsArea.page');
const monsterListPage = require('../pages/monsterList.page');

describe('Unfavorite All Monsters Test Suite', () => {
  const username = 'bob@bob.com';
  const password = 'Test123';

  beforeEach(() => {
    browser.url('');
    loginPage.login(username, password);
  });

  it('should unfavorite all', () => {
    let monsters = [];
    let monsterSorted = [];

    buttonsArePage.createRandomMonsterTeamButton.click();
    buttonsArePage.sortMonstersButton.click();

    for (let i = 1; i <= monsterListPage.monsterList.length; i++) {
      monsters.push(monsterListPage.monsterItemName(i).getText());
    }
    monsterSorted = monsters.sort();
    for (let i = 0; i < monsters.length; i++) {
      assert.equal(monsters[i] === monsterSorted[i], true, `Row ${i + 1} is not in the correct position`);
    }
  });
});
