class ButtonsAreaPage {
  get newMonsterButton() {
    return $('button=New Monster');
  }

  get randomMonsterButton() {
    return $('button=Random Monster');
  }

  get removeAllMonstersButton() {
    return $('button=Remove All Monsters');
  }

  get unfavoriteAllButton() {
    return $('button=Unfavorite All');
  }

  get createRandomMonsterTeamButton() {
    return $('button=Create Random Monster Team');
  }

  get sortMonstersButton() {
    return $('button=Sort Monsters');
  }
}
module.exports = new ButtonsAreaPage();
