import { useState } from 'react'
import {
  Section,
  SectionTitle,
  Games,
  Game,
  GameImageWrapper,
  GameImage,
  GameInfo
} from './styles'
import { Container } from '../../styles'
import Tag from '../Tag'
import Button from '../Button'
import Modal, { GameDetails } from '../Modal'
import residentImg from '../../assets/images/resident.png'

const games: GameDetails[] = [
  {
    id: 1,
    title: 'Resident Evil 4 Remake',
    oldPrice: 'R$ 249,90',
    newPrice: 'R$ 124,90',
    image: residentImg,
    gallery: [
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2050650/ss_59d1b19964cc532213df92c8287b75a0bffeb33c.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2050650/ss_ab807f8ad9e968a620777caf483cb6020367b9ee.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2050650/ss_0442f7fb4327d79802c2db8ea8d23d228a28d896.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2050650/ss_69810f4cd155912fdfdd21da70181df7d454c874.1920x1080.jpg'
    ],
    description:
      'A icônica história de sobrevivência de Leon S. Kennedy é reimaginada por completo. Seis anos após os eventos de Raccoon City, Leon é enviado a uma aldeia remota da Europa para resgatar a filha do presidente dos EUA, enfrentando horrores inimagináveis.',
    requirements: {
      so: 'Windows 10 64-bit',
      cpu: 'Intel Core i7-8700 ou AMD Ryzen 5 3600',
      memory: '16 GB RAM',
      gpu: 'NVIDIA GeForce GTX 1070 ou AMD Radeon RX 5700',
      storage: '60 GB'
    }
  },
  {
    id: 2,
    title: 'Resident Evil Village',
    oldPrice: 'R$ 199,90',
    newPrice: 'R$ 89,90',
    image: residentImg,
    gallery: [
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1196590/ss_d25704b01be292d1337df4fea0fba2aab322b58a.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1196590/ss_8113ec993ec474055c4cdce5ee86f91f7cf6663f.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1196590/ss_50283e6df9d2f3f24ff4a1a36a94ae307e21cee8.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1196590/ss_363d9c05ee0a974b766938610a3352e7a89b9c92.1920x1080.jpg'
    ],
    description:
      'Ethan Winters parte em busca de sua filha sequestrada até uma aldeia europeia amaldiçoada, dominada por criaturas sobrenaturais. Uma aventura de horror em primeira pessoa que expande o universo iniciado em Resident Evil 7.',
    requirements: {
      so: 'Windows 10 64-bit',
      cpu: 'Intel Core i5-7600 ou AMD Ryzen 5 3600',
      memory: '8 GB RAM',
      gpu: 'NVIDIA GeForce GTX 1070 ou AMD Radeon RX 5700',
      storage: '50 GB'
    }
  },
  {
    id: 3,
    title: 'Resident Evil 7: Biohazard',
    oldPrice: 'R$ 149,90',
    newPrice: 'R$ 49,90',
    image: residentImg,
    gallery: [
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/418370/ss_d07fd9fca3644350782356667ce78d436c574680.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/418370/ss_93663d90ead22ac9481b7c75eaea57509cdf41cb.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/418370/ss_4ba2efde83e86ad41dd962b6802c45029efbe75d.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/418370/ss_48bece562e150aa557b7debda63af059ef5ca1be.1920x1080.jpg'
    ],
    description:
      'Uma nova era do terror começa. Ethan Winters chega a uma fazenda abandonada em busca de sua esposa desaparecida e se vê preso em um pesadelo com a família Baker. Horror em primeira pessoa que reinventou a franquia.',
    requirements: {
      so: 'Windows 10 64-bit',
      cpu: 'Intel Core i5-4460 ou AMD FX-6300',
      memory: '8 GB RAM',
      gpu: 'NVIDIA GeForce GTX 760 ou AMD Radeon R7 260x',
      storage: '24 GB'
    }
  },
  {
    id: 4,
    title: 'Resident Evil 3 Remake',
    oldPrice: 'R$ 179,90',
    newPrice: 'R$ 69,90',
    image: residentImg,
    gallery: [
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/952060/ss_77eda710487b89293f109cf7dcf96b4ffab0d1a1.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/952060/ss_ef618256720e6e665f4b8b5dd11726a561e0b16e.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/952060/ss_34f01910d65fb171a27e058cb74623c0eb53ba69.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/952060/ss_bec8b7cef716135ea5bbd726a3342ed9ca475b31.1920x1080.jpg'
    ],
    description:
      'Jill Valentine tenta escapar de Raccoon City enquanto é perseguida pelo implacável Nemesis. Uma recriação moderna do clássico de 1999 com gráficos de última geração e combate reformulado.',
    requirements: {
      so: 'Windows 10 64-bit',
      cpu: 'Intel Core i7-8700 ou AMD Ryzen 5 3600',
      memory: '8 GB RAM',
      gpu: 'NVIDIA GeForce GTX 1060 ou AMD Radeon RX 5500 XT',
      storage: '45 GB'
    }
  }
]

const OnSale = () => {
  const [selectedGame, setSelectedGame] = useState<GameDetails | null>(null)

  return (
    <Section>
      <Container>
        <SectionTitle>
          <h2>Promoções</h2>
        </SectionTitle>
        <Games>
          {games.map((game) => (
            <Game key={game.id}>
              <GameImageWrapper>
                <GameImage src={game.image} alt={game.title} />
                <Tag label="Promoção" />
              </GameImageWrapper>
              <GameInfo>
                <h3>{game.title}</h3>
                <p>
                  <span>{game.oldPrice}</span>
                  <span>{game.newPrice}</span>
                </p>
                <Button
                  type="button"
                  title="Comprar"
                  onClick={() => setSelectedGame(game)}
                />
              </GameInfo>
            </Game>
          ))}
        </Games>
      </Container>
      <Modal game={selectedGame} onClose={() => setSelectedGame(null)} />
    </Section>
  )
}

export default OnSale
