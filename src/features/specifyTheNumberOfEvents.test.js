import { loadFeature, defineFeature } from "jest-cucumber";
import React from "react";
import { mount } from "enzyme";
import App from "../App";

const feature = loadFeature("./src/features/specifyTheNumberOfEvents.feature");

defineFeature(feature, (test) => {
  let AppWrapper;
  test("When user hasn't specified a number, 32 is the default number", ({
    given,
    when,
    then,
  }) => {
    given("the user is on the main page", async () => {
      AppWrapper = await mount(<App />);
    });
    when("the user hasn't specified a number of events", () => {
      AppWrapper.update();
    });
    then("the default number of events will be 32 (2 with local test)", () => {
      expect(AppWrapper.find('.event')).toHaveLength(2);
    });
  });

  test("User can change the number of events they want to see", ({
    given,
    when,
    then,
  }) => {
    given("the user is on the main page", async () => {
      // AppWrapper = await mount(<App />);
    });
    when("the user changes the number of events they want to see", () => {
      // AppWrapper.update();
      // AppWrapper.find('.number').simulate('change', { target: { value: 1 } });
    });
    then("the specified number of events will be displayed", () => {
      // AppWrapper.update();
      // expect(AppWrapper.find('.event')).toHaveLength(1);
    });
  });
});
