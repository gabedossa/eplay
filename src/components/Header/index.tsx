import { useState } from 'react'
import { useCart } from '../../contexts/CartContext'
import {
  HeaderBar,
  LinkItem,
  Links,
  LinkCart,
  LogoGroup,
  Hamburguer,
  MobileMenu,
  Overlay
} from './styles'
import logo from '../../assets/images/logo.svg'
import Carrinho from '../../assets/images/carrinho.svg'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const { totalItems } = useCart()

  return (
    <HeaderBar>
      <LogoGroup>
        <img src={logo} alt="EPLAY" />
        <nav>
          <Links>
            <LinkItem>
              <a href="#">Categorias</a>
            </LinkItem>
            <LinkItem>
              <a href="#">Novidades</a>
            </LinkItem>
            <LinkItem>
              <a href="#">Promoções</a>
            </LinkItem>
          </Links>
        </nav>
      </LogoGroup>

      <LinkCart href="/cart">
        {totalItems} - Produto(s)
        <img src={Carrinho} alt="carrinho" />
      </LinkCart>

      <Hamburguer onClick={() => setMenuOpen(true)}>
        <span />
        <span />
        <span />
      </Hamburguer>

      <Overlay isOpen={menuOpen} onClick={() => setMenuOpen(false)} />

      <MobileMenu isOpen={menuOpen}>
        <button onClick={() => setMenuOpen(false)}>&#x2715;</button>
        <ul>
          <li>
            <a href="#" onClick={() => setMenuOpen(false)}>
              Categorias
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setMenuOpen(false)}>
              Novidades
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setMenuOpen(false)}>
              Promoções
            </a>
          </li>
        </ul>
      </MobileMenu>
    </HeaderBar>
  )
}

export default Header
