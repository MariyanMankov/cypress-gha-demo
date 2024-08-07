import Login from "../PageObjects/Login";
import Toolbar from "../PageObjects/Toolbar";
import userInsatnce from "../user/User.js";

describe('Successful login tests', () => {

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

  it('Premium Single Login', () => {

    User.getPremiumSingleUser();

    LoginPage.setUserEmail(User.email);
    LoginPage.setUserPassword(User.password);
    LoginPage.clickLoginButton();
    PageToolbar.checkTheUserType("Premium Single");
  })

  it('Premium Collection Login', () => {

    User.getPremiumCollectionUser();

    LoginPage.setUserEmail(User.email);
    LoginPage.setUserPassword(User.password);
    LoginPage.clickLoginButton();
    PageToolbar.checkTheUserType("Premium Collection");
  })

  it('Basic Login', () => {

    User.getBasicUser();

    LoginPage.setUserEmail(User.email);
    LoginPage.setUserPassword(User.password);
    LoginPage.clickLoginButton();
    PageToolbar.checkTheUserType("Basicc");
  })
})

describe('Successful login tests2', () => {

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

  it('Premium Single Login', () => {

    User.getPremiumSingleUser();

    LoginPage.setUserEmail(User.email);
    LoginPage.setUserPassword(User.password);
    LoginPage.clickLoginButton();
    PageToolbar.checkTheUserType("Premium Single");
  })

  it('Premium Collection Login', () => {

    User.getPremiumCollectionUser();

    LoginPage.setUserEmail(User.email);
    LoginPage.setUserPassword(User.password);
    LoginPage.clickLoginButton();
    PageToolbar.checkTheUserType("Premium Collection");
  })

  it('Basic Login', () => {

    User.getBasicUser();

    LoginPage.setUserEmail(User.email);
    LoginPage.setUserPassword(User.password);
    LoginPage.clickLoginButton();
    PageToolbar.checkTheUserType("Basic");
  })
})