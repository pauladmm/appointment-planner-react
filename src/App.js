import React from "react";
import { Route, Routes, NavLink, Navigate } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Arrays for tracking data
  */
  let contacts = [
    {
      name: "name",
      email: "email",
      phone: "phone",
    },
  ];

  let appointments = [
    {
      title: "title",
      contact: "contact",
      date: "date",
      time: "time",
    },
  ];

  // Callback functions of contacts and appointments
  const newContact = (name, email, phone) => {
    contacts.push(name, email, phone);
  };

  const newAppointment = (title, contact, date, time) => {
    appointments.push(title, contact, date, time);
  };

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        {/* I discover only in downloaded files there is <Redirect>, 
        I tried to subtitute it with <Navigate>
        but I realised I performs ok without it
        so I commented it out

         <Navigate to={ROUTES.CONTACTS} replace /> 
         
         */}
        <Routes>
          <Route exact path="/" />

          <Route
            path={ROUTES.CONTACTS}
            element={
              <ContactsPage contacts={contacts} addContact={newContact} />
            }
          />

          <Route
            path={ROUTES.APPOINTMENTS}
            element={
              <AppointmentsPage
                appointment={appointments}
                addAppointment={newAppointment}
              />
            }
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
