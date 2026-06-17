import React, { useState, useEffect } from 'react'
import { useCart } from '../../contexts/CartContext'
import {
  Overlay,
  ModalContainer,
  ModalHeader,
  CloseButton,
  ModalBody,
  ModalSection,
  RequirementsList,
  Gallery,
  Thumbnails,
  Thumbnail,
  ModalFooter
} from './styles'
import Button from '../Button'

export type GameDetails = {
  id: number
  title: string
  image: string
  oldPrice: string
  newPrice: string
  description: string
  gallery: string[]
  requirements: {
    so: string
    cpu: string
    memory: string
    gpu: string
    storage: string
  }
}

type Props = {
  game: GameDetails | null
  onClose: () => void
}

const Modal = ({ game, onClose }: Props) => {
  const [selectedImage, setSelectedImage] = useState('')
  const { addToCart } = useCart()

  const handleBuy = () => {
    if (game) {
      addToCart(game)
      onClose()
    }
  }

  useEffect(() => {
    if (game) setSelectedImage(game.image)
  }, [game])

  if (!game) return null

  return (
    <Overlay onClick={onClose}>
      <ModalContainer onClick={(e: React.MouseEvent) => e.stopPropagation()}>
        <ModalHeader>
          <CloseButton onClick={onClose}>✕</CloseButton>
          <img src={selectedImage} alt={game.title} />
          <h2>{game.title}</h2>
        </ModalHeader>
        <ModalBody>
          <ModalSection>
            <h3>Resumo</h3>
            <p>{game.description}</p>
          </ModalSection>
          <ModalSection>
            <h3>Requisitos de Sistema</h3>
            <RequirementsList>
              <li>
                <strong>SO:</strong> {game.requirements.so}
              </li>
              <li>
                <strong>CPU:</strong> {game.requirements.cpu}
              </li>
              <li>
                <strong>Memória:</strong> {game.requirements.memory}
              </li>
              <li>
                <strong>GPU:</strong> {game.requirements.gpu}
              </li>
              <li>
                <strong>Armazenamento:</strong> {game.requirements.storage}
              </li>
            </RequirementsList>
          </ModalSection>
        </ModalBody>
        <Gallery>
          <h3>Galeria</h3>
          <Thumbnails>
            {game.gallery.map((img, index) => (
              <Thumbnail
                key={index}
                src={img}
                alt={`${game.title} - imagem ${index + 1}`}
                active={selectedImage === img}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </Thumbnails>
        </Gallery>
        <ModalFooter>
          <div>
            <span>{game.oldPrice}</span>
            <span>{game.newPrice}</span>
          </div>
          <Button type="button" title="Comprar" onClick={handleBuy} />
        </ModalFooter>
      </ModalContainer>
    </Overlay>
  )
}

export default Modal
