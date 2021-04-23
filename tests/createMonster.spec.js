const loginPage = require('../pages/login.page');
const buttonsArePage = require('../pages/buttonsArea.page');
const monsterListPage = require('../pages/monsterList.page');
const monsterFormPage = require('../pages/monsterForm.page');

describe('Crate Monster Test Suite', () => {
  const username = 'bob@bob.com';
  const password = 'Test123';

  beforeEach(() => {
    browser.url('');
    loginPage.login(username, password);
  });

  it('should create a new monster', () => {
    let name = 'Shrek';
    let newMonsterRow = 3;
    let description = 'Be careful with this monster!';
    let monsterCount = 'Number of monsters: ';

    buttonsArePage.newMonsterButton.click();

    //  Fill form
    monsterFormPage.nameField = name;
    monsterFormPage.favoriteCheckbox.click();
    monsterFormPage.thiefRadio.click();
    monsterFormPage.descriptionField = description;

    monsterFormPage.saveButton.click();

    assert.equal(
      monsterListPage.monsterCount.getText(),
      `${monsterCount}${newMonsterRow}`,
      'Monster count is not correct'
    );
    assert.equal(monsterListPage.monsterItem(newMonsterRow).isDisplayed(), true, 'New monster is missing');
    assert.equal(monsterListPage.monsterItemName(newMonsterRow).getText(), name, 'Name is not correct');
    assert.equal(
      monsterListPage.monsterItemDescription(newMonsterRow).getText(),
      description,
      'Description is not correct'
    );
    assert.equal(monsterListPage.monsterItemRole(newMonsterRow).isDisplayed(), true, 'Role icon is missing');
    assert.equal(monsterListPage.monsterItemFavorite(newMonsterRow).isDisplayed(), true, 'Favorite icon is missing');
  });

  it('should display error messages', () => {
    buttonsArePage.newMonsterButton.click();

    monsterFormPage.nameField.click();
    monsterFormPage.descriptionField.click();
    monsterFormPage.nameField.click();

    assert.equal(monsterFormPage.nameRequiredError.isDisplayed(), true, 'Name error text is not displayed');
    assert.equal(
      monsterFormPage.descriptionRequiredError.isDisplayed(),
      true,
      'Description error text is not displayed'
    );
  });
});
