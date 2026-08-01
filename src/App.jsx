import { useState } from "react";
import { nanoid } from "nanoid";

import { GlobalStyle } from "./components/GlobalStyle";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";

function App() {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);
  const [filter, setFilter] = useState("");

  const addContact = (name, number) => {
    if (contacts.some((contact) => contact.name === name)) {
      const message = `${name} is already in contacts!`;
      console.warn(message);
      alert(message);
      return;
    }

    setContacts([...contacts, { id: nanoid(), name, number }]);
  };

  const deleteContact = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
  };

  const filterChange = (filter) => {
    setFilter(filter);
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
