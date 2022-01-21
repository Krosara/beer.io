/* eslint-disable */
import { BasePageObject } from './BasePageObject';

export class LoginPageObject extends BasePageObject {
  baseUrl = super.baseUrl + 'login';

  get logInButton() {
    return cy.get('button[type="submit"]');
  }

  get usernameField() {
    return cy.get('input[name="username"]');
  }

  get passwordField() {
    return cy.get('input[name="password"]');
  }
}
