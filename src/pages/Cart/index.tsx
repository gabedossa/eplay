import { useCart } from '../../contexts/CartContext'
import { Container } from '../../styles'
import Button from '../../components/Button'
import {
  CartContainer,
  CartTitle,
  CartList,
  CartItem,
  CartItemImage,
  CartItemInfo,
  RemoveButton,
  CartSummary,
  CartTotal,
  EmptyCart
} from './styles'

const Cart = () => {
  const { cartItems, removeFromCart, totalItems, totalPrice } = useCart()

  if (totalItems === 0) {
    return (
      <Container>
        <CartContainer>
          <EmptyCart>
            <h3>Seu carrinho está vazio</h3>
            <p>Adicione jogos clicando em &quot;Comprar&quot; nos produtos.</p>
          </EmptyCart>
        </CartContainer>
      </Container>
    )
  }

  return (
    <Container>
      <CartContainer>
        <CartTitle>Carrinho ({totalItems} produto(s))</CartTitle>
        <CartList>
          {cartItems.map((item) => (
            <CartItem key={item.id}>
              <CartItemImage src={item.image} alt={item.title} />
              <CartItemInfo>
                <h3>{item.title}</h3>
                <p>
                  <span>{item.oldPrice}</span>
                  <span>{item.newPrice}</span>
                </p>
              </CartItemInfo>
              <RemoveButton onClick={() => removeFromCart(item.id)}>
                Remover
              </RemoveButton>
            </CartItem>
          ))}
        </CartList>
        <CartSummary>
          <CartTotal>
            <p>Total</p>
            <strong>{totalPrice}</strong>
          </CartTotal>
          <Button type="button" title="Finalizar compra" />
        </CartSummary>
      </CartContainer>
    </Container>
  )
}

export default Cart
