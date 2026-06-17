import styled from 'styled-components'

const buttonStyles = `
  background-color: transparent;
  color: #eee;
  font-weight: bold;
  font-size: 16px;
  padding: 12px 24px;
  border: 2px solid #eee;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
`

export const ButtonContainer = styled.button`
  ${buttonStyles}
`

export const ButtonLink = styled.a`
  ${buttonStyles}
`
