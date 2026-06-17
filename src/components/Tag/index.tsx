import { TagContainer } from './styles'

type Props = {
  label: string
  variant?: 'promocao' | 'lancamento' | 'pre-venda'
}

const Tag = ({ label, variant = 'promocao' }: Props) => {
  return <TagContainer variant={variant}>{label}</TagContainer>
}

export default Tag
