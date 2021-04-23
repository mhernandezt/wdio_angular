class MonsterListPage {
  get monsterCount() {
    return $('app-monster-list > p');
  }

  get monsterList() {
    return $$('app-monster-list a');
  }

  /**
   * @param {Number} option row number
   */
  monsterItem(option) {
    return $(`app-monster-item:nth-child(${option}) > a`);
  }

  /**
   * @param {Number} option row number
   */
  monsterItemName(option) {
    return $(`app-monster-item:nth-child(${option}) .list-group-item-heading`);
  }

  /**
   * @param {Number} option row number
   */
  monsterItemDescription(option) {
    return $(`app-monster-item:nth-child(${option}) .list-group-item-text`);
  }

  /**
   * @param {Number} option row number
   */
  monsterItemRole(option) {
    return $(`app-monster-item:nth-child(${option}) .role`);
  }

  /**
   * @param {Number} option row number
   */
  monsterItemFavorite(option) {
    return $(`app-monster-item:nth-child(${option}) .hearted`);
  }
}
module.exports = new MonsterListPage();
