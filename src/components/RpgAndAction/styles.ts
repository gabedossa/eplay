import styled from 'styled-components'
import { cores, breakpoints } from '../../styles'

export const Section = styled.section`
  padding: 32px 0;
`

export const SectionTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 32px;

  h2 {
    font-size: 18px;
    font-weight: bold;
    color: ${cores.branca};
  }
`

export const Games = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  @media (max-width: ${breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`

export const Game = styled.li`
  background-color: ${cores.cinza};
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  &:hover {
    opacity: 0.85;
  }
`

export const GameImageWrapper = styled.div`
  position: relative;

  span {
    position: absolute;
    top: 8px;
    left: 8px;
    z-index: 1;
  }
`

export const GameImage = styled.img`
  width: 100%;
  aspect-ratio: 3 / 4;
  object-fit: cover;
  display: block;
`

export const GameInfo = styled.div`
  padding: 8px;

  h3 {
    font-size: 14px;
    font-weight: bold;
    color: ${cores.branca};
    line-height: 1.3;
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
