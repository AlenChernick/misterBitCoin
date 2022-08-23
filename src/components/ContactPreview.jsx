import React from 'react'
import { Link } from 'react-router-dom'

export function ContactPreview({ contact, onRemoveContact }) {
  const userImgUrl = `https://robohash.org/${contact._id}`
  return (
    <section className='contact'>
      <Link to={`/contact/${contact._id}`}>
        <div className='contact-info'>
          <img className='contact-img' src={userImgUrl} alt='user-img' />
          <h1 className='contact-name'>{contact.name}</h1>
        </div>
      </Link>
      <section className='actions'>
        <button className='btn' onClick={() => onRemoveContact(contact._id)}>
          Delete
        </button>
        <Link className='btn' to={`/contact/edit/${contact._id}`}>
          Edit
        </Link>
      </section>
    </section>
  )
}
