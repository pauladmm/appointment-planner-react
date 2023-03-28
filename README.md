# Appointment Planner
The goal of this project is: use functional React components to create an app that manages contacts and appointments. 
The app consists of two pages: one to view and add contacts and one to view and add appointments.
Stateful and Stateless functional React components and Hook concepts are going to be used.

## Step 1
This project was written in old versions, so when I run it with <code>npm start</code>, the http://localhost:3000/ doesn't work. It is fixable just changing the package.json file with this:
```
"start": "react-scripts --openssl-legacy-provider start"
```

Also, I had to upgrade the packages version with the next command, to be able to use the lastest features of React Router:

<code>npm i -D react-router-dom@latest</code>
<code>npm audit fix --force</code>

<!-- The components which were deprecated and were in need of modification were: <code>Switch</code> and <code>Redirect</code>. -->
In [v6](https://reactrouter.com/en/6.9.0/upgrading/v5#upgrade-all-switch-elements-to-routes), <code>Routes</code> includes the funcionality of <code>Switch</code>, so it is enough with deleting this component and wrapping <code>Route</code> in <code>Routes</code>

## Step 2
According to instructions, App.js requeriments are:
App Requirements:

- Keep track of the contacts and appointments data, each being an array of objects.
- Define a callback function that, given a name, phone number, and email, adds a new contact object with that data to the array of contacts.
- Define a callback function that, given a title, contact, date, and time, adds a new appointment object with that data to the array of appointments.
- Pass the array of contacts and the appropriate callback function as props to the ContactsPage component.
- Pass the appointments array, contacts array, and the add appointment function as props to the AppointmentsPage component.

### 2.1 Keeping track of data

### 2.2 Defining a callback function that adds contacts data

### 2.3 Defining a callback function that adds appointments data

### 2.4 Passing info as props to the ContactsPage component

### 2.5 Passing data as props to the AppointmentsPage component



