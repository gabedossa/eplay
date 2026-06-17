import styled from 'styled-components'
import { cores, breakpoints } from '../../styles'

export const CartContainer = styled.section`
  padding: 32px 0;
`

export const CartTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: ${cores.branca};
  margin-bottom: 24px;
`

export const CartList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;
`

export const CartItem = styled.li`
  background-color: ${cores.cinza};
  border-radius: 8px;
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: ${breakpoints.sm}) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const CartItemImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 4px;
  flex-shrink: 0;
`

export const CartItemInfo = styled.div`
  flex: 1;

  h3 {
    font-size: 15px;
    font-weight: bold;
    color: ${cores.branca};
    margin-bottom: 4px;
  }

  p {
    display: flex;
    flex-direction: column;
    gap: 2px;

    span:first-child {
      font-size: 12px;
      color: #aaa;
      text-decoration: line-through;
    }

    span:last-child {
      font-size: 16px;
      font-weight: bold;
      color: ${cores.verdeMain};
    }
  }
`

export const RemoveButton = styled.button`
  background: transparent;
  border: 1px solid #666;
  color: #aaa;
  font-size: 12px;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
  flex-shrink: 0;
  transition: border-color 0.2s, color 0.2s;

  &:hover {
    border-color: #e74c3c;
    color: #e74c3c;
  }
`

export const CartSummary = styled.div`
  background-color: ${cores.cinza};
  border-radius: 8px;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  @media (max-width: ${breakpoints.sm}) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const CartTotal = styled.div`
  p {
    font-size: 13px;
    color: #aaa;
    margin-bottom: 4px;
  }

  strong {
    font-size: 24px;
    font-weight: bold;
    color: ${cores.verdeMain};
  }
`

export const EmptyCart = styled.div`
  text-align: center;
  padding: 64px 0;
  color: #aaa;

  h3 {
    font-size: 20px;
    margin-bottom: 8px;
    color: ${cores.branca};
  }

  p {
    font-size: 14px;
  }
`
