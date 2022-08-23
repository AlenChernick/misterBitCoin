import { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { ContactList } from '../components/ContactList'
import { ContactFilter } from '../components/ContactFilter'
import { loadContacts, removeContact, setFilterBy } from '../store/actions/contactActions'

export const ContactPage = () => {
  const contacts = useSelector((state) => state.contactModule.contacts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadContacts())
  }, [dispatch])

  const onRemoveContact = async (contactId) => {
    await dispatch(removeContact(contactId))
  }

  const onChangeFilter = useCallback(
    (filterBy) => {
      dispatch(setFilterBy(filterBy))
      dispatch(loadContacts())
    },
    [dispatch]
  )

  return (
    <section className='contact-page'>
      <ContactFilter onChangeFilter={onChangeFilter} />
      <Link className='add-contact-btn' to='/contact/edit'>
        Add Contact
      </Link>
      <ContactList contacts={contacts} onRemoveContact={onRemoveContact} />
    </section>
  )
}
