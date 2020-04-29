package uk.gov.harrow.basepage;

/* By Jitendra Patel */

import org.apache.log4j.PropertyConfigurator;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

public class BasePage {

    public static WebDriver driver;

    //constructor
    public BasePage() {
        //this is for page factory
        PageFactory.initElements(driver, this);

        //this is for log4j
        PropertyConfigurator.configure(System.getProperty("user.dir")+"/src/test/java/uk/gov/harrow/resources/properties/log4j.properties");
    }
}