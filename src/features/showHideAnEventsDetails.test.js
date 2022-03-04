import { loadFeature, defineFeature } from "jest-cucumber";

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
  test('An event element is collapsed by default', ({ given, when, then }) => {
    given('the user has received a list of upcoming events in a city', () => {
    
    });

    when('the list of events is showing', () => {

    });

    then('the event details is collapsed by default', () => {

    });
  });

  test('User can expand an event to see its details', ({ given, when, then }) => {
    given('the user hasn’t clicked on show-details', () => {

    });

    when('the user clicks on show-details', () => {

    });

    then('the event element will expand to show the event details', () => {

    });
  });

  test('User can collapse an event to hise its details', ({ given, when, then }) => {
    given('the event element is expanded to show event details', () => {

    });

    when('the user clicks on hide-details', () => {

    });

    then('the event element will collapse to hide event details', () => {

    });
  });

})
