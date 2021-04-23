const loginPage = require('../pages/login.page');
const buttonsArePage = require('../pages/buttonsArea.page');
const monsterListPage = require('../pages/monsterList.page');
const monsterCardPage = require('../pages/monsterCard.page');
const monsterFormPage = require('../pages/monsterForm.page');

describe('Unfavorite All Monsters Test Suite', () => {
  const username = 'bob@bob.com';
  const password = 'Test123';

  beforeEach(() => {
    browser.url('');
    loginPage.login(username, password);
  });

  it('should unfavorite all', () => {
    buttonsArePage.createRandomMonsterTeamButton.click();
    for (let i = 1; i <= monsterListPage.monsterList.length; i++) {
      monsterListPage.monsterItem(i).click();

      monsterCardPage.manageMonsterMenu.click();
      monsterCardPage.editMonster.click();

      monsterFormPage.favoriteCheckbox.click();
      monsterFormPage.saveButton.click();

      assert.equal(monsterListPage.monsterItemFavorite(i).isDisplayed(), true, 'Favorite monster is not displayed');
    }

    buttonsArePage.unfavoriteAllButton.click();
    for (let i = 1; i <= monsterListPage.monsterList.length; i++) {
      assert.equal(monsterListPage.monsterItemFavorite(i).isDisplayed(), false, 'Favorite monster is displayed');
    }
  });
});
