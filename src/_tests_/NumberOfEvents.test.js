import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents updateEventNumbers={() => {}} />);
  });
  test("render number of events component", () => {
    expect(NumberOfEventsWrapper.find(".NumberOfEvents")).toHaveLength(1);
  });
  test("render textbox for number input", () => {
    expect(NumberOfEventsWrapper.find(".number")).toHaveLength(1);
  });
  test('renders default number of events', () => {
    expect(NumberOfEventsWrapper.find('.number').prop('value')).toBe(32);
  });
});