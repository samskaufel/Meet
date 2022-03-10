import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents updateNumberOfEvents={() => {}} />);
  });
  test("render number of events component", () => {
    expect(NumberOfEventsWrapper.find(".number-of-events")).toHaveLength(1);
  });
  test("render number input correctly", () => {
    const numberOfEvents = NumberOfEventsWrapper.state('numberOfEvents');
    expect(NumberOfEventsWrapper.find(".number-of-events").prop('value')).toBe(numberOfEvents);
  });
  test('change state when number input changes', () => {
    NumberOfEventsWrapper.setState({ numberOfEvents: '32' });
    const number = { target: { value: '16' }};
    NumberOfEventsWrapper.find('.number-of-events').simulate('change', number);
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe('16');
  });
});