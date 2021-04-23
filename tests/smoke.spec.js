const loginPage = require('../pages/login.page');
const navPage = require('../pages/nav.page');
const buttonsAreaPage = require('../pages/buttonsArea.page');
const monsterListPage = require('../pages/monsterList.page');
const monsterCardPage = require('../pages/monsterCard.page');
const monsterFormPage = require('../pages/monsterForm.page');

describe('Smoke Test Suite', () => {
  const username = 'bob@bob.com';
  const password = 'Test123';

  beforeEach(() => {
    browser.url('');
  });

  it('should validate static nav content', () => {
    assert.equal(browser.getUrl(), browser.options.baseUrl, 'Url is not the same');

    //  Nav Page
    assert.equal(navPage.brand.isDisplayed(), true, 'navPage.brand is not displayed');
    assert.equal(navPage.navItem.isDisplayed(), true, 'navPage.navItem is not displayed');

    //  Test the static element text is correct
    assert.equal(navPage.brand.getText(), 'Monster Dream Team', 'navPage.brand text is not correct');
    assert.equal(navPage.navItem.getText(), 'My Monster Team', 'navPage.navItem text is not correct');

    loginPage.login(username, password);

    //  Nav Page
    assert.equal(navPage.brand.isDisplayed(), true, 'navPage.brand is not displayed');
    assert.equal(navPage.navItem.isDisplayed(), true, 'navPage.navItem is not displayed');
    assert.equal(navPage.dropdownMenu.isDisplayed(), true, 'navPage.dropdownMenu is not displayed');
    //  Before opening menu
    assert.equal(navPage.supportButton.isClickable(), false, 'navPage.supportButton is clickable');
    assert.equal(navPage.logoutButton.isClickable(), false, 'navPage.logoutButton is clickable');
    navPage.dropdownMenu.click();
    //  After opening menu
    assert.equal(navPage.supportButton.isClickable(), true, 'navPage.supportButton is not clickable');
    assert.equal(navPage.logoutButton.isClickable(), true, 'navPage.logoutButton is not clickable');
  });

  it('should validate static login content', () => {
    //  Login Page
    assert.equal(loginPage.usernameLabel.isDisplayed(), true, 'loginPage.usernameLabel is not displayed');
    assert.equal(loginPage.passwordLabel.isDisplayed(), true, 'loginPage.passwordLabel is not displayed');
    assert.equal(loginPage.usernameField.isDisplayed(), true, 'loginPage.usernameField is not displayed');
    assert.equal(loginPage.passwordField.isDisplayed(), true, 'loginPage.passwordField is not displayed');
    assert.equal(loginPage.loginButton.isDisplayed(), true, 'loginPage.loginButton is not displayed');

    //  Test the static element text is correct
    assert.equal(loginPage.usernameLabel.getText(), 'Username', 'navPage.usernameLabel text is not correct');
    assert.equal(loginPage.passwordLabel.getText(), 'Password', 'navPage.passwordLabel text is not correct');
    assert.equal(loginPage.loginButton.getText(), 'Login', 'navPage.loginButton text is not correct');

    //  Test default element state
    assert.equal(loginPage.loginButton.isClickable(), false, 'loginPage.loginButton is clickable');
    assert.equal(loginPage.usernameField.getValue(), '', 'loginPage.usernameField is not blank');
    assert.equal(loginPage.passwordField.getValue(), '', 'loginPage.passwordField is not blank');
    assert.equal(
      loginPage.usernameField.getAttribute('placeholder'),
      'example@example.com',
      'loginPage.usernameField placeholder is not correct'
    );
  });

  it('should validate static buttons area content', () => {
    loginPage.login(username, password);

    //  Buttons Area Page
    assert.equal(
      buttonsAreaPage.newMonsterButton.isDisplayed(),
      true,
      'buttonsAreaPage.newMonsterButton is not displayed'
    );
    assert.equal(
      buttonsAreaPage.randomMonsterButton.isDisplayed(),
      true,
      'buttonsAreaPage.randomMonsterButton is not displayed'
    );
    assert.equal(
      buttonsAreaPage.removeAllMonstersButton.isDisplayed(),
      true,
      'buttonsAreaPage.removeAllMonstersButton is not displayed'
    );
    assert.equal(
      buttonsAreaPage.unfavoriteAllButton.isDisplayed(),
      true,
      'buttonsAreaPage.unfavoriteAllButton is not displayed'
    );
    assert.equal(
      buttonsAreaPage.createRandomMonsterTeamButton.isDisplayed(),
      true,
      'buttonsAreaPage.createRandomMonsterTeamButton is not displayed'
    );
    assert.equal(
      buttonsAreaPage.sortMonstersButton.isDisplayed(),
      true,
      'buttonsAreaPage.sortMonstersButton is not displayed'
    );
  });

  it('should validate static monster list content', () => {
    let monsters = monsterListPage.monsterList;

    loginPage.login(username, password);

    //  Monster List Page
    assert.equal(monsterListPage.monsterCount.isDisplayed(), true, 'monsterListPage.monsterCount is not displayed');
    for (let i = 0; i < monsters.length; i++) {
      assert.equal(
        monsterListPage.monsterItem(i + 1).isDisplayed(),
        true,
        `monsterListPage.monsterItem(${i + 1}) is not displayed`
      );
      assert.equal(
        monsterListPage.monsterItemName(i + 1).isDisplayed(),
        true,
        `monsterListPage.monsterItemName(${i + 1}) is not displayed`
      );
      assert.equal(
        monsterListPage.monsterItemDescription(i + 1).isDisplayed(),
        true,
        `monsterListPage.monsterItemDescription(${i + 1}) is not displayed`
      );
    }
  });

  it('should validate static monster card content', () => {
    loginPage.login(username, password);

    //  Monster Card Page
    assert.equal(monsterCardPage.selectMonster.isDisplayed(), true, 'monsterCardPage.selectMonster is not displayed');
    assert.equal(
      monsterCardPage.selectMonster.getText(),
      'Select a Monster to edit.',
      'Select monster text is not the same'
    );

    monsterListPage.monsterItem(1).click();

    assert.equal(
      monsterCardPage.selectMonster.isDisplayed(),
      false,
      'monsterCardPage.selectMonster is still displayed'
    );
    assert.equal(monsterCardPage.monsterCard.isDisplayed(), true, 'monsterCardPage.monsterCard is not displayed');
    assert.equal(
      monsterCardPage.monsterCardName.isDisplayed(),
      true,
      'monsterCardPage.monsterCardName is not displayed'
    );
    assert.equal(
      monsterCardPage.monsterCardDescription.isDisplayed(),
      true,
      'monsterCardPage.monsterCardDescription is not displayed'
    );

    assert.equal(
      monsterCardPage.manageMonsterMenu.isDisplayed(),
      true,
      'monsterCardPage.manageMonsterMenu is not displayed'
    );
    monsterCardPage.manageMonsterMenu.click();
    assert.equal(monsterCardPage.editMonster.isDisplayed(), true, 'monsterCardPage.editMonster is not displayed');
    assert.equal(monsterCardPage.deleteMonster.isDisplayed(), true, 'monsterCardPage.deleteMonster is not displayed');
  });

  it('should validate static monster list content', () => {
    let monsters = monsterListPage.monsterList;

    loginPage.login(username, password);

    //  Monster List Page
    assert.equal(monsterListPage.monsterCount.isDisplayed(), true, 'monsterListPage.monsterCount is not displayed');
    for (let i = 0; i < monsters.length; i++) {
      assert.equal(
        monsterListPage.monsterItem(i + 1).isDisplayed(),
        true,
        `monsterListPage.monsterItem(${i + 1}) is not displayed`
      );
      assert.equal(
        monsterListPage.monsterItemName(i + 1).isDisplayed(),
        true,
        `monsterListPage.monsterItemName(${i + 1}) is not displayed`
      );
      assert.equal(
        monsterListPage.monsterItemDescription(i + 1).isDisplayed(),
        true,
        `monsterListPage.monsterItemDescription(${i + 1}) is not displayed`
      );
    }
  });

  it('should validate static monster form content when clicking edit or new', () => {
    loginPage.login(username, password);

    //  Monster Form Page
    buttonsAreaPage.newMonsterButton.click();
    assert.equal(browser.getUrl(), browser.options.baseUrl + 'mine/new', 'Url is not correct');
    assert.equal(monsterFormPage.saveButton.isDisplayed(), true, 'monsterFormPage.saveButton is not displayed');
    assert.equal(monsterFormPage.cancelButton.isDisplayed(), true, 'monsterFormPage.cancelButton is not displayed');
    assert.equal(monsterFormPage.nameLabel.isDisplayed(), true, 'monsterFormPage.nameLabel is not displayed');
    assert.equal(monsterFormPage.nameField.isDisplayed(), true, 'monsterFormPage.nameField is not displayed');
    assert.equal(
      monsterFormPage.favoriteCheckbox.isDisplayed(),
      true,
      'monsterFormPage.favoriteCheckbox is not displayed'
    );
    assert.equal(monsterFormPage.favoriteLabel.isDisplayed(), true, 'monsterFormPage.favoriteLabel is not displayed');

    assert.equal(monsterFormPage.monsterLabel.isDisplayed(), true, 'monsterFormPage.monsterLabel is not displayed');
    assert.equal(monsterFormPage.soldierRadio.isDisplayed(), true, 'monsterFormPage.soldierRadio is not displayed');
    assert.equal(monsterFormPage.soldierIcon.isDisplayed(), true, 'monsterFormPage.soldierIcon is not displayed');
    assert.equal(monsterFormPage.medicRadio.isDisplayed(), true, 'monsterFormPage.medicRadio is not displayed');
    assert.equal(monsterFormPage.medicIcon.isDisplayed(), true, 'monsterFormPage.medicIcon is not displayed');
    assert.equal(monsterFormPage.shieldRadio.isDisplayed(), true, 'monsterFormPage.shieldRadio is not displayed');
    assert.equal(monsterFormPage.shieldIcon.isDisplayed(), true, 'monsterFormPage.shieldIcon is not displayed');
    assert.equal(monsterFormPage.thiefRadio.isDisplayed(), true, 'monsterFormPage.thiefRadio is not displayed');
    assert.equal(monsterFormPage.thiefIcon.isDisplayed(), true, 'monsterFormPage.thiefIcon is not displayed');
    assert.equal(monsterFormPage.mageRadio.isDisplayed(), true, 'monsterFormPage.mageRadio is not displayed');
    assert.equal(monsterFormPage.mageIcon.isDisplayed(), true, 'monsterFormPage.mageIcon is not displayed');

    assert.equal(
      monsterFormPage.descriptionLabel.isDisplayed(),
      true,
      'monsterFormPage.descriptionLabel is not displayed'
    );
    assert.equal(
      monsterFormPage.descriptionField.isDisplayed(),
      true,
      'monsterFormPage.descriptionField is not displayed'
    );

    assert.equal(
      monsterFormPage.nameRequiredError.isDisplayed(),
      false,
      'monsterFormPage.nameRequiredError is displayed'
    );
    assert.equal(
      monsterFormPage.descriptionRequiredError.isDisplayed(),
      false,
      'monsterFormPage.descriptionRequiredError is displayed'
    );
  });
});
