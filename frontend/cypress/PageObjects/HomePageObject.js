/* eslint-disable */
import { BasePageObject } from './BasePageObject';

export class HomePageObject extends BasePageObject {
  get logoutButton() {
    return cy.contains(/Logout/i);
  }
}
