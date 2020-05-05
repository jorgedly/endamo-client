import { AppPage } from '../page-objects/app.po';
import { browser, ExpectedConditions } from 'protractor';
import { protractor } from 'protractor/built/ptor';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should be defined', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toBeDefined();
  });

  it('should slide', () => {
    let expected = browser.ExpectedConditions;
    page.swipeSlide();
    browser.driver.sleep(1000);
    page.swipeSlide();
    browser.driver.sleep(1000);
    page.swipeSlide();
    browser.driver.sleep(1000);
    expect(expected.elementToBeClickable(page.getSigninButton()));
    browser.driver.sleep(1000);
  });

  it('should go to sign in', () => {
    browser.wait(protractor.ExpectedConditions.elementToBeClickable(page.getSigninButton()));
    page.getSigninButton().click().then(() => {
      expect(browser.getCurrentUrl()).toBe('http://localhost:8100/registro/2');
    });
    browser.actions().perform();
    browser.driver.sleep(1000);
  });

  it('should sign in', () => {
    page.signinKeys();
    browser.driver.sleep(1000);
    page.getLoginForm().submit().then(() => {
      expect(browser.getCurrentUrl()).toBe('http://localhost:8100/home-cliente');
    });
    browser.driver.sleep(1000);
  });
});