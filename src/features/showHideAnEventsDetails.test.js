import { loadFeature, defineFeature } from "jest-cucumber";
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';


const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
  let AppWrapper;
  test('An event element is collapsed by default', ({ given, when, then }) => {
    
    given('the user is on the main page', async () => {
      AppWrapper = await mount(<App />);
      AppWrapper.update();
    });
    when('the list of events is showing', () => {
      expect(AppWrapper.find('.details-button')).toHaveLength(2);
    });
    then('the event details is collapsed by default', () => {
      expect(AppWrapper.find('.event-details show')).toHaveLength(0);
    });
  });
  test('User can expand an event to see its details', ({ given, when, then }) => {
    given('the user is on the main page and the event list has loaded', async () => {
      AppWrapper = await mount(<App />);
    });
    when('the user clicks on show details', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.details-button')).toHaveLength(2);
      AppWrapper.find('.details-button').at(0).simulate('click');
    });
    then('the event element will expand to show the event details', () => {
      expect(AppWrapper.find('.event-details')).toHaveLength(1);
    });
  });
  test('User can collapse an event to hise its details', ({ given, when, then }) => {
    given('the event element is expanded to show event details', async() => {
      AppWrapper = await mount(<App />);
      AppWrapper.update();
      AppWrapper.find('.details-button').at(0).simulate('click');
      expect(AppWrapper.find('.event-details')).toHaveLength(1);
    });
    when('the user clicks on hide details', () => {
      AppWrapper.find('.details-button').at(0).simulate('click');
    });
    then('the event element will collapse to hide event details', () => {
      expect(AppWrapper.find('.event-details')).toHaveLength(0);
    });
  });
});
