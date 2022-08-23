import { memo } from 'react'
import { useFormRegister } from '../customHooks/useFormRegister'

export const ContactFilter = memo((props) => {
  const [register] = useFormRegister(
    {
      term: '',
    },
    props.onChangeFilter
  )

  return (
    <section className='contact-filter'>
      <form>
        <input {...register('term')} type='text' placeholder='Search Contact...' />
      </form>
    </section>
  )
})
