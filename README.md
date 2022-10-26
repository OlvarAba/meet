# meet

View a list of upcoming events for any city.

# FEAUTRES

## Feature 1: Filter events by city.

### Scenario 1: When a user hasn’t searched for a city, show upcoming events from all cities.
>User Story: As a user, I would like to be able to filter events by city so that I can see the list of events that take place in that city.

**Given:** user hasn’t searched for any city.
**When:** the user opens the app.
**Then:** the user should see a list of all upcoming events.

### Scenario 2: User should see a list of suggestions when they search for a city.
>User Story: As a user, I should see suggestions for cities when I start typing so that I find the city I'm looking for quickly.

**Given:** User is on the main page.
**When:** User types in the city.
**Then:** The user will see a list of cities that match the user input.

### Scenario 3: User can select a city from the suggested list.
>User Story: As a user, I should be able to select a city from suggestions that are relevant to my inputs, so that I can select the city I want.

**Given:**  City suggestions are visible after typing the city name.
**When:** User selects a city from the suggested list.
**Then:** The events of that city will be shown.

## Feature 2: Show/Hide Event Details.

### Scenario 1: Scenario 1: An event element is collapsed by default.
>User Story: As a user, I want to expand and collapse events in a city so that I can control how much information I am viewing.

**Given:** The user hasn't selected an event.
**When:** The user views the list of events.
**Then:** The user can collapse an event element.

### Scenario 2: User can expand an event to see its details.
>User Story: As a user, I want to expand the details of events happening in a city so that I can see events happening.

**Given:** the list of events is displayed.
**When:** the user selects an event element.
**Then:** the user can expand the event to see more details.

### Scenario 3: User can collapse an event to hide its details.
>User Story: As a user, I would like to be able to close an event's details, so that I can selete a different city.

**Given:** The event element has been expanded.
**When:** the user clicks to collapse the event element.
**Then:** The event element is collapsed.

## Feature 3: Specify number of events.

### Scenario 1: When the user hasn’t specified a number, 32 is the default number.
>User Story: As a user, I would like to be able to see a list of events by default so that I can see events immediately.

**Given:** the user hasn't specified how many events they see.
**When:** a user searches for events.
**Then:** a list of 32 events should be shown.

### Scenario 2: User can change the number of events they want to see.
>User Story: As a user, I would like to Specify how many events I see, so I can choose how much information I see.

**Given:** A user hasn't specified how many events they show.
**When:** A user sets a number limit.
**Then:** Show however many events were specified.

## Feature 4: Use the app when offline.

### Scenario 1: Show cached data when there’s no internet connection.
>User Story:  As a user, I would like to be able to use the app when offline so that I can see the events I viewed the last time I was online.

**Given:** The user is using the app.
**When:** The user has lost connection to the internet.
**Then:** the app should still show offline data.

### Scenario 2: Show error when the user changes the settings (city, time range).
>User Story: As a user, I should see an error so that I can learn how to use the app.

**Given:** The user is offline.
**When:** the user changes settings.
**Then:** show an error.

## Feature 5: View a chart showing the number of upcoming events by city.

### Scenario 1: Show a chart with the number of upcoming events in each city.
>User Story: As a user, I would like to see data visualized of upcoming events, so that I can quickly see what's happening around the me.

**Given:** a city has been chosen.
**When:** a user chooses to view data.
**Then:** data visualization should be displayed.
