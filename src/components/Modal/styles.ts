import styled from 'styled-components'
import { cores, breakpoints } from '../../styles'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ModalContainer = styled.div`
  background-color: ${cores.cinza};
  border-radius: 8px;
  width: 90%;
  max-width: 760px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
`

export const ModalHeader = styled.div`
  position: relative;
  height: 220px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px 8px 0 0;
    display: block;
  }

  h2 {
    position: absolute;
    bottom: 16px;
    left: 24px;
    right: 24px;
    font-size: 24px;
    color: #fff;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);

    @media (max-width: ${breakpoints.sm}) {
      font-size: 18px;
    }
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 60%;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.75));
    border-radius: 0;
  }
`

export const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: rgba(0, 0, 0, 0.6);
  border: none;
  color: ${cores.branca};
  font-size: 20px;
  line-height: 1;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;

  &:hover {
    background: rgba(0, 0, 0, 0.9);
  }
`

export const ModalBody = styled.div`
  padding: 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;

  @media (max-width: ${breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`

export const ModalSection = styled.div`
  h3 {
    font-size: 14px;
    font-weight: bold;
    color: ${cores.verdeMain};
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 12px;
  }

  p {
    font-size: 14px;
    color: #ccc;
    line-height: 1.6;
  }
`

export const RequirementsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;

  li {
    font-size: 13px;
    color: #ccc;
    line-height: 1.4;

    strong {
      color: ${cores.branca};
    }
  }
`

export const Gallery = styled.div`
  padding: 0 24px 24px;

  h3 {
    font-size: 14px;
    font-weight: bold;
    color: ${cores.verdeMain};
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 12px;
  }
`

export const Thumbnails = styled.div`
  display: flex;
  gap: 8px;
  overflow-x: auto;
  padding-bottom: 4px;

  &::-webkit-scrollbar {
    height: 4px;
  }

  &::-webkit-scrollbar-track {
    background: #444;
    border-radius: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${cores.verdeMain};
    border-radius: 2px;
  }
`

type ThumbnailProps = {
  active: boolean
}

export const Thumbnail = styled.img<ThumbnailProps>`
  width: 100px;
  height: 68px;
  object-fit: cover;
  border-radius: 4px;
  cursor: pointer;
  flex-shrink: 0;
  border: 2px solid
    ${({ active }) => (active ? cores.verdeMain : 'transparent')};
  opacity: ${({ active }) => (active ? 1 : 0.6)};
  transition: opacity 0.2s, border-color 0.2s;

  &:hover {
    opacity: 1;
  }
`

export const ModalFooter = styled.div`
  padding: 16px 24px;
  border-top: 1px solid #444;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 24px;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 2px;

    span:first-child {
      font-size: 12px;
      color: #aaa;
      text-decoration: line-through;
    }

    span:last-child {
      font-size: 20px;
      font-weight: bold;
      color: ${cores.verdeMain};
    }
  }
`
