/* eslint-disable */
import { LoginPageObject } from '../../PageObjects/LoginPageObject';
import { HomePageObject } from '../../PageObjects/HomePageObject';

describe('A user logs in', () => {
  it('the user is logged in and logged out', async () => {
    const { username, password } = await cy.fixture('main.json');

    const login = new LoginPageObject();
    const home = new HomePageObject();

    home.visit();

    login.usernameField.type(username);
    login.passwordField.type(password);
    login.logInButton.click();

    home.logoutButton.click();
    home.logoutButton.should('not.exist');
  });
});
