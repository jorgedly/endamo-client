import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.deepCss('app-root ion-content')).getText();
  }

  swipeSlide() {
    browser.driver.actions()
      .mouseDown(element(by.id('slides')))
      .mouseMove({
        x: -500,
        y: 0
      })
      .mouseUp().perform();
  }

  getSigninButton(){
    let button = element(by.id('iniciarsesion'));
    return button;
  }

  signinKeys(){
    element(by.css('ion-input[name="logname"] input')).sendKeys('correo2@usac.com');
    element(by.css('ion-input[name="logpass"] input')).sendKeys('abc&DE123');
  }

  getLoginForm(){
    let form = element(by.id('loginform'));
    return form;
  }


}
