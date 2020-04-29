package uk.gov.harrow.cucumber.stepdefs;

/* By Jitendra Patel */

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import uk.gov.harrow.pages.HomePage;
import uk.gov.harrow.pages.ServicePage;

public class ServicesSteps {


    @When("^I click on services button$")
    public void iClickOnServicesButton() {
        new HomePage().clickOnServiceButton();
    }

    @Then("^I should navigate to services page successfully$")
    public void iShouldNavigateToServicesPageSuccessfully() {
        Assert.assertEquals(new ServicePage().getAdultSocialCareText(), "Adult Social Care");

    }

    @And("^I click on close button$")
    public void iClickOnCloseButton() {
        new ServicePage().clickOnCloseButton();
    }

    @Then("^I should see \"([^\"]*)\" text$")
    public void iShouldSeeText(String serviceTxt) {
        Assert.assertEquals(new HomePage().getServicesText(),serviceTxt);

    }
}