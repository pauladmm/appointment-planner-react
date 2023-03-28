import React, { useState } from "react";
import { Route, Routes, NavLink, Navigate } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  constructor(props){
  super(props);
  this.state = {
    contacts: ["name", "phone", "email"],
    appointments: ["title", "contact", "date", "time"],
  };}

  /*
  Define state variables for 
  contacts and appointments 
  */

  const [contact, newContact] = useState(contacts);

  const [appointment, setAppointment] = useState("");

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

          <Route path={ROUTES.CONTACTS} element={<ContactsPage />} />
          {/* Add props to ContactsPage */}

          <Route path={ROUTES.APPOINTMENTS} element={<AppointmentsPage />} />
          {/* Add props to AppointmentsPage */}
        </Routes>
      </main>
    </>
  );
}

export default App;
