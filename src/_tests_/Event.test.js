import React from "react";
import { shallow } from "enzyme";
import { mockData } from "../mock-data";
import Event from "../Event";

describe("<Event /> component", () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event event={mockData[1]} />);
  });
  test('render an event', () => {
    expect(EventWrapper.find('.event')).toHaveLength(1);
  });
  test("render event summary", () => {
    expect(EventWrapper.find(".summary")).toHaveLength(1);
  });
  test("render start of event", () => {
    expect(EventWrapper.find(".start")).toHaveLength(1);
  });
  test("render end of event", () => {
    expect(EventWrapper.find(".end")).toHaveLength(1);
  });
  test("render location of event", () => {
    expect(EventWrapper.find(".location")).toHaveLength(1);
  });
  test("render button to show event details", () => {
    expect(EventWrapper.find(".show-details")).toHaveLength(1);
  });
  test("render event details collapsed by default", () => {
    expect(EventWrapper.state("collapsed")).toBe(true);
  });
  test("render expanded details when show details button is clicked", () => {
    EventWrapper.setState({
      collapsed: true,
    });
    EventWrapper.find(".show-details").simulate("click");
    expect(EventWrapper.state("collapsed")).toBe(false);
  });
  test("render collapsed details when hide details button is click", () => {
    EventWrapper.setState({
      collapsed: false,
    });
    EventWrapper.find(".hide-details").simulate("click");
    expect(EventWrapper.state("collapsed")).toBe(true);
  });
  test("render event description when details are shown", () => {
    EventWrapper.setState({
      collapsed: false,
    });
    expect(EventWrapper.find(".description")).toHaveLength(1);
  });
  test("render link to Google Calender event", () => {
    EventWrapper.setState({
      collapsed: false,
    });
    expect(EventWrapper.find(".htmlLink")).toHaveLength(1);
  });
});
