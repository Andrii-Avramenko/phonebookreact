import { useState } from "react";
import { nanoid } from "nanoid";

import { GlobalStyle } from "./components/GlobalStyle";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";

function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  const addContact = (name, number) => {
    if (contacts.some((contact) => contact.name === name)) {
      const message = `${name} is already in contacts!`;
      console.warn(message);
      alert(message);
      return;
    }

    setContacts([...contacts, { id: nanoid(), name, number }])
  };

  const deleteContact = (id) => {
    const newContacts = contacts.filter(
      (contact) => contact.id !== id,
    );
    setContacts(newContacts)
  };

  const filterChange = (filter) => {
    setFilter(filter)
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2>Contacts</h2>
      <Filter onChange={filterChange} />
      <ContactList
        contacts={contacts}
        onDelete={deleteContact}
        filter={filter}
      />
    </>
  );
}

export default App;
