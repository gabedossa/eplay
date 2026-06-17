import styled from 'styled-components'
import { cores, breakpoints } from '../../styles'

export const FooterContainer = styled.footer`
  background-color: ${cores.cinza};
  margin-top: 40px;
  padding: 40px 0 24px;
`

export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  gap: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid #444;

  @media (max-width: ${breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`

export const FooterBrand = styled.div`
  img {
    height: 32px;
    margin-bottom: 16px;
    display: block;
  }

  p {
    font-size: 13px;
    color: #aaa;
    line-height: 1.7;
  }
`

export const FooterSection = styled.div`
  h4 {
    font-size: 14px;
    font-weight: bold;
    color: ${cores.branca};
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 16px;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  li {
    font-size: 13px;
    color: #aaa;
    cursor: pointer;
    transition: color 0.2s;

    &:hover {
      color: ${cores.verdeMain};
    }
  }
`

export const FooterBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 24px;

  p {
    font-size: 12px;
    color: #777;
  }

  @media (max-width: ${breakpoints.sm}) {
    flex-direction: column;
    gap: 12px;
    text-align: center;
  }
`

export const SocialLinks = styled.div`
  display: flex;
  gap: 16px;

  a {
    font-size: 12px;
    color: #777;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: ${cores.verdeMain};
    }
  }
`

export const PaymentMethods = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;

  span {
    background-color: #444;
    color: #ccc;
    font-size: 11px;
    font-weight: bold;
    padding: 4px 10px;
    border-radius: 4px;
  }
`
