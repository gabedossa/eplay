import styled from 'styled-components'
import { cores } from '../../styles'

type TagVariant = 'promocao' | 'lancamento' | 'pre-venda'

type TagContainerProps = {
  variant: TagVariant
}

const getTagColor = (variant: string): string => {
  if (variant === 'lancamento') return '#0075FF'
  if (variant === 'pre-venda') return '#E4A400'
  return cores.verdeMain
}

export const TagContainer = styled.span<TagContainerProps>`
  background-color: ${({ variant }) => getTagColor(variant)};
  color: ${cores.branca};
  font-size: 12px;
  font-weight: bold;
  padding: 4px 8px;
  border-radius: 4px;
`
