import { useEffect } from 'react'
import { MovesList } from '../components/MovesList'
import { useDispatch, useSelector } from 'react-redux'
import { loadUser, getUserMoves, getUserRate } from '../store/actions/userActions'
import userIcon from '../assets/img/user-icon.png'
import btcIcon from '../assets/img/btc-icon.png'

export const HomePage = () => {
  const user = useSelector((state) => state.userModule.user)
  const userMoves = useSelector((state) => state.userModule.userMoves)
  const userRate = useSelector((state) => state.userModule.userRate)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadUser())
    dispatch(getUserMoves())
    dispatch(getUserRate())
  }, [dispatch])

  if (!user) return <div>Loading...</div>
  const lastThreeUserMoves = userMoves.slice(-3).reverse()
  return (
    <section className='home-page'>
      <div className='user-info'>
        <h1 className='user-name'>Hello {user.name}!</h1>
        <img className='user-icon' src={userIcon} alt='user-icon' />
        <h1 className='user-coin'>Coins: {'$' + user.coins}</h1>
        <h1 className='user-bitcoin'>
          BTC: {userRate}
          <img className='user-btc-icon' src={btcIcon} alt='btc-icon' />
        </h1>

        <div className='user-moves'>
          {user.moves?.length > 0 ? (
            <>
              <h1>Your last 3 moves</h1>
              <MovesList moves={lastThreeUserMoves} />
            </>
          ) : (
            <h1>No moves yet</h1>
          )}
        </div>
      </div>
    </section>
  )
}
