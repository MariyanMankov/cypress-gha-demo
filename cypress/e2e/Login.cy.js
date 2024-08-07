import Login from "../PageObjects/Login";
import Toolbar from "../PageObjects/Toolbar";
import userInsatnce from "../user/User.js";

describe('Login tests', () => {
  const LoginPage = new Login();
  const PageToolbar = new Toolbar();
  const User = new userInsatnce();
  
  beforeEach(() => { 
    cy.viewport(1920, 1200);
    LoginPage.loadPage();
  })

  it('Premium Complete Login', () => {

    User.getPremiumCompleteUser();

    LoginPage.setUserEmail(User.email);
    LoginPage.setUserPassword(User.password);
    LoginPage.clickLoginButton();
    PageToolbar.checkTheUserType("Premium Complete");
  })

})