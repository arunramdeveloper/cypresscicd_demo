// cypress/pages/RegisterPage.js

class RegisterPage {
    visit() {
      cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    }
  
    getFirstNameInput() {
      return cy.get('#input-firstname');
    }
  
    getLastNameInput() {
      return cy.get('#input-lastname');
    }
  
    getEmailInput() {
      return cy.get('#input-email');
    }
  
    getTelephoneInput() {
      return cy.get('#input-telephone');
    }
  
    getPasswordInput() {
      return cy.get('#input-password');
    }
  
    getConfirmPasswordInput() {
      return cy.get('#input-confirm');
    }
  
    getSubscribeYesRadio() {
      return cy.get('input[type="radio"][name="newsletter"][value="1"]');
    }
  
    getSubscribeNoRadio() {
      return cy.get('input[type="radio"][name="newsletter"][value="0"]');
    }
  
    getPrivacyPolicyCheckbox() {
      return cy.get('input[type="checkbox"][name="agree"]');
    }
  
    getContinueButton() {
      return cy.get('input[type="submit"][value="Continue"]');
    }
  
    fillRegistrationForm(user) {
      this.getFirstNameInput().type(user.firstName);
      this.getLastNameInput().type(user.lastName);
      this.getEmailInput().type(user.email);
      this.getTelephoneInput().type(user.telephone);
      this.getPasswordInput().type(user.password);
      this.getConfirmPasswordInput().type(user.confirmPassword);
      this.getSubscribeYesRadio().check();
      this.getPrivacyPolicyCheckbox().check();
    }
  
    submitRegistrationForm() {
      this.getContinueButton().click();
    }
  }
  
  export default RegisterPage;