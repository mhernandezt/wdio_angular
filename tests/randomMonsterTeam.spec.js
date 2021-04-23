const loginPage = require('../pages/login.page');
const buttonsArePage = require('../pages/buttonsArea.page');
const monsterListPage = require('../pages/monsterList.page');
const monsters = require('../data/monsters.json');

describe('Create Random Monster Team Test Suite', () => {
  const username = 'bob@bob.com';
  const password = 'Test123';

  beforeEach(() => {
    browser.url('');
    loginPage.login(username, password);
  });

  it('should create a random monster team', () => {
    let monsterTeam = 5;
    buttonsArePage.createRandomMonsterTeamButton.click();
    assert.equal(monsterListPage.monsterList.length, monsterTeam, 'Random monster team was not created');
    assert.equal(
      monsterListPage.monsterCount.getText(),
      `Number of monsters: ${monsterTeam}`,
      'The count text is not correct'
    );
    for (let i = 1; i <= monsterTeam; i++) {
      let monsterName = monsterListPage.monsterItem(i).getText();
      for (let monster of monsters) {
        if (monsterName == monster.name) {
          assert.equal(
            monsterListPage.monsterItemDescription(i).getText(),
            monster.desc,
            `Monster description for row ${monsterName} is not correct`
          );
          break;
        }
      }
    }
  });
});
