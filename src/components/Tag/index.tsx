import { TagContainer } from './styles'

type Props = {
  label: string
}

const Tag = ({ label }: Props) => {
  return <TagContainer>{label}</TagContainer>
}

export default Tag
