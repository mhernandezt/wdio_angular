class NavPage {
  get brand() {
    return $('.navbar-brand[routerlink="/"]');
  }

  get navItem() {
    return $('li > a[routerlink="/mine"]');
  }

  get dropdownMenu() {
    return $('.dropdown > a');
  }

  get supportButton() {
    return $('.dropdown-menu li:nth-child(1) a');
  }

  get logoutButton() {
    return $('.dropdown-menu li:nth-child(2) a');
  }
}
module.exports = new NavPage();
