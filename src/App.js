import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents,  extractLocations  } from './api';
import './nprogress.css';
import { OfflineAlert } from './Alert';
import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
  };

  updateEvents = (location, eventCount) => {
    getEvents().then((events) => {
      const locationEvents =
        location === "all"
          ? events
          : events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents.slice(0, this.state.numberOfEvents),
      });
    });
  };

  componentDidMount() {
    getEvents().then((events) => {
      this.setState({ events, locations: extractLocations(events) });
    });
  }

  getData = () => {
    const {locations, events} = this.state;
    const data = locations.map((location)=>{
      const number = events.filter((event) => event.location === location).length
      const city = location.split(', ').shift()
      return {city, number};
    })
    return data;
  };

  

  componentWillUnmount(){
    this.mounted = false;
  }

  render() {
    return (
      <div className="App">
        <h1>The Meet App</h1>
        <OfflineAlert text={this.state.offlineText} />
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateEvents={this.state.events} />
        <ResponsiveContainer height={400}>
          <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <CartesianGrid />
            <XAxis type="category" dataKey="city" name="city" />
            <YAxis
              allowDecimals={false}
              type="number"
              dataKey="number"
              name="number of events"
            />
            <Tooltip cursor={{ strokeDasharray: "3 3" }} />
            <Scatter data={this.getData()} fill="#8884d8" />
          </ScatterChart>
        </ResponsiveContainer>
        <EventList  events={this.state.events} />
      </div>
    );
  }
}

export default App;