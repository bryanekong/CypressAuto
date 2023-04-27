Feature: Adding a Computer

    Background: Preconditions
        Given I navigate to the Computer database home page
        When I click on the Add a new computer button


    Scenario: Valid date setting when adding a computer
        And I type a Computer name "Hewlett Packard"
        And I type an introduced date set before discontinued "2019-05-01"
        And I type a discontinued date set after introduced "2023-05-01"
        And I choose or select a computer
        And I click on create this computer button
        Then I should be presented with a successful computer created message