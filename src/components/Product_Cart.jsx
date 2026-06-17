import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, selectCount } from '../features/cart/cartSlice'

const Product_Cart = ({ name, img, price }) => {
  const dispatch = useDispatch()
  const count = useSelector(selectCount)
  const total = count * price

  return (
    <div style={{ padding: '10px', margin: '10px', display: 'flex', alignItems: 'center', flexDirection: 'column', borderRadius: '5px' }}>
      <p style={{ fontSize: '18px', fontWeight: 'bold' }}>Count: {count}</p>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button style={{ padding: '8px 16px', margin: '5px', border: '1px solid rgb(54, 36, 36)', borderRadius: '5px' }} onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button style={{ padding: '8px 16px', margin: '5px', border: '1px solid rgb(54, 36, 36)', borderRadius: '5px' }} onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
      <p style={{ fontSize: '18px', fontWeight: 'bold' }}>Name: {name}</p>
      <p style={{ fontSize: '18px', fontWeight: 'bold' }}>Total: {total}</p>
      <img src={img} alt={name} style={{ maxWidth: '100%', height: 'auto', margin: '10px 0' }} />
    </div>
  )
}

export default Product_Cart
