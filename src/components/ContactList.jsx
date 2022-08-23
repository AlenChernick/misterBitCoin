import React from 'react'
import { ContactPreview } from './ContactPreview'

export function ContactList({ contacts, onRemoveContact }) {
  return (
    <ul className='contacts-list'>
      <h1 className='contact-list-header'>Contact List</h1>
      {contacts.map((contact) => (
        <li className='contact-preview' key={contact._id}>
          <ContactPreview contact={contact} onRemoveContact={onRemoveContact} />
        </li>
      ))}
    </ul>
  )
}
