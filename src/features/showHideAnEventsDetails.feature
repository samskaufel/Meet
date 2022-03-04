Feature: Show/Hide an Event's Details

Scenario: An event element is collapsed by default
Given the user is on the main page
When the list of events is showing
Then the event details is collapsed by default

Scenario: User can expand an event to see its details
Given the user is on the main page and the event list has loaded
When the user clicks on show-details
Then the event element will expand to show the event details

Scenario: User can collapse an event to hise its details
Given the event element is expanded to show event details
When the user clicks on hide-details
Then the event element will collapse to hide event details