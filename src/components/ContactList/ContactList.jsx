import { Contact, Text } from "./ContactList.styled";

function ContactList({ contacts, onDelete, filter }) {
  console.log(contacts);

  return (
    <ul>
      {contacts
        .filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()))
        .map(({ id, name, number }) => (
          <Contact key={id}>
            <Text>
              {name}: {number}
            </Text>
            <button type="button" onClick={() => onDelete(id)}>
              Delete
            </button>
          </Contact>
        ))}
    </ul>
  );
}

export default ContactList;
