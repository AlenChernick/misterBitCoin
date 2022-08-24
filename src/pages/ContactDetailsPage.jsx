import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserMoves, addUserMove } from '../store/actions/userActions'
import { useNavigate, useParams } from 'react-router-dom'
import { MovesList } from '../components/MovesList'
import { TransferFund } from '../components/TransferFund'
import { contactService } from '../services/contactService'

export const ContactDetailsPage = () => {
  const [contact, setContact] = useState({})
  const userMoves = useSelector((state) => state.userModule.userMoves)
  const params = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const loadContact = useCallback(async () => {
    const contactId = params.id
    const contact = await contactService.getContactById(contactId)
    setContact(contact)
  }, [params.id])

  useEffect(() => {
    loadContact()
    dispatch(getUserMoves())
  }, [loadContact, dispatch])

  const onBack = () => {
    navigate('/contact')
  }

  const onTransferCoins = (ev) => {
    ev.preventDefault()
    const { coins } = ev.target.elements
    if (coins.value === '') return
    dispatch(addUserMove(contact, coins.value))
    dispatch(getUserMoves())
    coins.value = ''
  }

  if (!contact) return <div>Loading...</div>
  const filteredUserMoves = userMoves.filter((move) => move.toId === contact._id).reverse()
  const userImgUrl = `https://robohash.org/${contact._id}`
  return (
    <section className='contact-details'>
      <div className='contact-info'>
        <img className='contact-img' src={userImgUrl} alt='user-img' />
        <h1 className='contact-name'>Name: {contact.name}</h1>
        <h1 className='contact-phone'>Phone: {contact.phone}</h1>
        <h1 className='contact-email'>Email: {contact.email}</h1>
        <hr />
      </div>
      <TransferFund contact={contact} onTransferCoins={onTransferCoins} />
      {filteredUserMoves.length > 0 ? (
        <>
          <h1>Your Moves:</h1>
          <div className='contact-details-user-moves'>
            <MovesList moves={filteredUserMoves} />
          </div>
        </>
      ) : (
        <h1>No Moves Yet...</h1>
      )}
      <button className='go-back-btn' onClick={onBack}>
        Back
      </button>
    </section>
  )
}
