Feature: Harrow Login Test
  As a user I want to navigate to login page

  Scenario: User should navigate to login page successfully
    Given I am on home page
    When I click on login link
    Then I should navigate to login page successfully

  Scenario: Verify the error message when user login with invalid credintials
    Given I am on home page
    When I click on login link
    And I enter email "xyz@gmail.com"
    And I enter password "abc123"
    And I click on Login button
    Then I should see the error message "Invalid Username/Password supplied"





