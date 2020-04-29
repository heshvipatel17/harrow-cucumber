package uk.gov.harrow.pages;

import com.cucumber.listener.Reporter;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import uk.gov.harrow.utility.Utility;

public class HomePage extends Utility {

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());


    @FindBy(xpath = "//span[@class='icon-fallback']")
    WebElement _loginOrRegistrationLink;

    @FindBy(xpath = "//span[@class='button__text'][contains(text(),'Services')]")
    WebElement _servicesBtn;

    public void clickOnLoginOrRegisterLink() {
        Reporter.addStepLog("clicking on login or register link " + _loginOrRegistrationLink.toString());
        clickOnElement(_loginOrRegistrationLink);
        log.info("clicking on login or register link " + _loginOrRegistrationLink.toString());

    }

    public void clickOnServiceButton() {
        Reporter.addStepLog("clicking on service button: " + _servicesBtn.toString());
        clickOnElement(_servicesBtn);
        log.info("clicking on service button: " + _servicesBtn.toString());
    }

    public String getServicesText(){
        Reporter.addStepLog("Get text from services button"+_servicesBtn.toString());
        log.info("Get text from services button"+_servicesBtn.toString());
        return getTextFromElement(_servicesBtn);

    }
}