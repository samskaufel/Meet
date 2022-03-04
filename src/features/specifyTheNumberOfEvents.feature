Feature: Specify the number of events

Scenario: When user hasn't specified a number, 32 is the default number
Given the user is on the main page
When the user hasn't specified a number of events
Then the default number of events will be 32 (2 with local test)

Scenario: User can change the number of events they want to see
Given the user is on the main page
When the user changes the number of events they want to see
Then the specified number of events will be displayed