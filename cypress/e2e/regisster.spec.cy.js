// cypress/e2e/register.spec.js

import RegisterPage from '../pages/registerPage'

describe('Registration Test', () => {
  const registerPage = new RegisterPage();

  it('should successfully register a new user', () => {
    const user = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'mytest@example.com',
      telephone: '1234567890',
      password: 'password123',
      confirmPassword: 'password123',
    };

    // Visit the registration page
    registerPage.visit();

    // Fill out the registration form
    registerPage.fillRegistrationForm(user);

    // Submit the form
    registerPage.submitRegistrationForm();

    // Assert that the registration was successful
    cy.url().should('include', 'route=account/success');
    cy.contains('Your Account Has Been Created!').should('be.visible');
  });
});