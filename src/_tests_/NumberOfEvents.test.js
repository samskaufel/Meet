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
    expect(NumberOfEventsWrapper.find(".number-of-events")).toHaveLength(1);
  });
  test('renders default number of events', () => {
    expect(NumberOfEventsWrapper.find('.number-of-events').prop('value')).toBe(32);
  });
  test('change state when number input changes', () => {
    NumberOfEventsWrapper.setState({ number: '32' });
    const number = { target: { value: '16' }};
    NumberOfEventsWrapper.find('.number-of-events').simulate('change', number);
    expect(NumberOfEventsWrapper.state('number')).toBe('16');
  });
});