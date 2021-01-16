import React from 'react'
import { NextPage } from 'next'
import { useContext } from 'react'
import CustomHead from '../components/CustomHead'
import { CartContext } from '../context/cart'
import CartItems from '../components/Cart'

interface CartPageProps {}

const CartPage: NextPage<CartPageProps> = () => {
  const [cart] = useContext(CartContext)
  console.log(cart)
  return (
    <>
      <CustomHead
        title="About | Next.Js"
        description="A starter for Next.Js with Styled-components and TS"
      />
      <CartItems />
      {cart?.map((item) => {
        return (
          <React.Fragment key={item.id}>
            <p>
              {item.name}
              {item.quantity}
            </p>
            <img src={item.image} />
          </React.Fragment>
        )
      })}
    </>
  )
}

export default CartPage