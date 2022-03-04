Feature: Show/Hide an Event's Details

Scenario: An event element is collapsed by default
Given the user has received a list of upcoming events in a city
When the list of events is showing
Then the event details is collapsed by default

Scenario: User can expand an event to see its details
Given the user hasn’t clicked on show-details
When the user clicks on show-details
Then the event element will expand to show the event details

Scenario: User can collapse an event to hise its details
Given the event element is expanded to show event details
When the user clicks on hide-details
Then the event element will collapse to hide event details