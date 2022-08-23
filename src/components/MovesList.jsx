import React from 'react'

export function MovesList({ moves }) {
  return (
    <section className='moves-list'>
      {moves.map((move) => {
        return (
          <div key={move.at} className='user-moves'>
            <h5>At: {move.at}</h5>
            <h5>Amount: {'$' + move.amount}</h5>
          </div>
        )
      })}
    </section>
  )
}
