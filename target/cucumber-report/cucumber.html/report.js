$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/uk/gov/harrow/resources/featurefile/harrow.feature");
formatter.feature({
  "line": 1,
  "name": "Harrow Login Test",
  "description": "As a user I want to navigate to login page",
  "id": "harrow-login-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 11921865600,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User should navigate to login page successfully",
  "description": "",
  "id": "harrow-login-test;user-should-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should navigate to login page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 118583000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 10914603300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iShouldNavigateToLoginPageSuccessfully()"
});
formatter.result({
  "duration": 55209000,
  "status": "passed"
});
formatter.after({
  "duration": 648628800,
  "status": "passed"
});
formatter.before({
  "duration": 10588345000,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Verify the error message when user login with invalid credintials",
  "description": "",
  "id": "harrow-login-test;verify-the-error-message-when-user-login-with-invalid-credintials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter email \"xyz@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter password \"abc123\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the error message \"Invalid Username/Password supplied\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 216100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 10928776300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz@gmail.com",
      "offset": 15
    }
  ],
  "location": "MyStepdefs.iEnterEmail(String)"
});
formatter.result({
  "duration": 174674200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 18
    }
  ],
  "location": "MyStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 117084400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 490243100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid Username/Password supplied",
      "offset": 32
    }
  ],
  "location": "MyStepdefs.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 62709700,
  "status": "passed"
});
formatter.after({
  "duration": 669784300,
  "status": "passed"
});
formatter.uri("src/test/java/uk/gov/harrow/resources/featurefile/service.feature");
formatter.feature({
  "line": 1,
  "name": "Services function",
  "description": "  As a user I want to check services on Harrow website",
  "id": "services-function",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8540020100,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User should navigate to services page successfully",
  "description": "",
  "id": "services-function;user-should-navigate-to-services-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on services button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should navigate to services page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 239000,
  "status": "passed"
});
formatter.match({
  "location": "ServicesSteps.iClickOnServicesButton()"
});
formatter.result({
  "duration": 115272700,
  "status": "passed"
});
formatter.match({
  "location": "ServicesSteps.iShouldNavigateToServicesPageSuccessfully()"
});
formatter.result({
  "duration": 761078000,
  "status": "passed"
});
formatter.after({
  "duration": 651349500,
  "status": "passed"
});
formatter.before({
  "duration": 10502281200,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Veify text when user closes services page",
  "description": "",
  "id": "services-function;veify-text-when-user-closes-services-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on services button",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I should navigate to services page successfully",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on close button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see \"SERVICES\" text",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 306900,
  "status": "passed"
});
formatter.match({
  "location": "ServicesSteps.iClickOnServicesButton()"
});
formatter.result({
  "duration": 152161500,
  "status": "passed"
});
formatter.match({
  "location": "ServicesSteps.iShouldNavigateToServicesPageSuccessfully()"
});
formatter.result({
  "duration": 774313600,
  "status": "passed"
});
formatter.match({
  "location": "ServicesSteps.iClickOnCloseButton()"
});
formatter.result({
  "duration": 147370300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SERVICES",
      "offset": 14
    }
  ],
  "location": "ServicesSteps.iShouldSeeText(String)"
});
formatter.result({
  "duration": 57411500,
  "status": "passed"
});
formatter.after({
  "duration": 629391300,
  "status": "passed"
});
});