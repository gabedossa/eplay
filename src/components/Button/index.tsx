import { ButtonContainer, ButtonLink } from './styles'

type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
}

const Button = ({ type, title, to, onClick }: Props) => {
  if (type === 'button') {
    return <ButtonContainer onClick={onClick}>{title}</ButtonContainer>
  }
  return <ButtonLink href={to}>{title}</ButtonLink>
}

export default Button
