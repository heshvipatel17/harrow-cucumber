package uk.gov.harrow.cucumber.stepdefs;

import com.cucumber.listener.Reporter;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import uk.gov.harrow.pages.HomePage;
import uk.gov.harrow.pages.LoginPage;

public class MyStepdefs {
    @Given("^I am on home page$")
    public void iAmOnHomePage() {
        Reporter.addStepLog("I am on Harrow home page: "+" https://www.harrow.gov.uk/");

    }

    @When("^I click on login link$")
    public void iClickOnLoginLink() {
        new HomePage().clickOnLoginOrRegisterLink();

    }

    @Then("^I should navigate to login page successfully$")
    public void iShouldNavigateToLoginPageSuccessfully() {
        Assert.assertEquals(new LoginPage().getWelcomeText(),"Welcome Guest!");
    }

    @And("^I enter email \"([^\"]*)\"$")
    public void iEnterEmail(String email)   {
        new LoginPage().enterEmail(email);
    }

    @And("^I enter password \"([^\"]*)\"$")
    public void iEnterPassword(String password)   {
        new LoginPage().enterPassword(password);

    }

    @And("^I click on Login button$")
    public void iClickOnLoginButton() {
        new LoginPage().clickOnLoginButton();
    }

    @Then("^I should see the error message \"([^\"]*)\"$")
    public void iShouldSeeTheErrorMessage(String errorMessage)   {
        Assert.assertEquals(new LoginPage().getErrorText(),errorMessage);

    }
}