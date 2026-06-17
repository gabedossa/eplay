import styled from 'styled-components'
import { cores, breakpoints } from '../../styles'

type MenuProps = {
  isOpen: boolean
}

export const HeaderBar = styled.header`
  background-color: ${cores.cinza};
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: ${cores.branca};
    text-decoration: none;
    font-weight: bold;
  }

  @media (max-width: ${breakpoints.sm}) {
    border-radius: 0;
    margin-bottom: 40px;
    padding: 16px;
  }
`

export const LogoGroup = styled.div`
  display: flex;
  align-items: center;
`

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;

  @media (max-width: ${breakpoints.sm}) {
    display: none;
  }
`

export const LinkItem = styled.li`
  margin-right: 16px;
`

export const LinkCart = styled.a`
  display: flex;
  font-size: 16px;

  img {
    margin-left: 16px;
  }
`

export const Hamburguer = styled.button`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 18px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;

  span {
    display: block;
    height: 2px;
    width: 100%;
    background-color: ${cores.branca};
    border-radius: 2px;
  }

  @media (max-width: ${breakpoints.sm}) {
    display: flex;
  }
`

export const Overlay = styled.div<MenuProps>`
  display: none;

  @media (max-width: ${breakpoints.sm}) {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 1;
  }
`

export const MobileMenu = styled.div<MenuProps>`
  display: none;

  @media (max-width: ${breakpoints.sm}) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    width: 70%;
    height: 100%;
    background-color: ${cores.cinza};
    z-index: 2;
    padding: 24px;
    transition: right 0.3s ease;

    button {
      background: transparent;
      border: none;
      color: ${cores.branca};
      font-size: 24px;
      cursor: pointer;
      align-self: flex-end;
      margin-bottom: 32px;
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 24px;

      a {
        color: ${cores.branca};
        text-decoration: none;
        font-size: 18px;
        font-weight: bold;
      }
    }
  }
`
