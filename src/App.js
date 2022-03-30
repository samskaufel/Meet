import React, { Component } from "react";
import { OfflineAlert } from "./Alert";
import "./App.css";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";
import "./nprogress.css";
import EventGenre from "./EventGenre";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import WelcomeScreen from "./WelcomeScreen";
import { getEvents, extractLocations, checkToken, getAccessToken } from "./api";

class App extends Component {
  state = {
    events: [],
    locations: [],
    lastLocation: "all",
    lastNumberOfEvents: 32,
    showWelcomeScreen: undefined,
    offlineAlertText: '',
    isOnline: true
  };

  async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem("access_token");
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({ 
            events: events.slice(0, this.state.numberOfEvents), 
            locations: extractLocations(events) });
        }
      });
    }
    if (!navigator.onLine) {
      this.setState({
      isOnline: false,
      });
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = ({
    location = this.state.lastLocation,
    numberOfEvents = this.state.lastNumberOfEvents,
  }) => {
    this.setState({
      lastLocation: location,
      lastNumberOfEvents: numberOfEvents,
      isOnline: navigator.onLine ? true: false
    });
    getEvents().then((events) => {
      const locationEvents =
        location === "all"
          ? events
          : events.filter((event) => event.location === location);
      console.log(locationEvents);
      if(this.mounted) {
      this.setState({
        events: locationEvents.slice(0, numberOfEvents),
        location: location,
        lastLocation: location
      });
    }
    });
  };

  getData = () => {
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const number = events.filter(
        (event) => event.location === location
      ).length;
      const city = location.split(", ").shift();
      return { city, number };
    });
    return data;
  };

  render() {
    if (this.state.showWelcomeScreen === undefined)
      return <div className="App" />;
    return (
      <div className="App">
      { !navigator.onLine ? (<OfflineAlert text='You are in offline mode!' />) : (<OfflineAlert text=' ' />)}

        <h1>Meet</h1>
        <h4>Choose your nearest city</h4>
        <CitySearch
          locations={this.state.locations}
          updateEvents={this.updateEvents}
        />
        <h4>Number of events</h4>
        <NumberOfEvents updateEvents={this.updateEvents} />
        <div className="data-vis-wrapper">
          <EventGenre events={this.state.events} />
          <h4>Events in each city</h4>
          <ResponsiveContainer height={400}>
            <ScatterChart
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
              }}
            >
              <CartesianGrid />
              <XAxis type="category" dataKey="city" name="city" />
              <YAxis type="number" dataKey="number" name="number of events" />
              <Tooltip cursor={{ strokeDasharray: "3 3" }} />
              <Scatter data={this.getData()} fill="#8884d8" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
        <EventList events={this.state.events} />
        
        <WelcomeScreen
          showWelcomeScreen={this.state.showWelcomeScreen}
          getAccessToken={() => {
            getAccessToken();
          }}
        />
      </div>
    );
  }
}

export default App;
