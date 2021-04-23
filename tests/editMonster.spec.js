const loginPage = require('../pages/login.page');
const monsterListPage = require('../pages/monsterList.page');
const monsterFormPage = require('../pages/monsterForm.page');
const monsterCardPage = require('../pages/monsterCard.page');

describe('Edit Monster Test Suite', () => {
  const username = 'bob@bob.com';
  const password = 'Test123';

  beforeEach(() => {
    browser.url('');
    loginPage.login(username, password);
  });

  it('should edit a monster', () => {
    let name = 'Shrek';
    let monsterRow = 1;
    let description = 'Be careful with this monster!';

    monsterListPage.monsterItem(monsterRow).click();
    monsterCardPage.manageMonsterMenu.click();
    monsterCardPage.editMonster.click();

    assert.equal(browser.getUrl(), `${browser.options.baseUrl}mine/0/edit`, 'Url is not correct');

    //  Fill form
    monsterFormPage.nameField = name;
    monsterFormPage.favoriteCheckbox.click();
    monsterFormPage.thiefRadio.click();
    monsterFormPage.descriptionField = description;

    monsterFormPage.saveButton.click();

    assert.equal(monsterListPage.monsterItem(monsterRow).isDisplayed(), true, 'Monster is missing');
    assert.equal(monsterListPage.monsterItemName(monsterRow).getText(), name, 'Name is not correct');
    assert.equal(
      monsterListPage.monsterItemDescription(monsterRow).getText(),
      description,
      'Description is not correct'
    );
    assert.equal(monsterListPage.monsterItemRole(monsterRow).isDisplayed(), true, 'Role icon is missing');
    assert.equal(monsterListPage.monsterItemFavorite(monsterRow).isDisplayed(), false, 'Favorite icon is missing');
  });
});
