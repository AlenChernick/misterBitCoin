import { contactService } from "../../services/contactService";


export function loadContacts() {
    return async (dispatch, getState) => {
        try {
            const { filterBy } = getState().contactModule
            const contacts = await contactService.getContacts(filterBy)
            dispatch({ type: 'SET_CONTACTS', contacts })
        } catch (err) {
            console.log('Cannot load robots', err)
            throw err
        }
    }
}


export function saveContact(contact) {
    return async (dispatch, getState) => {
        try {
            const savedContact = await contactService.saveContact(contact)
            dispatch({ type: 'UPDATE_CONTACT', contact })
            
            return savedContact
        } catch (err) {
            console.log('Cannot save contact', err)
            throw err
        }
    }
}


export function removeContact(contactId) {
    return async (dispatch, getState) => {
        try {
            const contact = await contactService.deleteContact(contactId)
            dispatch({ type: 'REMOVE_CONTACT', contactId })
            return contact
        } catch (err) {
            console.log('Cannot remove contact', err)
            throw err
        }
    }
}


export function setFilterBy(filterBy) {
    return (dispatch) => {
        dispatch({ type: 'SET_FILTER_BY', filterBy })
    }
}