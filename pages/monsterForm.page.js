class MonsterFormPage {
  get saveButton() {
    return $('button=Save');
  }

  get cancelButton() {
    return $('button=Cancel');
  }

  get nameField() {
    return $('#name');
  }

  get descriptionField() {
    return $('#description');
  }

  get favoriteCheckbox() {
    return $('#favorite');
  }

  get nameLabel() {
    return $('.form-group label[for=name]');
  }

  get favoriteLabel() {
    return $('.form-group label[for=favorite]');
  }

  get monsterLabel() {
    return $('.form-group label[for=role]');
  }

  get descriptionLabel() {
    return $('.form-group label[for=description]');
  }

  get soldierRadio() {
    return $('.form-group input[ng-reflect-value=soldier]');
  }

  get medicRadio() {
    return $('.form-group input[ng-reflect-value=medic]');
  }

  get shieldRadio() {
    return $('.form-group input[ng-reflect-value=shield]');
  }

  get thiefRadio() {
    return $('.form-group input[ng-reflect-value=thief]');
  }

  get mageRadio() {
    return $('.form-group input[ng-reflect-value=mage]');
  }

  get soldierIcon() {
    return $('.form-group i.ra-sword');
  }

  get medicIcon() {
    return $('.form-group i.ra-health');
  }

  get shieldIcon() {
    return $('.form-group i.ra-cracked-shield');
  }

  get thiefIcon() {
    return $('.form-group i.ra-kunai');
  }

  get mageIcon() {
    return $('.form-group i.ra-laser-blast');
  }

  get nameRequiredError() {
    return $('form .row:nth-child(2) .notValid');
  }

  get descriptionRequiredError() {
    return $('form .row:nth-child(5) .notValid');
  }

  set nameField(value) {
    this.nameField.setValue(value);
  }

  set descriptionField(value) {
    this.descriptionField.setValue(value);
  }
}
module.exports = new MonsterFormPage();
