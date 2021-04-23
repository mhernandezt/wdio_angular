class MonsterCardPage {
  get selectMonster() {
    return $('app-monster-start > h3');
  }

  get monsterCard() {
    return $('app-monster-detail');
  }

  get monsterCardRole() {
    return $('.monsterDetail .role');
  }

  get monsterCardFavorite() {
    return $('.monsterDetail .hearted');
  }

  get monsterCardName() {
    return $('.monsterDetail h1');
  }

  get monsterCardDescription() {
    return $('.monsterDetail > div:nth-child(2) > div');
  }

  get manageMonsterMenu() {
    return $('.rightPanel button');
  }

  get editMonster() {
    return $('.btn-group .dropdown-menu li:nth-child(1) a');
  }

  get deleteMonster() {
    return $('.btn-group .dropdown-menu li:nth-child(2) a');
  }

  get modalMessage() {
    return $('#mat-dialog-0 .ng-star-inserted > p');
  }

  get modalAcceptButton() {
    return $('#mat-dialog-0 .ng-star-inserted .btn-danger');
  }

  get modalCancelButton() {
    return $('#mat-dialog-0 .ng-star-inserted .btn-success');
  }
}
module.exports = new MonsterCardPage();
