import React from 'react'

export function TransferFund({ contact, onTransferCoins }) {
  return (
    <section className='transfer-fund'>
      <form onSubmit={onTransferCoins} className='transfer-fund-form'>
        <h1>Transfer coins to {contact.name}:</h1>
        <label htmlFor='coins'>Amount</label>
        <input type='number' name='coins' id='coins' placeholder='How much to transfer?' />
        <button>Transfer</button>
      </form>
    </section>
  )
}
